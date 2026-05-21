import Container from '@/Components/utils/Container'
import React from 'react'

const Proccess = () => {
    const process = [
  { num: "01", title: "Discovery", desc: "We map your goals, audience, and competitive landscape." },
  { num: "02", title: "Planning", desc: "Roadmap, architecture, and sprint milestones locked in." },
  { num: "03", title: "Design", desc: "Wireframes, prototypes, and pixel-perfect UI crafted." },
  { num: "04", title: "Development", desc: "Clean, scalable code shipped with modern stacks." },
  { num: "05", title: "Launch", desc: "QA, deploy, monitor, and a smooth handover." },
];
  return (
    <>
     {/* ── Process ── */}
      <section id="process" className="py-28 relative bg-white/[0.015] border-y border-white/5">
      <Container>


        <div className="px-4 sm:px-6 lg:px-8 xl:px-0">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              How We Work
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Process
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              A proven five-step framework that eliminates guesswork and delivers exceptional results on time and on budget.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-5 gap-0 relative">
            <div className="absolute top-[30px] left-[10%] right-[10%] h-px bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-purple-600/0" />
            {process.map(({ num, title, desc }) => (
              <div key={num} className="flex flex-col items-center text-center px-6 relative">
                <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-black text-base mb-5 relative z-10 shadow-xl shadow-blue-500/20">
                  {num}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="lg:hidden space-y-6 relative">
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/50 via-purple-600/30 to-blue-600/0" />
            {process.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-6 pl-2">
                <div className="w-[56px] h-[56px] rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shrink-0 relative z-10 shadow-lg">
                  {num}
                </div>
                <div className="pt-3.5">
                  <h3 className="text-white font-bold text-base mb-1">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
              </Container>
      </section>
      
    </>
  )
}

export default Proccess
