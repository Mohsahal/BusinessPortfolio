import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["hero", "services", "work", "process", "about", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    if (e) e.preventDefault();
    const id = href.replace("#", "");

    if (location.pathname !== "/") {
      navigate("/" + href);
      setMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none">
      <div className={`pointer-events-auto w-full max-w-5xl flex justify-between items-center h-16 md:h-[72px] px-6 md:px-8 rounded-full border transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-2xl border-outline-variant/30 shadow-[0_8px_30px_rgba(0,0,0,0.08)]" 
          : "bg-white/40 backdrop-blur-lg border-white/50 shadow-sm"
      }`}>
        {/* Brand Logo - scrolls to top */}
        <button 
          onClick={(e) => scrollToSection(e, "#hero")} 
          className="font-h1 text-xl md:text-2xl font-extrabold tracking-tighter text-primary hover:opacity-70 transition-opacity text-left cursor-pointer"
        >
          XYZ.
        </button>

        {/* Desktop Navigation Links - Smooth Scroll, No Redirect */}
        <nav className="hidden md:flex space-x-1 items-center font-body-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.name}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`transition-all duration-300 px-5 py-2 rounded-full text-sm font-medium tracking-wide cursor-pointer ${
                  isActive
                    ? "text-primary bg-white shadow-sm border border-outline-variant/20"
                    : "text-secondary hover:text-primary hover:bg-white/50"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right CTA - Smooth Scroll to Contact */}
        <div className="hidden md:flex items-center">
          <button
            onClick={(e) => scrollToSection(e, "#contact")}
            className="magnetic-button inline-flex items-center justify-center bg-primary text-on-primary px-7 py-2.5 rounded-full font-label-caps text-xs tracking-[0.1em] shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
          >
            LET'S TALK
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 text-primary focus:outline-none bg-white/50 rounded-full border border-outline-variant/20 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-2xl leading-none">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu - Smooth Scroll, No Redirect */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[calc(100%+16px)] left-4 right-4 pointer-events-auto bg-white rounded-2xl border border-outline-variant px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-left text-lg py-2.5 border-b border-surface-variant transition-colors cursor-pointer ${
                    isActive ? "font-bold text-primary pl-2" : "text-secondary hover:text-primary"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="pt-3">
              <button
                onClick={(e) => scrollToSection(e, "#contact")}
                className="w-full text-center inline-flex items-center justify-center bg-primary text-on-primary px-6 py-3.5 rounded-DEFAULT font-body-md text-body-md cursor-pointer shadow-md"
              >
                Let's Talk →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
