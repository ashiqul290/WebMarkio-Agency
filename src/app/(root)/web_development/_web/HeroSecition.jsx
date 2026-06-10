import Container from '@/Components/utils/Container'
import React from 'react'

const HeroSecition = () => {
  return (
    <>
         {/* Hero */}
      <section className="relative z-10 pt-16 pb-24">
        <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
             Strategies For Success
            </div>
          

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-5">
             Professional Web Development Services
            </h1>

            <p className="mt-6 text-gray-400 max-w-xl">
             We build fast, secure, and scalable websites tailored to your business goals. From corporate websites to custom web applications, we deliver solutions that drive growth and enhance user experience.
            </p>

            <button className="mt-8 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500">
             Book a Consultation
            </button>
          </div>

          {/* Right Dashboard */}
          {/* <div className="relative">
            <div className="absolute top-20 left-20 w-48 h-48 bg-purple-600/30 blur-[120px]" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">Main Support</p>
                  <h3 className="text-2xl font-bold mt-2">$569.29</h3>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">Daily Support</p>
                  <h3 className="text-2xl font-bold mt-2">89%</h3>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">Users</p>
                  <h3 className="text-2xl font-bold mt-2">5.7K</h3>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">Growth</p>
                  <h3 className="text-2xl font-bold mt-2">+24%</h3>
                </div>
              </div>
            </div>
          </div> */}
           <div className=" bg-[#0F172A] flex items-center justify-center overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-[#0F172A] blur-[120px] rounded-full" />
      <div className="absolute w-48 h-48 bg-fuchsia-500/40 blur-[100px] rounded-full right-[35%] top-[35%]" />

      <div className="relative w-[700px] h-[450px]">
        {/* Main Card */}
        <div className="absolute left-0 top-20 w-[420px] p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(168,85,247,0.15)]">
          <h2 className="text-white text-3xl font-bold">
            Our Main Support
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Monitor Your Support
          </p>

          <div className="mt-10 space-y-6">
            {[
              "Flow Template",
              "UX/UI",
              "Dashboard",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded bg-cyan-400" />
                </div>

                <div>
                  <h4 className="text-white font-medium">
                    {item}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Design Asset
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Floating Card */}
        <div className="absolute right-16 top-0 w-[280px] p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">
              1-30 Jul 2023
            </span>

            <span className="px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
              +15.8%
            </span>
          </div>

          <h1 className="text-5xl font-bold text-white mt-4">
            $569<span className="text-2xl">.29</span>
          </h1>

          <div className="mt-6 h-24 rounded-2xl bg-gradient-to-r from-purple-600/20 to-fuchsia-500/20" />
        </div>

        {/* Neon Glow Box */}
        <div className="absolute right-10 top-28">
          <div className="absolute inset-0 bg-fuchsia-500 blur-[70px] opacity-70 rounded-full" />

          <div className="relative w-[170px] h-[170px] rounded-3xl bg-gradient-to-br from-purple-900/60 to-fuchsia-600/30 border border-white/10 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">
              $6765
            </span>
          </div>
        </div>

        {/* Bottom Floating Card */}
        <div className="absolute right-0 bottom-10 w-[220px] p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-5">
            <div className="w-7 h-7 rounded-full border-2 border-blue-400" />
          </div>

          <p className="text-gray-400">
            Daily Support
          </p>

          <h2 className="text-white text-5xl font-bold mt-2">
            89%
          </h2>
        </div>
      </div>
    </div>
        </div>

        </Container>
      </section>
    </>
  )
}

export default HeroSecition
