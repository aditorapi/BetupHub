import React from 'react';
import { Bell, ArrowRight } from 'lucide-react';

type AnnouncementProps = {
  title: string;
  date: string;
  isNew?: boolean;
  link: string;
};

const Announcement: React.FC<AnnouncementProps> = ({ title, date, isNew, link }) => {
  return (
    <a 
      href={link}
      className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#1a237e] mb-3"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-gray-500 text-sm mt-1">Published on: {date}</p>
        </div>
        {isNew && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">NEW</span>
        )}
      </div>
    </a>
  );
};

const AnnouncementSection: React.FC = () => {
  const announcements = [
    {
      title: "Important Notice: Rescheduling of Diploma 2nd Semester Examinations",
      date: "June 10, 2025",
      isNew: true,
      link: "/announcements/1"
    },
    {
      title: "Release of Admit Cards for Final Year Students - June 2025 Examinations",
      date: "June 5, 2025",
      isNew: true,
      link: "/announcements/2"
    },
    {
      title: "Extension of Last Date for Registration of Odd Semester Examinations",
      date: "May 28, 2025",
      link: "/announcements/3"
    },
    {
      title: "Workshop on Industry 4.0 for Faculty Members - Registration Open",
      date: "May 20, 2025",
      link: "/announcements/4"
    },
    {
      title: "Guidelines for Online Practical Examination for 2024-25 Session",
      date: "May 15, 2025",
      link: "/announcements/5"
    }
  ];

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Bell size={20} className="text-[#1a237e] mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Important Announcements</h2>
        </div>
        <a 
          href="/announcements" 
          className="text-[#00796b] hover:text-[#00695c] text-sm flex items-center"
        >
          View All
          <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div>
        {announcements.map((announcement, index) => (
          <Announcement key={index} {...announcement} />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementSection;