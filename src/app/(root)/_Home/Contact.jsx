"use client"
import Container from '@/Components/utils/Container'
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Contact = () => {
      
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Contact ── */}
      <section id="contact" className="py-28 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-900/8 rounded-full blur-[100px]" />
        </div>
        <Container>

     
        <div className=" px-4 sm:px-6 lg:px-8 xl:px-0 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              Contact
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
              Ready to Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Something Great?
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              Tell us about your project and we will get back to you within 24 hours with a no-obligation proposal.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <h3 className="text-white font-bold text-xl">Get in Touch</h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", val: "hello@webmarkio.agency" },
                  { icon: Phone, label: "WhatsApp", val: "+1 (555) 123-4567" },
                  { icon: MapPin, label: "Location", val: "Remote — worldwide" },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">{label}</div>
                      <div className="text-white font-medium text-sm mt-0.5">{val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-4">Follow us</div>
                <div className="flex gap-3">
                  {[
                    { Icon: Twitter, label: "Twitter" },
                    { Icon: Linkedin, label: "LinkedIn" },
                    { Icon: Instagram, label: "Instagram" },
                    { Icon: Github, label: "GitHub" },
                  ].map(({ Icon, label }) => (
                    <button
                      key={label}
                      aria-label={label}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="text-green-300 text-sm">Average response time: under 2 hours</span>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10">
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/15 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/15 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Web Development Project"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/15 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/15 transition-all duration-200 resize-none"
                  />
                </div>

                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02]">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
           </Container>
      </section>

      
    </>
  )
}

export default Contact
