"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Project = () => {
    const projects = [
      {
        id: 1,
        title: "E-Commerce Platform",
        category: "E-Commerce",
        image: "/projects/project-1.jpg",
        tech: ["Next.js", "MongoDB"],
        demo: "#",
      },
      {
        id: 2,
        title: "Business Website",
        category: "Business",
        image: "/projects/project-2.jpg",
        tech: ["Next.js", "Tailwind"],
        demo: "#",
      },
      {
        id: 3,
        title: "Portfolio Website",
        category: "Portfolio",
        image: "/projects/project-3.jpg",
        tech: ["Next.js", "TypeScript"],
        demo: "#",
      },
      {
        id: 4,
        title: "Dashboard App",
        category: "Dashboard",
        image: "/projects/project-4.jpg",
        tech: ["React", "Node.js"],
        demo: "#",
      },
      {
        id: 5,
        title: "Restaurant Website",
        category: "Business",
        image: "/projects/project-5.jpg",
        tech: ["Next.js", "Firebase"],
        demo: "#",
      },
      {
        id: 6,
        title: "LMS Platform",
        category: "Dashboard",
        image: "/projects/project-6.jpg",
        tech: ["Next.js", "MongoDB"],
        demo: "#",
      },
    ];

     const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Business",
    "E-Commerce",
    "Dashboard",
    "Portfolio",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <>
      <section className=" py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Our Portfolio
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Explore some of our recent projects built with modern technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-cyan-500 text-white"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-500/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition duration-500 group-hover:opacity-100">
                  <Link
                    href={project.demo}
                    className="rounded-full bg-white px-5 py-3 font-medium text-black"
                  >
                    View Project
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.demo}
                  className="mt-6 flex items-center gap-2 text-cyan-400"
                >
                  Live Demo
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default Project
