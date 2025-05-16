import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, User, Calendar, BookOpen, Award, Download } from 'lucide-react';

type QuickLinkProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  iconBgColor: string;
};

const QuickLink: React.FC<QuickLinkProps> = ({ title, description, icon, link, iconBgColor }) => {
  return (
    <Link to={link} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
      <div className={`${iconBgColor} p-3 rounded-full mb-3 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="font-semibold text-gray-800 text-center">{title}</h3>
      <p className="text-gray-600 text-sm text-center mt-1">{description}</p>
    </Link>
  );
};

const QuickLinks: React.FC = () => {
  const links = [
    {
      title: "Results",
      description: "Check examination results",
      icon: <FileText size={24} className="text-white" />,
      link: "/results",
      iconBgColor: "bg-[#1a237e]"
    },
    {
      title: "Student Portal",
      description: "Login to your account",
      icon: <User size={24} className="text-white" />,
      link: "/login",
      iconBgColor: "bg-[#00796b]"
    },
    {
      title: "Exam Schedule",
      description: "View upcoming exams",
      icon: <Calendar size={24} className="text-white" />,
      link: "/examinations/timetable",
      iconBgColor: "bg-[#d32f2f]"
    },
    {
      title: "Courses",
      description: "Explore diploma programs",
      icon: <Award size={24} className="text-white" />,
      link: "/courses",
      iconBgColor: "bg-[#0277bd]"
    },
    {
      title: "Study Materials",
      description: "Apply for certificates",
      icon: <BookOpen size={24} className="text-white" />,
      link: "/certificates",
      iconBgColor: "bg-[#7b1fa2]"
    },
    {
      title: "Downloads",
      description: "Forms & Important documents",
      icon: <Download size={24} className="text-white" />,
      link: "/downloads",
      iconBgColor: "bg-[#f57c00]"
    }
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map((link, index) => (
            <QuickLink key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;