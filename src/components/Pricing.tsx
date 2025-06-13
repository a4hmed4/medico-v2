import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for getting started',
    features: [
      'Limited medical record storage',
      'Basic AI-based scan analysis (up to 3 scans/month)',
      'Limited appointment scheduling',
      'Email support',
    ],
  },
  {
    name: 'Premium',
    price: '29',
    description: 'For advanced healthcare management',
    features: [
      'Unlimited medical record storage',
      'Unlimited AI-based scan analysis',
      'Priority appointment scheduling',
      'Advanced health analytics',
      '24/7 priority support',
      'Custom health reports',
      'Family account management',
      'Emergency telemedicine',
    ],
  },
];


const Pricing = () => {
  return (
    <div id="pricing" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Choose the right plan for you
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Start for free and upgrade when you need more features.
          </p>
        </div>

        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {plans.map((plan) => (
            <div key={plan.name} className="relative p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-5xl font-extrabold tracking-tight">${plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6 text-gray-500 dark:text-gray-400">{plan.description}</p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-blue-500" aria-hidden="true" />
                      <span className="ml-3 text-gray-500 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                  plan.name === 'Premium'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800'
                }`}
              >
                {plan.name === 'Free' ? 'Get started' : 'Upgrade now'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;