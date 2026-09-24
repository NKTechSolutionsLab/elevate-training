import React from "react";
import { ArrowRight } from "lucide-react";
import growth from "../images/growth.png"


const focusAreas = [
  "Confidence & Mindset Coaching",
  "Skill Development",
  "Resume & LinkedIn Optimization",
  "Interview Preparation",
  "Career Planning",
  "Skill Gap Analysis",
];

function CareerGrowth() {
  return (
    <section
      id="coaching"
      className="relative overflow-hidden bg-[#F3F7FB]"
    >
      {/* Background landscape */}
      <div className="absolute inset-y-0 left-0 hidden w-[46%] lg:block">
        <img
          src={growth}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />

        {/* Blend the image into the section */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-[#F3F7FB]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Mobile image */}
          <div className="relative h-[320px] sm:h-[400px] lg:hidden">
            <img
              src="/images/career-growth.jpg"
              alt="Mountain landscape representing growth and progress"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#F3F7FB] via-transparent to-transparent" />
          </div>

          {/* Left Content */}
          <div className="relative flex min-h-[560px] items-center px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[620px] lg:px-12 lg:py-24 xl:px-16">
            <div className="max-w-[650px]">
              {/* Eyebrow */}
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0056A6] sm:text-xs">
                Career Growth
              </p>

              {/* Heading */}
              <h2
                className="
                  mt-6
                  font-serif
                  text-[54px]
                  leading-[0.92]
                  tracking-[-0.045em]
                  text-[#142A48]

                  sm:text-[64px]

                  lg:text-[72px]

                  xl:text-[78px]
                "
              >
                Your Potential.
                <br />
                <span className="italic text-[#1769AA]">
                  Our Focus.
                </span>
              </h2>

              {/* Main paragraph */}
              <p
                className="
                  mt-8
                  max-w-[620px]
                  text-[17px]
                  leading-8
                  text-[#556B82]

                  sm:text-[18px]
                  sm:leading-8

                  lg:text-[19px]
                  lg:leading-9
                "
              >
                Growth becomes more meaningful when you have the right
                guidance, skills and confidence to move forward with purpose.
              </p>

              {/* Supporting paragraph */}
              <p
                className="
                  mt-5
                  max-w-[600px]
                  text-[15px]
                  leading-7
                  text-[#718398]

                  sm:text-base
                  sm:leading-7
                "
              >
                Elevate supports professionals through practical coaching,
                career development and skill-building designed around where
                you are and where you want to go.
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="
                  group
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#0056A6]
                  px-7
                  py-4
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.11em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#003F7A]

                  sm:px-8
                  sm:py-[18px]
                  sm:text-xs
                "
              >
                Start a Conversation

                <ArrowRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right Support Panel */}
          <div className="relative z-10 flex items-center px-5 pb-16 sm:px-8 sm:pb-20 lg:px-8 lg:py-24 xl:px-14">
            <div
              className="
                w-full
                bg-white
                px-6
                py-10
                shadow-[0_20px_60px_rgba(13,41,70,0.06)]

                sm:px-10
                sm:py-12

                lg:px-12
                lg:py-14

                xl:px-14
                xl:py-16
              "
            >
              {/* Small label */}
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8192A5] sm:text-xs">
                Areas of Support
              </p>

              {/* Panel Heading */}
              <h3
                className="
                  mt-5
                  max-w-[560px]
                  font-serif
                  text-[36px]
                  leading-[1]
                  tracking-[-0.03em]
                  text-[#142A48]

                  sm:text-[44px]

                  lg:text-[48px]
                "
              >
                Practical support for the next step in your journey.
              </h3>

              {/* Support list */}
              <div className="mt-10 border-y border-[#DCE5EF]">
                {focusAreas.map((area, index) => (
                  <a
                    key={area}
                    href="#contact"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-5
                      border-b
                      border-[#DCE5EF]
                      py-5
                      last:border-b-0

                      sm:py-6
                    "
                  >
                    <div className="flex min-w-0 items-center gap-5">
                      <span className="shrink-0 text-[11px] font-semibold tracking-[0.18em] text-[#91A0B0] sm:text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          text-[15px]
                          font-medium
                          leading-6
                          text-[#233B59]
                          transition-colors
                          duration-300
                          group-hover:text-[#0056A6]

                          sm:text-[17px]
                          sm:leading-7
                        "
                      >
                        {area}
                      </span>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#0056A6] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#EAF3FC]">
                      <ArrowRight
                        size={18}
                        strokeWidth={1.7}
                      />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft landscape transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-20 w-[52%] bg-gradient-to-t from-[#F3F7FB] to-transparent lg:block" />
    </section>
  );
}

export default CareerGrowth;