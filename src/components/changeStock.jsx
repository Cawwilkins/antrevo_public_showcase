import { useEffect, useRef, useState } from "react";

export default function ChangeStockModal({ 
    onClose,
    onSubmit,
}) {
    const dialogRef = useRef(null);
    const inputRef = useRef(null);
    const [symbol, setSymbol] = useState("");
    
    useEffect(() => {
        const d = dialogRef.current;
        if(!d) return;

        // In react development, effects can run twice (strictMode), so guard:
        if (!d.open) {
            d.showModal();
        }

        const handleClose = () => {
            setSymbol("")
            onClose?.();
        };
        d.addEventListener("close", handleClose);

        setTimeout(() => inputRef.current?.focus(), 0);

        return () => d.removeEventListener("close", handleClose);
    }, [onClose]);

        const handleConfirm = async (e) => {
            e?.preventDefault();
            const val = symbol.trim().toUpperCase();
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
            <div className="pt-[2vw] flex items-center justify-center text-gray-200 text-2xl md:text-5xl font-normal font-['Inter']">Change Active<span className="text-green-400">&nbsp;Stock</span></div>
            <div className="flex pt-[2vw] justify-center">
                <label>
                <div className="items-center text-gray-200 md:text-2xl font-normal font-['Inter'] pb-[0.5vw] pr-[0.5vw]">Ticker Symbol:</div>
                <input
                    ref={inputRef}
                    type="text"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    className="items-center bg-zinc-900 pl-[1vw] border-[3px] border-green-400 text-gray-200 md:text-xl font-normal font-['Inter'] rounded-2xl border-[3px] py-2"
                    placeholder="e.g. AAPL, TSLA, GOOGL"
                />
                </label>
            </div>
            <div className="flex pt-[3vw] md:pt-[2vw] justify-center md:justify-between gap-[4vw] md:gap-[2vw]">
                    <button 
                    type="submit"
                    className="flex-1 text-gray-200 md:text-2xl border-[3px]  pt-[2vw] pb-[2vw] rounded-2xl border-green-400 font-bold hover:bg-green-400 hover:text-zinc-900 transition-colors duration-200">
                        Confirm
                    </button>
                    <button 
                    type="button"
                    onClick={() => dialogRef.current?.close()}
                    className="flex-1 text-gray-200 md:text-2xl border-[3px] pt-[2vw] pb-[2vw] rounded-2xl border-green-400 font-bold hover:bg-green-400 hover:text-zinc-900 transition-colors duration-200">
                        Back
                    </button>
                </div>
            </form>
        </dialog>
    );
}