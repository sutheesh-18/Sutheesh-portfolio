import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-b border-[#2B2E31]"
    >
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-14">

          <p className="font-mono text-xs text-[#C58B55] tracking-[0.2em] mb-3">
            05 / CONTACT
          </p>

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            tracking-tight
            text-[#E6E1D8]
          ">
            Let's Connect
          </h2>

          <p className="
            mt-4
            max-w-2xl
            text-[#9A9A94]
            leading-relaxed
          ">
            I'm open to opportunities, collaborations, interesting projects,
            and conversations about software development and technology.
          </p>

        </div>

        {/* Main Contact Card */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-[1.2fr_0.8fr]
          gap-5
        ">

          {/* Email Card */}
          <div className="
            group
            relative
            overflow-hidden
            p-7
            md:p-9
            rounded-xl
            bg-[#151718]
            border
            border-[#2B2E31]
            hover:border-[#C58B55]/60
            transition-all
            duration-300
          ">

            {/* Accent */}
            <div className="
              absolute
              top-0
              left-0
              h-[2px]
              w-0
              bg-[#C58B55]
              group-hover:w-full
              transition-all
              duration-500
            " />

            <div className="flex items-start gap-5">

              <div className="
                w-12
                h-12
                shrink-0
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
              ">
                <Mail className="w-5 h-5" />
              </div>

              <div className="min-w-0">

                <p className="
                  font-mono
                  text-[10px]
                  text-[#6F7377]
                  tracking-wider
                  mb-2
                ">
                  EMAIL
                </p>

                <h3 className="
                  text-xl
                  md:text-2xl
                  font-semibold
                  text-[#E6E1D8]
                ">
                  Get in touch
                </h3>

                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-3
                    text-sm
                    md:text-base
                    text-[#9A9A94]
                    hover:text-[#C58B55]
                    break-all
                    transition-colors
                  "
                >
                  {portfolioData.profile.email}

                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>

              </div>

            </div>

          </div>

          {/* Location Card */}
          <div className="
            group
            p-7
            md:p-9
            rounded-xl
            bg-[#151718]
            border
            border-[#2B2E31]
            hover:border-[#C58B55]/60
            transition-all
            duration-300
          ">

            <div className="flex items-start gap-5">

              <div className="
                w-12
                h-12
                shrink-0
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
              ">
                <MapPin className="w-5 h-5" />
              </div>

              <div>

                <p className="
                  font-mono
                  text-[10px]
                  text-[#6F7377]
                  tracking-wider
                  mb-2
                ">
                  LOCATION
                </p>

                <h3 className="
                  text-xl
                  md:text-2xl
                  font-semibold
                  text-[#E6E1D8]
                ">
                  {portfolioData.profile.location}
                </h3>

                <p className="
                  mt-3
                  text-sm
                  text-[#9A9A94]
                ">
                  Available for software development opportunities.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Social Links */}
        <div className="
          mt-5
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
        ">

          {/* GitHub */}
          <a
            href={portfolioData.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              justify-between
              p-6
              rounded-xl
              bg-[#151718]
              border
              border-[#2B2E31]
              hover:border-[#C58B55]/60
              hover:bg-[#17191B]
              transition-all
              duration-300
            "
          >

            <div className="flex items-center gap-4">

              <div className="
                p-2.5
                rounded-lg
                bg-[#1E2225]
                text-[#9A9A94]
                group-hover:text-[#C58B55]
                transition-colors
              ">
                <Github className="w-5 h-5" />
              </div>

              <div>

                <p className="
                  font-mono
                  text-[10px]
                  text-[#6F7377]
                  mb-1
                ">
                  GITHUB
                </p>

                <p className="
                  text-sm
                  text-[#E6E1D8]
                ">
                  View my projects
                </p>

              </div>

            </div>

            <ArrowUpRight className="
              w-5
              h-5
              text-[#5F6468]
              group-hover:text-[#C58B55]
              group-hover:translate-x-1
              group-hover:-translate-y-1
              transition-all
            " />

          </a>

          {/* LinkedIn */}
          <a
            href={portfolioData.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              justify-between
              p-6
              rounded-xl
              bg-[#151718]
              border
              border-[#2B2E31]
              hover:border-[#C58B55]/60
              hover:bg-[#17191B]
              transition-all
              duration-300
            "
          >

            <div className="flex items-center gap-4">

              <div className="
                p-2.5
                rounded-lg
                bg-[#1E2225]
                text-[#9A9A94]
                group-hover:text-[#C58B55]
                transition-colors
              ">
                <Linkedin className="w-5 h-5" />
              </div>

              <div>

                <p className="
                  font-mono
                  text-[10px]
                  text-[#6F7377]
                  mb-1
                ">
                  LINKEDIN
                </p>

                <p className="
                  text-sm
                  text-[#E6E1D8]
                ">
                  Connect with me
                </p>

              </div>

            </div>

            <ArrowUpRight className="
              w-5
              h-5
              text-[#5F6468]
              group-hover:text-[#C58B55]
              group-hover:translate-x-1
              group-hover:-translate-y-1
              transition-all
            " />

          </a>

        </div>

        {/* CTA */}
        <div className="
          mt-10
          p-6
          md:p-8
          rounded-xl
          bg-[#211D19]
          border
          border-[#C58B55]/20
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-6
        ">

          <div>

            <p className="
              font-mono
              text-xs
              text-[#C58B55]
              mb-2
            ">
              OPEN TO OPPORTUNITIES
            </p>

            <h3 className="
              text-lg
              md:text-xl
              font-semibold
              text-[#E6E1D8]
            ">
              Have an opportunity or project in mind?
            </h3>

          </div>

          <a
            href={`mailto:${portfolioData.profile.email}`}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-5
              py-3
              rounded-md
              bg-[#C58B55]
              text-[#101010]
              text-sm
              font-medium
              hover:bg-[#D6A066]
              transition-colors
              shrink-0
            "
          >
            Send an Email

            <ArrowUpRight className="w-4 h-4" />
          </a>

        </div>

      </div>
    </section>
  );
}