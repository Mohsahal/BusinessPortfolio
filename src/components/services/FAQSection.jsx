import React, { useState } from "react";
import { Badge } from "../ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "A standard MVP or prototype typically takes 4 to 8 weeks. Comprehensive production applications generally require 3 to 6 months depending on the feature set, integration complexity, and feedback cycles."
    },
    {
      question: "Who owns the code and intellectual property?",
      answer: "You do, 100%. Upon completion and final payment, we transfer full ownership of all source code, design files, and related intellectual property directly to your organization."
    },
    {
      question: "What is your preferred technology stack?",
      answer: "We specialize in modern, highly scalable ecosystems. Our core stack includes React/Next.js for the frontend, Node.js for microservices, and MongoDB/PostgreSQL for databases. We build on cloud infrastructure like AWS, Google Cloud, and Vercel."
    },
    {
      question: "Do you offer post-launch support or retainers?",
      answer: "Yes. Launching is just the beginning. We offer flexible post-launch SLA (Service Level Agreement) and retainer contracts to handle server maintenance, bug fixes, scaling operations, and continuous feature development."
    },
    {
      question: "How do you handle project management and communication?",
      answer: "We use a transparent, agile methodology. You will have a dedicated Slack channel with our engineering team, weekly milestone reviews over video call, and access to a centralized dashboard to track progress in real-time."
    }
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto py-24">
      <div className="mb-16 text-center">
        <Badge className="mb-6 mx-auto">FAQ</Badge>
        <h2 className="font-h2 text-4xl md:text-5xl text-primary font-bold tracking-tight mb-4">
          Common Questions
        </h2>
        <p className="font-body-md text-secondary max-w-2xl mx-auto">
          Everything you need to know about partnering with our engineering team.
        </p>
      </div>

      <div className="flex flex-col border-t border-outline-variant">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-outline-variant">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none group"
      >
        <h3 className="font-subheading text-lg md:text-2xl font-bold text-primary group-hover:text-primary/70 transition-colors">
          {question}
        </h3>
        <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-8 font-body-md md:text-lg text-secondary leading-relaxed font-light pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
