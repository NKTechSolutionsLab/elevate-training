import React from "react";
import { ArrowRight, Play } from "lucide-react";
import hero from "../images/hero.png"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[720px] overflow-hidden bg-[#DCEBF8] sm:min-h-[760px] lg:min-h-[820px]"
    >
      {/* Background Image */}
      <img
        src={hero}
        alt=""
        aria-hidden="true"
        className="
          absolute inset-0 h-full w-full
          object-cover
          object-[62%_center]
          sm:object-[64%_center]
          lg:object-center
        "
      />

      {/* Main left-side readability gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-white/70
          via-white/45
          via-[58%]
          to-transparent
        "
      />

      {/* Slight bottom atmosphere */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7FAFD]/75 to-transparent" />

      {/* Content */}
      <div
        className="
          relative z-10 mx-auto
          flex min-h-[720px] max-w-[1500px]
          items-center
          px-5 pb-24 pt-32
          sm:min-h-[760px] sm:px-8
          lg:min-h-[820px] lg:px-12 lg:pb-28 lg:pt-36
          xl:px-16
        "
      >
        <div className="w-full max-w-[820px]">
          {/* Eyebrow */}
          <p
            className="
              text-[11px] font-semibold uppercase
              tracking-[0.30em]
              text-[#0056A6]
              sm:text-xs
            "
          >
            People / Progress / Purpose
          </p>

          {/* Main Heading */}
          <h1
            className="
              mt-6
              max-w-[820px]
              font-serif
              text-[56px]
              leading-[0.92]
              tracking-[-0.045em]
              text-[#102944]

              sm:text-[68px]

              md:text-[76px]

              lg:text-[88px]

              xl:text-[96px]
            "
          >
            Stronger People
            <br />
            Build{" "}
            <span className="italic text-[#1769AA]">
              Brighter Futures.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            className="
              mt-8
              max-w-[760px]
              text-[17px]
              leading-7
              text-[#334A63]

              sm:text-[18px]
              sm:leading-8

              lg:text-[20px]
              lg:leading-9
            "
          >
            Coaching, training, and consulting designed to help individuals
            and organizations grow with confidence, clarity, and purpose.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            {/* Primary CTA */}
            <a
              href="#coaching"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#0D2946]
                px-7
                py-4
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.11em]
                text-white
                transition-all
                duration-300
                hover:bg-[#0056A6]
                sm:px-8
                sm:py-[18px]
                sm:text-xs
              "
            >
              <span>Explore Services</span>

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Secondary Story CTA */}
            <a
              href="#about"
              className="
                group
                inline-flex
                items-center
                gap-4
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.11em]
                text-[#102944]
                sm:text-xs
              "
            >
              <span
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#17324F]/45
                  bg-white/50
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  group-hover:border-[#0056A6]
                  group-hover:bg-white
                "
              >
                <Play
                  size={15}
                  strokeWidth={1.6}
                  fill="currentColor"
                />
              </span>

              <span>Watch Our Story</span>
            </a>
          </div>
        </div>

        {/* Right Editorial Statement */}
        <div
          className="
            pointer-events-none
            absolute
            right-7
            top-[28%]
            hidden
            xl:block
            xl:right-14
            2xl:right-20
          "
        >
          <p
            className="
              font-serif
              text-[30px]
              italic
              leading-[1.02]
              text-[#153656]

              2xl:text-[36px]
            "
          >
            Confidence
            <br />
            Creates
            <br />
            Opportunity
          </p>

          <div className="ml-auto mt-4 h-px w-20 bg-[#0056A6]" />
        </div>

        {/* Bottom-right proof statement */}
        <div
          className="
            absolute
            bottom-10
            right-7
            hidden
            border
            border-white/50
            bg-[#0D2946]/45
            px-5
            py-4
            backdrop-blur-md
            xl:block
            xl:right-14
            2xl:right-20
          "
        >
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              leading-[1.8]
              tracking-[0.18em]
              text-white
            "
          >
            Real People.
            <br />
            Meaningful Progress.
          </p>

          <div className="mt-3 h-px w-12 bg-[#66A9DC]" />
        </div>
      </div>

      {/* Mobile right-side details */}
      <div className="absolute bottom-7 right-5 z-10 max-w-[150px] xl:hidden">
        <p className="text-right font-serif text-lg italic leading-tight text-[#153656] sm:text-xl">
          Confidence
          <br />
          Creates
          <br />
          Opportunity
        </p>

        <div className="ml-auto mt-2 h-px w-12 bg-[#0056A6]" />
      </div>
    </section>
  );
}

export default Hero;