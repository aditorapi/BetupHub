import React from 'react';
import { Award, Target, Users, School, BookOpen, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#1a237e] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About BTEUP</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            The Board of Technical Education, Uttar Pradesh (BTEUP) is committed to excellence in technical education, 
            fostering innovation, and developing skilled professionals for the nation.
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Our History</h2>
          <p className="text-gray-700 mb-6">
            Established in 1958, the Board of Technical Education, Uttar Pradesh has been at the forefront of 
            technical education in the state for over six decades. What began as a small department with a few 
            polytechnic colleges has now grown into a comprehensive board overseeing hundreds of technical 
            institutions across Uttar Pradesh.
          </p>
          <p className="text-gray-700 mb-6">
            Over the years, BTEUP has continuously evolved its curriculum and teaching methodologies to keep pace 
            with the changing industrial landscape and technological advancements. The board has played a crucial 
            role in developing the technical workforce of the state and contributing to the nation's growth.
          </p>
          <p className="text-gray-700">
            Today, BTEUP stands as a symbol of quality technical education, having produced thousands of 
            skilled professionals who have made significant contributions in various sectors both in India and 
            abroad.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-[#1a237e] p-2 rounded-full mr-3">
                    <Target size={24} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-gray-700">
                  To be a premier board of technical education fostering excellence, innovation, and ethical practices 
                  in technical education, producing globally competitive professionals who contribute to sustainable 
                  development of the nation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-[#00796b] p-2 rounded-full mr-3">
                    <Award size={24} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Provide quality technical education accessible to all sections of society</li>
                  <li>• Develop industry-relevant curriculum and teaching methodologies</li>
                  <li>• Foster innovation, research, and entrepreneurship among students</li>
                  <li>• Ensure continuous professional development of faculty and staff</li>
                  <li>• Strengthen industry-academia partnerships for practical training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">BTEUP at a Glance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <School size={40} className="text-[#1a237e] mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
            <div className="text-gray-600">Affiliated Institutions</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <Users size={40} className="text-[#1a237e] mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800 mb-2">2 Lakh+</div>
            <div className="text-gray-600">Students Enrolled</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <BookOpen size={40} className="text-[#1a237e] mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800 mb-2">40+</div>
            <div className="text-gray-600">Technical Programs</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <Calendar size={40} className="text-[#1a237e] mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800 mb-2">65+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                    <img
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Chairperson" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Dr. Rajesh Kumar</h3>
                    <p className="text-[#00796b] font-medium">Chairperson</p>
                    <p className="text-gray-600 text-sm mt-2">
                      Leading BTEUP's vision with over 25 years of experience in technical education and administration.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                    <img 
                      src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Secretary" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Dr. Priya Sharma</h3>
                    <p className="text-[#00796b] font-medium">Secretary</p>
                    <p className="text-gray-600 text-sm mt-2">
                      Overseeing the administrative functions with expertise in educational policy and governance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;