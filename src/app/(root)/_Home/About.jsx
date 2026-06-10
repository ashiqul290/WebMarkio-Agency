import Container from '@/Components/utils/Container'
import { ArrowRight, Award } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>

     {/* ── About ── */}
      <section id="about" className="py-28">
        <Container>

        
        <div className="px-4 sm:px-6 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format"
                  alt="WebMarkio team collaborating in a modern studio workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/50 via-transparent to-blue-900/20" />
              </div>
              <div className="absolute -bottom-6 -right-3 bg-[#1E293B] border border-white/10 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Award Winning</div>
                    <div className="text-slate-400 text-xs">Agency of the Year 2025</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-5">
                  About Us
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
                  The Team Behind{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    WebMarkio
                  </span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  We are a boutique digital agency built by designers, developers, and strategists obsessed with craft. Founded in 2019, WebMarkio has worked with startups and enterprise brands across 14 countries.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  We do not take on every project — we take on the right ones. Our process is direct, our work is measurable, and our standards are non-negotiable.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/5">
                {[
                  { val: "100+", label: "Projects Completed" },
                  { val: "50+", label: "Happy Clients" },
                  { val: "5+", label: "Core Team Members" },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      {val}
                    </div>
                    <div className="text-slate-500 text-xs mt-1 leading-tight">{label}</div>
                  </div>
                ))}
              </div>

      <div className=" inline-block">
                <Link href={'/contact'} className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 hover:scale-105">
                Meet the Team
                <ArrowRight className="w-4 h-4" />
              </Link>
      </div>
            </div>
          </div>
        </div>
        </Container>
      </section>
      
    </>
  )
}

export default About
