"use client"
import React, { useRef, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { IoCall, IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import emailjs from "emailjs-com";
import Container from '@/Components/utils/Container';
import { FiFacebook } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';


const Contact = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_dt7a5o3",
                "template_3x90fop",
                formRef.current,
                "g6-bChe6ahN9EiSf5"
            )
            .then(
                (result) => {
                    setModalOpen(true);
                    formRef.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <>
            <div className="lg:py-20 p-2 lg:p-0 pb-10">
                <Container>
                    <div className="lg:flex justify-between items-start gap-10">
                        {/* Left Info */}
                        <div className="lg:w-1/2">
                            <h3 className="md:text-5xl lg:text-5xl text-3xl  text-white/90 sm:text-4xl font-bold font-rajdhani">
                                Let's Work Together
                            </h3>
                            <p className="font-medium text-gray-400 sm:w-130 px-4 sm:px-0 my-6">
                                My team members are always open to new projects and collaborations.
                                Let’s build something great together — feel free to reach out!
                            </p>
                            {/* Contact Info */}
                            <div className="flex gap-3 items-center mt-10">
                                <button
                                    className="px-3 py-3  rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20"
                                >
                                    <IoCallOutline className=" text-2xl" />
                                </button>
                                <div>
                                    <h3 className="text-[14px] font-rubik font-medium text-gray-400 uppercase">
                                        Call now
                                    </h3>
                                    <p className="text-[16px] mt-2 font-rubik font-medium text-white">
                                        (+880)1346047100
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center mt-10">
                                <button
                                    className="px-3 py-3  rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20"
                                >
                                    <HiOutlineMail className=" text-2xl" />
                                </button>
                                <div>
                                    <h3 className="text-[14px] font-rubik font-medium text-gray-400 uppercase">
                                        Mail us
                                    </h3>
                                    <p className="text-[16px] mt-2 font-rubik font-medium text-white">
                                        contact.webmarkio@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start mt-10">
                                <button
                                    className="px-3 py-3  rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20"
                                >
                                    <IoLocationOutline className=" text-2xl" />
                                </button>
                                <div>
                                    <h3 className="text-[14px] font-rubik font-medium text-gray-400 uppercase">
                                        My Address
                                    </h3>
                                    <p className="text-[16px] font-rubik font-medium text-white mt-2">
                                        Najimuddin lane, Najimuddin Rd, Jigatala Rd, Dhanmondi, Dhaka
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="lg:w-1/2 w-full">
                            <h2 className="text-3xl text-white/90 sm:text-4xl md:text-5xl font-bold font-rajdhani mb-5 mt-5 lg:mt-0">
                                Contact <span className="text-blue-500">Me!</span>
                            </h2>
                            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                                <span className="text-green-300 text-sm">Average response time: under 2 hours</span>
                            </div>


                            <form ref={formRef} onSubmit={handleSubmit} className="mt-7 space-y-6">

                                {/* Full Name */}
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="peer w-full border border-gray-600 rounded-md px-3 py-4 text-gray-100 placeholder-transparent focus:outline-none  focus:text-gray-200"
                                        placeholder="Full Name *"
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-3 top-4 text-gray-400 text-sm transition-all duration-200
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                    peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-300 peer-focus:bg-[#0F172A] px-1 peer-valid:-top-2 peer-valid:bg-[#0F172A]"
                                    >
                                        Full Name *
                                    </label>
                                </div>

                                {/* Email */}
                                  <div className="relative w-full">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        required
                                        className="peer w-full border border-gray-600 rounded-md px-3 py-4 text-gray-100 placeholder-transparent focus:outline-none  focus:text-gray-200"
                                        placeholder="Email Address *"
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-3 top-4 text-gray-400 text-sm transition-all duration-200
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                    peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-300 peer-focus:bg-[#0F172A] px-1 peer-valid:-top-2 peer-valid:bg-[#0F172A]"
                                    >
                                        Email Address *
                                    </label>
                                </div>

                                {/* Service */}
                                <div className="relative w-full">
                                    <select
                                        name="service"
                                        id="service"
                                        required
                                        className="peer w-full border border-gray-600 rounded-md px-3 py-4 text-gray-300 placeholder-transparent focus:outline-none  focus:text-gray-200"
                                        defaultValue=""
                                    >

                                        <option value="Website Development" className='bg-[#0F172A] text-white/50'>Website Development</option>
                                        <option value="Website Development" className='bg-[#0F172A] text-white/50'>Digital Marketing</option>
                                        <option value="Website Development" className='bg-[#0F172A] text-white/50'>Graphic Design</option>
                                        <option value="Website Development" className='bg-[#0F172A] text-white/50'>Video Editing</option>

                                    </select>
                                    <label
                                        htmlFor="service"
                                        className="absolute left-3 top-4 text-gray-400 text-sm transition-all duration-200
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                    peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-300 peer-focus:bg-[#0F172A] px-1 peer-valid:-top-2 peer-valid:bg-[#0F172A]"
                                    >
                                        Service type *
                                    </label>
                                </div>

                                {/* Message */}
                                <div className="relative w-full">
                                    <textarea
                                        name="message"
                                        id="message"
                                        required
                                        className=" h-32 peer w-full border border-gray-600 rounded-md px-3 py-4 text-gray-100 placeholder-transparent focus:outline-none  focus:text-gray-200 "
                                        placeholder="Your Message *"
                                    />
                                    <label
                                        htmlFor="message"
                                        className="absolute left-3 top-4 text-gray-400 text-sm transition-all duration-200
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                    peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-300 peer-focus:bg-[#0F172A] px-1 peer-valid:-top-2 peer-valid:bg-[#0F172A]"
                                    >
                                        Your Message *
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full  py-4  rounded-full text-[18px] bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold hover:shadow-2xl cursor-pointer hover:shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02]"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="rounded-xl overflow-hidden border border-white/10 mt-20">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps?q=23.7371353,90.3714652&hl=en&z=16&output=embed"
                            className="w-full h-100 border-0"
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Modal */}
                    {modalOpen && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-xl p-10 max-w-md text-center relative">
                                <h2 className="text-3xl font-bold mb-4 text-green-600">🎉 Congratulations!</h2>
                                <p className="text-gray-700 mb-6">
                                    Thank you for contacting us. We will reach out to you shortly to discuss your project.
                                </p>
                                <button
                                    className="bg-[#FF494A] text-white px-6 py-3 rounded-full font-medium"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </Container>
            </div>
        </>
    )
}

export default Contact
