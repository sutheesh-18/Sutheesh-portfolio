import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0D0D0D]">

      <div className="container mx-auto px-6">

        {/* Main Footer */}
        <div className="py-12 md:py-16">

          <div className="
            grid
            grid-cols-1
            md:grid-cols-[1fr_auto]
            gap-10
            items-start
          ">

            {/* Left */}
            <div>

              <div className="flex items-center gap-2">

                <span className="
                  text-lg
                  font-semibold
                  tracking-[0.15em]
                  text-[#E6E1D8]
                ">
                  SUTHEESH
                </span>

                <span className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#C58B55]
                " />

              </div>

              <p className="
                mt-4
                max-w-md
                text-sm
                text-[#6F7377]
                leading-relaxed
              ">
                Software developer focused on building practical web,
                AI, and software solutions with clean code and useful
                user experiences.
              </p>

            </div>

            {/* Right */}
            <div className="
              flex
              flex-wrap
              items-center
              gap-2
            ">

              {/* Email */}
              <a
                href={`mailto:${portfolioData.profile.email}`}
                aria-label="Email"
                className="
                  p-3
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
                <Mail className="w-5 h-5" />
              </a>

              {/* GitHub */}
              <a
                href={portfolioData.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  p-3
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

              {/* LinkedIn */}
              <a
                href={portfolioData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  p-3
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

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="
                  p-3
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
                <ArrowUp className="w-5 h-5" />
              </button>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="
          py-5
          border-t
          border-[#2B2E31]
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-3
        ">

          <p className="
            font-mono
            text-[10px]
            md:text-xs
            text-[#5F6468]
          ">
            © {new Date().getFullYear()} Sutheesh S. All rights reserved.
          </p>

          <p className="
            font-mono
            text-[10px]
            md:text-xs
            text-[#5F6468]
          ">
            Built with React · TypeScript · Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}