import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function FinalCTA() {
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0D2946] text-white"
    >
      {/* =========================
          BACKGROUND IMAGE
      ========================= */}
      <motion.img
        src="/images/cta-background.jpg"
        alt=""
        aria-hidden="true"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          object-center
        "
        initial={{
          opacity: 0,
          scale: 1.08,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Image Overlay */}
      <motion.div
        className="absolute inset-0 bg-[#06233D]/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.9,
        }}
      />

      {/* Subtle directional gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#06233D]/85 via-[#0D2946]/45 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
        }}
      />

      {/* =========================
          CONTENT
      ========================= */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">

          {/* =================================
              MAIN STATEMENT
          ================================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {/* Eyebrow */}
            <motion.p
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A8D0ED] sm:text-xs"
              variants={contentVariants}
            >
              Take the Next Step
            </motion.p>

            {/* Heading */}
            <motion.h2
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
              variants={contentVariants}
              transition={{
                duration: 0.95,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Let&apos;s Build
              <br />
              <span className="italic text-[#66A9DC]">
                What&apos;s Next.
              </span>
            </motion.h2>

            {/* Supporting copy */}
            <motion.p
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
              variants={contentVariants}
              transition={{
                duration: 0.8,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Whether you&apos;re looking to grow in your career, strengthen
              your skills, develop your team, or move through a period of
              change with greater confidence, Elevate is here to help.
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              className="mt-10"
              variants={contentVariants}
              transition={{
                duration: 0.8,
                delay: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.a
                href="#contact"
                className="
                  group
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
                  transition-colors
                  duration-300

                  sm:px-8
                  sm:py-[18px]
                  sm:text-xs
                "
                whileHover={{
                  backgroundColor: "#66A9DC",
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                Let&apos;s Connect

                <ArrowRight
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* =================================
              CONTACT STATEMENT
          ================================= */}
          <motion.div
            className="lg:justify-self-end lg:pb-3"
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="max-w-[440px]">

              {/* Small line */}
              <motion.div
                className="mb-6 h-px bg-[#66A9DC]"
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 56,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

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

              <motion.a
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
                whileHover={{
                  x: 3,
                }}
              >
                Start Your Conversation

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* =================================
            BOTTOM BRAND STATEMENT
        ================================= */}
        <motion.div
          className="mt-20 border-t border-white/20 pt-7 sm:mt-24"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.75,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="font-serif text-2xl italic text-white/90 sm:text-3xl">
              People. Progress. Purpose.
            </p>

            <div className="flex items-center gap-3">
              <motion.span
                className="h-px bg-[#66A9DC]"
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 32,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-xs">
                Elevate Training Services LLC
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;