import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="bg-[#1a237e] p-2 rounded-md">
        <GraduationCap size={28} className="text-white" />
      </div>
      <div>
        <div className="text-xl font-bold text-[#1a237e]">BTEUP</div>
        <div className="text-xs text-gray-500 hidden sm:block">Board of Technical Education, Uttar Pradesh</div>
      </div>
    </Link>
  );
};

export default Logo;