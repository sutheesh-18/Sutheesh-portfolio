import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        pt-28
        pb-20
        md:pt-32
        md:pb-24
        overflow-hidden
        border-b
        border-[#2B2E31]
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          top-[-180px]
          right-[-180px]
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#C58B55]/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-[-180px]
          w-[400px]
          h-[400px]
          rounded-full
          bg-[#C58B55]/5
          blur-[110px]
        "
      />

      {/* Decorative Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(#C58B55_1px,transparent_1px),linear-gradient(90deg,#C58B55_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      <div className="container mx-auto px-6 relative z-10">

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-[1fr_360px]
          items-center
          gap-14
          lg:gap-20
        ">

          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div className="max-w-3xl">

            {/* Availability */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-md
                bg-[#17191B]
                border
                border-[#2B2E31]
                mb-7
              "
            >
              <span className="relative flex h-2 w-2">

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-[#C58B55]
                    opacity-40
                    animate-ping
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#C58B55]
                  "
                />

              </span>

              <span className="font-mono text-xs text-[#9A9A94]">
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            {/* Name */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                tracking-tight
                text-[#E6E1D8]
                leading-[1.05]
              "
            >
              {portfolioData.profile.name}
            </h1>

            {/* Title */}
            <div className="flex items-center gap-3 mt-5">

              <span className="w-8 h-px bg-[#C58B55]" />

              <p className="
                font-mono
                text-lg
                md:text-xl
                text-[#C58B55]
              ">
                {portfolioData.profile.title}
              </p>

            </div>

            {/* Description */}
            <p
              className="
                max-w-2xl
                mt-7
                text-base
                sm:text-lg
                md:text-xl
                text-[#9A9A94]
                leading-relaxed
              "
            >
              {portfolioData.profile.tagline}
            </p>

            {/* Technology Stack */}
            <div className="
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2
              mt-7
              font-mono
              text-xs
              text-[#6F7377]
            ">
              <span>Python</span>
              <span className="text-[#3A3D40]">/</span>

              <span>React</span>
              <span className="text-[#3A3D40]">/</span>

              <span>Flask</span>
              <span className="text-[#3A3D40]">/</span>

              <span>Machine Learning</span>
              <span className="text-[#3A3D40]">/</span>

              <span>SQL</span>
            </div>

            {/* Buttons */}
            <div className="
              flex
              flex-wrap
              items-center
              gap-3
              mt-9
            ">

              {/* Projects */}
              <a
                href="#projects"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-md
                  bg-[#C58B55]
                  text-[#101010]
                  text-sm
                  font-medium
                  hover:bg-[#D6A066]
                  hover:-translate-y-0.5
                  transition-all
                "
              >
                View Projects

                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-md
                  bg-[#17191B]
                  text-[#E6E1D8]
                  border
                  border-[#2B2E31]
                  text-sm
                  font-medium
                  hover:border-[#C58B55]
                  hover:-translate-y-0.5
                  transition-all
                "
              >
                <Mail className="w-4 h-4" />

                Contact Me
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                download="Sutheesh_S_Resume.pdf"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-md
                  text-[#9A9A94]
                  border
                  border-transparent
                  text-sm
                  hover:text-[#C58B55]
                  hover:bg-[#17191B]
                  transition-all
                "
              >
                <Download className="w-4 h-4" />

                Resume
              </a>

            </div>

            {/* Social Links */}
            <div className="
              flex
              items-center
              gap-2
              mt-7
            ">

              <a
                href={portfolioData.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  p-2.5
                  rounded-md
                  border
                  border-[#2B2E31]
                  text-[#6F7377]
                  hover:text-[#C58B55]
                  hover:border-[#C58B55]
                  hover:bg-[#17191B]
                  transition-all
                "
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={portfolioData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  p-2.5
                  rounded-md
                  border
                  border-[#2B2E31]
                  text-[#6F7377]
                  hover:text-[#C58B55]
                  hover:border-[#C58B55]
                  hover:bg-[#17191B]
                  transition-all
                "
              >
                <Linkedin className="w-5 h-5" />
              </a>

            </div>

          </div>

          {/* =========================
              RIGHT PHOTO
          ========================== */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Outer Glow */}
              <div
                className="
                  absolute
                  -inset-5
                  rounded-[28px]
                  border
                  border-[#C58B55]/20
                  rotate-3
                "
              />

              {/* Second Frame */}
              <div
                className="
                  absolute
                  -inset-3
                  rounded-[24px]
                  border
                  border-[#2B2E31]
                  -rotate-2
                "
              />

              {/* Photo Frame */}
              <div
                className="
                  relative
                  w-[220px]
                  h-[270px]
                  sm:w-[250px]
                  sm:h-[300px]
                  md:w-[280px]
                  md:h-[330px]
                  rounded-2xl
                  overflow-hidden
                  bg-[#17191B]
                  border
                  border-[#3A3D40]
                  shadow-2xl
                "
              >

                {!imageError ? (
                  <img
                    src={portfolioData.profile.avatarUrl}
                    alt={portfolioData.profile.name}
                    onError={() => setImageError(true)}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                    "
                  />
                ) : (
                  <div className="
                    w-full
                    h-full
                    flex
                    items-center
                    justify-center
                  ">
                    <div className="text-center">

                      <div
                        className="
                          w-20
                          h-20
                          mx-auto
                          rounded-full
                          bg-[#1E2225]
                          border
                          border-[#3A3D40]
                          flex
                          items-center
                          justify-center
                          text-[#C58B55]
                          text-2xl
                          font-bold
                        "
                      >
                        SS
                      </div>

                      <p className="
                        mt-4
                        text-xs
                        text-[#6F7377]
                        font-mono
                      ">
                        Add profile photo
                      </p>

                    </div>
                  </div>
                )}

              </div>

              {/* Orange Corner */}
              <div
                className="
                  absolute
                  -bottom-4
                  -right-4
                  w-10
                  h-10
                  bg-[#C58B55]
                  rounded-md
                  opacity-90
                "
              />

              {/* Location */}
              <div
                className="
                  absolute
                  -bottom-4
                  left-4
                  px-3
                  py-1.5
                  bg-[#101010]
                  border
                  border-[#2B2E31]
                  rounded-md
                "
              >
                <span className="
                  font-mono
                  text-[10px]
                  text-[#9A9A94]
                ">
                  {portfolioData.profile.location}
                </span>
              </div>

              {/* Small Code Label */}
              <div
                className="
                  absolute
                  -top-5
                  -right-5
                  px-3
                  py-1.5
                  bg-[#17191B]
                  border
                  border-[#2B2E31]
                  rounded-md
                "
              >
                <span className="
                  font-mono
                  text-[10px]
                  text-[#C58B55]
                ">
                  &lt;dev /&gt;
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="
            hidden
            md:flex
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-[#5F6468]
            hover:text-[#C58B55]
            transition-colors
          "
        >
          <span className="font-mono text-[10px] tracking-widest">
            SCROLL
          </span>

          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>

      </div>
    </section>
  );
}