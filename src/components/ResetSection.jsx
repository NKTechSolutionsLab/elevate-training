import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Search,
  Dumbbell,
  UsersRound,
  Flag,
} from "lucide-react";

const resetSteps = [
  {
    number: "01",
    title: "Reflect",
    description: "Take time to understand where you are.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "Evaluate",
    description: "Gain clarity on what's working and where to grow.",
    icon: Search,
  },
  {
    number: "03",
    title: "Strengthen",
    description: "Build skills, confidence and resilience.",
    icon: Dumbbell,
  },
  {
    number: "04",
    title: "Empower",
    description: "Develop the mindset to take action.",
    icon: UsersRound,
  },
  {
    number: "05",
    title: "Transform",
    description: "Create lasting change and new possibilities.",
    icon: Flag,
  },
];

const introLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const introRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      delay: 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stepsContainer = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

const stepItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ResetSection() {
  return (
    <section
      id="reset"
      className="relative overflow-hidden bg-[#0B2947] text-white"
    >
      {/* Background image */}
      <motion.img
        src="/images/reset-background.jpg"
        alt=""
        aria-hidden="true"
        initial={{
          scale: 1.05,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute inset-0 bg-[#06233D]/82"
      />

      {/* Atmospheric gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06233D]/95 via-[#06233D]/75 to-[#06233D]/45" />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Intro */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Left */}
          <motion.div
            variants={introLeft}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9BC8EA] sm:text-xs">
              A Guided Journey
            </p>

            <h2
              className="
                mt-6
                font-serif
                text-[58px]
                leading-[0.88]
                tracking-[-0.045em]

                sm:text-[68px]

                lg:text-[78px]

                xl:text-[88px]
              "
            >
              Reset.
              <br />
              <span className="italic text-[#66A9DC]">
                Reconnect.
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-[620px]
                text-[17px]
                leading-8
                text-white/75

                sm:text-[18px]
                sm:leading-8

                lg:text-[19px]
                lg:leading-9
              "
            >
              A guided journey designed to help people reconnect with
              themselves, strengthen resilience, rebuild confidence, and create
              momentum for what&apos;s next.
            </p>

            <motion.a
              href="#resources"
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
                border
                border-white/40
                px-7
                py-4
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                duration-300
                hover:border-[#66A9DC]
                hover:bg-[#66A9DC]
                hover:text-[#06233D]
              "
            >
              Explore RESET

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </motion.div>

          {/* Right statement */}
          <motion.div
            variants={introRight}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="flex items-end lg:pb-4"
          >
            <div className="max-w-[760px]">
              <p
                className="
                  font-serif
                  text-[34px]
                  leading-[1.08]
                  tracking-[-0.02em]
                  text-white

                  sm:text-[42px]

                  lg:text-[52px]
                "
              >
                Sometimes you don&apos;t need to become someone new.
              </p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-3
                  font-serif
                  text-[34px]
                  italic
                  leading-[1.08]
                  tracking-[-0.02em]
                  text-[#66A9DC]

                  sm:text-[42px]

                  lg:text-[52px]
                "
              >
                You need space to find your way forward.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Step Journey */}
        <motion.div
          variants={stepsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-16 border-y border-white/20 lg:mt-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {resetSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={stepItem}
                  className={`
                    group
                    relative
                    px-5
                    py-8

                    sm:px-7
                    sm:py-9

                    lg:px-6
                    lg:py-10
                    xl:px-8

                    ${
                      index !== resetSteps.length - 1
                        ? "border-b border-white/20 lg:border-b-0 lg:border-r"
                        : ""
                    }
                  `}
                >
                  {/* Number */}
                  <motion.span
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + index * 0.12,
                    }}
                    className="text-[10px] font-semibold tracking-[0.2em] text-white/45 sm:text-[11px]"
                  >
                    {step.number}
                  </motion.span>

                  {/* Icon */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.75,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.22 + index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      mt-7
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/35
                      text-[#9BC8EA]
                      transition-all
                      duration-300
                      group-hover:border-[#66A9DC]
                      group-hover:bg-[#66A9DC]/10
                      group-hover:text-[#66A9DC]

                      sm:h-16
                      sm:w-16
                    "
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="
                      mt-6
                      font-serif
                      text-3xl
                      leading-none
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#66A9DC]

                      sm:text-[34px]
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Animated divider */}
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: 40,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.3 + index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-5 h-px bg-[#66A9DC]"
                  />

                  {/* Description */}
                  <p className="mt-4 max-w-[220px] text-sm leading-6 text-white/60 sm:text-[15px] sm:leading-7">
                    {step.description}
                  </p>

                  {/* Connector */}
                  {index !== resetSteps.length - 1 && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.55 + index * 0.12,
                      }}
                      className="
                        absolute
                        right-[-10px]
                        top-1/2
                        z-10
                        hidden
                        -translate-y-1/2
                        lg:block
                      "
                    >
                      <ArrowRight
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#66A9DC]"
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm tracking-wide text-white/50 sm:text-base">
            Reflect. Evaluate. Strengthen. Empower. Transform.
          </p>

          <motion.a
            href="#contact"
            whileHover={{
              x: 3,
            }}
            transition={{
              duration: 0.2,
            }}
            className="group inline-flex w-fit items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9BC8EA] transition-colors hover:text-white"
          >
            Start Your Next Step

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default ResetSection;