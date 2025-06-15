import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate is the AI diagnosis?",
      answer: "Our AI system has been trained on millions of medical cases and achieves over 95% accuracy in symptom-based diagnoses. However, it's always recommended to consult with healthcare professionals for critical conditions."
    },
    {
      question: "Is my medical data secure?",
      answer: "Yes, we use end-to-end encryption and follow strict security protocols to protect your health data. All information is stored securely and never shared with third parties without your consent."
    },
    {
      question: "What types of X-rays can the app analyze?",
      answer: "Our app can analyze various types of X-rays including chest X-rays, bone X-rays, and dental X-rays. The system is continuously learning to support more types of medical imaging."
    },
    {
      question: "How do I get started with Medico?",
      answer: "Simply download the app from our website, create an account, and follow the guided setup process. You can start using all features immediately after registration."
    },
    {
      question: "Is the app available for iOS devices?",
      answer: "Currently, Medico is available for Android devices. We're working on an iOS version that will be released soon."
    }
  ];

  return (
    <div id="faq" className="bg-gray-50 dark:bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about Medico
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'pb-4' : 'h-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-500 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 