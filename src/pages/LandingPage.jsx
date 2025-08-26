import arrow from '../assets/Hi-Res.png';
import stockPage from '../assets/Stock Page.png';
import stratPage from '../assets/Strategy Page.png';
import simTrade from '../assets/Simulate Trade.png';
import memberPage from '../assets/Membership Page 1.png';
import changeStock from '../assets/Change Stock.png';
import createAcc from '../assets/Create Account 1.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <main className="relative w-full min-h-screen overflow-x-hidden bg-[#1a1a1a]">
            <img src={arrow} alt="" aria-hidden="true" className="absolute mt-[10vh] rotate-[-17deg] md:rotate-[0deg] right-[-10vw] max-w-[125%] md:right-[0vw] md:mt-[0vh] md:max-w-[100%] md:absolute md:w-[200%] opacity-[70%] z-[0] -mt-[15vh] pointer-events-none" />

                {/* Nav */}
                <nav id="nav" className="flex px-[3vw] justify-between items-center py-4">
                    <div className="w-auto h-auto justify-left"><span className="text-white text-4xl font-normal font-['Inter'] z-[1]">Antr</span>
                    <span className="italic text-green-400 text-4xl font-semibold font-['Inter'] z-[1]">Evo</span></div>
                    <div className="flex gap-[2vw]">
                        <Link to="/sign-in"><button className="text-zinc-300 text-1xl font-normal font-['Inter'] hover:text-green-400 z-[10]">LOG IN</button></Link>
                    </div>
                </nav>

                {/* Hero section */}
                <section id="hero" className="flex flex-col pt-[15vw] text-center md:text-left md:pl-[8vw] space-y-[.5vw]">
                    <div className="w-auto h-auto z-[1]">
                        <h1>
                            <span className="block text-gray-200 text-3xl md:text-5xl lg:text-6xl font-bold font-['Inter'] z-[1]">Clear&nbsp;Data.</span>
                            <span className="block text-green-400 text-3xl md:text-5xl lg:text-6xl font-bold font-['Inter'] z-[1]">Informed&nbsp;Decisions.</span>
                        </h1>
                    </div>
                    <div className="w-auto h-auto italic text-zinc-300 text-2xl md:text-1xl font-normal font-['Inter'] pl-[3vw] z-[1]">
                        Reduce&nbsp;guesswork and screen-watching with data driven algorithmic alerts.
                    </div>
                    <div className="w-auto h-auto text-gray-200 text-1xl md:text-2xl font-medium font-['Inter'] pr-[2vw] pl-[2vw] md:pl-[1vw] md:pr-[10vw] xl:pr-[35vw] z-[1]">
                        AntrEvo provides alerts based on preset algorithms to help inform your trading decisions.
                    </div>
                    <div className="pl-[1vw] pt-[1vw] z-[10]">
                        <a href='#waitlist'>
                            <Link to="/sign-in"><button className="self-start pl-[1vw] pr-[1vw] pt-[0.5vw] pb-[0.5vw] z-[10] bg-green-400 border-transparent border-3 hover:bg-zinc-900 hover:text-green-400 rounded-[55px] hover:border-green-400 hover:border-3 text-zinc-900 font-bold font-['Inter'] transition-colors duration-200 z-[1]">
                                Get Started Today
                            </button></Link>
                        </a>
                    </div>
                </section>
                
            {/* Features */}
            <section id="features" className="flex flex-col md:text-left md:pl-[8vw] pt-[30vw]">
                <h2 className="text-gray-200 text-3xl md:text-5xl font-bold font-['Inter'] z-[1] text-center md:text-left">
                    Features
                </h2>
                <div className="justify-center z-[1] italic text-base sm:text-1xl md:text-2xl md:pr-[5vw]"> <span className="hidden md:block">
                    <span className="text-gray-200 font-bold font-['Inter']">Antr</span>
                    <span className="text-green-400 font-bold font-['Inter']">Evo</span>
                    <span className="text-gray-200 font-bold font-['Inter']"> </span>
                    <span className="text-green-400 font-bold font-['Inter']">monitors the market</span>
                    <span className="text-gray-200 font-bold font-['Inter']"> using a user-selected preset </span>
                    <span className="text-green-400 font-bold font-['Inter']">trading algorithm</span>
                    <span className="text-gray-200 font-bold font-['Inter']">  alerting the user when it is triggered - no need to watch the charts all day.</span></span>
                    <span className="block md:hidden text-center">
                    <span className="text-gray-200 font-bold font-['Inter']">Antr</span>
                    <span className="text-green-400 font-bold font-['Inter']">Evo</span>
                    <span className="text-gray-200 font-bold font-['Inter']"> </span>
                    <span className="text-green-400 font-bold font-['Inter']">monitors your stock</span>
                    <span className="text-gray-200 font-bold font-['Inter']"> using a preset </span>
                    <span className="text-green-400 font-bold font-['Inter']">trading algorithm</span>
                    <span className="text-gray-200 font-bold font-['Inter']"> and alerts the user when triggered.</span></span>
                </div>
                <div className="flex flex-col y-space-[1vw] md:pr-[10vw] text-base sm:text-1xl md:text-2xl z-[10]">
                    <div className="justify-center text-green-400 font-semibold font-['Inter'] pt-[2vw] md:pt-[1vw]">Built-In Trading Algorithms</div>
                    <div className="justify-center text-zinc-300 italic font-semibold font-['Inter'] pl-[3vw]">AntrEvo runs preset, backtested strategies to identify patterns that may indicate trading opportunities. These are for informational purposes only and are not investment advice.</div>
                    <div className="justify-center text-green-400 font-semibold font-['Inter'] pt-[2vw] md:pt-[1vw]">Real-Time Alerts</div>
                    <div className="justify-center text-zinc-300 italic font-semibold font-['Inter'] pl-[3vw]">Get an instant SMS or email when a the signal is triggered <span className="hidden md:inline">— so you stay informed, without being glued to a screen.</span></div>
                    <div className="justify-center text-green-400 font-semibold font-['Inter'] pt-[2vw] md:pt-[1vw]">Set It and Trade</div>
                    <div className="justify-center text-zinc-300 italic font-semibold font-['Inter'] pl-[3vw]">No additional coding or setup required. The algorithms do the watching<span className="hidden md:inline"> — you just receive a signal when your alert criteria are met.</span></div>
                    <div className="justify-center text-green-400 font-semibold font-['Inter'] pt-[2vw] md:pt-[1vw]">Time-Saving Signals</div>
                    <div className="justify-center text-zinc-300 italic font-semibold font-['Inter'] pl-[3vw]"><span className="hidden md:inline">Focus on your day — </span> AntrEvo monitors so you can save time.</div>
                    <div className="justify-center text-green-400 font-semibold font-['Inter'] pt-[2vw] md:pt-[1vw]">No Brokerage Connection Needed</div>
                    <div className="justify-center text-zinc-300 italic font-semibold font-['Inter'] pl-[3vw]">You're in full control. AntrEvo doesn’t trade for you or access your accounts <span className="hidden md:inline"> — it simply alerts you to opportunities.</span></div>
                </div>
            </section>
            
            {/* Preview Section */}
            <section id="preview" className="pt-[20vw]">
                <h2 className="text-gray-200 md:text-left text-3xl md:text-5xl font-bold font-['Inter'] z-[1] md:pl-[8vw]">Preview</h2>
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center justify-between py-[2vh] md:py-[4vh] lg:flex-row justify-between px-[4vw] max-w-full overflow-hidden">
                            <div className="w-[100%] lg:w-[30%] rounded-2xl overflow-hidden">
                                <img className="w-full h-auto object-cover" src={stockPage} alt="Monitoring stock dashboard showing live signal status where you can change stock, simulate trade, view back test win percentage, view last alerts, and current strategy." />
                            </div>
                            <div className="w-[100%] lg:w-[30%] rounded-2xl overflow-hidden">
                                <img className="w-full h-auto object-cover pt-[4vw] lg:pt-[0vw]" src={stratPage} alt="Choose a preset trading algorithm with an explanation of strategy, concept, and strengths." />
                            </div>
                            <div className="w-[100%] lg:w-[30%] rounded-2xl overflow-hidden">
                                <img className="w-full h-auto object-cover pt-[4vw] lg:pt-[0vw]" src={simTrade} alt="Simulate a trade to preview how a stock would have performed with a selected strategy." />
                            </div>
                        </div>
                        <div className="hidden lg:flex flex-row justify-between px-[4vw] max-w-full overflow-hidden">
                            <div className="w-[30%] rounded-2xl overflow-hidden">
                                <img className="w-full h-auto object-cover" src={memberPage} alt="Membership status with renewal date, cancellation FAQs, and cancel option." />
                            </div>
                            <div className="w-[30%] rounded-2xl overflow-hidden">
                                <img className="w-full h-auto object-cover" src={changeStock} alt="Change monitored stock by entering a ticker symbol." />
                            </div>
                            <div className="w-[30%] rounded-2xl overflow-hidden">
                                <img className="w-full h-auto object-cover" src={createAcc} alt="Create an account with email, password, phone number, terms of service and SMS consent." />
                            </div>
                        </div>
                        <div className="text-center text-zinc-300 text-1xl font-normal font-['Inter'] pt-[0.5vw]">
                            <p>Images subject to change. Figures shown are placeholders for demonstration purposes only and do not reflect actual or backtested trading results.</p>
                        </div>
                    </div>
                </section>

            {/* About Section */} 
            <section id="about" className="flex xl:flex-row flex-col pt-[20vw]">
                <div className="flex flex-col justify-center lg:justify-start md:pl-[4vw] md:pr-[4vw] pl-[2vw] pr-[2vw]">
                    <h2 className="text-3xl md:text-5xl text-gray-200 text-center xl:text-left font-bold font-['Inter'] z-[1]">About </h2>
                    <div className="text-zinc-300 text-2xl font-normal font-['Inter'] text-left pt-[0.5vw]">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; My mission is to make trading more simple, efficient, and easy for everyone. 
                        Currently, I'm a solo-dev balancing work and school but I've always had an interest in finance. 
                        I developed this tool because I  wanted to invest in the stock market and get better at day trading 
                        but kept facing losses because I didn't have the time to devote to it. <span className="hidden md:inline"> After I heard several other people struggle 
                        with this same problem, I started thinking about how I could automate the process a bit. I came up with this
                        tool to monitor the stock for the trader so they could spend their time doing other things. Plus, it also provides tools that new traders can use for 
                        educational and research purposes as they learn about market trends. </span> As the name implies, my goal is to help users enter the evolution of their time 
                        and trading understanding!
                    </div>
                </div>
                <div className="flex flex-col text-center xl:text-left pt-[10vw] xl:pt-[7vw] lg:pl-[10vw] lg:pr-[10vw]">
                    {/* Antr */}
                    <div>
                        <div className="text-gray-200 text-3xl md:text-4xl font-bold font-['Inter'] whitespace-nowrap">Antr (ahn-tr)</div>
                        <span className="hidden sm:block text-zinc-300 text-2xl italic font-normal font-['Inter'] lg:pl-[2vw] whitespace-nowrap">From Haitian Creole “Antre” - “to enter”</span>
                        <span className="block sm:hidden text-zinc-300 text-2xl italic font-normal font-['Inter'] lg:pl-[2vw]">From Haitian Creole “Antre” - <br></br>“to enter”</span>
                    </div>
                    {/* Evo */}
                    <div className="pt-[2vw]">
                        <div className="text-green-400 text-3xl md:text-4xl font-bold font-['Inter']">Evo
                            <span className="text-gray-200">&nbsp;(ee-voh)</span>
                        </div>
                        <div className="text-zinc-300 text-2xl italic font-normal font-['Inter'] lg:pl-[2vw] whitespace-nowrap">From English "evolution"</div>
                    </div>
                </div>
            </section>

            {/* End of Page */}
            <section id="waitlist" className="flex flex-col pt-[30vw] md:pt-[20vw]">
                <h2 className="text-gray-200 text-5xl font-bold font-['Inter'] z-[1]">Join Today</h2>
                <div className="text-zinc-300 pt-[0.5vw] text-2xl font-normal font-['Inter'] pl-[2vw] pr-[2vw] md:pl-[0vw] md:pr-[0vw]">
                    <span className="hidden md:block"> Start receiving real-time alerts for stocks you care about!
                    </span>
                    <div className="pt-[1vw] z-[10]">
                        <a href='#nav'>
                            <button className="pl-[1vw] pr-[1vw] pt-[0.5vw] pb-[0.5vw] z-[10] bg-green-400 border-transparent border-3 hover:bg-zinc-900 hover:text-green-400 rounded-[55px] hover:border-green-400 hover:border-3 text-zinc-900 font-bold font-['Inter'] transition-colors duration-200 z-[1]">
                                Get Started Today
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section id="disclaimer" className="flex flex-col pt-[10vw] pl-[8vw] pb-[5vw]">
                <div className="justify-center text-gray-200 text-xl font-normal font-['Inter'] text-left pr-[8vw]">
                <h2 className="pb-[1vw]">Disclaimer & Notification Notice:</h2>
                <h3>Trading Risk Disclaimer:</h3>
                &nbsp; &nbsp; &nbsp; &nbsp;The information and alerts provided by AntrEvo are for informational and educational purposes only and do not constitute financial, investment, 
                or trading advice. AntrEvo does not execute trades, manage portfolios, or directly interact with brokerage accounts. 
                You are solely responsible for your trading decisions. All trading decisions are made independently by the user. 
                Past performance is not indicative of future results. AntrEvo does not take account of your objectives or your financial situation and does
                not offer any investment advice. Trading stocks and other financial instruments involves significant 
                risk and may result in the loss of your entire investment. By using AntrEvo, you acknowledge and agree that AntrEvo and its creators 
                are not liable for any losses or damages resulting from your use of the platform. The information, alerts, and any educational content provided by AntrEvo are for 
                general informational purposes only and do not constitute personalized financial, investment, or trading advice. AntrEvo and its developers are not registered investment advisers, 
                broker-dealers, licensed securities dealers, US investment advisors, investment banks, or financial planners. No content provided should be relied 
                upon for the purpose of making financial decisions. AntrEvo and its developer are not licensed or certified by any institute or regulatory body. 
                Information provided by AntrEvo does not constitute investing advice. Users should conduct their own independent 
                research and consult with a licensed financial professional before making any investment or trading decisions. We do not guarantee the accuracy, completeness, or timeliness 
                of any information, and we are not responsible for any losses, damages, or claims that may result from your use of the platform. Any content and tools on AntrEvo are provided for information purposes only.
                All performance statistics, win rates, or returns shown in previews are fictional placeholders created for demonstration purposes only. They do not represent actual or backtested 
                results and should not be relied upon for trading decisions. We make no guarantee of profitability and assume no responsibility for errors, omissions, delays, or inaccuracies in 
                the information provided. Use of this platform is at your own risk, and you agree that you are solely responsible for verifying all information before relying on it.
                <br></br><br />
                <h3>Messaging & Data Rates Notice:</h3> &nbsp; &nbsp; &nbsp; &nbsp;By choosing to receive notifications via SMS or other messaging services, you consent to receiving 
                automated messages from AntrEvo. Messaging and data rates may apply depending on your carrier and plan. You can opt out at any time by following the provided instructions.
                Trading alerts sent via SMS or email may be delayed or may not be delivered due to factors outside our control. You should not rely solely on alerts to make time-sensitive trading decisions.
                </div>
            </section>
        </main>
    );
};
export default LandingPage;
