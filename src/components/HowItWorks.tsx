import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Get started with Medico in three simple steps
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Download the App</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Get our app from MediaFire and install it on your device
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Create Your Account</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Sign up with your email and set up your profile
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Start Using Medico</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Begin your healthcare journey with AI-powered diagnosis
            </p>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://www.mediafire.com/file/your-app-file/app.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download App Now
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Available for Android devices
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;