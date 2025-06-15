import React from 'react';
import { Brain, Camera, MessageSquare, Shield, Clock, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnosis",
      description: "Get instant, accurate diagnoses powered by advanced artificial intelligence technology."
    },
    {
      icon: Camera,
      title: "X-ray Analysis",
      description: "Upload and analyze X-ray images with our cutting-edge AI image recognition system."
    },
    {
      icon: MessageSquare,
      title: "24/7 Health Assistant",
      description: "Chat with our AI health assistant anytime for medical advice and information."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is encrypted and protected with enterprise-grade security."
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get immediate analysis and insights without waiting for appointments."
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Receive tailored health recommendations based on your medical history."
    }
  ];

  return (
    <div id="features" className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Experience healthcare like never before with our innovative features
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;