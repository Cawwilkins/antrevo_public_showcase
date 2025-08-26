import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ChangeStrategyModal from '../components/changeStrategy';

const API = (import.meta.env && import.meta.env.VITE_API_URL) || "http://localhost:8000";

export default function StrategyPage() {
    const [showStrategyModal, setShowStrategyModal] = useState(false);
    const [algo, setAlgo] = useState("");
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);
    const [engine, setEngine] = useState(null);

    async function loadState() {
        try {
            const r = await fetch(`${API}/state`);
            const j = await r.json();
            if (!r.ok || j.ok === false) throw new Error(j.error || "Failed to load state");
            setAlgo(j.state?.algo || "");
            setEngine(j.state|| null);
            setErr(null);
        } catch (error) {
            setErr(error.message || "Failed to load state");
        } 
    }


async function postJSON(path, body) {
    const r = await fetch(`${API}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body ? JSON.stringify(body) : undefined,
    });
    const j = await r.json();
    if (!r.ok || j.ok === false) throw new Error(j.error || "Failed to post data");
    return j;
}

async function change_algorithm(name) {
    setLoading(true);
    try {
        await postJSON("/algorithm", { name });
        await loadState();
        setShowStrategyModal(false);
    } catch (error) {
        setErr(error.message || "Failed to change algorithm");
    } finally {
        setLoading(false);
    }
}

useEffect(() => {
    loadState();
}, []);

    return (
        <main className="relative w-full min-h-screen overflow-x-hidden bg-[#1a1a1a] font-['Inter']">
            <nav id="nav" className="flex px-[3vw] justify-between items-center py-4">
                <div className="w-auto h-auto justify-left"><span className="text-white text-4xl font-normal font-['Inter'] z-[1]">Antr</span>
                    <span className="italic text-green-400 text-4xl font-semibold font-['Inter'] z-[1]">Evo</span></div>
                        <div className="flex gap-[1.5vw]">
                            <Link to="/main-page"><button className="text-zinc-300 text-1xl font-normal font-['Inter'] hover:text-green-400 z-[10]">STOCK</button></Link>
                            <button className="text-1xl font-normal font-['Inter'] text-green-400 z-[10]">STRATEGY</button>
                        </div>
            </nav>
            {err && (
            <div className="fixed inset-x-0 top-4 z-[9999] flex justify-center pointer-events-none" role="alert" aria-live="assertive">
            <div className="pointer-events-auto max-w-[90vw] md:max-w-xl rounded-xl border border-red-700/50 bg-red-900/90 text-red-100 px-4 py-3 shadow-2xl backdrop-blur">
                {err}
            </div>
            </div>
            )}
            {loading && (
                <div className="fixed inset-x-0 top-4 z-[9999] flex justify-center pointer-events-none" role="alert" aria-live="assertive">
                    <div className="pointer-events-auto max-w-[90vw] md:max-w-xl rounded-xl border border-gray-200 bg-zinc-800 text-zinc-200 px-4 py-3 shadow-2xl backdrop-blur">
                        Working…
                    </div>
                </div>
            )}
        <div className="flex flex-col pl-[7vw] pt-[3vw]">
                <div className="flex gap-[2vw]">
                    <div className="flex flex-col">
                        <p className="text-left text-gray-200 font-bold text-4xl">Strategy: <span className="text-green-400 italic">{algo || "Unknown"}</span></p>
                        <p className="text-left pl-[1vw] pt-[0.5vw] text-gray-200 font-semibold text-2xl">Concept:</p>
                        <p className="text-left pl-[2vw] pt-[0.5vw] text-zinc-500 text-2xl">{engine?.strategy_info?.concept || "Unknown"}</p>
                        <p className="text-left pl-[1vw] pt-[2vw] text-gray-200 font-semibold text-2xl">Strengths:</p>
                        <p className="text-left pl-[2vw] pt-[0.5vw] text-zinc-500 text-2xl">
                            <ul>
                                {(engine?.strategy_info?.strengths ?? ["Unknown"]).map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        </p>
                    </div>
                    <button 
                        onClick={() => setShowStrategyModal(true)}
                        className="text-gray-200 text-2xl mt-[10vw] border-[3px] ml-[15vw] mr-[10vw] h-[2vh] pr-[4vw] pt-[2vw] pl-[4vw] pb-[4vw] rounded-2xl border-green-400 font-bold hover:bg-green-400 hover:text-zinc-900 transition-colors duration-200">
                        Change&nbsp;Strategy
                    </button>
                    {showStrategyModal && (
                        <ChangeStrategyModal 
                            onClose={() => setShowStrategyModal(false)}
                            onSubmit={change_algorithm}
                            current={algo}
                        />
                    )}
                </div>
                 <div className="flex flex-col mt-[4vw]">
                        <p className="text-left text-green-400 font-bold text-4xl">Algorithm</p>
                        <p className="text-left pl-[2vw] pt-[0.5vw] text-zinc-500 text-2xl">
                            <ul>
                                {(engine?.strategy_info?.algorithm ?? ["Unknown"]).map((a, i) => (
                                    <li key={i}>{a}</li>
                                ))}
                            </ul>
                        </p>
                </div>
            </div>
        </main>
    );
}

