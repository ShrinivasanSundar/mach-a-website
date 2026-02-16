import './Header.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import Logo from '@/assets/mach-alogo.png';
import { Button } from '@/components/ui/button';
import { mainNavItems, serviceCategories } from '@/lib/serviceData';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import MobileNav from './MobileNav';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { categoryIcons } from '@/lib/serviceIcons';

export default function Header() {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  };

  useEffect(() => {
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <motion.header
      className="header-wrapper"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      role="banner"
    >
      <div className="header-inner">
        <Link to="/" aria-label="Mach-A home">
          <motion.img
            src={Logo}
            alt="Mach-A"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="header-logo cursor-pointer"
          />
        </Link>

        <motion.nav
          className="desktop-nav"
          aria-label="Main navigation"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {mainNavItems.map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.label}
                  className="nav-dropdown-wrapper"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.button
                    className="nav-link nav-link-dropdown"
                    variants={fadeInUp}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      className={`nav-chevron ${servicesOpen ? 'nav-chevron-open' : ''}`}
                      aria-hidden="true"
                    />
                  </motion.button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        className="mega-menu"
                        initial={{ opacity: 0, y: 12, scale: 0.97, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
                        exit={{ opacity: 0, y: 8, scale: 0.97, x: '-50%' }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        role="menu"
                      >
                        <div className="mega-menu-grid">
                          {serviceCategories.map((cat) => (
                            <div key={cat.slug} className="mega-menu-card">
                              <div className="mega-menu-card-header">
                                <div className="mega-menu-icon-wrap">
                                  {categoryIcons[cat.slug]}
                                </div>
                                <div>
                                  <h3 className="mega-menu-card-title">{cat.title}</h3>
                                  <p className="mega-menu-card-desc">{cat.desc}</p>
                                </div>
                              </div>
                              <ul className="mega-menu-links">
                                {cat.subServices.map((sub) => (
                                  <li key={sub.slug}>
                                    <Link
                                      to={`/services/${sub.slug}`}
                                      className="mega-menu-link"
                                      role="menuitem"
                                      onClick={() => setServicesOpen(false)}
                                    >
                                      <span className="mega-menu-link-title">{sub.title}</span>
                                      <ArrowRight className="mega-menu-link-arrow" aria-hidden="true" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link key={item.label} to={item.href} className="nav-link-router">
                <motion.span
                  className="nav-link"
                  variants={fadeInUp}
                  whileHover={{ color: '#FF7400', y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            );
          })}
        </motion.nav>

        <div className="header-actions">
          <Link to="/contact" className="hidden lg:inline-flex">
            <Button className="global-button">Contact Us</Button>
          </Link>
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
