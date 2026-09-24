import React from "react";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

import logo from "../images/logo.png";

const exploreLinks = [
  { name: "Home", href: "#home" },
  { name: "Coaching", href: "#coaching" },
  { name: "Training", href: "#training" },
  { name: "Consulting", href: "#consulting" },
];

const resourceLinks = [
  { name: "RESET", href: "#reset" },
  { name: "Resources", href: "#resources" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="bg-[#09233D] text-white">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Main brand statement */}
        <div className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-5xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#75B4E4] sm:text-xs">
              Elevate Training Services LLC
            </p>

            <h2
              className="
                mt-6
                max-w-5xl
                font-serif
                text-[48px]
                leading-[0.92]
                tracking-[-0.04em]
                text-white

                sm:text-[60px]

                lg:text-[76px]

                xl:text-[88px]
              "
            >
              People.
              <br />
              Progress.
              <br />
              <span className="italic text-[#66A9DC]">
                Purpose.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-[16px] leading-7 text-white/55 sm:text-lg sm:leading-8">
              Coaching, training, and consulting designed to help people and
              organizations grow with confidence, clarity, and purpose.
            </p>
          </div>
        </div>

        {/* Navigation / Contact */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_0.7fr_1fr] lg:gap-14 lg:py-20">
          {/* Brand */}
          <div>
            <a
              href="#home"
              aria-label="Elevate Training Services home"
              className="inline-block"
            >
              <img
                src={logo}
                alt="Elevate Training Services LLC"
                className="w-[155px] brightness-0 invert"
              />
            </a>

            <p className="mt-6 max-w-sm text-[15px] leading-7 text-white/55">
              Helping individuals and organizations build confidence, develop
              skills, and create meaningful opportunities.
            </p>

            <a
              href="#contact"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.13em]
                text-[#75B4E4]
                transition-colors
                hover:text-white
              "
            >
              Start a Conversation

              <ArrowRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#75B4E4]">
              Explore
            </p>

            <div className="mt-6 flex flex-col items-start gap-4">
              {exploreLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    text-[15px]
                    text-white/60
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#75B4E4]">
              Resources
            </p>

            <div className="mt-6 flex flex-col items-start gap-4">
              {resourceLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    text-[15px]
                    text-white/60
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#75B4E4]">
              Connect
            </p>

            <p className="mt-6 max-w-xs text-[15px] leading-7 text-white/55">
              Ready to talk about where you are, where you're going, and how
              Elevate can support the journey?
            </p>

            <a
              href="mailto:hello@elevate-training.co"
              className="
                group
                mt-5
                inline-flex
                items-center
                gap-3
                text-[15px]
                font-medium
                text-white
                transition-colors
                hover:text-[#75B4E4]
              "
            >
              <Mail
                size={17}
                strokeWidth={1.7}
              />

              hello@elevate-training.co
            </a>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-white/60
                  transition-all
                  duration-300
                  hover:border-[#75B4E4]
                  hover:bg-[#75B4E4]
                  hover:text-[#09233D]
                "
              >
                <FaLinkedinIn size={15} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-white/60
                  transition-all
                  duration-300
                  hover:border-[#75B4E4]
                  hover:bg-[#75B4E4]
                  hover:text-[#09233D]
                "
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-white/60
                  transition-all
                  duration-300
                  hover:border-[#75B4E4]
                  hover:bg-[#75B4E4]
                  hover:text-[#09233D]
                "
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            py-7

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[11px] uppercase tracking-[0.1em] text-white/35 sm:text-xs">
            © {new Date().getFullYear()} Elevate Training Services LLC. All
            rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[11px] uppercase tracking-[0.1em] text-white/35 transition-colors hover:text-white/70"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[11px] uppercase tracking-[0.1em] text-white/35 transition-colors hover:text-white/70"
            >
              Terms of Service
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                text-white/50
                transition-all
                hover:border-[#75B4E4]
                hover:bg-[#75B4E4]
                hover:text-[#09233D]
              "
            >
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;