import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
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
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#DCE5EF] bg-white/95 shadow-[0_6px_25px_rgba(13,41,70,0.07)] backdrop-blur-xl"
          : "bg-white/25 backdrop-blur-[8px]"
      }`}
    >
      <nav className="mx-auto flex h-[74px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-14">
        <a
          href="#home"
          onClick={closeMenu}
          className="relative z-20 shrink-0"
        >
          <img
            src={logo}
            alt="Elevate Training Services LLC"
            className="w-[138px] sm:w-[148px] lg:w-[158px]"
          />
        </a>

        <div className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const active = activeSection === id;

              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`group relative py-2 text-[12px] font-medium transition-colors ${
                      active
                        ? "text-[#0056A6]"
                        : "text-[#16324F] hover:text-[#0056A6]"
                    }`}
                  >
                    {link.name}

                    <span
                      className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#0056A6] transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full bg-[#0D2946] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#0056A6] lg:flex"
        >
          Let's Connect
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-20 flex h-11 w-11 items-center justify-center text-[#0D2946] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-[#DCE5EF] bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-7 pt-3 sm:px-8">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const active = activeSection === id;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`flex items-center justify-between border-b border-[#E5EBF2] py-5 text-base ${
                  active
                    ? "text-[#0056A6]"
                    : "text-[#16324F]"
                }`}
              >
                {link.name}
                <ArrowRight size={17} />
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#0D2946] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
          >
            Let's Connect
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}