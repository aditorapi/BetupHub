import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavLinksProps {
  isMobile?: boolean;
}

interface SubMenu {
  title: string;
  link: string;
}

interface MenuItem {
  title: string;
  link: string;
  subMenus?: SubMenu[];
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile = false }) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const menuItems: MenuItem[] = [
    { title: 'Home', link: '/' },
    { 
      title: 'About Us', 
      link: '/about',
      subMenus: [
        { title: 'Vision & Mission', link: '/about/vision-mission' },
        { title: 'Organization Structure', link: '/about/organization' },
        { title: 'Board Members', link: '/about/board-members' },
      ] 
    },
    { 
      title: 'Academics', 
      link: '/academics',
      subMenus: [
        { title: 'Courses', link: '/courses' },
        { title: 'Academic Calendar', link: '/academics/calendar' },
        { title: 'Syllabus', link: '/academics/syllabus' },
      ] 
    },
    { 
      title: 'Examinations', 
      link: '/examinations',
      subMenus: [
        { title: 'Results', link: '/results' },
        { title: 'Time Table', link: '/examinations/timetable' },
        { title: 'Admit Cards', link: '/examinations/admit-cards' },
      ] 
    },
    { title: 'Notifications', link: '/notifications' },
    { title: 'Contact', link: '/contact' },
  ];

  const handleDropdownToggle = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  if (isMobile) {
    return (
      <>
        {menuItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-2">
            {item.subMenus ? (
              <>
                <div 
                  className="flex justify-between items-center py-2"
                  onClick={() => handleDropdownToggle(index)}
                >
                  <span className="font-medium">{item.title}</span>
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                  />
                </div>
                {activeDropdown === index && (
                  <div className="pl-4 mt-2 flex flex-col space-y-2">
                    {item.subMenus.map((subItem, subIndex) => (
                      <Link 
                        key={subIndex} 
                        to={subItem.link}
                        className="text-gray-700 py-1 hover:text-[#00796b]"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link 
                to={item.link}
                className="block py-2 font-medium hover:text-[#00796b]"
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </>
    );
  }

  return (
    <ul className="flex space-x-8">
      {menuItems.map((item, index) => (
        <li key={index} className="relative group">
          {item.subMenus ? (
            <>
              <div className="flex items-center cursor-pointer space-x-1 py-2">
                <Link 
                  to={item.link}
                  className="font-medium hover:text-[#00796b] transition-colors duration-200"
                >
                  {item.title}
                </Link>
                <ChevronDown size={16} />
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 origin-top">
                {item.subMenus.map((subItem, subIndex) => (
                  <Link 
                    key={subIndex} 
                    to={subItem.link}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00796b]"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <Link 
              to={item.link}
              className="font-medium hover:text-[#00796b] transition-colors duration-200 py-2 block"
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;