import React from 'react';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Ahmed Mahmoud",
    role: "Radiologist",
    comment: "Medico has transformed my workflow completely. The analysis accuracy and speed of results are truly remarkable.",
    rating: 5
  },
  {
    name: "Sara Abdulrahman",
    role: "Patient",
    comment: "The ease of use and accurate results have made managing my health journey much simpler and more efficient.",
    rating: 5
  },
  {
    name: "Dr. Layla Hassan",
    role: "General Practitioner",
    comment: "An excellent tool for initial diagnosis and prioritizing urgent cases. Highly recommended for healthcare professionals.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Real experiences from doctors and patients
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <User className="h-12 w-12 text-blue-600 p-2 bg-blue-100 rounded-full" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 