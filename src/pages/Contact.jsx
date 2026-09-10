
import React from "react";
import SEO from "../components/seo/SEO";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop py-16 md:py-24 pt-28 md:pt-36 mb-16 md:mb-section-gap">
      <SEO 
        title="Contact Us - XYZ" 
        description="Ready to build something real? Get in touch with XYZ to discuss your next digital project." 
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Header & Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-[#111111] leading-[1.08] tracking-tight">
              Let's build<br />
              something<br />
              useful.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#666666] max-w-[420px] leading-relaxed">
              We build high-performance software for ambitious teams. Reach out to discuss how XYZ can help automate and grow your operations.
            </p>
          </div>

          <div className="border-t border-[#e5e5e5] my-8 sm:my-10 max-w-[420px]"></div>

          {/* Contact Direct Channels */}
          <div className="space-y-6 max-w-[420px]">
            {/* Phone Call Channel */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#111111] text-[22px] mt-0.5 shrink-0">
                call
              </span>
              <div>
                <div className="text-[11px] font-mono tracking-widest text-[#737373] uppercase mb-1">
                  CALL US
                </div>
                <a
                  href="tel:+917306093151"
                  className="text-[15px] sm:text-base font-medium text-[#111111] hover:underline"
                >
                  +91 73060 93151
                </a>
              </div>
            </div>

            {/* Email Channel */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#111111] text-[22px] mt-0.5 shrink-0">
                mail
              </span>
              <div>
                <div className="text-[11px] font-mono tracking-widest text-[#737373] uppercase mb-1">
                  EMAIL US
                </div>
                <a
                  href="mailto:hello@xyz.studio"
                  className="text-[15px] sm:text-base font-medium text-[#111111] hover:underline"
                >
                  hello@xyz.studio
                </a>
              </div>
            </div>

            {/* WhatsApp Channel */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#111111] text-[22px] mt-0.5 shrink-0">
                chat
              </span>
              <div>
                <div className="text-[11px] font-mono tracking-widest text-[#737373] uppercase mb-1">
                  WHATSAPP
                </div>
                <a
                  href="https://wa.me/917306093151"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[15px] sm:text-base font-medium text-[#111111] hover:underline"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>

          {/* Confidentiality Note */}
          <div className="pt-10 sm:pt-12 max-w-[420px]">
            <div className="text-xs sm:text-sm font-semibold text-[#111111] mb-1.5">
              Confidentiality Assured
            </div>
            <p className="text-xs sm:text-[13px] text-[#737373] leading-relaxed">
              We are happy to sign standard Non-Disclosure Agreements (NDAs) prior to scoping technical IP or architectural specs.
            </p>
          </div>
        </div>

        {/* Right Side: Brutalist Form & Studio Location Map */}
        <div className="lg:col-span-7">
          <ContactForm />
          
          {/* Studio Location Map Box */}
          <div className="mt-8 sm:mt-10 border border-[#e5e5e5] bg-white overflow-hidden">
            <div className="p-4 sm:p-5 flex items-start gap-3 bg-white">
              <span className="material-symbols-outlined text-[#111111] text-[20px] mt-0.5 shrink-0">
                location_on
              </span>
              <div>
                <div className="text-[11px] font-mono tracking-widest text-[#737373] uppercase mb-0.5 font-medium">
                  STUDIO LOCATION
                </div>
                <div className="text-sm sm:text-base font-medium text-[#111111]">
                  Kochi, Kerala, India
                </div>
              </div>
            </div>
            
            <div className="h-[180px] sm:h-[220px] w-full relative pointer-events-none overflow-hidden border-t border-[#f0f0f0]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.74838634898!2d76.21443494541908!3d9.982342797672288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="absolute w-full h-[360px] -top-[70px] left-0"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.1) opacity(0.8)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location Kochi"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
