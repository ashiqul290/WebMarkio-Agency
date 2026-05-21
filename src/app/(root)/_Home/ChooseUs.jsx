import Container from '@/Components/utils/Container'
import { Clock, Search, Shield, Smartphone, Star, Zap } from 'lucide-react';
import React from 'react'

const ChooseUs = () => {
    const features = [
  { icon: Zap, title: "Fast Delivery", desc: "We ship in days, not months. Agile sprints, rapid iteration." },
  { icon: Search, title: "SEO Friendly", desc: "Every site is built with search visibility at its core from day one." },
  { icon: Smartphone, title: "Responsive Design", desc: "Flawless across every device from phones to 4K displays." },
  { icon: Star, title: "Premium UI", desc: "Award-worthy interfaces that set you apart from every competitor." },
  { icon: Clock, title: "24/7 Support", desc: "We are always on. Urgent issues resolved within hours, guaranteed." },
  { icon: Shield, title: "Secure Development", desc: "Security best practices baked in from the very first line of code." },
];
  return (
    <>

     {/* ── Why Choose Us ── */}
      <section className="py-28 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-blue-900/8 rounded-full blur-[80px]" />
        </div>
        <Container>

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              Why WebMarkio
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
              Why Teams{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Choose Us
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              Design excellence, technical rigor, and an obsession with your outcomes — this is what sets WebMarkio apart.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex gap-4 p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/[0.04] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1.5">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
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

export default ChooseUs
