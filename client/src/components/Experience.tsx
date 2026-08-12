import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Rocket,
} from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="pt-32 pb-24 md:pt-36 md:pb-32 border-b border-[#2B2E31]"
    >
      <div className="container mx-auto px-6">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="flex items-end gap-6 mb-10 md:mb-14">
          <div>
            <p className="font-mono text-xs text-[#C58B55] tracking-[0.2em] mb-3">
              04 / JOURNEY
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#E6E1D8]">
              My Journey
            </h2>
          </div>

          {/* Horizontal line */}
          <div className="hidden md:block flex-1 h-px bg-[#2B2E31] mb-2" />
        </div>

        {/* =========================
            INTRODUCTION
        ========================== */}
        <p className="max-w-2xl text-base md:text-lg text-[#9A9A94] leading-relaxed mb-12 md:mb-14">
          My journey is focused on learning through hands-on development,
          academic projects, and continuously exploring modern technologies.
        </p>

        {/* =========================
            TIMELINE
        ========================== */}
        <div className="relative max-w-6xl">

          {/* Desktop / Tablet Timeline Line */}
          <div
            className="
              hidden sm:block
              absolute
              left-[19px]
              top-2
              bottom-2
              w-px
              bg-[#2B2E31]
            "
          />

          <div className="space-y-8 md:space-y-10">

            {/* =====================================================
                EDUCATION
            ====================================================== */}
            <div className="relative sm:pl-14">

              {/* Timeline Icon */}
              <div
                className="
                  hidden sm:flex
                  absolute
                  left-0
                  top-0
                  w-10
                  h-10
                  rounded-full
                  bg-[#17191B]
                  border
                  border-[#C58B55]/50
                  items-center
                  justify-center
                  text-[#C58B55]
                  z-10
                "
              >
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* Card */}
              <div
                className="
                  group
                  w-full
                  p-5
                  sm:p-6
                  md:p-8
                  rounded-xl
                  bg-[#151718]
                  border
                  border-[#2B2E31]
                  hover:border-[#C58B55]/60
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                {/* Card Header */}
                <div
                  className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-start
                    md:justify-between
                    gap-3
                  "
                >

                  <div>
                    <p className="font-mono text-xs text-[#C58B55] mb-2">
                      EDUCATION
                    </p>

                    <h3
                      className="
                        text-xl
                        md:text-2xl
                        font-semibold
                        text-[#E6E1D8]
                        group-hover:text-[#C58B55]
                        transition-colors
                      "
                    >
                      Master of Computer Applications
                    </h3>

                    <p className="mt-2 text-sm md:text-base text-[#9A9A94]">
                      Rathinam Technical Campus
                    </p>
                  </div>

                  <span
                    className="
                      font-mono
                      text-xs
                      text-[#6F7377]
                      whitespace-nowrap
                    "
                  >
                    MCA
                  </span>

                </div>

                {/* Description */}
                <p
                  className="
                    mt-5
                    text-sm
                    md:text-base
                    text-[#9A9A94]
                    leading-relaxed
                    max-w-5xl
                  "
                >
                  Building a strong foundation in software development,
                  databases, artificial intelligence, web technologies,
                  and computer applications.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {[
                    "Python",
                    "Java",
                    "SQL",
                    "Web Development",
                    "AI / ML",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-2.5
                        py-1
                        rounded-md
                        bg-[#1E2225]
                        border
                        border-[#2B2E31]
                        text-xs
                        font-mono
                        text-[#9A9A94]
                        hover:border-[#C58B55]
                        hover:text-[#E6E1D8]
                        transition-colors
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>
              </div>
            </div>

            {/* =====================================================
                PROJECT DEVELOPMENT
            ====================================================== */}
            <div className="relative sm:pl-14">

              {/* Timeline Icon */}
              <div
                className="
                  hidden sm:flex
                  absolute
                  left-0
                  top-0
                  w-10
                  h-10
                  rounded-full
                  bg-[#17191B]
                  border
                  border-[#2B2E31]
                  items-center
                  justify-center
                  text-[#C58B55]
                  z-10
                "
              >
                <Code2 className="w-5 h-5" />
              </div>

              {/* Card */}
              <div
                className="
                  group
                  w-full
                  p-5
                  sm:p-6
                  md:p-8
                  rounded-xl
                  bg-[#151718]
                  border
                  border-[#2B2E31]
                  hover:border-[#C58B55]/60
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <p className="font-mono text-xs text-[#C58B55] mb-2">
                  PROJECT DEVELOPMENT
                </p>

                <h3
                  className="
                    text-xl
                    md:text-2xl
                    font-semibold
                    text-[#E6E1D8]
                    group-hover:text-[#C58B55]
                    transition-colors
                  "
                >
                  Building Real-World Applications
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    md:text-base
                    text-[#9A9A94]
                    leading-relaxed
                    max-w-5xl
                  "
                >
                  Developed practical projects involving web development,
                  machine learning, cybersecurity, threat detection,
                  and database management. Each project has helped me
                  strengthen my programming and problem-solving skills.
                </p>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">

                  {/* Project 1 */}
                  <div
                    className="
                      group/project
                      p-4
                      rounded-lg
                      bg-[#1E2225]
                      border
                      border-[#2B2E31]
                      hover:border-[#C58B55]/50
                      transition-colors
                    "
                  >
                    <p className="text-[#C58B55] font-mono text-xs">
                      01
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        text-[#E6E1D8]
                        group-hover/project:text-[#C58B55]
                        transition-colors
                      "
                    >
                      Internet Border Patrol
                    </p>

                    <p className="mt-1 text-xs text-[#6F7377]">
                      URL Safety & Threat Detection
                    </p>
                  </div>

                  {/* Project 2 */}
                  <div
                    className="
                      group/project
                      p-4
                      rounded-lg
                      bg-[#1E2225]
                      border
                      border-[#2B2E31]
                      hover:border-[#C58B55]/50
                      transition-colors
                    "
                  >
                    <p className="text-[#C58B55] font-mono text-xs">
                      02
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        text-[#E6E1D8]
                        group-hover/project:text-[#C58B55]
                        transition-colors
                      "
                    >
                      Scam Prevention Assistant
                    </p>

                    <p className="mt-1 text-xs text-[#6F7377]">
                      AI & Cybersecurity
                    </p>
                  </div>

                  {/* Project 3 */}
                  <div
                    className="
                      group/project
                      p-4
                      rounded-lg
                      bg-[#1E2225]
                      border
                      border-[#2B2E31]
                      hover:border-[#C58B55]/50
                      transition-colors
                    "
                  >
                    <p className="text-[#C58B55] font-mono text-xs">
                      03
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        text-[#E6E1D8]
                        group-hover/project:text-[#C58B55]
                        transition-colors
                      "
                    >
                      Rental House System
                    </p>

                    <p className="mt-1 text-xs text-[#6F7377]">
                      PHP & MySQL
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* =====================================================
                CURRENT FOCUS
            ====================================================== */}
            <div className="relative sm:pl-14">

              {/* Timeline Icon */}
              <div
                className="
                  hidden sm:flex
                  absolute
                  left-0
                  top-0
                  w-10
                  h-10
                  rounded-full
                  bg-[#17191B]
                  border
                  border-[#2B2E31]
                  items-center
                  justify-center
                  text-[#C58B55]
                  z-10
                "
              >
                <Rocket className="w-5 h-5" />
              </div>

              {/* Card */}
              <div
                className="
                  group
                  w-full
                  p-5
                  sm:p-6
                  md:p-8
                  rounded-xl
                  bg-[#151718]
                  border
                  border-[#2B2E31]
                  hover:border-[#C58B55]/60
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <div className="flex items-start gap-4">

                  {/* Inner Icon */}
                  <div
                    className="
                      hidden sm:flex
                      p-2.5
                      rounded-lg
                      bg-[#1E2225]
                      text-[#C58B55]
                      shrink-0
                    "
                  >
                    <BriefcaseBusiness className="w-5 h-5" />
                  </div>

                  <div className="flex-1">

                    <p className="font-mono text-xs text-[#C58B55] mb-2">
                      CURRENT FOCUS
                    </p>

                    <h3
                      className="
                        text-xl
                        md:text-2xl
                        font-semibold
                        text-[#E6E1D8]
                        group-hover:text-[#C58B55]
                        transition-colors
                      "
                    >
                      Preparing for Software Development Roles
                    </h3>

                    <p
                      className="
                        mt-4
                        text-sm
                        md:text-base
                        text-[#9A9A94]
                        leading-relaxed
                        max-w-5xl
                      "
                    >
                      Currently strengthening my skills in data structures,
                      algorithms, software development, AI/ML, databases,
                      and modern web technologies while preparing for
                      professional opportunities.
                    </p>

                    {/* Focus Areas */}
                    <div className="flex flex-wrap gap-2 mt-5">

                      {[
                        "DSA",
                        "Python",
                        "React",
                        "AI / ML",
                        "SQL",
                        "Web Development",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="
                            px-2.5
                            py-1
                            rounded-md
                            bg-[#1E2225]
                            border
                            border-[#2B2E31]
                            text-xs
                            font-mono
                            text-[#9A9A94]
                            hover:border-[#C58B55]
                            hover:text-[#E6E1D8]
                            transition-colors
                          "
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* =========================
            BOTTOM NOTE
        ========================== */}
        <div className="mt-12 md:mt-14 flex items-center gap-4">

          <div className="w-8 h-px bg-[#2B2E31]" />

          <p className="font-mono text-xs text-[#6F7377]">
            Learning → Building → Improving
          </p>

        </div>

      </div>
    </section>
  );
}