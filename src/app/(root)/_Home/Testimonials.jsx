import Container from '@/Components/utils/Container'
import { Star } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
    const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechFlow Inc.",
    avatar: "SM",
    color: "from-blue-500 to-cyan-500",
    rating: 5,
    text: "WebMarkio transformed our online presence completely. The new site loads in under 1 second and our conversion rate doubled in the first month. Genuinely the best agency we have ever worked with.",
  },
  {
    name: "James Okonkwo",
    role: "Founder, Nexora Labs",
    avatar: "JO",
    color: "from-purple-500 to-pink-500",
    rating: 5,
    text: "From discovery to launch in 3 weeks. The team understood our brand instantly and delivered a UI that our users rave about every day. Highly recommend for any startup serious about design.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director, CloudBase",
    avatar: "PS",
    color: "from-violet-500 to-blue-500",
    rating: 5,
    text: "Our SEO rankings jumped to page one across 12 target keywords within 60 days of launch. The ROI on this investment has been extraordinary. Professional, communicative, and truly expert.",
  },
];
  return (
    <>
       {/* ── Testimonials ── */}
      <section id="testimonials" className="py-28 relative bg-white/[0.015] border-y border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-purple-900/8 rounded-full blur-[80px]" />
        </div>
        <Container>


        <div class=" px-4 sm:px-6 lg:px-8 xl:px-0 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-4">
              ★ Client Reviews
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Clients Say
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              Real feedback from real clients. No fluff, no staged quotes — just what it is actually like to work with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, avatar, color, rating, text }) => (
              <div
                key={name}
                className="p-7 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                    {avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{name}</div>
                    <div className="text-slate-500 text-xs">{role}</div>
                  </div>
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

export default Testimonials
