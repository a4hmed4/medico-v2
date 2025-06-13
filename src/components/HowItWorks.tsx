import React from 'react';
import { UserPlus, ClipboardList, Bot, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: 'Create Your Account',
    description: 'Sign up in minutes and complete your health profile.',
    icon: UserPlus,
  },
  {
    title: 'Upload Scans',
    description: 'View and manage your health records anytime, anywhere.',
    icon: ClipboardList,
  },
  {
    title: 'Connect with ChatBot',
    description: 'Get instant insights and answers about your health.',
    icon: Bot,
  },
  {
    title: 'Get Premium Benefits',
    description: 'We securely store your medical data so you can access it whenever you need.',
    icon: ShieldCheck,
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Start your healthcare journey in 4 simple steps
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {steps.map((step, indeex) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                    <step.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg leading-6 font-medium text-gray-900 dark:text-white text-center">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;