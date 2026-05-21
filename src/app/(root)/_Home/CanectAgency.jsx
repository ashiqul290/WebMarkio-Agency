import React from 'react'

const CanectAgency = () => {
    const clients = ["TechFlow", "Nexora", "BuildStack", "CloudBase", "DataSync", "InnovaX", "PulseAI", "Zenvoy"];
  return (
    <>
      {/* ── Clients ── */}
      <section className="py-12 border-y border-white/5 bg-white/1.5">
        <div className=" px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {clients.map((client) => (
              <span
                key={client}
                className="text-slate-600 hover:text-slate-400 transition-colors duration-200 font-black text-lg tracking-tight cursor-default select-none"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>
      
    </>
  )
}

export default CanectAgency
