import React, { useState } from "react";
import { Badge } from "../ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

export default function ProcessFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do 2-week sprint cycles work?",
      answer: "We break project roadmaps into focused 2-week sprints. At the beginning of each sprint, we commit to specific deliverables in collaboration with your team. Every Friday, we deploy a working staging build for review, followed by milestone sign-off."
    },
    {
      question: "Can we request changes or adjust features mid-project?",
      answer: "Yes, absolutely. Our agile methodology is built for flexibility. Because we operate in 2-week sprints, we can easily adjust priorities, re-scope features, or pivot technical requirements without derailing the overall delivery timeline."
    },
    {
      question: "How do we communicate and track daily progress?",
      answer: "We set up a dedicated Slack/Teams channel directly with our lead developers and designers. You get asynchronous daily check-ins, access to real-time Kanban boards (Linear/Jira), and weekly video walkthroughs."
    },
    {
      question: "Who owns the code, repository, and design files?",
      answer: "You own 100% of all intellectual property, source code, Figma design files, and deployment configurations. Everything is committed directly to your private GitHub/GitLab repositories from Day 1."
    },
    {
      question: "What happens after the project launches?",
      answer: "We provide comprehensive architecture documentation, video handovers, and full administrative credentials. We also offer post-launch maintenance, performance monitoring, and retainer options to support ongoing feature scaling."
    }
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto py-20 border-t border-outline-variant">
      <div className="text-center mb-14">
        <Badge className="mb-4 mx-auto">Process FAQ</Badge>
        <h2 className="font-h1-mobile md:font-h2 text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="font-body-lg text-secondary max-w-xl mx-auto">
          Everything you need to know about partnering with our engineering team.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "bg-surface-bright border-primary/40 shadow-sm"
                  : "bg-white border-outline-variant/50 hover:border-outline-variant"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
              >
                <span className="font-subheading text-lg md:text-xl font-bold text-primary">
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-primary transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
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
                    <div className="px-6 md:px-8 pb-6 text-secondary font-body-md text-sm md:text-base leading-relaxed border-t border-outline-variant/30 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
