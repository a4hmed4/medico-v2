import React from "react";
import { Download, Smartphone, Shield, Zap } from "lucide-react";

// Declare gtag as a global variable if it exists on the window object
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
const gtag = typeof window !== "undefined" ? window.gtag : undefined;

const DownloadSection: React.FC = () => {
  return (
    <div
      id="download"
      className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Download Medico App
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Experience the future of healthcare in your pocket. Get instant
            AI-powered diagnoses and X-ray analysis anytime, anywhere.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
              <Smartphone className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">
              Easy to Use
            </h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Simple and intuitive interface for seamless healthcare experience
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">
              Secure & Private
            </h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Your health data is encrypted and protected with advanced security
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">
              Instant Results
            </h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Get AI-powered analysis and insights in seconds
            </p>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-16 text-center">
          <div className="inline-flex rounded-md shadow-lg">
            <a
              href="https://www.mediafire.com/file/4fhptuujsg1pr07/medico.apk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof gtag === "function") {
                  gtag("event", "download_click", {
                    event_category: "button",
                    event_label: "Download for Android",
                  });
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <Download className="mr-3 h-6 w-6" />
              Download for Android
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Version 1.0.0 • 35MB • Android 6.0 and up
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
