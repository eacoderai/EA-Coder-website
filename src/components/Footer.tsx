import { motion } from 'motion/react';
import { Twitter, Instagram, ShieldCheck } from 'lucide-react';
import { SiTiktok } from '@icons-pack/react-simple-icons';
import logo from 'figma:asset/7fd20a902e38f3d55ed520985a4cda2446b8bcc3.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <motion.div
              className="mb-6 flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <img src={logo} alt="EA Coder" className="h-10" />
              <span className="text-2xl font-bold text-foreground">EA Coder</span>
            </motion.div>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Your AI Trading Assistant. Turn trading ideas into action with professional manual plans or production-ready automated bots.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: 'https://x.com/eacoderai?s=21', label: 'Twitter' },
                { icon: SiTiktok, href: 'https://www.tiktok.com/@eacoderai?_r=1&_t=ZS-91V505QFOVU', label: 'TikTok' },
                { icon: Instagram, href: 'https://www.instagram.com/eacoderai?igsh=dW1scWN2eHBuaDBl', label: 'Instagram' },                
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Blog', href: '#' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div className="space-y-8">
            <div>
              <h4 className="font-bold mb-6">Newsletter</h4>
              <p className="text-muted-foreground text-xs mb-4">Get trading tips and product updates.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-card border border-border rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-primary transition-colors"
                />
                <button className="bg-primary text-white rounded-lg px-3 py-2 text-sm font-bold hover:bg-primary/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Privacy Policy', href: '/privacy' },
                  { label: 'Terms of Service', href: '/terms' },
                  { label: 'Disclaimer', href: '/disclaimer' },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-xs"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {currentYear} EA Coder. Not financial advice. Test strategies on demo accounts.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              Secure SSL Encryption
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
