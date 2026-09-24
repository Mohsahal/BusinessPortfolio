import React, { useState } from "react";
import Button from "../ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    details: ""
  });

  const [status, setStatus] = useState("idle");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const servicesList = [
    { value: "custom", label: "Custom Software Development" },
    { value: "automation", label: "Process Automation" },
    { value: "consulting", label: "Technical Consulting" },
    { value: "other", label: "Other" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      let numericValue = value.replace(/\D/g, "");
      if (numericValue.startsWith("91") && numericValue.length > 10) {
        numericValue = numericValue.slice(2);
      }
      numericValue = numericValue.slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const payload = {
        ...formData,
        phone: formData.phone ? `+91 ${formData.phone}` : ""
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        console.error("API Error:", data.error);
        setStatus("error");
        alert(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus("error");
      alert("A network error occurred. Please try again later.");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      businessName: "",
      email: "",
      phone: "",
      service: "",
      details: ""
    });
    setStatus("idle");
  };

  const inputStyles = "w-full bg-[#EDE6DC] text-[#141414] rounded-none px-4 py-3.5 text-sm border border-[#DFD7CA] hover:border-[#631B27] focus:border-[#631B27] focus:ring-1 focus:ring-[#631B27]/30 focus:outline-none focus:bg-[#E5DDD0] transition-all duration-200 placeholder:text-[#8C8276]";
  const labelStyles = "text-[11px] font-mono font-semibold tracking-wider text-[#6A6258] uppercase block mb-2";

  return (
    <div className="relative w-full">
      {status === "success" ? (
        <div className="text-center py-16 px-6 bg-[#EDE6DC] border border-[#DFD7CA] space-y-6">
          <div className="w-16 h-16 bg-[#EDE6DC] border border-[#DFD7CA] rounded-full flex items-center justify-center mx-auto text-[#631B27]">
            <span className="material-symbols-outlined text-3xl">check</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#141414] tracking-tight">
            Inquiry Received
          </h3>
          <p className="text-sm sm:text-base text-[#6A6258] max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-[#141414]">{formData.name}</span>. Our technical architects will review your project requirements and respond within 24 hours.
          </p>
          <button
            onClick={resetForm}
            className="bg-[#631B27] hover:bg-[#782231] text-[#F5F1EA] px-6 py-3 text-sm font-medium rounded-none border border-[#782231] transition-colors inline-block cursor-pointer shadow-sm"
          >
            Submit Another Project
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: Name & Business Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className={labelStyles}>Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={inputStyles}
              />
            </div>
            <div>
              <label className={labelStyles}>Business Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Acme Corp"
                className={inputStyles}
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className={labelStyles}>Email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@acme.com"
                className={inputStyles}
              />
            </div>
            <div>
              <label className={labelStyles}>Phone / WhatsApp</label>
              <div className="flex items-stretch w-full group">
                <span className="inline-flex items-center justify-center px-3.5 bg-[#EDE6DC] text-[#141414] border border-r-0 border-[#DFD7CA] group-hover:border-[#631B27]/40 text-xs sm:text-sm font-mono font-bold select-none shrink-0 tracking-wider transition-colors">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="98765 43210"
                  className={`${inputStyles} rounded-none border-l-0 flex-1`}
                />  
              </div>
            </div>
          </div>

          {/* Row 3: Service Required */}
          <div>
            <label className={labelStyles}>Service Required</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`${inputStyles} flex items-center justify-between cursor-pointer w-full text-left`}
              >
                <span className={formData.service ? "text-[#141414]" : "text-[#8C8276]"}>
                  {formData.service 
                    ? servicesList.find(s => s.value === formData.service)?.label 
                    : "Select a service..."}
                </span>
                <span className={`material-symbols-outlined text-[#631B27] text-xl transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>

              {isDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsDropdownOpen(false)}
                  ></div>
                  <div className="absolute top-full left-0 right-0 mt-1 bg-[#EDE6DC] border border-[#DFD7CA] shadow-2xl z-50">
                    <ul className="py-1 divide-y divide-[#EBE3D7]">
                      {servicesList.map((svc) => (
                        <li key={svc.value}>
                          <button
                            type="button"
                            onClick={() => {
                              handleChange({ target: { name: 'service', value: svc.value }});
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#EDE6DC] transition-colors text-[#141414] ${formData.service === svc.value ? 'bg-[#EDE6DC] font-semibold text-[#631B27]' : ''}`}
                          >
                            {svc.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Row 4: Project Details */}
          <div>
            <label className={labelStyles}>Project Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your goals, timeline, and any specific requirements..."
              className={`${inputStyles} resize-y min-h-[110px] leading-relaxed`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-1">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-[#631B27] hover:bg-[#782231] text-[#F5F1EA] px-7 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2.5 rounded-none border border-[#782231] shadow-lg shadow-[#631B27]/20 transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
              <span className="material-symbols-outlined text-[17px] -rotate-45 -mt-0.5">send</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
