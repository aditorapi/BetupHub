import React, { useState } from 'react';
import { Search, BookOpen, Clock, Users, Calendar, Briefcase } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  duration: string;
  eligibility: string;
  seats: number;
  intake: string;
  description: string;
  career: string;
  image: string;
  category: string;
}

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses: Course[] = [
    {
      id: "cs",
      title: "Diploma in Computer Science & Engineering",
      duration: "3 Years (6 Semesters)",
      eligibility: "10th Pass with Mathematics and Science",
      seats: 60,
      intake: "July/August",
      description: "The Computer Science & Engineering program equips students with knowledge of computer programming, networking, database management, and software development.",
      career: "Software Developer, Network Administrator, System Analyst, Database Administrator",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "engineering"
    },
    {
      id: "me",
      title: "Diploma in Mechanical Engineering",
      duration: "3 Years (6 Semesters)",
      eligibility: "10th Pass with Mathematics and Science",
      seats: 60,
      intake: "July/August",
      description: "The Mechanical Engineering program focuses on design, manufacturing, and maintenance of mechanical systems, thermal engineering, and industrial engineering principles.",
      career: "Mechanical Engineer, Production Engineer, CAD Designer, Maintenance Engineer",
      image: "https://images.pexels.com/photos/3846253/pexels-photo-3846253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "engineering"
    },
    {
      id: "ee",
      title: "Diploma in Electrical Engineering",
      duration: "3 Years (6 Semesters)",
      eligibility: "10th Pass with Mathematics and Science",
      seats: 60,
      intake: "July/August",
      description: "The Electrical Engineering program covers electrical machines, power systems, control systems, and electrical measurements and instrumentation.",
      career: "Electrical Engineer, Power Plant Operator, Control System Engineer, Electrical Supervisor",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "engineering"
    },
    {
      id: "ce",
      title: "Diploma in Civil Engineering",
      duration: "3 Years (6 Semesters)",
      eligibility: "10th Pass with Mathematics and Science",
      seats: 60,
      intake: "July/August",
      description: "The Civil Engineering program focuses on design, construction, and maintenance of infrastructure like buildings, roads, bridges, and water systems.",
      career: "Civil Engineer, Site Supervisor, Structural Designer, Quantity Surveyor",
      image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "engineering"
    },
    {
      id: "ec",
      title: "Diploma in Electronics & Communication Engineering",
      duration: "3 Years (6 Semesters)",
      eligibility: "10th Pass with Mathematics and Science",
      seats: 60,
      intake: "July/August",
      description: "The Electronics & Communication Engineering program covers electronic circuits, communication systems, microprocessors, and signal processing.",
      career: "Electronics Engineer, Communication Engineer, Technical Support Specialist, R&D Engineer",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "engineering"
    },
    {
      id: "phrm",
      title: "Diploma in Pharmacy",
      duration: "2 Years",
      eligibility: "12th Pass with Physics, Chemistry, and Biology/Mathematics",
      seats: 60,
      intake: "July/August",
      description: "The Pharmacy program focuses on pharmaceutical sciences, drug formulation, pharmacology, and pharmacy management.",
      career: "Pharmacist, Quality Control Analyst, Pharmaceutical Sales Representative",
      image: "https://images.pexels.com/photos/139398/pexels-photo-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "pharmacy"
    },
    {
      id: "arch",
      title: "Diploma in Architectural Assistantship",
      duration: "3 Years (6 Semesters)",
      eligibility: "10th Pass with Mathematics",
      seats: 40,
      intake: "July/August",
      description: "The Architectural Assistantship program covers architectural drawing, building construction, history of architecture, and building materials.",
      career: "Architectural Assistant, Draftsman, Interior Designer, 3D Visualizer",
      image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "architecture"
    },
    {
      id: "it",
      title: "Diploma in Information Technology",
      duration: "3 Years (6 Semesters)",
      eligibility: "10th Pass with Mathematics and Science",
      seats: 60,
      intake: "July/August",
      description: "The Information Technology program focuses on software development, web technologies, networking, and database management systems.",
      career: "Web Developer, IT Support Specialist, Network Administrator, Database Developer",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "engineering"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'pharmacy', name: 'Pharmacy' },
    { id: 'architecture', name: 'Architecture' }
  ];

  const filteredCourses = courses.filter(course => {
    return (
      (selectedCategory === 'all' || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#1a237e] py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Courses</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Explore our wide range of diploma programs designed to equip you with industry-relevant skills and knowledge.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a237e] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={20} className="absolute right-3 top-3 text-gray-400" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`py-2 px-4 rounded-md transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-[#1a237e] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
                  
                  <div className="flex flex-col space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock size={16} className="text-[#00796b] mr-2" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <BookOpen size={16} className="text-[#00796b] mr-2" />
                      <span>Eligibility: {course.eligibility}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users size={16} className="text-[#00796b] mr-2" />
                      <span>Seats: {course.seats}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar size={16} className="text-[#00796b] mr-2" />
                      <span>Intake: {course.intake}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-start text-gray-600 text-sm">
                      <Briefcase size={16} className="text-[#00796b] mr-2 mt-0.5" />
                      <span><span className="font-medium">Career Prospects:</span> {course.career}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={`/courses/${course.id}`}
                    className="bg-[#1a237e] hover:bg-[#303f9f] text-white py-2 px-4 rounded-md transition-colors duration-300 inline-block text-sm"
                  >
                    View Course Details
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-600">No courses found matching your search criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4 bg-[#1a237e] hover:bg-[#303f9f] text-white py-2 px-6 rounded-md transition-colors duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Admission Process Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Admission Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300 hidden sm:block"></div>
              
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-16 mb-4 sm:mb-0">
                    <div className="bg-[#1a237e] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold relative z-10">1</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Application Submission</h3>
                    <p className="text-gray-600 text-sm">
                      Register and submit your application form online through the BTEUP portal. Make sure to provide all required information and documents.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-16 mb-4 sm:mb-0">
                    <div className="bg-[#1a237e] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold relative z-10">2</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Document Verification</h3>
                    <p className="text-gray-600 text-sm">
                      Visit your chosen institute for physical verification of your original documents as per the scheduled date and time.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-16 mb-4 sm:mb-0">
                    <div className="bg-[#1a237e] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold relative z-10">3</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Merit List & Counseling</h3>
                    <p className="text-gray-600 text-sm">
                      Check the merit list published on the BTEUP website. Attend counseling sessions according to your merit rank for course and institute allocation.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-16 mb-4 sm:mb-0">
                    <div className="bg-[#1a237e] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold relative z-10">4</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Fee Payment</h3>
                    <p className="text-gray-600 text-sm">
                      Pay the admission fee online through the provided payment gateway to confirm your admission.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-16 mb-4 sm:mb-0">
                    <div className="bg-[#1a237e] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold relative z-10">5</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Confirmation & Enrollment</h3>
                    <p className="text-gray-600 text-sm">
                      After fee payment, you'll receive a confirmation letter. Report to your allotted institute on the specified date to complete the enrollment process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="/admissions"
                className="bg-[#00796b] hover:bg-[#00695c] text-white py-2 px-6 rounded-md transition-colors duration-300 inline-block"
              >
                Apply for Admission
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;