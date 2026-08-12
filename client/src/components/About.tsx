import { Code2, GraduationCap, Lightbulb, ShieldCheck } from "lucide-react";

import { portfolioData } from "@/data/portfolioData";



export function About() {

  return (

    <section

      id="about"

      className="py-24 md:py-32 border-b border-[#2B2E31]"

    >

      <div className="container mx-auto px-6">



        {/* Header */}

        <div className="flex items-end gap-6 mb-14">

          <div>

            <p className="font-mono text-xs text-[#C58B55] tracking-[0.2em] mb-3">

              01 / ABOUT

            </p>



            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#E6E1D8]">

              About Me

            </h2>

          </div>



          <div className="hidden md:block flex-1 h-px bg-[#2B2E31] mb-2" />

        </div>



        {/* Main content */}

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20">



          {/* Introduction */}

          <div>

            <p className="text-xl md:text-2xl text-[#E6E1D8] leading-relaxed mb-7">

              I'm an MCA student and aspiring software developer who enjoys

              turning ideas into practical digital solutions.

            </p>



            {portfolioData.profile.bio.map((paragraph, index) => (

              <p

                key={index}

                className="text-[#9A9A94] leading-relaxed mb-5"

              >

                {paragraph}

              </p>

            ))}



            <p className="text-[#9A9A94] leading-relaxed">

              My interests span software development, artificial

              intelligence, data, and cybersecurity. I learn best by building

              real applications and continuously improving how I solve

              technical problems.

            </p>

          </div>



          {/* Snapshot */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">



            {/* Education */}

            <div className="group p-5 rounded-xl bg-[#151718] border border-[#2B2E31] hover:border-[#C58B55]/60 transition-all duration-300">

              <div className="flex items-start gap-4">

                <div className="p-2.5 rounded-lg bg-[#1E2225] text-[#C58B55]">

                  <GraduationCap className="w-5 h-5" />

                </div>



                <div>

                  <p className="font-mono text-xs text-[#6F7377] mb-1">

                    EDUCATION

                  </p>



                  <h3 className="text-[#E6E1D8] font-medium">

                    Master of Computer Applications

                  </h3>



                  <p className="text-sm text-[#9A9A94] mt-1">

                    Rathinam Technical Campus

                  </p>

                </div>

              </div>

            </div>



            {/* Development */}

            <div className="group p-5 rounded-xl bg-[#151718] border border-[#2B2E31] hover:border-[#C58B55]/60 transition-all duration-300">

              <div className="flex items-start gap-4">

                <div className="p-2.5 rounded-lg bg-[#1E2225] text-[#C58B55]">

                  <Code2 className="w-5 h-5" />

                </div>



                <div>

                  <p className="font-mono text-xs text-[#6F7377] mb-1">

                    FOCUS

                  </p>



                  <h3 className="text-[#E6E1D8] font-medium">

                    Full-Stack Development

                  </h3>



                  <p className="text-sm text-[#9A9A94] mt-1">

                    Python · React · Flask · APIs

                  </p>

                </div>

              </div>

            </div>



            {/* AI */}

            <div className="group p-5 rounded-xl bg-[#151718] border border-[#2B2E31] hover:border-[#C58B55]/60 transition-all duration-300">

              <div className="flex items-start gap-4">

                <div className="p-2.5 rounded-lg bg-[#1E2225] text-[#C58B55]">

                  <Lightbulb className="w-5 h-5" />

                </div>



                <div>

                  <p className="font-mono text-xs text-[#6F7377] mb-1">

                    INTEREST

                  </p>



                  <h3 className="text-[#E6E1D8] font-medium">

                    AI & Data

                  </h3>



                  <p className="text-sm text-[#9A9A94] mt-1">

                    Machine Learning · Data Analysis

                  </p>

                </div>

              </div>

            </div>



            {/* Cybersecurity */}

            <div className="group p-5 rounded-xl bg-[#151718] border border-[#2B2E31] hover:border-[#C58B55]/60 transition-all duration-300">

              <div className="flex items-start gap-4">

                <div className="p-2.5 rounded-lg bg-[#1E2225] text-[#C58B55]">

                  <ShieldCheck className="w-5 h-5" />

                </div>



                <div>

                  <p className="font-mono text-xs text-[#6F7377] mb-1">

                    EXPLORING

                  </p>



                  <h3 className="text-[#E6E1D8] font-medium">

                    Cybersecurity

                  </h3>



                  <p className="text-sm text-[#9A9A94] mt-1">

                    Threat Detection · Web Security

                  </p>

                </div>

              </div>

            </div>



          </div>

        </div>

      </div>

    </section>

  );

}