import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <Logo />
            <p className="mt-4 text-gray-600 text-sm">
              The Board of Technical Education, Uttar Pradesh is responsible for 
              conducting examinations and providing diplomas and certificates in 
              technical education across the state.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-[#1a237e] p-2 rounded-full text-white hover:bg-[#303f9f] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-[#1a237e] p-2 rounded-full text-white hover:bg-[#303f9f] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-[#1a237e] p-2 rounded-full text-white hover:bg-[#303f9f] transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="bg-[#1a237e] p-2 rounded-full text-white hover:bg-[#303f9f] transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1a237e]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#00796b] text-sm">About BTEUP</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-[#00796b] text-sm">Courses</Link>
              </li>
              <li>
                <Link to="/results" className="text-gray-600 hover:text-[#00796b] text-sm">Examination Results</Link>
              </li>
              <li>
                <Link to="/notifications" className="text-gray-600 hover:text-[#00796b] text-sm">Notifications</Link>
              </li>
              <li>
                <Link to="/downloads" className="text-gray-600 hover:text-[#00796b] text-sm">Downloads</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#00796b] text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1a237e]">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00796b] text-sm">Ministry of Education</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00796b] text-sm">AICTE</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00796b] text-sm">UP Government Portal</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00796b] text-sm">Technical Education Department</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00796b] text-sm">Scholarship Portal</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00796b] text-sm">RTI Portal</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1a237e]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#00796b] mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Board of Technical Education, Uttar Pradesh<br />
                  1-Guru Govind Singh Marg, Lucknow
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#00796b] mr-2 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-600 hover:text-[#00796b] text-sm">
                  +91 1234567890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-[#00796b] mr-2 flex-shrink-0" />
                <a href="mailto:info@bteup.in" className="text-gray-600 hover:text-[#00796b] text-sm">
                  info@bteup.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Board of Technical Education, Uttar Pradesh. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 text-sm text-gray-600">
              <Link to="/privacy-policy" className="hover:text-[#00796b] mr-4">Privacy Policy</Link>
              <Link to="/terms-of-use" className="hover:text-[#00796b] mr-4">Terms of Use</Link>
              <Link to="/sitemap" className="hover:text-[#00796b]">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;