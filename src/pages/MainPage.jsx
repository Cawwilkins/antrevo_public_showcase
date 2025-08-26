import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DisclaimerModal from "../components/disclaimer";
import ChangeStockModal from "../components/changeStock";
import SimulateTradeModal from "../components/simulateTrade";
const API_BASE = import.meta.env?.VITE_API_URL || "http://localhost:8000";


const MainPage = () => {
    const [showDisc, setShowDisc] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showSim, setShowSim] = useState(false);

    const [engine, setEngine] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const [buyNotif, setBuyNotif] = useState(false);
    const [sellNotif, setSellNotif] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem("disclaimerAccepted") === "1";
        setShowDisc(!accepted);
    }, []);

    const handleAcceptDisclaimer = () => {
        localStorage.setItem("disclaimerAccepted", "1");
        setShowDisc(false);
    };
    
    
    //fetch helpers
    async function loadState() {
        try {
            const r = await fetch(`${API_BASE}/state`);
            const j = await r.json();
            if (!r.ok || j.ok === false) throw new Error(j.error || j.note || "Failed to load state");
            setEngine(j.state || null);
            setErr(null);
            setBuyNotif(j.state?.buy_triggered || false);
            setSellNotif(j.state?.sell_triggered || false);
        } catch (error) {
            setErr(error.message || "Failed to load state");
        }
    }

    async function postJSON(path, body) {
        const hasBody = body !== undefined && body !== null;
        const r = await fetch(`${API_BASE}${path}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(hasBody ? body : {})
        });
        const j = await r.json();
        if (!r.ok || j.ok === false) throw new Error(j.error || j.note || "Failed to post data");
        return j;
    }

    // poll state every 30s
    useEffect(() => {
        loadState();
        const id = setInterval(loadState, 30000);
        return () => clearInterval(id);
    }, []);

    async function changeStock(symbol) {
        setLoading(true);
        try {
            await postJSON("/stock", { symbol });
            await loadState();
            setShowModal(false);
        } catch (error) {
            setErr(error.message || "Failed to change stock");
        } finally {
            setLoading(false);
        }
    }

    async function simulateTrade(shares){
        setLoading(true);
        try {
            await postJSON("/simulate", {shares});
            await loadState();
            setShowSim(false);
        } catch (error) {
            setErr(error.message || "Failed to simulate trade");
        } finally {
            setLoading(false);
        }
    }

    async function startEngine(){
        setLoading(true);
        try {
            await postJSON("/start");
            await loadState();
        } catch (error) {
            setErr(error.message || "Failed to start engine");
        } finally {
            setLoading(false);
        }
    }

    async function stopEngine(){
        setLoading(true);
        try {
            await postJSON("/stop");
            await loadState();
        } catch (error) {
            setErr(error.message || "Failed to stop engine");
        } finally {
            setLoading(false);
        }
    }

    function formatEST(ts) {
        if (!ts) return "";
        const iso = ts.replace(' ', 'T') + 'Z';
        const current = new Date(iso);
        if (isNaN(current)) return ts;
        return new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/New_York',
            hour12: true,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: 'numeric',
            minute: '2-digit',
        }).format(current).replace(',', '');
    }

    const chartSrc = engine?.chart_url ? `${API_BASE}${engine.chart_url}?t=${Date.now()}` : "";

    const winPct = typeof engine?.backtest?.win_percentage === "number"
        ? engine.backtest.win_percentage.toFixed(2)
        : "0.00";

    const improvedSignals = engine?.backtest?.improvements ?? 0;
    const buySignals = engine?.backtest?.buy_signals ?? 0;

    const lastPrice = Number.isFinite(engine?.last_price) ? engine.last_price : 0;
    const pl = Number.isFinite(engine?.profit_loss) ? engine.profit_loss : 0;

    async function pause() {
        await fetch(`${API_BASE}/pause`, { method: 'POST' });
        await loadState();
    }
    async function resume() {
        await fetch(`${API_BASE}/resume`, { method: 'POST' });
        await loadState();
    }

    async function ackBuy() {
    try {
        await postJSON("/acknowledge", { type: "buy" });
        setBuyNotif(false);
    } catch (e) {
        setErr(e.message || "Failed to acknowledge buy alert");
    }
    }
    async function ackSell() {
    try {
        await postJSON("/acknowledge", { type: "sell" });
        setSellNotif(false);
    } catch (e) {
        setErr(e.message || "Failed to acknowledge sell alert");
    }
}

    return (
        <main className="relative w-full min-h-screen overflow-hidden bg-[#1a1a1a] font-['Inter']">
            <nav id="nav" className="flex px-[3vw] justify-between items-center py-4">
                <div className="w-auto h-auto justify-left"><span className="text-white text-4xl font-normal font-['Inter'] z-[1]">Antr</span>
                    <span className="italic text-green-400 text-4xl font-semibold font-['Inter'] z-[1]">Evo</span></div>
                        <div className="flex gap-[1.5vw]">
                            <button className="text-1xl font-normal font-['Inter'] text-green-400 z-[10]">STOCK</button>
                            <Link to="/strategy-page"><button className="text-zinc-300 text-1xl font-normal font-['Inter'] hover:text-green-400 z-[10]">STRATEGY</button></Link>
                        </div>
            </nav>

            {showDisc && <DisclaimerModal onAccept={handleAcceptDisclaimer}/>}
            {err && (
                <div className="fixed inset-x-0 top-4 z-[9999] flex justify-center pointer-events-none" role="alert" aria-live="assertive">
                    <div className="pointer-events-auto max-w-[90vw] md:max-w-xl rounded-xl border border-red-700/50 bg-red-900/90 text-red-100 px-4 py-3 shadow-2xl backdrop-blur">{err}</div>
                </div>
            )}
            {loading && (
                <div className="fixed inset-x-0 top-4 z-[9999] flex justify-center pointer-events-none" role="alert" aria-live="assertive">
                    <div className="pointer-events-auto max-w-[90vw] md:max-w-xl rounded-xl border border-gray-200 bg-zinc-800 text-zinc-200 px-4 py-3 shadow-2xl backdrop-blur">Working…</div>
                </div>
            )}
            {buyNotif && (
                <div className="fixed inset-x-0 top-4 z-[9999] flex justify-center" role="alert" aria-live="assertive">
                    <div className="pointer-events-auto max-w-[90vw] md:max-w-xl rounded-xl border border-gray-200 bg-zinc-800 text-green-400 px-4 py-3 shadow-2xl backdrop-blur flex items-center gap-4">
                        <span className="flex-1">Buy Alert Triggered!</span>
                        <button
                            onClick={ackBuy}
                            className="text-gray-200 text-lg border-2 px-4 py-2 rounded-xl border-green-400 font-bold hover:bg-green-400 hover:text-zinc-900 transition-colors duration-200"
                        >
                        Acknowledge
                    </button>
                    </div>
                </div>
            )}
            {sellNotif && (
                <div className="fixed inset-x-0 top-4 z-[9999] flex justify-center" role="alert" aria-live="assertive">
                    <div className="pointer-events-auto max-w-[90vw] md:max-w-xl rounded-xl border border-gray-200 bg-zinc-800 text-red-400 px-4 py-3 shadow-2xl backdrop-blur flex items-center gap-4">
                        <span className="flex-1">Sell Alert Triggered!</span>
                        <button
                            onClick={ackSell}
                            className="text-gray-200 text-lg border-2 px-4 py-2 rounded-xl border-green-400 font-bold hover:bg-green-400 hover:text-zinc-900 transition-colors duration-200"
                            >
                            Acknowledge
                        </button>
                    </div>
                </div>
            )}


            <div className="flex pl-[7vw] pt-[4vh] pr-[7vw]">
                <div className="relative overflow-hidden text-left w-[60vw] pl-[2vw] z-[1] pt-[2vw] max-w-[50vw] max-h-[80vh] border-[3px] rounded-2xl border-gray-200 bg-zinc-900">
                    {chartSrc ? (
                    <img src={chartSrc} alt="Stock Chart" className="absolute inset-0 w-full h-full object-cover object-right opacity-70 pointer-events-none z-0" />
                ) : null}
                    <div className="absolute z-10 rounded-2xl pl-[5px] pt-[5px] pb-[5px] pr-[5px]">
                        <div className="font-bold text-gray-200 text-2xl">{engine?.stock || "No Stock Selected"}</div>
                        <div className="pt-[0.5vw] text-gray-200 font-semi-bold text-1xl pl-[1vw]">Current Market Value: <span className="text-green-400">{lastPrice.toFixed(5)}</span></div>
                        <div className="pt-[0.5vw] text-gray-200 font-semi-bold text-1xl pl-[1vw]">Simulated Shares: <span className="text-green-400">{engine?.purchased_share ?? 0}</span></div>
                        <div className="pt-[0.5vw] text-gray-200 font-semi-bold text-1xl pl-[1vw]">Simulated Profit/Loss: <span className="text-green-400">${pl.toFixed(2)}</span></div>
                    </div>
                </div>
                <div className="flex flex-col text-left">
                <div className="flex flex-col ml-[2vw] pt-[2vw] space-y-[2vw]">
                    <div className="flex gap-[1vw]">
                    <button 
                        onClick={pause}
                        className="text-gray-200 text-2xl border-[3px] pr-[6vw] pt-[2vw] pl-[6vw] pb-[2vw] rounded-2xl border-green-400 font-bold hover:bg-green-400 hover:text-zinc-900 transition-colors duration-200">
                        Pause
                    </button>
                    <button 
                        onClick={resume}
                        className="text-gray-200 text-2xl border-[3px] pr-[6vw] pt-[2vw] pl-[6vw] pb-[2vw] rounded-2xl border-green-400 font-bold hover:bg-green-400 hover:text-zinc-900 transition-colors duration-200">
                        Resume
                    </button>
                    </div>
                    <button 
                        onClick={() => setShowModal(true)}
                        className="text-gray-200 text-2xl border-[3px] pr-[6vw] pt-[2vw] pl-[6vw] pb-[2vw] rounded-2xl border-green-400 font-bold hover:bg-green-400 hover:text-zinc-900 transition-colors duration-200">
                        Change Stock
                    </button>
                    <button 
                        onClick={() => setShowSim(true)}
                        className="py-[2vw] text-gray-200 text-2xl border-[3px] pr-[6vw] pt-[2vw] pl-[6vw] pb-[2vw] rounded-2xl border-green-400 font-bold hover:bg-green-400 hover:text-zinc-900 transition-colors duration-200">
                        Simulate Trade
                    </button>
                    {showModal && (
                        <ChangeStockModal onClose={() => setShowModal(false)} onSubmit={changeStock} />
                    )}
                    {showSim && (
                        <SimulateTradeModal onClose={() => setShowSim(false)} onSubmit={simulateTrade} currentPrice={engine?.last_price ?? 0} />
                    )}
                    
                </div>
                <div className="flex flex-col ml-[2vw] pt-[2vw]">
                    <p className="pt-[1vw] text-gray-200 text-2xl font-bold font-['Inter']">Backtest Win Percentage:
                        <span className="text-green-400 italic"> {winPct}% ({improvedSignals}/{buySignals})</span>
                    </p>
                    <p className="pt-[1vw] text-gray-200 text-2xl font-bold font-['Inter']">Last Alert:
                        <span className="text-green-400 italic"> {formatEST(engine?.last_buy_alert) || "No alert available"}</span>
                    </p>
                    <p className="pt-[1vw] text-gray-200 text-2xl font-bold font-['Inter']"> Current Strategy:
                        <span className="text-green-400 italic"> {engine?.algo || "No strategy available"}</span>
                    </p>

                </div>
                </div>
                </div>
        </main>
    );
};
export default MainPage;