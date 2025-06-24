import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#3B82F6] text-white shadow-lg sticky top-0 z-50 w-full px-2"
    >
      <div className="max-w-full mx-auto">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12.75L11.25 15L15 9.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2"/>
              </svg>
              <span className="hover:text-[#F3F4F6] transition-colors">CVAI</span>
            </Link>
          </div>
          
          {/* Nav Items */}
          <div className="hidden md:flex items-center space-x-5 text-base font-medium">
            <Link to="/analyze" title="Get in-depth structure & insights from your CV using AI." className="hover:text-[#F3F4F6] transition-colors px-2 py-1">
              Analyze
            </Link>
            <Link to="/match" title="See how your CV matches a job description. Discover missing or matching skills." className="hover:text-[#F3F4F6] transition-colors px-2 py-1">
              Match
            </Link>
            <Link to="/improve" title="Enhance clarity, formatting, and keyword strength instantly." className="hover:text-[#F3F4F6] transition-colors px-2 py-1">
              Improve
            </Link>
            <Link to="/tailor" title="Customize your CV specifically for a job posting with smart suggestions." className="hover:text-[#F3F4F6] transition-colors px-2 py-1">
              Tailor
            </Link>
            <Link to="/build" title="Create your CV from scratch using AI guidance." className="hover:text-[#F3F4F6] transition-colors px-2 py-1">
              Build CV
            </Link>
            <Link to="/export" title="Generate a styled, ATS-optimized PDF version of your CV." className="hover:text-[#F3F4F6] transition-colors px-2 py-1">
              Export PDF
            </Link>
            <Link to="/storage" title="Access and manage saved CVs securely in your dashboard." className="hover:text-[#F3F4F6] transition-colors px-2 py-1">
              Storage
            </Link>
          </div>

          {/* Auth + CTA */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-base font-medium hover:text-[#F3F4F6] transition-colors">
              Sign In
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#10B981] text-white px-5 py-2 rounded-md font-semibold shadow-sm hover:bg-[#0ea271] transition-colors text-base"
            >
              Create Resume
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
