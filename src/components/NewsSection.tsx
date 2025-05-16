import React from 'react';
import { Newspaper, ArrowRight, Calendar } from 'lucide-react';

type NewsItemProps = {
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  link: string;
};

const NewsItem: React.FC<NewsItemProps> = ({ title, date, excerpt, image, link }) => {
  return (
    <a 
      href={link}
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden mb-4"
    >
      <div className="flex flex-col md:flex-row">
        {image && (
          <div className="md:w-1/3">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-48 md:h-full object-cover"
            />
          </div>
        )}
        <div className={`p-4 ${image ? 'md:w-2/3' : 'w-full'}`}>
          <h3 className="font-medium text-gray-800 text-lg">{title}</h3>
          <div className="flex items-center text-gray-500 text-sm mt-1 mb-2">
            <Calendar size={14} className="mr-1" />
            {date}
          </div>
          <p className="text-gray-600 text-sm">{excerpt}</p>
          <div className="mt-2 text-[#00796b] hover:underline text-sm">Read more</div>
        </div>
      </div>
    </a>
  );
};

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      title: "BTEUP Partners with Industry Leaders for Advanced Diploma Programs",
      date: "June 12, 2025",
      excerpt: "The Board of Technical Education, Uttar Pradesh has signed MOUs with leading industry partners to enhance practical training for diploma students.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/news/1"
    },
    {
      title: "Governor Inaugurates Smart Classrooms in Government Polytechnic Colleges",
      date: "June 7, 2025",
      excerpt: "Over 50 government polytechnic colleges across Uttar Pradesh now equipped with smart classroom technology to enhance the learning experience.",
      link: "/news/2"
    },
    {
      title: "BTEUP Celebrates 75th Foundation Day with Cultural Programs",
      date: "May 30, 2025",
      excerpt: "Students and faculty from various polytechnic colleges participated in the celebration marking 75 years of technical education excellence.",
      link: "/news/3"
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Newspaper size={20} className="text-[#1a237e] mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Latest News</h2>
        </div>
        <a 
          href="/news" 
          className="text-[#00796b] hover:text-[#00695c] text-sm flex items-center"
        >
          View All
          <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div>
        {newsItems.map((news, index) => (
          <NewsItem key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;