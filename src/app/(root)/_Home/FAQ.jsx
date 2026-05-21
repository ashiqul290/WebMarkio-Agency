"use client"
import Container from '@/Components/utils/Container'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

const FAQ = () => {
    const faqs = [
  { q: "How long does a typical project take?", a: "Most websites launch in 2–4 weeks. Complex web apps or e-commerce platforms take 6–10 weeks. We share a detailed timeline during our discovery call so you always know what to expect." },
  { q: "Do you offer ongoing maintenance after launch?", a: "Yes. All plans include a support period, and we offer monthly retainer packages for continuous updates, security patches, and performance monitoring beyond the initial term." },
  { q: "What technologies do you use?", a: "We work with React, Next.js, TypeScript, Node.js, and Tailwind CSS for the web. For CMS we use Sanity, Contentful, or WordPress depending on what best fits the project brief." },
  { q: "Can you redesign my existing website?", a: "Absolutely. Redesigns are one of our specialties. We audit your current site, identify friction points, and rebuild for modern performance and aesthetics without disrupting your existing traffic." },
  { q: "Will my site rank well on Google?", a: "SEO is baked into every build — technical SEO, Core Web Vitals, structured data, and semantic HTML are standard. We also offer ongoing content strategy and link-building as an add-on service." },
  { q: "Do you work with international clients?", a: "Yes — our team is fully remote and we work with clients across Europe, North America, the Middle East, and Asia. Time zones have never been a barrier to great collaboration." },
];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── FAQ ── */}
      <section id="faq" className="py-28 bg-white/[0.015] border-y border-white/5">
      <Container>

    
        <div className="px-4 sm:px-6 md:px-0">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Common{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Questions
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Everything you need to know before we start working together.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                  openFaq === i
                    ? "bg-blue-500/[0.06] border-blue-500/25"
                    : "bg-white/[0.03] border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-medium text-sm leading-relaxed">{q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180 text-blue-400" : "text-slate-500"
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
          </Container>
      </section>
    </>
  )
}

export default FAQ
