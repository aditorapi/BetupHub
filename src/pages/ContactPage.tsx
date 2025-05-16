import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#1a237e] py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to us through the contact information below.
          </p>
        </div>
      </div>

      {/* Contact Information & Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="bg-[#1a237e] p-3 rounded-lg mr-4">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Our Address</h3>
                  <p className="text-gray-600">
                    Board of Technical Education, Uttar Pradesh<br />
                    1-Guru Govind Singh Marg, Lucknow - 226001<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-[#1a237e] p-3 rounded-lg mr-4">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone / Helpline</h3>
                  <p className="text-gray-600">
                    General Inquiries: <a href="tel:+911234567890" className="hover:text-[#00796b]">+91 1234567890</a><br />
                    Examination: <a href="tel:+911234567891" className="hover:text-[#00796b]">+91 1234567891</a><br />
                    Admission: <a href="tel:+911234567892" className="hover:text-[#00796b]">+91 1234567892</a>
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-[#1a237e] p-3 rounded-lg mr-4">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">
                    General Inquiries: <a href="mailto:info@bteup.in" className="hover:text-[#00796b]">info@bteup.in</a><br />
                    Examination: <a href="mailto:exam@bteup.in" className="hover:text-[#00796b]">exam@bteup.in</a><br />
                    Admission: <a href="mailto:admission@bteup.in" className="hover:text-[#00796b]">admission@bteup.in</a>
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-[#1a237e] p-3 rounded-lg mr-4">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday & Public Holidays: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-8 bg-gray-100 p-4 rounded-lg">
              <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-center p-4">
                  Map location would be displayed here. For privacy reasons, we're not embedding an actual map in this demo.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            
            {formSubmitted ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-700 mb-2">Thank You!</h3>
                <p className="text-green-600">
                  Your message has been received. We'll get back to you as soon as possible.
                </p>
                <button 
                  className="mt-4 text-[#00796b] hover:underline"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a237e] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a237e] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a237e] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a237e] focus:border-transparent"
                      required
                    >
                      <option value="">-- Select Subject --</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Admission">Admission</option>
                      <option value="Examination">Examination</option>
                      <option value="Result">Result</option>
                      <option value="Certificate">Certificate</option>
                      <option value="Technical Issue">Technical Issue</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a237e] focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#1a237e] hover:bg-[#303f9f] text-white py-2 px-6 rounded-md transition-colors duration-300 flex items-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">How can I check my examination result?</h3>
                <p className="text-gray-600 text-sm">
                  You can check your examination result on the BTEUP website by visiting the Results section. Enter your roll number and select the appropriate examination to view and download your result.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">What documents are required for admission?</h3>
                <p className="text-gray-600 text-sm">
                  For admission, you typically need to submit your 10th/12th mark sheet, transfer certificate, character certificate, domicile certificate, category certificate (if applicable), recent passport-size photographs, and Aadhaar card.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">How do I apply for a duplicate diploma certificate?</h3>
                <p className="text-gray-600 text-sm">
                  To apply for a duplicate diploma certificate, you need to submit an application along with an affidavit, FIR copy (in case of loss), payment of prescribed fee, and a copy of your original diploma certificate (if available) to the BTEUP office.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">When are the examinations usually conducted?</h3>
                <p className="text-gray-600 text-sm">
                  BTEUP typically conducts semester examinations twice a year - in May/June for even semesters and in November/December for odd semesters. The exact schedule is published on the official website before each examination period.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">How can I get my documents verified?</h3>
                <p className="text-gray-600 text-sm">
                  For document verification, you need to submit an application to the Verification Cell at BTEUP with the required fee. You can either visit in person or apply through post with all necessary documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;