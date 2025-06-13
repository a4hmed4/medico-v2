import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "How does the smart diagnosis system work?",
    answer: "The system uses advanced AI technologies to analyze symptoms and X-ray images, achieving up to 98% accuracy in diagnosis."
  },
  {
    question: "Is my medical data secure?",
    answer: "Yes, we use advanced encryption technologies and comply with HIPAA standards to protect your medical data."
  },
  {
    question: "How long does the analysis take?",
    answer: "The system provides analysis results within minutes, including a detailed report of the condition."
  },
  {
    question: "Can I access my records anywhere?",
    answer: "Yes, you can securely access your medical records and analysis results from any device, anytime, anywhere."
  },
  {
    question: "What types of scans can be analyzed?",
    answer: "Currently, our system specializes in chest X-ray analysis, with plans to expand to other types of medical imaging in the future."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about Medico
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border dark:border-gray-700 rounded-lg">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600 dark:text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 