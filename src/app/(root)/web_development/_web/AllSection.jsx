import React from 'react'

const AllSection = () => {
  return (
    <>
       <main className="bg-gray-950 text-white">

            {/* Hero Section */}
            <section className="relative py-28 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto text-center">
                    <span className="text-blue-500 font-semibold uppercase tracking-widest">
                        Web Development Services
                    </span>

                    <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
                        Build Modern Websites
                        <span className="text-blue-500"> That Grow Your Business</span>
                    </h1>

                    <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg">
                        We design and develop high-performance websites,
                        web applications, and eCommerce solutions that help
                        businesses establish a powerful online presence.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        <button className="px-8 py-4 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition">
                            Get Free Quote
                        </button>

                        <button className="px-8 py-4 border border-gray-700 rounded-xl font-semibold hover:bg-gray-900 transition">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold">
                            What We Offer
                        </h2>
                        <p className="mt-4 text-gray-400">
                            Complete web development solutions for businesses of all sizes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4">
                                Business Websites
                            </h3>
                            <p className="text-gray-400">
                                Professional company websites designed to build trust and generate leads.
                            </p>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4">
                                E-Commerce Stores
                            </h3>
                            <p className="text-gray-400">
                                Sell products online with secure and scalable eCommerce solutions.
                            </p>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4">
                                Web Applications
                            </h3>
                            <p className="text-gray-400">
                                Custom dashboards, booking systems, and business applications.
                            </p>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4">
                                Landing Pages
                            </h3>
                            <p className="text-gray-400">
                                High-converting landing pages designed for marketing campaigns.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold">
                            Why Choose Our Development Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {[
                            "Mobile Responsive Design",
                            "SEO Friendly Structure",
                            "Fast Loading Speed",
                            "Secure Development",
                            "Modern UI/UX Design",
                            "Scalable Architecture",
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-950 border border-gray-800 p-6 rounded-2xl"
                            >
                                <p className="font-semibold">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold">
                            Our Development Process
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6">

                        {[
                            "Planning",
                            "Design",
                            "Development",
                            "Testing",
                            "Launch",
                        ].map((step, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                                    {index + 1}
                                </div>

                                <h3 className="font-semibold">{step}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-24 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-4xl font-bold mb-12">
                        Technologies We Use
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "React",
                            "Next.js",
                            "Node.js",
                            "MongoDB",
                            "Express.js",
                            "Tailwind CSS",
                            "MySQL",
                            "WordPress",
                        ].map((tech, index) => (
                            <span
                                key={index}
                                className="px-6 py-3 bg-gray-950 border border-gray-800 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-28 px-6">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12">

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Ready To Build Your Website?
                    </h2>

                    <p className="mt-6 text-lg text-blue-100">
                        Let WebMarkio create a professional website that helps
                        your business attract more customers and grow online.
                    </p>

                    <button className="mt-8 px-8 py-4 bg-white text-black font-semibold rounded-xl">
                        Start Your Project
                    </button>

                </div>
            </section>

        </main>
    </>
  )
}

export default AllSection
