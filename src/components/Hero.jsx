import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import hero from "../images/hero.png";

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[720px] overflow-hidden bg-[#DCEBF8] sm:min-h-[760px] lg:min-h-[820px]"
    >
      {/* Background Image */}
      <motion.img
        src={hero}
        alt=""
        aria-hidden="true"
        initial={{
          scale: 1.06,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute inset-0
          h-full w-full
          object-cover
          object-[62%_center]
          sm:object-[64%_center]
          lg:object-center
        "
      />

      {/* Main left-side readability gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.1,
          delay: 0.15,
          ease: "easeOut",
        }}
        className="
          absolute inset-0
          bg-gradient-to-r
          from-white/70
          via-white/45
          via-[58%]
          to-transparent
        "
      />

      {/* Bottom atmosphere */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7FAFD]/75 to-transparent" />

      {/* Main Content */}
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
        <motion.div
          className="w-full max-w-[820px]"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.p
            variants={heroItem}
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.30em]
              text-[#0056A6]
              sm:text-xs
            "
          >
            People / Progress / Purpose
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={heroItem}
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
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={heroItem}
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
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={heroItem}
            className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
          >
            {/* Primary CTA */}
            <motion.a
              href="#coaching"
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
                transition-colors
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
            </motion.a>

            {/* Secondary Story CTA */}
            <motion.a
              href="#about"
              whileHover={{
                x: 3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
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
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Editorial Statement */}
        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
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

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 80,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 1.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="ml-auto mt-4 h-px bg-[#0056A6]"
          />
        </motion.div>

        {/* Bottom-right proof statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
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

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{
              duration: 0.45,
              delay: 1.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-3 h-px bg-[#66A9DC]"
          />
        </motion.div>
      </div>

      {/* Mobile right-side details */}
      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          bottom-7
          right-5
          z-10
          max-w-[150px]
          xl:hidden
        "
      >
        <p className="text-right font-serif text-lg italic leading-tight text-[#153656] sm:text-xl">
          Confidence
          <br />
          Creates
          <br />
          Opportunity
        </p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{
            duration: 0.4,
            delay: 1.45,
          }}
          className="ml-auto mt-2 h-px bg-[#0056A6]"
        />
      </motion.div>
    </section>
  );
}

export default Hero;