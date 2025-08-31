import { useEffect, useRef, useState } from "react";

export default function UpdateModal() {
    const [open, setOpen] = useState(true);
    if (!open) return null;

  return (
    // Fullscreen overlay, centers its child
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Dim background (optional) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Modal */}
      <div className="relative w-full max-w-[90vw] rounded-2xl border-[3px] border-green-400 bg-zinc-900 p-[2vw] md:p-[2rem] font-['Inter']">
        <h2 className="text-3xl md:text-5xl text-gray-200 text-center xl:text-left font-bold z-[1]">
          Antr<span className="text-green-400 italic">Evo </span>Updates and Status <br />
        </h2>

        <div className="mt-[1.5vw] text-justify text-gray-200 text-base md:text-2xl">
          <p className="mb-4">
            <strong>Status of Project:</strong><br />
            &nbsp;&nbsp;&nbsp;&nbsp;Hi! Thanks for checking out AntrEvo. Currently, the project is in a working alpha release but 2 issues have arisen. The first is that I need to obtain a commercial
            license to share the information from the stocks publicly, even if for free plans. Due to this, the project is still in a closed alpha. Feel free to join the waitlist in the meantime and 
            check out some of the promotional images below.<br /> 
          </p>
          <p className="mb-4">
            &nbsp;&nbsp;&nbsp;&nbsp;The second issue is that the project currently only supports CryptoCurrency because the libraries are
            much more generous on free plans (considering this project does not have funding haha.) This should be easily resolved once I obtain a commercial license but stay tuned for details and again
            join the waitlist to be notified once the public version releases! <br /><br />
         </p>

          
          <p className="mb-2"><strong>Planned Future Updates:</strong></p>
          <ol className="list-decimal list-inside space-y-1">
            <li>&nbsp;&nbsp;&nbsp;&nbsp;Public Release</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;Expanded Asset Support (Stocks)</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;More algorithms</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;All algorithms running at once</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;Mobile App version</li>
          </ol>
        </div>

        {/* Buttons */}
        <div className="mt-[2vw] flex justify-center">
          <button onClick={() => setOpen(false)}
            className="md:hidden mx-[5vw] mb-[2vw] mt-[2vw] px-[2vw] py-[1vw] border-[3px] border-gray-200 text-base bg-gray-200 text-zinc-900 rounded-lg hover:bg-zinc-900 hover:border-green-400 hover:text-gray-200 transition-colors duration-200"
          >
            Cool!
          </button>

          <button onClick={() => setOpen(false)}
            className="hidden md:inline-block mb-[2vw] mx-[5vw] mt-[2vw] h-[5vw] w-[10vw] px-4 py-2 border-[3px] border-gray-200 font-bold text-2xl bg-gray-200 text-zinc-900 rounded-lg hover:bg-zinc-900 hover:border-green-400 hover:text-gray-200 transition-colors duration-200"
          >
            Cool!
          </button>
        </div>
      </div>
    </div>
  );
}