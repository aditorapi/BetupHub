import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

type EventProps = {
  title: string;
  date: string;
  time: string;
  location: string;
  link: string;
};

const Event: React.FC<EventProps> = ({ title, date, time, location, link }) => {
  return (
    <a 
      href={link}
      className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#00796b] mb-4"
    >
      <h3 className="font-medium text-gray-800">{title}</h3>
      <div className="mt-2 space-y-1">
        <div className="flex items-center text-gray-600 text-sm">
          <Calendar size={14} className="text-[#00796b] mr-2" />
          {date}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <Clock size={14} className="text-[#00796b] mr-2" />
          {time}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin size={14} className="text-[#00796b] mr-2" />
          {location}
        </div>
      </div>
    </a>
  );
};

const EventsSection: React.FC = () => {
  const events = [
    {
      title: "Annual Technical Symposium 2025",
      date: "July 15-17, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "BTEUP Auditorium, Lucknow",
      link: "/events/1"
    },
    {
      title: "Workshop on Renewable Energy Technologies",
      date: "June 25, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Government Polytechnic, Gorakhpur",
      link: "/events/2"
    },
    {
      title: "Career Counseling Session for Final Year Students",
      date: "June 20, 2025",
      time: "11:00 AM - 1:00 PM",
      location: "Online (Zoom)",
      link: "/events/3"
    },
    {
      title: "Faculty Development Program on AI & Machine Learning",
      date: "June 15-18, 2025",
      time: "9:30 AM - 4:30 PM",
      location: "BTEUP Training Center, Lucknow",
      link: "/events/4"
    }
  ];

  return (
    <div className="bg-gray-50 p-5 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Calendar size={20} className="text-[#1a237e] mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Upcoming Events</h2>
        </div>
        <a 
          href="/events" 
          className="text-[#00796b] hover:text-[#00695c] text-sm flex items-center"
        >
          View All
          <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div>
        {events.map((event, index) => (
          <Event key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsSection;