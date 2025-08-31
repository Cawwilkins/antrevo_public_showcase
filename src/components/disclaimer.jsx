import { useEffect, useRef, useState } from "react";

export default function DisclaimerModal({ onAccept }) {
    const dialogRef = useRef(null);
    
    // 1) Controls
    const [agreeDisc, setAgreeDisc] = useState(false);
    const [agreeSMS, setAgreeSMS] = useState(false);
    const canProceed = agreeDisc && agreeSMS;

    const canProceedRef = useRef(false);
    useEffect(() => {canProceedRef.current = canProceed;}, [canProceed]);

    // 2) open on mount and enforce closing rules
    useEffect(() => {
        const d = dialogRef.current;
        if(!d) return;

        // In react development, effects can run twice (strictMode), so guard:
        if (!d.open) {
            d.showModal();
        }

        // Block esc
        const onCancel = (e) => e.preventDefault();

        // Only close if canProceed is true
        const onClose = () => {
            if (!canProceedRef.current) {
                d.showModal();
                return;
            }
            onAccept?.();
        };

        d.addEventListener("cancel", onCancel);
        d.addEventListener("close", onClose);
    
        return () => {
            d.removeEventListener("cancel", onCancel);
            d.removeEventListener("close", onClose);
        };
    }, [onAccept]);

    const handleAgree = () => {
        if (!canProceed) return;
        dialogRef.current?.close();
    };

    return (
        <dialog
        ref={dialogRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-red-600 w-[70vw] h-[70vh] bg-zinc-900 border-[3px] font-['Inter']">
            <div className="ml-[2vw] text-left text-red-600 text-2xl md:text-5xl font-normal font-['Inter']">IMPORTANT!<br /><br /></div>
            <div className="ml-[2vw] text-left text-gray-200 text-base md:text-2xl font-normal font-['Inter']">Disclaimer & Notification Notice:<br/><br/>
            Trading Risk Disclaimer:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;The information and alerts provided by AntrEvo are for informational and educational purposes only and do not constitute financial, 
            investment, or trading advice. AntrEvo does not execute trades, manage portfolios, or directly interact with brokerage accounts. 
            You are solely responsible for your trading decisions. All trading decisions are made independently by the user. Past performance 
            is not indicative of future results. Trading stocks and other financial instruments involves significant risk and may result in the 
            loss of your entire investment. By using AntrEvo, you acknowledge and agree that AntrEvo and its creators are not liable for any 
            losses or damages resulting from your use of the platform. 
            <br/><br />Messaging & Data Rates Notice:<br />      
            &nbsp;&nbsp;&nbsp;&nbsp;By choosing to receive notifications via SMS or other messaging services, you consent to receiving automated messages from AntrEvo. 
            Messaging and data rates may apply depending on your carrier and plan. You can opt out at any time by following the provided 
            instructions.</div>
            <div className="flex">
                <div className="flex flex-col ml-[2vw]">
                    <div className="flex items-start gap-[1vw] mt-[3vw]">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={agreeDisc}
                            onChange={(e) => setAgreeDisc(e.target.checked)}
                            className="shrink-0 appearance-none checked:bg-zinc-300 bg-zinc-900
                            border-[3px] border-red-600 checked:border-red-600
                            size-[6vw] sm:size-[4vw] md:size-[2vw] lg:size-[20px]"
                        />
                        <label htmlFor="terms"
                            className="text-left text-base font-bold text-gray-200 leading-snug">
                            I have read and agree to the Disclaimer
                        </label>
                    </div>

            {/* Row 2 */}
            <div className="flex items-start gap-[1vw] mt-[1vw]">
                <input
                    type="checkbox"
                    id="msgterms"
                    checked={agreeSMS}
                    onChange={(e) => setAgreeSMS(e.target.checked)}
                    className="shrink-0 appearance-none checked:bg-zinc-300 bg-zinc-900
                        border-[3px] border-red-600 checked:border-red-600
                        size-[6vw] sm:size-[4vw] md:size-[2vw] lg:size-[20px]"
                />
                <label 
                    htmlFor="msgterms"
                    className="text-left text-base font-bold text-gray-200 leading-snug">
                        I consent to receiving automated text messages from AntrEvo. Message and data rates may apply.
                </label>
            </div>
                        <button 
                            onClick={() => dialogRef.current?.close()}
                            className="md:hidden flex justify-center items-center mx-[5vw] mt-[2vw] mt-4 px-[2vw] py-[1vw] text-bold border-[3px] border-gray-200 text-base bg-gray-200 text-zinc-900 rounded-lg hover:bg-zinc-900 hover:border-red-600 hover:text-gray-200 text-bold transition-colors duration-200">
                            I&nbsp;agree
                        </button>
                    </div>
                    <button 
                        onClick={() => dialogRef.current?.close()}
                        className="hidden md:block mb-[2vw] ml-[5vw] mr-[5vw] mt-[2vw] h-[5vw] w-auto mt-4 px-4 py-2 text-bold border-[3px] border-gray-200 text-2xl bg-gray-200 text-zinc-900 rounded-lg hover:bg-zinc-900 hover:border-red-600 hover:text-gray-200 text-bold transition-colors duration-200">
                        I&nbsp;agree
                    </button>
                </div>
        </dialog>
    );
}