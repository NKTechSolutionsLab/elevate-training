import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import confi from "../images/confidence.png"


function ConfidenceQuiz() {
  return (
    <section
      id="resources"
      className="overflow-hidden bg-[#F3F7FB]"
    >
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative min-h-[440px] overflow-hidden sm:min-h-[520px] lg:min-h-[680px]">
          <img
            src={confi}
            alt="A professional reflecting on confidence and personal growth"
            className="
              h-full
              w-full
              object-cover
              object-center

              lg:object-center
            "
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2946]/45 via-transparent to-transparent" />

          {/* Resource badge */}
          <div className="absolute bottom-7 left-7 sm:bottom-9 sm:left-9 lg:bottom-12 lg:left-12">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/45 bg-white/15 text-white backdrop-blur-md">
                <Sparkles size={20} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                  Free Resource
                </p>

                <p className="mt-1 font-serif text-2xl text-white">
                  Know Your Confidence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="flex items-center bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 xl:px-20 xl:py-28">
          <div className="max-w-[680px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#0056A6]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0056A6]">
                Discover More About Yourself
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-7
                font-serif
                text-[52px]
                leading-[0.94]
                tracking-[-0.04em]
                text-[#142A48]

                sm:text-[62px]

                lg:text-[70px]
              "
            >
              Discover Your
              <br />
              <span className="italic text-[#1769AA]">
                Confidence Archetype.
              </span>
            </h2>

            {/* Main copy */}
            <p
              className="
                mt-8
                max-w-[620px]
                text-[17px]
                leading-8
                text-[#566B82]

                sm:text-[18px]
                sm:leading-8

                lg:text-[19px]
                lg:leading-9
              "
            >
              Discover where you are today, gain a better understanding of
              your confidence, and identify a clearer place to begin.
            </p>

            {/* Secondary copy */}
            <p
              className="
                mt-5
                max-w-[580px]
                text-[15px]
                leading-7
                text-[#75879A]

                sm:text-base
                sm:leading-7
              "
            >
              In just a few minutes, the Confidence Archetype Quiz can help
              you better understand where you are and receive personalized
              insight to help you move forward.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#"
                className="
                  group
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
                Take the Free Quiz

                <ArrowRight
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Bottom reassurance */}
            <div className="mt-12 border-t border-[#DCE5EF] pt-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0056A6]">
                  A simple first step
                </span>

                <span className="hidden h-px w-8 bg-[#C6D5E4] sm:block" />

                <p className="text-sm leading-6 text-[#7A8D9F]">
                  Reflect. Discover. Understand. Move forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConfidenceQuiz;