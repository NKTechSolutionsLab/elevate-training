import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Traci is one of those rare individuals who not only has the professional expertise to guide others but also the compassion and courage to truly change lives.",
    text:
      "When I was at a crossroads in my career, unsure of my next steps, Traci gave me the encouragement and perspective I needed to move forward. She helped me recognize my strengths and see the value I could bring to the right role.",
    name: "Price Harmon",
    role: "Business Support Account Executive",
  },
  {
    quote:
      "Traci provided outstanding training with compassion and mastery.",
    text:
      "She expertly juggled her course material with making time to thoughtfully answer everyone's questions. Her material included valuable market research, best practices, and inspirational stories.",
    name: "Kelli Turner, PHR",
    role: "Human Resources Professional",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const testimonial = testimonials[current];

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const contentVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 35 : -35,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -35 : 35,
      transition: {
        duration: 0.4,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };

  return (
    <section className="overflow-hidden bg-[#F3F7FB]">
      <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

        {/* =================================
            HEADER
        ================================= */}
        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0056A6] sm:text-xs">
              Client Perspective
            </p>

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
              "
            >
              Real People.
              <br />
              <span className="italic text-[#1769AA]">
                Real Progress.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end lg:max-w-[620px]">
            <p className="text-[17px] leading-8 text-[#61758B] sm:text-[18px] sm:leading-8">
              Meaningful growth is ultimately measured by the people who
              experience it. Here are a few reflections from those who have
              worked with Traci.
            </p>
          </div>
        </motion.div>

        {/* =================================
            MAIN TESTIMONIAL
        ================================= */}
        <div className="relative mt-14 sm:mt-16 lg:mt-20">

          {/* Large quote mark */}
          <motion.div
            className="absolute -left-1 -top-8 hidden lg:block"
            initial={{
              opacity: 0,
              scale: 0.85,
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
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Quote
              size={72}
              strokeWidth={1}
              className="text-[#B8CCE0]"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-10 border-y border-[#D8E3ED] py-12 sm:py-14 lg:grid-cols-[1fr_0.25fr] lg:gap-16 lg:py-16 xl:py-20">

            {/* =================================
                QUOTE CONTENT
            ================================= */}
            <div className="pl-0 lg:pl-20">

              <AnimatePresence
                mode="wait"
                custom={current}
              >
                <motion.div
                  key={current}
                  custom={current}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {/* Quote */}
                  <p
                    className="
                      max-w-[1050px]
                      font-serif
                      text-[34px]
                      leading-[1.15]
                      tracking-[-0.025em]
                      text-[#142A48]

                      sm:text-[42px]

                      lg:text-[52px]

                      xl:text-[58px]
                    "
                  >
                    “{testimonial.quote}”
                  </p>

                  {/* Supporting text */}
                  <p
                    className="
                      mt-8
                      max-w-[820px]
                      text-[16px]
                      leading-8
                      text-[#5D7187]

                      sm:text-[17px]
                      sm:leading-8
                    "
                  >
                    {testimonial.text}
                  </p>

                  {/* Attribution */}
                  <div className="mt-9">
                    <p className="font-serif text-2xl text-[#142A48] sm:text-3xl">
                      {testimonial.name}
                    </p>

                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7C8EA2] sm:text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* =================================
                SIDE CONTROLS
            ================================= */}
            <motion.div
              className="flex items-end justify-between gap-6 lg:flex-col lg:items-end lg:justify-between"
              initial={{
                opacity: 0,
                x: 25,
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
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* Counter */}
              <div className="relative min-w-[70px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current}
                    className="font-serif text-4xl leading-none text-[#0056A6] sm:text-5xl"
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    0{current + 1}
                  </motion.p>
                </AnimatePresence>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8B9CAD]">
                    of
                  </span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8B9CAD]">
                    0{testimonials.length}
                  </span>
                </div>
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <motion.button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#BFCFDF]
                    text-[#0056A6]
                    transition-colors
                    duration-300
                    hover:border-[#0056A6]
                    hover:bg-[#0056A6]
                    hover:text-white
                  "
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                >
                  <ArrowLeft size={17} strokeWidth={1.7} />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#BFCFDF]
                    text-[#0056A6]
                    transition-colors
                    duration-300
                    hover:border-[#0056A6]
                    hover:bg-[#0056A6]
                    hover:text-white
                  "
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                >
                  <ArrowRight size={17} strokeWidth={1.7} />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* =================================
              PROGRESS INDICATOR
          ================================= */}
          <motion.div
            className="mt-6 flex items-center gap-2"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className="relative h-[3px] overflow-hidden bg-[#C9D6E3]"
              >
                <motion.span
                  className="absolute inset-y-0 left-0 bg-[#0056A6]"
                  animate={{
                    width: index === current ? "100%" : "0%",
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                <span
                  className={`
                    block
                    h-[3px]
                    ${
                      index === current
                        ? "w-14"
                        : "w-5"
                    }
                  `}
                />
              </button>
            ))}
          </motion.div>
        </div>

        {/* =================================
            BOTTOM STATEMENT
        ================================= */}
        <motion.div
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
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
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8293A7] sm:text-xs">
            Coaching · Training · Professional Development
          </p>

          <p className="font-serif text-xl italic text-[#47627D] sm:text-2xl">
            People-first. Practical. Purpose-driven.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;