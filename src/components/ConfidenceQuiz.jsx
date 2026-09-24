import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import confi from "../images/confidence.png";

function ConfidenceQuiz() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 32,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="resources"
      className="overflow-hidden bg-[#F3F7FB]"
    >
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-2">

        {/* =========================
            IMAGE SIDE
        ========================= */}
        <div className="relative min-h-[440px] overflow-hidden sm:min-h-[520px] lg:min-h-[680px]">

          <motion.img
            src={confi}
            alt="A professional reflecting on confidence and personal growth"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
            initial={{
              scale: 1.08,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Image overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#0D2946]/45 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
          />

          {/* Resource badge */}
          <motion.div
            className="absolute bottom-7 left-7 sm:bottom-9 sm:left-9 lg:bottom-12 lg:left-12"
            initial={{
              opacity: 0,
              y: 24,
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
          >
            <div className="flex items-center gap-4">

              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/45 bg-white/15 text-white backdrop-blur-md"
                initial={{ scale: 0.75, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Sparkles size={20} strokeWidth={1.5} />
              </motion.div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                  Free Resource
                </p>

                <p className="mt-1 font-serif text-2xl text-white">
                  Know Your Confidence
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================
            CONTENT SIDE
        ========================= */}
        <motion.div
          className="flex items-center bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 xl:px-20 xl:py-28"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={container}
        >
          <div className="max-w-[680px]">

            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3"
              variants={fadeUp}
            >
              <motion.span
                className="h-px w-10 bg-[#0056A6]"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0056A6]">
                Discover More About Yourself
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
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
              variants={fadeUp}
            >
              Discover Your
              <br />
              <span className="italic text-[#1769AA]">
                Confidence Archetype.
              </span>
            </motion.h2>

            {/* Main copy */}
            <motion.p
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
              variants={fadeUp}
            >
              Discover where you are today, gain a better understanding of
              your confidence, and identify a clearer place to begin.
            </motion.p>

            {/* Secondary copy */}
            <motion.p
              className="
                mt-5
                max-w-[580px]
                text-[15px]
                leading-7
                text-[#75879A]

                sm:text-base
                sm:leading-7
              "
              variants={fadeUp}
            >
              In just a few minutes, the Confidence Archetype Quiz can help
              you better understand where you are and receive personalized
              insight to help you move forward.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-10"
              variants={fadeUp}
            >
              <motion.a
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
                  transition-colors
                  duration-300

                  sm:px-8
                  sm:py-[18px]
                  sm:text-xs
                "
                whileHover={{
                  backgroundColor: "#003F7A",
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                Take the Free Quiz

                <ArrowRight
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>

            {/* Bottom reassurance */}
            <motion.div
              className="mt-12 border-t border-[#DCE5EF] pt-6"
              variants={fadeUp}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">

                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0056A6]">
                  A simple first step
                </span>

                <span className="hidden h-px w-8 bg-[#C6D5E4] sm:block" />

                <p className="text-sm leading-6 text-[#7A8D9F]">
                  Reflect. Discover. Understand. Move forward.
                </p>

              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ConfidenceQuiz;