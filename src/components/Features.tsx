import React from 'react';
import { FileText, Lock, UploadIcon, MessageSquare } from 'lucide-react';

const features = [
  {
    name: 'Digital Medical History',
    description: 'Keep your medical records safe and check them anytime, anywhere',
    icon: FileText,
  },
  {
    name: 'Scan Analysis',
    description: 'Get quick reports by uploading your medical scans.',
    icon: UploadIcon,
  },
  {
    name: 'Seamless Communication',
    description: 'Chat with our AI assistant and get the help you need.',
    icon: MessageSquare,
  },
  {
    name: 'Enterprise-grade Security',
    description: 'Your health data is safe and protected.',
    icon: Lock,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase"></h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Your Health, In Your Hands
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
          Our app gives you everything you need to take care of your health easily and securely.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;