import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import growth from "../images/growth.png";

const focusAreas = [
  "Confidence & Mindset Coaching",
  "Skill Development",
  "Resume & LinkedIn Optimization",
  "Interview Preparation",
  "Career Planning",
  "Skill Gap Analysis",
];

const contentVariants = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const panelVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const listVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.09,
    },
  },
};

const listItemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function CareerGrowth() {
  return (
    <section
      id="coaching"
      className="relative overflow-hidden bg-[#F3F7FB]"
    >
      {/* Desktop background landscape */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.05,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-y-0 left-0 hidden w-[46%] lg:block"
      >
        <img
          src={growth}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-[#F3F7FB]" />
      </motion.div>

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Mobile image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.04,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-[320px] overflow-hidden sm:h-[400px] lg:hidden"
          >
            <img
              src={growth}
              alt="Mountain landscape representing growth and progress"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#F3F7FB] via-transparent to-transparent" />
          </motion.div>

          {/* Left Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative flex min-h-[560px] items-center px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[620px] lg:px-12 lg:py-24 xl:px-16"
          >
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
              <motion.a
                href="#contact"
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.2,
                }}
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
                  transition-colors
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
              </motion.a>
            </div>
          </motion.div>

          {/* Right Support Panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative z-10 flex items-center px-5 pb-16 sm:px-8 sm:pb-20 lg:px-8 lg:py-24 xl:px-14"
          >
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
              <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                className="mt-10 border-y border-[#DCE5EF]"
              >
                {focusAreas.map((area, index) => (
                  <motion.a
                    key={area}
                    href="#contact"
                    variants={listItemVariants}
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

                    <motion.span
                      whileHover={{
                        x: 4,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-[#0056A6]
                        transition-all
                        duration-300
                        group-hover:bg-[#EAF3FC]
                      "
                    >
                      <ArrowRight
                        size={18}
                        strokeWidth={1.7}
                      />
                    </motion.span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft landscape transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-20 w-[52%] bg-gradient-to-t from-[#F3F7FB] to-transparent lg:block" />
    </section>
  );
}

export default CareerGrowth;