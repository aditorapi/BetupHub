import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const AboutUsSection: React.FC = () => {
  const keyPoints = [
    "Providing quality technical education to students across Uttar Pradesh",
    "Affiliated with over 500 polytechnic colleges across the state",
    "Industry-aligned curriculum focusing on practical skills",
    "Dedicated to improving employability of diploma holders",
    "Regular faculty development programs and workshops"
  ];

  return (
    <div className="bg-[#1a237e] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">About BTEUP</h2>
            <p className="text-blue-100 mb-6">
              The Board of Technical Education, Uttar Pradesh was established in 1958 as a statutory body to regulate and develop technical education in the state. For over six decades, we have been at the forefront of technical education, producing skilled professionals across various disciplines.
            </p>
            
            <ul className="space-y-3 mb-6">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-[#4fc3f7] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100">{point}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="/about" 
              className="inline-flex items-center bg-white text-[#1a237e] py-2 px-6 rounded-md hover:bg-blue-50 transition-colors duration-300"
            >
              Learn More
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="BTEUP Campus" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#00796b] text-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
              <p className="text-sm font-medium">
                "Our mission is to create industry-ready technical professionals through quality education and practical training."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;