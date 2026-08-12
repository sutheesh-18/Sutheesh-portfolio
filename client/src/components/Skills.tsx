import {
  Code2,
  Database,
  Globe,
  Brain,
  Check,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const categoryIcons = {
  Programming: Code2,
  "Web Development": Globe,
  "AI / Data": Brain,
  "Database & Tools": Database,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 border-b border-[#2B2E31]"
    >
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex items-end gap-6 mb-14">
          <div>
            <p className="font-mono text-xs text-[#C58B55] tracking-[0.2em] mb-3">
              02 / SKILLS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#E6E1D8]">
              Technical Skills
            </h2>

            <p className="mt-4 max-w-2xl text-[#9A9A94] leading-relaxed">
              Technologies and tools I use to build applications, solve
              problems, and explore new ideas.
            </p>
          </div>

          <div className="hidden md:block flex-1 h-px bg-[#2B2E31] mb-2" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {portfolioData.skills.map((category, categoryIndex) => {

            const Icon =
              categoryIcons[
                category.category as keyof typeof categoryIcons
              ] || Code2;

            return (
              <div
                key={category.category}
                className="
                  group
                  relative
                  p-6
                  md:p-7
                  rounded-xl
                  bg-[#151718]
                  border
                  border-[#2B2E31]
                  overflow-hidden
                  hover:border-[#C58B55]/60
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >

                {/* Top Accent */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#C58B55]
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />

                {/* Background Number */}
                <span
                  className="
                    absolute
                    right-5
                    top-3
                    font-mono
                    text-5xl
                    font-bold
                    text-[#1E2225]
                    select-none
                    group-hover:text-[#211D19]
                    transition-colors
                  "
                >
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>

                {/* Category Header */}
                <div className="relative flex items-center justify-between mb-6">

                  <div className="flex items-center gap-4">

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
                        group-hover:border-[#C58B55]/40
                        group-hover:bg-[#211D19]
                        transition-all
                      "
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <p className="font-mono text-[10px] text-[#6F7377] mb-1">
                        CATEGORY
                      </p>

                      <h3
                        className="
                          text-lg
                          font-semibold
                          text-[#E6E1D8]
                          group-hover:text-[#C58B55]
                          transition-colors
                        "
                      >
                        {category.category}
                      </h3>
                    </div>

                  </div>

                  <span className="font-mono text-xs text-[#5F6468]">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>

                </div>

                {/* Skills */}
                <div className="relative flex flex-wrap gap-2">

                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="
                        group/skill
                        flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        rounded-md
                        bg-[#1E2225]
                        border
                        border-[#2B2E31]
                        text-sm
                        text-[#9A9A94]
                        hover:text-[#E6E1D8]
                        hover:border-[#C58B55]
                        hover:bg-[#211D19]
                        transition-all
                        duration-200
                      "
                    >
                      <span
                        className="
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-[#3A3D40]
                          group-hover/skill:bg-[#C58B55]
                          transition-colors
                        "
                      />

                      {skill}

                    </div>
                  ))}

                </div>

                {/* Bottom Line */}
                <div className="mt-7 flex items-center gap-3">

                  <div className="h-px flex-1 bg-[#2B2E31]" />

                  <span className="font-mono text-[9px] text-[#5F6468]">
                    TECH STACK
                  </span>

                  <div className="h-px w-8 bg-[#2B2E31]" />

                </div>

              </div>
            );
          })}

        </div>

        {/* Skill Summary */}
        <div
          className="
            mt-8
            p-5
            rounded-xl
            bg-[#151718]
            border
            border-[#2B2E31]
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-5
          "
        >

          <div>
            <p className="font-mono text-[10px] text-[#C58B55] tracking-wider">
              CURRENTLY LEARNING
            </p>

            <p className="mt-2 text-sm text-[#9A9A94]">
              Data Structures · System Design · Advanced React ·
              Cloud Technologies
            </p>
          </div>

          <div className="flex items-center gap-2 text-[#6F7377]">

            <Check className="w-4 h-4 text-[#C58B55]" />

            <span className="font-mono text-xs">
              Always learning
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}