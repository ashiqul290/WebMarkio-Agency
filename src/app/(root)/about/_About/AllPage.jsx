import React from 'react'
import ashiq from '@/assets/ashiq.jpeg'
import imghrobody from '@/assets/pexels-cottonbro-6804605.jpg'
import bgImgHero from '@/assets/240_F_466616169_GOalqLI5SpJj7E6mwEAkhFEw5JO8Ezps.jpg'
import Image from 'next/image'
import Container from '@/Components/utils/Container'
import Link from 'next/link'
const AllPage = () => {
    return (
        <>
            <main className="">
                {/* Hero Section */}
  

                <section className="relative py-18 overflow-hidden ">
                    <div className="absolute top-0 left-0 w-full h-full -z-10">
                        <Image
                            src={bgImgHero}
                            alt="Background"
                            fill
                            className="object-cover opacity-30"
                        />
                    </div>

                    {/* Background Glow */}
                    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full" />
                    <Container>
                    <div className=" grid lg:grid-cols-2 gap-10 items-center relative z-10">

                        {/* Left Content */}
                        <div>

                            <span className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
                                About WebMarkio
                            </span>

                            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-white">
                                We Build Websites
                                <span className="block text-blue-500">
                                    That Grow Businesses
                                </span>
                            </h1>

                            <p className="mt-6 text-lg text-gray-400 max-w-xl">
                                WebMarkio helps businesses establish a powerful online presence through
                                modern web development, UI/UX design, SEO, and digital marketing
                                solutions designed to generate real results.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-10">
                                <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-medium">
                                    Start Your Project
                                </button>

                                <button className="px-8 py-4 rounded-xl border border-gray-700 hover:border-blue-500 transition text-white">
                                    View Portfolio
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 mt-14">
                                <div>
                                    <h3 className="text-3xl font-bold text-white">100+</h3>
                                    <p className="text-gray-400">Projects</p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-white">50+</h3>
                                    <p className="text-gray-400">Clients</p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-white">5★</h3>
                                    <p className="text-gray-400">Rating</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative w-full h-[500px]">
                                <Image
                                    src={imghrobody}
                                    alt="WebMarkio Agency"
                                    fill
                                    className="rounded-3xl border border-gray-800 shadow-2xl object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-gray-900 border border-gray-800 p-5 rounded-2xl">
                                <h4 className="text-white font-semibold">Revenue Growth</h4>
                                <p className="text-3xl font-bold text-blue-500 mt-2">+24%</p>
                            </div>
                        </div>

                    </div>

                    </Container>

                </section>

                {/* Our Story */}
                <section className="py-20 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6">
                            Our Story
                        </h2>

                        <p className="text-gray-400 leading-8">
                            WebMarkio was founded with a simple goal: helping businesses create
                            professional and high-performing digital experiences. We believe
                            every business deserves a website that not only looks great but
                            also generates real results. From startups to growing brands, we
                            provide solutions that help businesses stand out and succeed online.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 px-6 bg-gray-800/90">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                        <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">
                            <h3 className="text-3xl text-blue-500 font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-400 leading-8">
                                To empower businesses with innovative web solutions that increase
                                visibility, improve customer engagement, and drive sustainable
                                growth.
                            </p>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">
                            <h3 className="text-3xl text-blue-500 font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-400 leading-8">
                                To become a globally trusted digital partner known for creativity,
                                innovation, and delivering measurable results for businesses of
                                all sizes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}

                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-blue-500 font-semibold uppercase tracking-wider">
                                Our Team
                            </span>

                            <h2 className="text-5xl font-bold mt-4">
                                The People Behind WebMarkio
                            </h2>

                            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                                A passionate team of designers, developers, SEO specialists, and
                                digital strategists dedicated to helping businesses grow online.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                            {/* Founder */}
                            <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden">
                                <Image
                                    width={400}
                                    height={400}
                                    src={ashiq}
                                    alt="Founder"
                                    className="w-full h-80 object-cover"
                                />

                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold">Ashiqul Islam</h3>
                                    <p className="text-blue-500 mt-2">
                                        Founder & CEO
                                    </p>
                                </div>
                            </div>

                            {/* Developer */}
                            <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden">
                                <img
                                    src="/team/developer.jpg"
                                    alt="Developer"
                                    className="w-full h-80 object-cover"
                                />

                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold">Team Member</h3>
                                    <p className="text-blue-500 mt-2">
                                        Full Stack Developer
                                    </p>
                                </div>
                            </div>

                            {/* Designer */}
                            <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden">
                                <img
                                    src="/team/designer.jpg"
                                    alt="Designer"
                                    className="w-full h-80 object-cover"
                                />

                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold">Team Member</h3>
                                    <p className="text-blue-500 mt-2">
                                        UI/UX Designer
                                    </p>
                                </div>
                            </div>

                            {/* SEO */}
                            <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden">
                                <img
                                    src="/team/seo.jpg"
                                    alt="SEO Specialist"
                                    className="w-full h-80 object-cover"
                                />

                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold">Team Member</h3>
                                    <p className="text-blue-500 mt-2">
                                        SEO Specialist
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-20 px-6 bg-gray-900 text-white">
                    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <h3 className="text-4xl font-bold">50+</h3>
                            <p className="mt-2 text-gray-300">Projects Completed</p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold">20+</h3>
                            <p className="mt-2 text-gray-300">Happy Clients</p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold">8+</h3>
                            <p className="mt-2 text-gray-300">Services Offered</p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold">99%</h3>
                            <p className="mt-2 text-gray-300">Client Satisfaction</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl font-bold">
                            Ready to Grow Your Business Online?
                        </h2>

                        <p className="text-gray-400 mt-6">
                            Let's create a website and digital strategy that helps your
                            business attract more customers and grow faster.
                        </p>
            
                    <div className="mt-8">

                        <Link href="/contact" className=" px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                            Get Free Consultation
                        </Link>
                    </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default AllPage
