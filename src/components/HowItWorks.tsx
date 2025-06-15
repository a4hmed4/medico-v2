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
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Our app gives you everything you need to take care of your health easily and securely.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {steps.map((step) => (
              <div key={step.title} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{step.title}</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;