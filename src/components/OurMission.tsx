import React from 'react';
import { Heart, Globe, Target } from 'lucide-react';

const OurMission: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Our Mission
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Making healthcare accessible, efficient, and personalized for everyone
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Vision 1 */}
          <div className="relative p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Patient-Centric Care</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Putting patients first by providing personalized healthcare solutions that meet their unique needs
            </p>
          </div>

          {/* Vision 2 */}
          <div className="relative p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Global Accessibility</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Making quality healthcare accessible to everyone, anywhere in the world
            </p>
          </div>

          {/* Vision 3 */}
          <div className="relative p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Innovation & Excellence</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Continuously improving our technology to provide the best possible healthcare solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission; 