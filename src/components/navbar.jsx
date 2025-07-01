import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid'; // 👈 import Heroicon

const routeColors = {
  '/analyze': '#0091e3',
  '/improve': '#0091e3',
  '/match': '#0091e3',
  '/tailor': '#0091e3',
  '/build': '#0091e3',
  '/feedback': '#0091e3',
  '/storage': '#0091e3',
  '/login': '#3B82F6',
  '/': '#0091e3'
};

const Navbar = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = useState(routeColors['/']);

  useEffect(() => {
    setBgColor(routeColors[location.pathname] || '#3B82F6');
  }, [location.pathname]);

  return (
    <motion.nav
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 0.6 }}
      className="text-white shadow-lg sticky top-0 z-50 w-full px-2"
    >
      <div className="max-w-full mx-auto">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M9 12.75L11.25 15L15 9.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2"/>
              </svg>
              <span className="hover:text-[#F3F4F6] transition-colors">CVAI</span>
            </Link>
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center space-x-5 text-base font-medium">
            <Link to="/analyze" className="hover:text-[#F3F4F6] transition-colors px-2 py-1">Analyze</Link>
            <Link to="/match" className="hover:text-[#F3F4F6] transition-colors px-2 py-1">Match</Link>
            <Link to="/improve" className="hover:text-[#F3F4F6] transition-colors px-2 py-1">Improve</Link>
            <Link to="/tailor" className="hover:text-[#F3F4F6] transition-colors px-2 py-1">Tailor</Link>
            <Link to="/build" className="hover:text-[#F3F4F6] transition-colors px-2 py-1">Build CV</Link>
            <Link to="/storage" className="hover:text-[#F3F4F6] transition-colors px-2 py-1">Storage</Link>
            <Link to="/feedback" className="hover:text-[#F3F4F6] transition-colors px-2 py-1">Feedback</Link>
          </div>

          {/* Auth + Profile Icon */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-base font-medium hover:text-[#F3F4F6] transition-colors">
              Sign In
            </Link>

            {/* Profile Icon Button */}
            <Link to="/profile">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full p-1 hover:bg-white/20 transition"
                title="Profile"
              >
                <UserCircleIcon className="h-8 w-8 text-white" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
