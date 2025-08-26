import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';


const API = (import.meta.env && import.meta.env.VITE_API_URL) || 'http://localhost:8000';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function signIn(e) {
    e.preventDefault();
    setLoading(true); setErr(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return setErr(error.message);
    navigate('/main-page'); // only on success
  }

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-[#1a1a1a]">
      {/* Nav */}
      <nav id="nav" className="flex px-[3vw] justify-between items-center py-4">
        <div className="w-auto h-auto justify-left">
          <span className="text-white text-4xl font-normal font-['Inter'] z-[1]">Antr</span>
          <span className="italic text-green-400 text-4xl font-semibold font-['Inter'] z-[1]">Evo</span>
        </div>
        <div className="flex gap-[2vw]">
          <Link to="/"><button className="text-zinc-300 text-1xl font-normal font-['Inter'] hover:text-green-400 z-[10]">BACK</button></Link>
        </div>
      </nav>

      <div className="flex">
        <div id="sign-in" className="flex flex-col text-left font-['Inter']">
          <div className="flex pl-[6vw] pt-[12vw] font-bold text-green-400 text-5xl">Welcome Back!</div>
          <div className="flex pt-[1vw] pl-[8vw] text-zinc-500 font-semibold text-4xl italic">Stay on top of your stocks - effortlessly.</div>
        </div>

        <div id="create-account-form" className="flex flex-col pl-[10vw] text-left font-['Inter']">
          <div className="flex pl-[6vw] pt-[8vw] font-bold text-gray-200 text-5xl"> Sign In </div>

          <form onSubmit={signIn} className="flex flex-col pl-[6vw] pt-[2vw]">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              id="email"
              className="bg-zinc-900 pl-4 rounded-2xl text-zinc-300 border-[3px] pt-2 pb-2 pr-[10vw] border-green-400 font-['Inter']"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              id="password"
              className="bg-zinc-900 pl-4 rounded-2xl text-zinc-300 border-[3px] pt-2 pb-2 pr-[10vw] border-green-400 font-['Inter'] mt-[3vw]"
            />

            <button className="pt-[0.5vw] pl-[8vw] text-zinc-500 text-right font-semibold text-base italic hover:text-green-400">
              Reset Password
            </button>

            <div className="pt-[2vw] z-[10] flex gap-4">
              <button
                disabled={loading}
                type="submit"
                className="self-start pl-[2vw] pr-[2vw] pt-[0.5vw] pb-[0.5vw] z-[10] text-2xl font-bold bg-green-400 rounded-2xl border-transparent hover:bg-zinc-900 hover:text-green-400 hover:border-green-400 text-zinc-900 transition-colors duration-200"
              >
                Sign In
              </button>
            </div>
            {err && <div className="mt-3 text-red-400">{err}</div>}
          </form>
        </div>
      </div>
    </main>
  );
}
