import { useEffect, useRef, useState } from "react";

export default function SimulateTradeModal({ onClose, onSubmit, currentPrice = 0, }) {
    const dialogRef = useRef(null);
    const inputRef = useRef(null);
    const [shares, setShares] = useState("");

    useEffect(() => {
        const d = dialogRef.current;
        if(!d) return;

        // In react development, effects can run twice (strictMode), so guard:
        if (!d.open) {
            d.showModal();
        }

        const handleClose = () => {
            setShares("");
            onClose?.();
        };

        d.addEventListener("close", handleClose);
        
        setTimeout(() => inputRef.current?.focus(), 0);

        return () => d.removeEventListener("close", handleClose);
    }, [onClose]);

    const handleSimulate = async (e) => {
        e?.preventDefault();
        const n = parseInt(String(shares).trim(), 10);
        if (Number.isNaN(n) || n < 0) return;
        try {
            await onSubmit?.(n);
        } finally {
            setShares("");
            dialogRef.current?.close();
        }
    };

    const handleReset = () => setShares("");

    return (
        <dialog
        ref={dialogRef}
        className="open:flex open:flex-col open:justify-center open:items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 border-green-400 rounded-2xl w-[60vw] py-[5vw] md:h-[70vh] bg-zinc-900 border-[3px] font-['Inter']">
            <form onSubmit={handleSimulate} 
            className="pt-[2vw] items-center justify-center text-green-400 text-2xl md:text-5xl font-normal font-['Inter']">Simulate<span className="text-gray-200">&nbsp;Trade</span>
            <div className="flex flex-col md:flex-row pt-[2vw]">
                <div className="flex items-center text-gray-200 text-base md:text-2xl font-normal font-['Inter'] pt-[0.5vw] pr-[0.5vw]">Number of Shares:</div>
                <input
                    ref={inputRef}
                    type="number"
                    min="0"
                    step="1"
                    value={shares}
                    onChange={(e) => setShares(e.target.value)}
                    className="flex items-center bg-zinc-900 pl-[1vw] border-[3px] border-green-400 text-gray-200 text-base md:text-xl font-normal font-['Inter'] rounded-2xl md:py-2"
                    placeholder="e.g. 5, 10"
                />
            </div>
            <div className="flex pt-[2vw]">
                <div className="items-center text-gray-200 text-base md:text-2xl font-normal font-['Inter'] pt-[0.5vw] pr-[0.5vw]">Current Market Value: <span className="text-green-400">${currentPrice}</span></div>
            </div>
            <div className="flex pt-[2vw] justify-between gap-[2vw]">
                    <button 
                    type="submit"
                    className="flex-1 text-gray-200 text-base md:text-2xl border-[3px]  pt-[2vw] pb-[2vw] rounded-2xl border-green-400 font-bold hover:bg-green-400 hover:text-zinc-900 transition-colors duration-200">
                        Simulate
                    </button>
                    <button 
                    type="button"
                    onClick={() => dialogRef.current?.close()}
                    className="flex-1 text-gray-200 text-base md:text-2xl border-[3px] pt-[2vw] pb-[2vw] rounded-2xl border-green-400 font-bold hover:bg-green-400 hover:text-zinc-900 transition-colors duration-200">
                        Back
                    </button>
                </div>
            </form>
        </dialog>
    );
}