import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', href: 'https://www.regalisrealtymedia.com' },
  { name: 'Portfolio', href: 'https://regalisrealtymedia25.pixieset.com/regalisrealtymediaportfolio/compassphotos/' },
  { name: 'Pricing', href: 'https://pricing.regalisrealtymedia.com', active: true },
  { name: 'Calculator', href: 'https://calculator.regalisrealtymedia.com' },
  { name: 'Catalog', href: 'https://catalog.regalisrealtymedia.com' },
  { name: 'Branding', href: 'https://branding.regalisrealtymedia.com' },
  { name: 'Portal', href: 'https://portal.regalisrealtymedia.com' },
  { name: 'Contact', href: 'https://www.regalisrealtymedia.com/calendar' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[70px] bg-black/85 backdrop-blur-[20px] border-b border-[#c9a84c]/15 flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <a href="https://www.regalisrealtymedia.com" className="flex items-center">
          <img 
            src="https://cdn.prod.website-files.com/6695980889d8d99cedb29bc7/677588ce72f981235e0deeb9_Regalis%20Realty%20Logo%20Symbol.png" 
            alt="Regalis Realty Media" 
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[14px] font-medium transition-colors duration-200 ${
                link.active 
                  ? 'text-[#c9a84c] border-b-2 border-[#c9a84c]' 
                  : 'text-[#D4D4D4] hover:text-[#c9a84c]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#c9a84c]"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0a0a0a] z-50 border-l border-[#c9a84c]/20 p-6 flex flex-col"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsOpen(false)} className="text-[#c9a84c]">
                  <X size={28} />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-[18px] font-medium transition-colors ${
                      link.active ? 'text-[#c9a84c]' : 'text-[#D4D4D4]'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
