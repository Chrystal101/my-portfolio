'use client';

import { Download, FileText, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // Method 1: Try direct download
    try {
      const link = document.createElement('a');
      link.href = '/resume/Chrystal_Resume.pdf';
      link.download = 'Chrystal_Resume.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Add to DOM, click, then remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // Method 2: Fallback to opening in new tab
      window.open('/resume/Chrystal_Resume.pdf', '_blank');
    }
  };

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-xl text-gray-600">Download my professional resume</p>


        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Preview Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <FileText className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900">Professional Resume</h3>
              </div>
              <button
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
              
              {/* Alternative: Open in new tab */}
              <a
                href="/resume/Chrystal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span>View PDF</span>
              </a>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">jelly12138@outlook.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">Available upon request</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">Toronto, ON, Canada</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">linkedin.com/in/Chrystal101</span>
              </div>
            </div>

            {/* Skills Summary */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git', 'AWS'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Summary */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Recent Experience</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h5 className="font-medium text-gray-900">Software Engineer</h5>
                  <p className="text-gray-600">Full-stack development with React and Node.js • 2023 - Present</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h5 className="font-medium text-gray-900">Frontend Developer</h5>
                  <p className="text-gray-600">React development and responsive design • 2021 - 2023</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Resume; 