import React from 'react';
import { BarChart3, Info } from 'lucide-react';

const Results = () => {
  return (
    <div id="results" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Proven Results
          </p>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            See how Medico performs in real-world scenarios with cutting-edge AI models.
          </p>
        </div>

        {/* Main Metrics */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 mx-auto text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Chatbot Accuracy</h3>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: '98%' }}></div>
              </div>
              <p className="mt-2 text-4xl font-bold text-blue-600">98%</p>
            </div>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Based on real symptom data using CatBoost.</p>
          </div>
          <div className="text-center">
            <BarChart3 className="h-12 w-12 mx-auto text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">X-Ray Report Quality</h3>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: '66.7%' }}></div>
              </div>
              <p className="mt-2 text-4xl font-bold text-blue-600">0.667</p>
            </div>
            <p className="mt-2 text-gray-500 dark:text-gray-400">BLEU Score with Beam Search using CheXNet.</p>
          </div>
        </div>

        {/* Dataset Info */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Trained on Real Data</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Our models were trained on the NLMCXR dataset (7,000+ X-ray images) and a real dataset of 360 X-rays collected from hospitals.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Results;