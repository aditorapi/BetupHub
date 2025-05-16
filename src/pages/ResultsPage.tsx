import React, { useState } from 'react';
import { Search, Download, CheckCircle, AlertCircle } from 'lucide-react';

const ResultsPage: React.FC = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [selectedExam, setSelectedExam] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [resultFound, setResultFound] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchPerformed(true);
    // This is a mock result - in a real application, this would be an API call
    setResultFound(rollNumber.length > 5 && selectedExam !== '');
  };

  const exams = [
    { id: 'sem1_2025', name: 'Semester 1 - 2025' },
    { id: 'sem2_2025', name: 'Semester 2 - 2025' },
    { id: 'sem3_2024', name: 'Semester 3 - 2024' },
    { id: 'sem4_2024', name: 'Semester 4 - 2024' },
    { id: 'sem5_2024', name: 'Semester 5 - 2024' },
    { id: 'sem6_2024', name: 'Semester 6 - 2024' },
    { id: 'supply_2024', name: 'Supplementary - 2024' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#1a237e] py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Examination Results</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Check your semester, annual, or supplementary examination results by entering your roll number below.
          </p>
        </div>
      </div>

      {/* Search Form */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Result Search</h2>
          
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Enter Roll Number
                </label>
                <input
                  type="text"
                  id="rollNumber"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a237e] focus:border-transparent"
                  placeholder="e.g., 2022ABC123"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="exam" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Examination
                </label>
                <select
                  id="exam"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a237e] focus:border-transparent"
                  value={selectedExam}
                  onChange={(e) => setSelectedExam(e.target.value)}
                  required
                >
                  <option value="">-- Select Examination --</option>
                  {exams.map((exam) => (
                    <option key={exam.id} value={exam.id}>
                      {exam.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#1a237e] hover:bg-[#303f9f] text-white py-2 px-6 rounded-md transition-colors duration-300 flex items-center"
              >
                <Search size={18} className="mr-2" />
                Search Result
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Results Section */}
      {searchPerformed && (
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-3xl mx-auto">
            {resultFound ? (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <CheckCircle size={24} className="text-green-500 mr-2" />
                  <h2 className="text-xl font-bold text-gray-800">Result Found</h2>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Student Name</p>
                      <p className="font-medium">Amit Kumar Singh</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Roll Number</p>
                      <p className="font-medium">{rollNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Enrollment Number</p>
                      <p className="font-medium">ENR2022987654</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Course</p>
                      <p className="font-medium">Diploma in Computer Science</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Examination</p>
                      <p className="font-medium">{exams.find(exam => exam.id === selectedExam)?.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Institute</p>
                      <p className="font-medium">Government Polytechnic, Lucknow</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-3">Subject-wise Marks</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-700">Subject Code</th>
                        <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-700">Subject Name</th>
                        <th className="py-2 px-4 border-b text-center text-sm font-medium text-gray-700">Max Marks</th>
                        <th className="py-2 px-4 border-b text-center text-sm font-medium text-gray-700">Marks Obtained</th>
                        <th className="py-2 px-4 border-b text-center text-sm font-medium text-gray-700">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b text-sm">CS101</td>
                        <td className="py-2 px-4 border-b text-sm">Programming Fundamentals</td>
                        <td className="py-2 px-4 border-b text-center text-sm">100</td>
                        <td className="py-2 px-4 border-b text-center text-sm">87</td>
                        <td className="py-2 px-4 border-b text-center text-sm text-green-600 font-medium">Pass</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b text-sm">CS102</td>
                        <td className="py-2 px-4 border-b text-sm">Database Management Systems</td>
                        <td className="py-2 px-4 border-b text-center text-sm">100</td>
                        <td className="py-2 px-4 border-b text-center text-sm">75</td>
                        <td className="py-2 px-4 border-b text-center text-sm text-green-600 font-medium">Pass</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b text-sm">CS103</td>
                        <td className="py-2 px-4 border-b text-sm">Computer Networks</td>
                        <td className="py-2 px-4 border-b text-center text-sm">100</td>
                        <td className="py-2 px-4 border-b text-center text-sm">82</td>
                        <td className="py-2 px-4 border-b text-center text-sm text-green-600 font-medium">Pass</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b text-sm">CS104</td>
                        <td className="py-2 px-4 border-b text-sm">Operating Systems</td>
                        <td className="py-2 px-4 border-b text-center text-sm">100</td>
                        <td className="py-2 px-4 border-b text-center text-sm">78</td>
                        <td className="py-2 px-4 border-b text-center text-sm text-green-600 font-medium">Pass</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b text-sm">CS105</td>
                        <td className="py-2 px-4 border-b text-sm">Web Technologies</td>
                        <td className="py-2 px-4 border-b text-center text-sm">100</td>
                        <td className="py-2 px-4 border-b text-center text-sm">90</td>
                        <td className="py-2 px-4 border-b text-center text-sm text-green-600 font-medium">Pass</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 bg-gray-50 p-4 rounded-md">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Total Marks</p>
                      <p className="font-medium">412/500</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Percentage</p>
                      <p className="font-medium">82.4%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">SGPA</p>
                      <p className="font-medium">8.24</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Division</p>
                      <p className="font-medium">First Division</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <button className="bg-[#00796b] hover:bg-[#00695c] text-white py-2 px-6 rounded-md transition-colors duration-300 flex items-center">
                    <Download size={18} className="mr-2" />
                    Download Result
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <AlertCircle size={24} className="text-red-500 mr-2" />
                  <h2 className="text-xl font-bold text-gray-800">No Result Found</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  We couldn't find any results matching your search criteria. Please check the roll number and selected examination and try again.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-yellow-700">
                    <span className="font-bold">Note:</span> If you believe this is an error, please contact your institute administrator or the BTEUP helpdesk for assistance.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Latest Results Section */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Recently Declared Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1a237e]">
              <h3 className="font-medium text-gray-800">Diploma 2nd Semester (Regular) - 2025</h3>
              <p className="text-gray-500 text-sm mt-1">Declared on: June 10, 2025</p>
              <a href="#" className="text-[#00796b] hover:underline text-sm mt-2 inline-block">
                View Details
              </a>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1a237e]">
              <h3 className="font-medium text-gray-800">Diploma 4th Semester (Regular) - 2025</h3>
              <p className="text-gray-500 text-sm mt-1">Declared on: June 5, 2025</p>
              <a href="#" className="text-[#00796b] hover:underline text-sm mt-2 inline-block">
                View Details
              </a>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1a237e]">
              <h3 className="font-medium text-gray-800">Diploma 6th Semester (Regular) - 2025</h3>
              <p className="text-gray-500 text-sm mt-1">Declared on: May 28, 2025</p>
              <a href="#" className="text-[#00796b] hover:underline text-sm mt-2 inline-block">
                View Details
              </a>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1a237e]">
              <h3 className="font-medium text-gray-800">Supplementary Examination Results - 2025</h3>
              <p className="text-gray-500 text-sm mt-1">Declared on: May 15, 2025</p>
              <a href="#" className="text-[#00796b] hover:underline text-sm mt-2 inline-block">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;