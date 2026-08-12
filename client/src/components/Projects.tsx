import {
  ArrowUpRight,
  ExternalLink,
  Github,
  ShieldCheck,
  Home,
  BrainCircuit,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const projectIcons = [
  ShieldCheck,
  BrainCircuit,
  Home,
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 border-b border-[#2B2E31]"
    >
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">

          <div>
            <p className="font-mono text-xs text-[#C58B55] tracking-[0.2em] mb-3">
              03 / PROJECTS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#E6E1D8]">
              Things I've Built
            </h2>

            <p className="mt-4 max-w-2xl text-[#9A9A94] leading-relaxed">
              A selection of projects where I experiment with software,
              artificial intelligence, web development, and cybersecurity.
            </p>
          </div>

          <div className="font-mono text-xs text-[#5F6468]">
            {String(portfolioData.projects.length).padStart(2, "0")} PROJECTS
          </div>

        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {portfolioData.projects.map((project, index) => {

            const Icon = projectIcons[index] || ExternalLink;

            const isFeatured = index === 0;

            return (
              <article
                key={project.id}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  bg-[#151718]
                  border
                  border-[#2B2E31]
                  hover:border-[#C58B55]/70
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  ${
                    isFeatured
                      ? "lg:col-span-2"
                      : ""
                  }
                `}
              >

                {/* Top Accent */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-[2px]
                    bg-[#C58B55]
                    scale-x-0
                    group-hover:scale-x-100
                    origin-left
                    transition-transform
                    duration-500
                  "
                />

                {/* Decorative Number */}
                <span
                  className="
                    absolute
                    right-6
                    top-4
                    font-mono
                    text-6xl
                    font-bold
                    text-[#1E2225]
                    select-none
                    group-hover:text-[#211D19]
                    transition-colors
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className={`
                    relative
                    p-7
                    md:p-9
                    ${
                      isFeatured
                        ? "lg:grid lg:grid-cols-[1fr_auto] lg:gap-12"
                        : ""
                    }
                  `}
                >

                  {/* Main Content */}
                  <div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-6">

                      <div
                        className="
                          w-11
                          h-11
                          rounded-lg
                          bg-[#1E2225]
                          border
                          border-[#2B2E31]
                          flex
                          items-center
                          justify-center
                          text-[#C58B55]
                          group-hover:bg-[#211D19]
                          group-hover:border-[#C58B55]/40
                          transition-all
                        "
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {isFeatured && (
                        <span
                          className="
                            px-2.5
                            py-1
                            rounded-md
                            bg-[#211D19]
                            border
                            border-[#C58B55]/30
                            font-mono
                            text-[10px]
                            tracking-wider
                            text-[#C58B55]
                          "
                        >
                          FEATURED PROJECT
                        </span>
                      )}

                    </div>

                    {/* Title */}
                    <h3
                      className={`
                        font-semibold
                        text-[#E6E1D8]
                        group-hover:text-[#C58B55]
                        transition-colors
                        duration-300
                        ${
                          isFeatured
                            ? "text-2xl md:text-3xl"
                            : "text-xl md:text-2xl"
                        }
                      `}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`
                        mt-4
                        text-[#9A9A94]
                        leading-relaxed
                        ${
                          isFeatured
                            ? "max-w-3xl text-base md:text-lg"
                            : "text-sm md:text-base"
                        }
                      `}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-6">

                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            px-2.5
                            py-1.5
                            rounded-md
                            bg-[#1E2225]
                            border
                            border-[#2B2E31]
                            text-xs
                            font-mono
                            text-[#9A9A94]
                            hover:text-[#E6E1D8]
                            hover:border-[#C58B55]/60
                            transition-colors
                          "
                        >
                          {technology}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* Actions */}
                  <div
                    className={`
                      flex
                      flex-wrap
                      items-center
                      gap-3
                      mt-8
                      ${
                        isFeatured
                          ? "lg:mt-0 lg:self-end"
                          : ""
                      }
                    `}
                  >

                    {/* GitHub */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          px-4
                          py-2.5
                          rounded-md
                          border
                          border-[#2B2E31]
                          text-sm
                          text-[#E6E1D8]
                          hover:border-[#C58B55]
                          hover:text-[#C58B55]
                          transition-all
                        "
                      >
                        <Github className="w-4 h-4" />

                        Source Code

                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {/* Live Demo */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          px-4
                          py-2.5
                          rounded-md
                          bg-[#C58B55]
                          text-[#101010]
                          text-sm
                          font-medium
                          hover:bg-[#D6A066]
                          transition-all
                        "
                      >
                        Live Demo

                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                  </div>

                </div>

                {/* Bottom Corner */}
                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    w-14
                    h-14
                    border-l
                    border-t
                    border-[#2B2E31]
                    opacity-40
                    group-hover:border-[#C58B55]
                    group-hover:opacity-70
                    transition-all
                  "
                />

              </article>
            );
          })}

        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex items-center gap-4">

          <div className="w-8 h-px bg-[#2B2E31]" />

          <p className="font-mono text-xs text-[#6F7377]">
            More projects and experiments coming soon.
          </p>

        </div>

      </div>
    </section>
  );
}