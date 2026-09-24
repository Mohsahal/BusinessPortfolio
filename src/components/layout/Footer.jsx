import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import { footerLinks } from "../../data/navigation";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/" + href);
        return;
      }
      const id = href.replace("#", "");
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
    } else if (href && href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#22050B] text-[#F5F1EA] w-full py-12 md:py-16 border-t border-[#460C17]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="md:col-span-4 mb-6 md:mb-0 flex flex-col justify-between">
          <div>
            <button
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center mb-4 inline-flex text-left cursor-pointer hover:opacity-85 transition-opacity"
              aria-label="Zetex Home"
            >
              <div className="h-8 sm:h-10 flex items-center">
                <img 
                  src="/images/zetex-transparent.png" 
                  alt="Zetex Logo" 
                  className="h-full w-auto max-w-[120px] sm:max-w-[150px] object-contain drop-shadow-md"
                />
              </div>
            </button>
            <p className="font-body-md text-sm text-[#DDD5C8] max-w-xs mb-6 leading-relaxed">
              Software, AI and digital solutions designed to turn ambitious ideas into powerful products.
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="font-body-md text-xs text-[#8F8475]">
              © {new Date().getFullYear()} Zetex Digital Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#8F8475] font-body-md">
              <Link to="/terms" className="hover:text-[#F5F1EA] transition-colors hover:underline">
                Terms of Service
              </Link>
              <span>•</span>
              <Link to="/privacy" className="hover:text-[#F5F1EA] transition-colors hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {/* Navigation */}
          <div className="flex flex-col space-y-2.5 font-body-md text-sm">
            <span className="font-mono text-xs text-[#E89EAE] mb-1 uppercase tracking-wider font-semibold">Navigation</span>
            {footerLinks.navigation.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-left text-[#DDD5C8] hover:text-[#FFFFFF] transition-all duration-300 hover:translate-x-1 cursor-pointer text-sm"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-2.5 font-body-md text-sm">
            <span className="font-mono text-xs text-[#E89EAE] mb-1 uppercase tracking-wider font-semibold">Company</span>
            {footerLinks.company.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-left text-[#DDD5C8] hover:text-[#FFFFFF] transition-all duration-300 hover:translate-x-1 cursor-pointer text-sm"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Connect / Contact */}
          <div className="flex flex-col space-y-2.5 font-body-md text-sm">
            <span className="font-mono text-xs text-[#E89EAE] mb-1 uppercase tracking-wider font-semibold">Direct</span>
            <button
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-left text-[#DDD5C8] hover:text-[#FFFFFF] transition-all duration-300 hover:translate-x-1 cursor-pointer text-sm"
            >
              Contact Us
            </button>
            <a
              href="tel:+918714196266"
              className="text-[#DDD5C8] hover:text-[#FFFFFF] transition-all duration-300 hover:translate-x-1 text-sm inline-flex items-center gap-1.5"
            >
              +91 87141 96266
            </a>
            <a
              href="mailto:hello@zetex.studio"
              className="text-[#DDD5C8] hover:text-[#FFFFFF] transition-all duration-300 hover:translate-x-1 text-sm break-all"
            >
              hello@zetex.studio
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col space-y-2.5 font-body-md text-sm">
            <span className="font-mono text-xs text-[#E89EAE] mb-1 uppercase tracking-wider font-semibold">Social</span>
            {footerLinks.social.map((item) => {
              const isLinkedIn = item.name.toLowerCase().includes("linkedin");
              const isInstagram = item.name.toLowerCase().includes("instagram");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#DDD5C8] hover:text-[#FFFFFF] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 text-sm"
                >
                  {isLinkedIn && <Linkedin className="w-4 h-4 shrink-0" />}
                  {isInstagram && <Instagram className="w-4 h-4 shrink-0" />}
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
