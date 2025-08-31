import { useEffect, useRef, useState } from "react";

const STRATEGY_OPTIONS = ["SMA", "Bollinger Bands", "RSI"];

export default function ChangeStrategyModal({ 
    onClose,
    onSubmit,
    current = "SMA"
}) {
    const dialogRef = useRef(null);
    const selectRef = useRef(null);
    const [alg, setAlg] = useState(current);
    
    useEffect(() => {
        const d = dialogRef.current;
        if(!d) return;

        // In react development, effects can run twice (strictMode), so guard:
        if (!d.open) {
            d.showModal();
        }

        const handleClose = () => {
            onClose?.();
        };
        d.addEventListener("close", handleClose);

        const t = setTimeout(() => selectRef.current?.focus(), 0);

        return () => {
            clearTimeout(t);
            d.removeEventListener("close", handleClose);
        };
    }, [onClose]);

        const handleConfirm = async (e) => {
            e?.preventDefault();
            const val = (alg || "").trim()
            if(!val) return;
            try {
                await onSubmit?.(val);
            } finally{
                dialogRef.current?.close();
            }
        };
    
    return (
        <dialog
        ref={dialogRef}
        className="open:flex open:flex-col open:justify-center open:items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 border-green-400 rounded-2xl w-[60vw] py-[5vw] md:h-[70vh] bg-zinc-900 border-[3px] font-['Inter']">
            <form onSubmit={handleConfirm}>
            <div className="pt-[2vw] items-center justify-center text-gray-200 text-2xl md:text-5xl font-normal font-['Inter']">Change Active<span className="text-green-400"> Algorithm</span></div>
            <div className="flex items-center justify-center b-[2vw] md:pb-[0vw] pt-[2vw]">
                <div className="flex justify-center items-center text-gray-200 md:text-2xl font-normal font-['Inter'] pr-[0.5vw] hidden:md-flex">Name:</div>
                <label>
                <select
                    ref={selectRef}
                    value={alg}
                    onChange={(e) => setAlg(e.target.value)}
                    className="flex justify-center items-center bg-zinc-900 pl-[0.5vw] border-[3px] border-green-400 text-gray-200 md:text-2xl font-normal font-['Inter'] rounded-2xl border-[3px] py-2"
                    placeholder="e.g. SMA, Bollinger Bands, or RSI">
                    {STRATEGY_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                </label>
            </div>
            <div className="flex pt-[2vw] justify-center md:justify-between gap-[2vw] px-[2vw]">
                    <button 
                    type="submit"
                    className="flex-1 text-gray-200 md:text-2xl border-[3px] pr-[6vw] pt-[2vw] pl-[6vw] pb-[2vw] rounded-2xl border-green-400 font-bold hover:bg-green-400 hover:text-zinc-900 transition-colors duration-200">
                        Confirm
                    </button>
                    <button 
                    type="button"
                    onClick={() => dialogRef.current?.close()}
                    className="flex-1 text-gray-200 md:text-2xl border-[3px] pr-[6vw] pt-[2vw] pl-[6vw] pb-[2vw] rounded-2xl border-green-400 font-bold hover:bg-green-400 hover:text-zinc-900 transition-colors duration-200">
                        Back
                    </button>
                </div>
            </form>
        </dialog>
    );
}