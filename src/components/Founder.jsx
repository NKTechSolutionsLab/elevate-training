import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import founder from "../images/tracy.png";

function Founder() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.11,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
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

  const statItem = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="overflow-hidden bg-white"
    >
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">

        {/* =================================
            FOUNDER IMAGE
        ================================= */}
        <div className="relative min-h-[520px] overflow-hidden sm:min-h-[620px] lg:min-h-[720px]">

          <motion.img
            src={founder}
            alt="Traci Wise, founder of Elevate Training Services"
            className="
              h-full
              w-full
              object-cover
              object-center
              lg:object-[center_25%]
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
              amount: 0.25,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Subtle image treatment */}
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

          {/* Founder label */}
          <motion.div
            className="absolute bottom-7 left-7 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12"
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
            <div className="border border-white/35 bg-[#0D2946]/60 px-5 py-4 backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85">
                Founder
              </p>

              <p className="mt-1 font-serif text-2xl text-white sm:text-3xl">
                Traci Wise
              </p>
            </div>
          </motion.div>
        </div>

        {/* =================================
            CONTENT
        ================================= */}
        <motion.div
          className="flex items-center bg-[#F7FAFD] px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 xl:px-20 xl:py-28"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={container}
        >
          <div className="w-full max-w-[720px]">

            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3"
              variants={fadeUp}
            >
              <motion.span
                className="h-px w-10 bg-[#0056A6]"
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 40,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0056A6] sm:text-xs">
                Meet the Founder
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h2
              className="
                mt-7
                font-serif
                text-[54px]
                leading-[0.91]
                tracking-[-0.045em]
                text-[#142A48]

                sm:text-[64px]

                lg:text-[72px]

                xl:text-[78px]
              "
              variants={fadeUp}
            >
              People.
              <br />
              Progress.
              <br />
              <span className="italic text-[#1769AA]">
                Purpose.
              </span>
            </motion.h2>

            {/* Identity */}
            <motion.div
              className="mt-9"
              variants={fadeUp}
            >
              <h3 className="font-serif text-3xl text-[#142A48] sm:text-4xl">
                Traci Wise
              </h3>

              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#718399] sm:text-xs">
                Instructor · Coach · Consultant
              </p>
            </motion.div>

            {/* Founder Story */}
            <motion.div
              className="mt-8 max-w-[650px] space-y-5 text-[16px] leading-8 text-[#586D83] sm:text-[17px] sm:leading-8"
              variants={fadeUp}
            >
              <p>
                Traci is passionate about helping people grow with confidence
                and purpose. Her work brings together mentoring, education,
                professional development, and practical support to help people
                move forward.
              </p>

              <p>
                Through Elevate, she creates learning experiences and coaching
                that help individuals and organizations develop the skills,
                confidence, and direction needed for meaningful progress.
              </p>
            </motion.div>

            {/* =================================
                IMPACT STATS
            ================================= */}
            <motion.div
              className="mt-10 grid grid-cols-1 border-y border-[#D7E2EC] sm:grid-cols-3"
              variants={container}
            >
              {/* Stat 1 */}
              <motion.div
                className="border-b border-[#D7E2EC] py-6 sm:border-b-0 sm:border-r sm:pr-6"
                variants={statItem}
              >
                <p className="font-serif text-4xl leading-none text-[#0056A6] sm:text-5xl">
                  30K+
                </p>

                <p className="mt-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-[#7B8DA1]">
                  Participants
                  <br />
                  Served
                </p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                className="border-b border-[#D7E2EC] py-6 sm:border-b-0 sm:border-r sm:px-6"
                variants={statItem}
              >
                <p className="font-serif text-4xl leading-none text-[#0056A6] sm:text-5xl">
                  16+
                </p>

                <p className="mt-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-[#7B8DA1]">
                  Workshop
                  <br />
                  Subjects
                </p>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                className="py-6 sm:pl-6"
                variants={statItem}
              >
                <p className="font-serif text-4xl leading-none text-[#0056A6] sm:text-5xl">
                  10+
                </p>

                <p className="mt-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-[#7B8DA1]">
                  Programs
                  <br />
                  Developed
                </p>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-10"
              variants={fadeUp}
            >
              <motion.a
                href="#contact"
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
                Learn More About Traci

                <ArrowRight
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Founder;