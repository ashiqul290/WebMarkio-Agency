import Container from '@/Components/utils/Container';
import { ArrowRight, Code2, Layers, Palette, Search, TrendingUp, Wrench } from 'lucide-react';
import React from 'react'

const Service = () => {
    const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Custom websites and web apps built with modern frameworks for speed, scale, and flawless performance.",
    color: "from-blue-500 to-blue-700",
    glow: "hover:shadow-blue-500/20",
    border: "hover:border-blue-500/40",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces crafted to delight users and drive conversions from first impression to checkout.",
    color: "from-purple-500 to-purple-700",
    glow: "hover:shadow-purple-500/20",
    border: "hover:border-purple-500/40",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Data-driven strategies that improve rankings, increase organic traffic, and grow your bottom line measurably.",
    color: "from-cyan-500 to-blue-600",
    glow: "hover:shadow-cyan-500/20",
    border: "hover:border-cyan-500/40",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Full-funnel campaigns across paid, social, and email channels that turn clicks into paying clients.",
    color: "from-violet-500 to-purple-700",
    glow: "hover:shadow-violet-500/20",
    border: "hover:border-violet-500/40",
  },
  {
    icon: Layers,
    title: "Branding",
    desc: "Strategic brand identities — logo, typography, color system — built to resonate and be remembered.",
    color: "from-blue-600 to-indigo-700",
    glow: "hover:shadow-indigo-500/20",
    border: "hover:border-indigo-500/40",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Ongoing support, updates, security patches, and performance monitoring so you never skip a beat.",
    color: "from-purple-600 to-pink-600",
    glow: "hover:shadow-pink-500/20",
    border: "hover:border-pink-500/40",
  },
];
  return (
    <>

     {/* ── Services ── */}
      <section id="services" className="py-18 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-900/8 rounded-full blur-[80px]" />
        </div>
        <Container>

      
        <div className=" px-4 sm:px-6 lg:px-0 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              What We Offer
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
              Services Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Real Results
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              Every service is engineered to drive measurable impact — from first impression to your highest revenue month.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, color, glow, border }) => (
              <div
                key={title}
                className={`group relative rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 ${border} p-7 transition-all duration-300 hover:shadow-2xl ${glow} hover:-translate-y-1.5`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2.5">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                <div className="mt-5 flex items-center gap-1 text-blue-400 text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
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

export default Service
