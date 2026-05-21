import Container from '@/Components/utils/Container';
import { ArrowRight } from 'lucide-react';
import React from 'react'

const Porfolio = () => {
    const portfolio = [
  { title: "NexaCorp Dashboard", category: "Web App", tag: "UI/UX + Dev", img: "1460925895917-afdab827c52f" },
  { title: "ShopWave E-commerce", category: "E-commerce", tag: "Full Stack", img: "1556742049-0cfed4f6a45d" },
  { title: "Finora Mobile App", category: "Mobile UI", tag: "UI/UX Design", img: "1512941937669-5e0078dd8af9" },
  { title: "TechFlow Rebrand", category: "Branding", tag: "Brand Identity", img: "1558618666-fcd25c85cd64" },
  { title: "GrowthLab Marketing", category: "Marketing", tag: "SEO + Ads", img: "1432888498266-38ffec3eaf0a" },
  { title: "BuildStack SaaS", category: "SaaS", tag: "Full Stack", img: "1486312338219-ce68d2c6f44d" },
];
  return (
    <>
        {/* ── Portfolio ── */}
      <section id="portfolio" className="py-18 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-purple-900/8 rounded-full blur-[80px]" />
        </div>
        <Container>

      
        <div className="px-4 sm:px-6 lg:px-8 xl:px-0 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              Our Work
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
              Projects We Are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Proud Of
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              Every project is a story of transformation. Here are a few we are proud to call our best work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map(({ title, category, tag, img }) => (
              <div
                key={title}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-${img}?w=600&h=450&fit=crop&auto=format`}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0F172A]/80 backdrop-blur-sm border border-white/10 text-white text-[11px] font-semibold">
                  {category}
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[11px] font-semibold">
                      {tag}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg">{title}</h3>
                  <button className="mt-2.5 flex items-center gap-1.5 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors w-fit">
                    View Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
          </Container>
      </section>
    </>
  )
}

export default Porfolio
