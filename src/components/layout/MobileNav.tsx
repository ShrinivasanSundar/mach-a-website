import './MobileNav.scss';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { Menu, X, ChevronDown } from 'lucide-react';
import { categoryIcons } from '@/lib/serviceIcons';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/constants';
import { mainNavItems, serviceCategories } from '@/lib/serviceData';
import Logo from '@/assets/mach-alogo.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setOpen(false);
    setServicesExpanded(false);
    setTimeout(() => navigate(href), 300);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="mobile-nav-trigger" aria-label="Open navigation menu">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="mobile-nav-sheet">
        <div className="mobile-nav-header">
          <img src={Logo} alt="Mach-A" className="mobile-nav-logo" />
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetClose asChild>
            <button aria-label="Close navigation menu" className="mobile-nav-close">
              <X className="w-5 h-5" />
            </button>
          </SheetClose>
        </div>

        <nav aria-label="Mobile navigation" className="mobile-nav-body">
          <ul className="mobile-nav-list">
            {mainNavItems.map((item) => {
              if (item.children) {
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className="mobile-nav-item"
                      aria-expanded={servicesExpanded}
                    >
                      {item.label}
                      <ChevronDown
                        className={`mobile-nav-chevron ${servicesExpanded ? 'mobile-nav-chevron-open' : ''}`}
                      />
                    </button>
                    {servicesExpanded && (
                      <div className="mobile-nav-services">
                        {serviceCategories.map((cat) => (
                          <div key={cat.slug} className="mobile-nav-category">
                            <div className="mobile-nav-category-header">
                              <span className="mobile-nav-category-icon">
                                {categoryIcons[cat.slug]}
                              </span>
                              <span className="mobile-nav-category-title">{cat.title}</span>
                            </div>
                            {cat.subServices.map((sub) => (
                              <button
                                key={sub.slug}
                                onClick={() => handleNavClick(`/services/${sub.slug}`)}
                                className="mobile-nav-subservice"
                              >
                                {sub.title}
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="mobile-nav-item"
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-footer">
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button className="global-button w-full">Contact Us</Button>
            </Link>

            <nav aria-label="Social media links" className="mobile-nav-socials">
              {socialLinks.map((link) => (
                <a
                  key={link.alt}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit us on ${link.alt}`}
                  className="mobile-nav-social-link"
                >
                  <img src={link.src} alt="" className="w-5 h-5" />
                </a>
              ))}
            </nav>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
