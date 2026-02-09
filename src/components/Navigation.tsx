import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import logo from '../assets/7fd20a902e38f3d55ed520985a4cda2446b8bcc3.png';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const items = ['Features', 'How it Works', 'Pricing', 'Documentation'];

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleLinkClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // If on home page, smooth scroll to section
      const element = document.getElementById(slug);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback if element not found (e.g., loaded dynamically)
        window.location.hash = slug;
      }
    } else {
      // If on another page, navigate to home with hash
      navigate(`/#${slug}`);
    }
    
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="EA Coder" className="h-12" />
          <span className="text-xl text-gray-800">EA Coder</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {items.map((item, index) => {
            const slug = item
              .toLowerCase()
              .trim()
              .replace(/\s+/g, '-');
            return (
              <motion.a
                key={item}
                href={`#${slug}`}
                onClick={(e) => handleLinkClick(e, slug)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
              >
                {item}
              </motion.a>
            );
          })}
        </div>
        
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <Button variant="ghost" className="rounded-full" onClick={() => navigate('/login')}>
              Sign In
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Button 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full px-6"
              onClick={() => navigate('/signup')}
            >
              Get Started
            </Button>
          </motion.div>
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
      {/* Mobile dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden px-6 pb-4"
        >
          <div className="mt-2 rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
            <div className="flex flex-col divide-y divide-gray-100">
              {items.map((item) => {
                const slug = item.toLowerCase().trim().replace(/\s+/g, '-');
                return (
                  <a
                    key={item}
                    href={`#${slug}`}
                    className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                    onClick={(e) => handleLinkClick(e, slug)}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
