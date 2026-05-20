import React from 'react'
import Container from '../utils/Container'

import { Globe } from 'lucide-react'
import { CiTwitter } from 'react-icons/ci'
import { FiFacebook, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { SlSocialFacebook } from 'react-icons/sl'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <>
    
    <main className=" border-t border-white/5">
    <Container>
     {/* ── Footer ── */}
      <footer className="">
        <div className="px-4 sm:px-6 lg:px-0 mt-15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              
              <div className="overflow-hidden h-25">
                          <Image src={logo} className="w-50" alt="Logo" />
                        </div>


              <p className="text-slate-500 text-sm leading-relaxed max-w-47.5">
                Building powerful digital experiences for ambitious brands worldwide.
              </p>
            </div>

            <div>
              <div className="text-white font-bold text-xl mb-5">Quick Links</div>
              <ul className="space-y-3">
                {["Home", "About", "Portfolio", "Pricing", "Contact"].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-white font-bold text-xl mb-5">Services</div>
              <ul className="space-y-3">
                {["Web Development", "UI/UX Design", "SEO Optimization", "Digital Marketing", "Branding"].map((s) => (
                  <li key={s}>
                    <a href="#services" className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-white font-bold text-xl mb-5">Connect</div>
              <ul className="space-y-3 mb-5">
                <li className="text-slate-500 text-sm">contact.webmarkio@gmail.com</li>
                {/* <li className="text-slate-500 text-sm">contact@webmarkio.agency</li> */}
                <li className="text-slate-500 text-sm">+8801346047100</li>
              </ul>
              <div className="flex gap-2">
               
                  <a href='' target='_blank'
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200"
                  >
                    <FiFacebook   className="w-3.5 h-3.5" />
                  </a>
                  <a href='' target='_blank'
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200"
                  >
                    <FiLinkedin   className="w-3.5 h-3.5" />
                  </a>
                  <a href='' target='_blank'
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200"
                  >
                    <FaWhatsapp   className="w-3.5 h-3.5" />
                  </a>
                  <a href='' target='_blank'
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200"
                  >
                    <FaInstagram   className="w-3.5 h-3.5" />
                  </a>
                   <a href='' target='_blank'
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200"
                  >
                    <FiYoutube   className="w-3.5 h-3.5" />
                  </a>
              
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-slate-600 text-sm">
              © 2026 WebMarkio Agency. All rights reserved.
            </div>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service"].map((l) => (
                <a key={l} href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors duration-200">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </Container>
    </main>

    </>
  )
}

export default Footer
