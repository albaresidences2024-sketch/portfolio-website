"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "ventures", "experience", "education", "contact"];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-16 md:h-20 bg-bg-primary/85 backdrop-blur-md border-b border-border-light z-[100] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, "home")} 
          className="font-serif text-lg md:text-xl font-semibold tracking-[0.15em] text-gold hover:text-gold-hover transition-colors"
        >
          CLAIRE PONIROU
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          {["home", "about", "ventures", "experience", "education", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleLinkClick(e, item)}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                activeSection === item ? "text-gold" : "text-gray-400 hover:text-gold"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1.5 md:hidden cursor-pointer w-6 h-6 justify-center items-center"
          aria-label="Toggle Menu"
        >
          <span className={`w-5 h-[1.5px] bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[4.5px]" : ""}`}></span>
          <span className={`w-5 h-[1.5px] bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-5 h-[1.5px] bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <nav
        className={`fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-bg-primary border-t border-border-light flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 z-50 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {["home", "about", "ventures", "experience", "education", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={(e) => handleLinkClick(e, item)}
            className={`text-lg font-medium uppercase tracking-widest ${
              activeSection === item ? "text-gold" : "text-gray-300 hover:text-gold"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
