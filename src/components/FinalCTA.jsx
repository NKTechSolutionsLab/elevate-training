import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0D2946] text-white"
    >
      {/* Background Image */}
      <img
        src="/images/cta-background.jpg"
        alt=""
        aria-hidden="true"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          object-center
        "
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-[#06233D]/70" />

      {/* Subtle directional gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06233D]/85 via-[#0D2946]/45 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          {/* Main Statement */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A8D0ED] sm:text-xs">
              Take the Next Step
            </p>

            <h2
              className="
                mt-6
                max-w-[950px]
                font-serif
                text-[58px]
                leading-[0.9]
                tracking-[-0.045em]
                text-white

                sm:text-[70px]

                md:text-[78px]

                lg:text-[88px]

                xl:text-[96px]
              "
            >
              Let&apos;s Build
              <br />
              <span className="italic text-[#66A9DC]">
                What&apos;s Next.
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-[760px]
                text-[17px]
                leading-8
                text-white/75

                sm:text-[18px]
                sm:leading-8

                lg:text-[20px]
                lg:leading-9
              "
            >
              Whether you&apos;re looking to grow in your career, strengthen
              your skills, develop your team, or move through a period of
              change with greater confidence, Elevate is here to help.
            </p>

            {/* Primary CTA */}
            <a
              href="#contact"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-7
                py-4
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.11em]
                text-[#0D2946]
                transition-all
                duration-300
                hover:bg-[#66A9DC]

                sm:px-8
                sm:py-[18px]
                sm:text-xs
              "
            >
              Let&apos;s Connect

              <ArrowRight
                size={17}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Contact Statement */}
          <div className="lg:justify-self-end lg:pb-3">
            <div className="max-w-[440px]">
              {/* Small line */}
              <div className="mb-6 h-px w-14 bg-[#66A9DC]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A8D0ED]">
                Start a Conversation
              </p>

              <h3
                className="
                  mt-5
                  font-serif
                  text-[32px]
                  leading-[1.02]
                  tracking-[-0.02em]
                  text-white

                  sm:text-[40px]

                  lg:text-[46px]
                "
              >
                Your next step starts with a conversation.
              </h3>

              <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                Tell us where you are, where you want to go, and how Elevate
                can support your journey.
              </p>

              <a
                href="mailto:hello@elevate-training.co"
                className="
                  group
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.13em]
                  text-[#A8D0ED]
                  transition-colors
                  hover:text-white
                "
              >
                Start Your Conversation

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Brand Statement */}
        <div className="mt-20 border-t border-white/20 pt-7 sm:mt-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-serif text-2xl italic text-white/90 sm:text-3xl">
              People. Progress. Purpose.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#66A9DC]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-xs">
                Elevate Training Services LLC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;