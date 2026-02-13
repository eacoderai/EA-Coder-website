import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import logo from '../assets/7fd20a902e38f3d55ed520985a4cda2446b8bcc3.png';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const items = ['Home', 'Features', 'Pricing', 'Contact'];

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileOpen]);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
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
    
    if (slug === 'home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      setMobileOpen(false);
      return;
    }

    if (slug === 'features') {
      navigate('/features');
      setMobileOpen(false);
      return;
    }

    if (slug === 'pricing') {
      navigate('/pricing');
      setMobileOpen(false);
      return;
    }

    if (slug === 'contact') {
      navigate('/contact');
      setMobileOpen(false);
      return;
    }

    if (location.pathname === '/') {
      const element = document.getElementById(slug);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = slug;
      }
    } else {
      navigate(`/#${slug}`);
    }
    
    setMobileOpen(false);
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="EACoder AI" className="h-10" />
          <span className="text-xl font-bold text-foreground">EACoder AI</span>
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
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm font-medium"
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
            transition={{ delay: 0.1 }}
          >
            <Button 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
              onClick={() => navigate('/waitlist')}
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
            <Menu className="w-6 h-6 text-foreground" />
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
          <div className="mt-2 rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
            <div className="flex flex-col divide-y divide-border">
              {items.map((item) => {
                const slug = item.toLowerCase().trim().replace(/\s+/g, '-');
                return (
                  <a
                    key={item}
                    href={`#${slug}`}
                    className="px-4 py-3 text-foreground hover:bg-white/5 hover:text-primary transition-colors"
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
