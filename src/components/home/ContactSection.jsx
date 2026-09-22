import React from "react";
import ContactForm from "../contact/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop pt-16 md:pt-24 pb-16 md:pb-24 mb-0 scroll-mt-24 border-t border-[#261016]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Header & Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-[#F3ECE2] leading-[1.08] tracking-tight">
              Let's build<br />
              something<br />
              useful.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#9E9387] max-w-[420px] leading-relaxed">
              We build high-performance software for ambitious teams. Reach out to discuss how Zetex can help automate and grow your operations.
            </p>
          </div>

          <div className="border-t border-[#261016] my-8 sm:my-10 max-w-[420px]"></div>

          {/* Contact Direct Channels */}
          <div className="space-y-6 max-w-[420px]">
            {/* Phone Call Channel */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#B3394B] text-[22px] mt-0.5 shrink-0">
                call
              </span>
              <div>
                <div className="text-[11px] font-mono tracking-widest text-[#8A7E72] uppercase mb-1">
                  CALL US
                </div>
                <a
                  href="tel:+918714196266"
                  className="text-[15px] sm:text-base font-medium text-[#F3ECE2] hover:text-[#B3394B] transition-colors"
                >
                  +91 87141 96266
                </a>
              </div>
            </div>

            {/* Email Channel */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#B3394B] text-[22px] mt-0.5 shrink-0">
                mail
              </span>
              <div>
                <div className="text-[11px] font-mono tracking-widest text-[#8A7E72] uppercase mb-1">
                  EMAIL US
                </div>
                <a
                  href="mailto:hello@zetex.studio"
                  className="text-[15px] sm:text-base font-medium text-[#F3ECE2] hover:text-[#B3394B] transition-colors"
                >
                  hello@zetex.studio
                </a>
              </div>
            </div>

            {/* WhatsApp Channel */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#B3394B] text-[22px] mt-0.5 shrink-0">
                chat
              </span>
              <div>
                <div className="text-[11px] font-mono tracking-widest text-[#8A7E72] uppercase mb-1">
                  WHATSAPP
                </div>
                <a
                  href="https://wa.me/918714196266"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[15px] sm:text-base font-medium text-[#F3ECE2] hover:text-[#B3394B] transition-colors"
                >
                  Start a conversation
                </a>
              </div>
            </div>

            {/* Instagram Channel */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#B3394B] text-[22px] mt-0.5 shrink-0">
                photo_camera
              </span>
              <div>
                <div className="text-[11px] font-mono tracking-widest text-[#8A7E72] uppercase mb-1">
                  INSTAGRAM
                </div>
                <a
                  href="https://www.instagram.com/zetex.co?stkn=MXExN3IxNWlzMG9sbw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[15px] sm:text-base font-medium text-[#F3ECE2] hover:text-[#B3394B] transition-colors"
                >
                  @zetex.co
                </a>
              </div>
            </div>

            {/* LinkedIn Channel */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#B3394B] text-[22px] mt-0.5 shrink-0">
                share
              </span>
              <div>
                <div className="text-[11px] font-mono tracking-widest text-[#8A7E72] uppercase mb-1">
                  LINKEDIN
                </div>
                <a
                  href="https://www.linkedin.com/company/zetex-digital-solutions/posts/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[15px] sm:text-base font-medium text-[#F3ECE2] hover:text-[#B3394B] transition-colors"
                >
                  Zetex Digital Solutions
                </a>
              </div>
            </div>
          </div>

          {/* Confidentiality Note */}
          <div className="pt-10 sm:pt-12 max-w-[420px]">
            <div className="text-xs sm:text-sm font-semibold text-[#F3ECE2] mb-1.5">
              Confidentiality Assured
            </div>
            <p className="text-xs sm:text-[13px] text-[#8A7E72] leading-relaxed">
              We are happy to sign standard Non-Disclosure Agreements (NDAs) prior to scoping technical IP or architectural specs.
            </p>
          </div>
        </div>

        {/* Right Side: Brutalist Form & Studio Location Map */}
        <div className="lg:col-span-7">
          <ContactForm />
          
          {/* Studio Location Map Box */}
          <div className="mt-8 sm:mt-10 border border-[#38161E] bg-[#14090C] overflow-hidden">
            <div className="p-4 sm:p-5 flex items-start gap-3 bg-[#14090C]">
              <span className="material-symbols-outlined text-[#B3394B] text-[20px] mt-0.5 shrink-0">
                location_on
              </span>
              <div>
                <div className="text-[11px] font-mono tracking-widest text-[#8A7E72] uppercase mb-0.5 font-medium">
                  STUDIO LOCATION
                </div>
                <div className="text-sm sm:text-base font-medium text-[#F3ECE2]">
                  Kochi, Kerala, India
                </div>
              </div>
            </div>
            
            <div className="h-[180px] sm:h-[220px] w-full relative pointer-events-none overflow-hidden border-t border-[#38161E]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.74838634898!2d76.21443494541908!3d9.982342797672288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="absolute w-full h-[360px] -top-[70px] left-0"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(75%) contrast(120%) opacity(0.65)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location Kochi"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
