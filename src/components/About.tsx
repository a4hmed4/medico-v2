import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Mission
          </p>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Founded in 2025, Medico is revolutionizing healthcare by leveraging AI and medical imaging to provide accessible,
            accurate, and user-friendly diagnostics. 
            Our mission is to bridge the gap between patients and providers, 
            especially in underserved areas, through fast, AI-driven insights. 
            With a team of healthcare professionals and AI experts, 
            we tackle challenges like diagnostic delays and high costs to enhance patient outcomes. 
            Our vision is a future where managing health is effortless, 
            empowering individuals with cutting-edge technology while ensuring data security and patient-centric innovation.
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;
