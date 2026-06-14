import {
  RiNextjsFill,
} from "react-icons/ri";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
} from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: RiNextjsFill },
  { name: "React.js", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Firebase", icon: SiFirebase },
  { name: "Git & GitHub", icon: FaGitAlt },
];

const Tecnology = () => {
  return (
    <>
    <section className="py-20 bg-[#030712]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <span className="text-cyan-400 uppercase tracking-widest text-sm font-semibold">
        Tech Stack
      </span>

      <h2 className="mt-4 text-4xl font-bold text-white">
        Technologies We Use
      </h2>

      <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
        Modern technologies powering fast, scalable and secure web applications.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {technologies.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <div
            key={index}
            className="group flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/50"
          >
            <Icon className="text-5xl text-white transition-all duration-500 group-hover:scale-110" />

            <h3 className="mt-4 text-white font-medium text-lg">
              {tech.name}
            </h3>
          </div>
        );
      })}
    </div>
  </div>
</section>
      
    </>
  )
}

export default Tecnology
