import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  UserRound,
  UsersRound,
  BarChart3,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Coaching",
    description:
      "Personalized support to help you gain clarity, build confidence, and move forward.",
    icon: UserRound,
    href: "#coaching",
  },
  {
    number: "02",
    title: "Training",
    description:
      "Practical, engaging workshops and programs that build real-world skills.",
    icon: UsersRound,
    href: "#training",
  },
  {
    number: "03",
    title: "Consulting",
    description:
      "Strategic support for individuals, teams, and organizations.",
    icon: BarChart3,
    href: "#consulting",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ServicesOverview() {
  return (
    <section
      id="services"
      className="border-b border-[#D9E3ED] bg-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-3"
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.a
              key={service.title}
              href={service.href}
              variants={itemVariants}
              className={`
                group
                relative
                flex
                min-h-[220px]
                items-start
                px-6
                py-10
                transition-colors
                duration-300
                hover:bg-[#F6F9FC]

                sm:px-8
                sm:py-12

                lg:px-10
                xl:px-14
                xl:py-14

                ${
                  index !== services.length - 1
                    ? "border-b border-[#D9E3ED] lg:border-b-0 lg:border-r"
                    : ""
                }
              `}
            >
              <div className="flex w-full items-start gap-5 xl:gap-6">
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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C9D9E8]
                    text-[#0056A6]
                    transition-all
                    duration-300
                    group-hover:border-[#0056A6]
                    group-hover:bg-[#EEF6FD]
                  "
                >
                  <Icon
                    size={25}
                    strokeWidth={1.6}
                  />
                </motion.div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8797A9]">
                      {service.number}
                    </span>

                    <span className="h-px w-7 bg-[#CBD8E5]" />
                  </div>

                  <h2
                    className="
                      mt-3
                      font-serif
                      text-3xl
                      leading-none
                      tracking-[-0.02em]
                      text-[#142A48]

                      sm:text-[34px]
                    "
                  >
                    {service.title}
                  </h2>

                  <p
                    className="
                      mt-4
                      max-w-[350px]
                      text-[15px]
                      leading-7
                      text-[#5A6E84]

                      sm:text-base
                      sm:leading-7
                    "
                  >
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="
                    mt-1
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B8CADA]
                    text-[#0056A6]
                    transition-all
                    duration-300
                    group-hover:border-[#0056A6]
                    group-hover:bg-[#0056A6]
                    group-hover:text-white
                  "
                >
                  <ArrowRight
                    size={16}
                    strokeWidth={1.7}
                  />
                </motion.div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}

export default ServicesOverview;