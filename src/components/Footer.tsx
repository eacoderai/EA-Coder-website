import { motion } from 'motion/react';
import { Twitter, Linkedin, Mail, Instagram } from 'lucide-react';
import { SiTiktok } from '@icons-pack/react-simple-icons';
import type { SVGProps } from 'react';
import logo from 'figma:asset/7fd20a902e38f3d55ed520985a4cda2446b8bcc3.png';

// Inline TikTok icon (fallback since lucide-react does not export Tiktok)
function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {/* Simplified TikTok-style musical note glyph */}
      <path d="M16 3v6.1c1.6 1 3.3 1.6 5 1.7V14c-2.2-.1-4.1-.7-5.9-1.8v4.7a5.8 5.8 0 11-3.8-5.4V6.5h3.7V3h1z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <img src={logo} alt="EA Coder" className="h-13" />
            </motion.div>
            <p className="text-gray-400 text-sm mb-4">
              AI-powered Expert Advisor generator for algorithmic traders.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: 'https://x.com/eacoderai?s=21', label: 'Twitter' },
                { icon: SiTiktok, href: 'https://www.tiktok.com/@eacoderai?_r=1&_t=ZS-91V505QFOVU', label: 'TikTok' },
                { icon: Instagram, href: 'https://www.instagram.com/eacoderai?igsh=dW1scWN2eHBuaDBl', label: 'Instagram' },                
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4">Product</h4>
            <ul className="space-y-2">
              {[
                { label: 'Features', href: '#features' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'How it Works', href: '#how-it-works' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Roadmap', href: '/roadmap' },
              ].map((item) => (
                <li key={item.label}>
                  <motion.a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: 'Documentation', href: '/docs' },
                { label: 'API Reference', href: '/api' },
                { label: 'Example Strategies', href: '/examples' },
                { label: 'Video Tutorials', href: '/tutorials' },
                { label: 'Community', href: '/community' },
              ].map((item) => (
                <li key={item.label}>
                  <motion.a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Cookie Policy', href: '/cookies' },
                { label: 'Disclaimer', href: '/disclaimer' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <motion.a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} EA Coder. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <a href="mailto:support@eacoder.com" className="hover:text-white transition-colors">
                eacoderai@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          className="mt-8 p-4 bg-gray-800 rounded-xl border border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-400 text-center">
            <strong className="text-gray-300">Risk Disclaimer:</strong> Trading foreign exchange, stocks, and cryptocurrencies involves substantial risk of loss and is not suitable for every investor. 
            EA Coder provides tools for strategy development only and does not provide financial advice. Past performance is not indicative of future results.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
