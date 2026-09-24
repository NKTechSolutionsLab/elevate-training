import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../images/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Coaching", href: "#coaching" },
  { name: "Training", href: "#training" },
  { name: "Consulting", href: "#consulting" },
  { name: "RESET", href: "#reset" },
  { name: "Resources", href: "#resources" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const navContainer = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.055,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const mobileMenu = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      delayChildren: 0.08,
      staggerChildren: 0.045,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const mobileItem = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "home";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 140 && rect.bottom >= 140) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{
        y: -35,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-[#DCE5EF] bg-white/95 shadow-[0_6px_25px_rgba(13,41,70,0.07)] backdrop-blur-xl"
          : "bg-white/25 backdrop-blur-[8px]"
      }`}
    >
      <nav className="mx-auto flex h-[74px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-14">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={closeMenu}
          aria-label="Elevate Training Services home"
          className="relative z-20 shrink-0"
          initial={{
            opacity: 0,
            x: -18,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.55,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          <img
            src={logo}
            alt="Elevate Training Services LLC"
            className="w-[138px] sm:w-[148px] lg:w-[158px]"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden flex-1 justify-center lg:flex"
          variants={navContainer}
          initial="hidden"
          animate="show"
        >
          <ul className="flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const active = activeSection === id;

              return (
                <motion.li
                  key={link.name}
                  variants={navItem}
                >
                  <a
                    href={link.href}
                    className={`group relative block py-2 text-[12px] font-medium transition-colors duration-300 ${
                      active
                        ? "text-[#0056A6]"
                        : "text-[#16324F] hover:text-[#0056A6]"
                    }`}
                  >
                    {link.name}

                    <motion.span
                      className="absolute -bottom-1 left-0 h-[1.5px] bg-[#0056A6]"
                      initial={false}
                      animate={{
                        width: active ? "100%" : "0%",
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    <motion.span
                      className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-[#0056A6] origin-left"
                      initial={{
                        scaleX: 0,
                      }}
                      whileHover={{
                        scaleX: active ? 1 : 1,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                    />
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        {/* Desktop CTA */}
        <motion.a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full bg-[#0D2946] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-white lg:flex"
          initial={{
            opacity: 0,
            x: 18,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.55,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.03,
            backgroundColor: "#0056A6",
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <span>Let's Connect</span>

          <motion.span
            className="flex"
            whileHover={{
              x: 3,
            }}
          >
            <ArrowRight size={15} />
          </motion.span>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="relative z-20 flex h-11 w-11 items-center justify-center text-[#0D2946] lg:hidden"
          whileTap={{
            scale: 0.9,
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.7,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <X size={25} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.7,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Menu size={25} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="show"
            exit="exit"
            className="overflow-hidden border-t border-[#DCE5EF] bg-white lg:hidden"
          >
            <div className="px-5 pb-7 pt-3 sm:px-8">
              <motion.div
                variants={navContainer}
                className="flex flex-col"
              >
                {navLinks.map((link) => {
                  const id = link.href.slice(1);
                  const active = activeSection === id;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      variants={mobileItem}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className={`flex items-center justify-between border-b border-[#E5EBF2] py-5 text-base transition-colors ${
                        active
                          ? "text-[#0056A6]"
                          : "text-[#16324F]"
                      }`}
                    >
                      <span>{link.name}</span>

                      <motion.span
                        whileHover={{
                          x: 4,
                        }}
                      >
                        <ArrowRight size={17} />
                      </motion.span>
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={closeMenu}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#0D2946] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
              >
                Let's Connect
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}