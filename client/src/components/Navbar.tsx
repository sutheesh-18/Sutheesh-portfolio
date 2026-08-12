import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* Background */}
      <div className="
        absolute
        inset-0
        bg-[#101010]/85
        backdrop-blur-xl
        border-b
        border-[#2B2E31]/80
      " />

      <nav className="relative container mx-auto px-6">

        <div className="
          h-20
          flex
          items-center
          justify-between
        ">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="
              flex
              items-center
              gap-2
              group
            "
          >
            <span className="
              text-sm
              md:text-base
              font-semibold
              tracking-[0.18em]
              text-[#E6E1D8]
              group-hover:text-[#C58B55]
              transition-colors
            ">
              SUTHEESH
            </span>

            <span className="
              w-2
              h-2
              rounded-full
              bg-[#C58B55]
              group-hover:scale-125
              transition-transform
            " />
          </a>

          {/* Desktop Navigation */}
          <div className="
            hidden
            md:flex
            items-center
            gap-1
          ">

            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  group
                  relative
                  px-3
                  py-2
                  rounded-md
                  text-[#6F7377]
                  hover:text-[#E6E1D8]
                  hover:bg-[#17191B]
                  transition-all
                "
              >

                <span className="
                  font-mono
                  text-[10px]
                  text-[#4F5357]
                  mr-2
                  group-hover:text-[#C58B55]
                  transition-colors
                ">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs">
                  {link.name}
                </span>

                {/* Hover line */}
                <span className="
                  absolute
                  bottom-0
                  left-3
                  right-3
                  h-px
                  bg-[#C58B55]
                  scale-x-0
                  group-hover:scale-x-100
                  transition-transform
                  origin-left
                " />

              </a>
            ))}

          </div>

          {/* Social Links */}
          <div className="
            hidden
            md:flex
            items-center
            gap-1
            pl-4
            ml-3
            border-l
            border-[#2B2E31]
          ">

            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                p-2.5
                rounded-md
                text-[#6F7377]
                hover:text-[#C58B55]
                hover:bg-[#17191B]
                transition-all
              "
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                p-2.5
                rounded-md
                text-[#6F7377]
                hover:text-[#C58B55]
                hover:bg-[#17191B]
                transition-all
              "
            >
              <Linkedin className="w-4 h-4" />
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              p-2.5
              rounded-md
              border
              border-[#2B2E31]
              text-[#9A9A94]
              hover:text-[#C58B55]
              hover:border-[#C58B55]
              transition-all
            "
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              menuOpen
                ? "max-h-[420px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="
            p-2
            rounded-xl
            bg-[#151718]
            border
            border-[#2B2E31]
          ">

            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-lg
                  text-[#9A9A94]
                  hover:text-[#E6E1D8]
                  hover:bg-[#1E2225]
                  transition-colors
                "
              >

                <span className="
                  font-mono
                  text-[10px]
                  text-[#C58B55]
                ">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm">
                  {link.name}
                </span>

              </a>
            ))}

            {/* Mobile Socials */}
            <div className="
              mt-2
              pt-3
              border-t
              border-[#2B2E31]
              flex
              gap-2
            ">

              <a
                href={portfolioData.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-2.5
                  rounded-md
                  border
                  border-[#2B2E31]
                  text-[#9A9A94]
                  hover:text-[#C58B55]
                  hover:border-[#C58B55]
                  transition-all
                "
              >
                <Github className="w-4 h-4" />
                <span className="text-xs">GitHub</span>
              </a>

              <a
                href={portfolioData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-2.5
                  rounded-md
                  border
                  border-[#2B2E31]
                  text-[#9A9A94]
                  hover:text-[#C58B55]
                  hover:border-[#C58B55]
                  transition-all
                "
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs">LinkedIn</span>
              </a>

            </div>

          </div>

        </div>

      </nav>
    </header>
  );
}