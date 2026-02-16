import './Footer.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import Logo from '@/assets/mach-alogo.png';
import { socialLinks } from '@/lib/constants';
import { serviceCategories } from '@/lib/serviceData';
import { fadeInUp, staggerContainer, scaleIn, iconHover } from '@/lib/animations';

const footerNavItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      role="contentinfo"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" aria-label="Mach-A home">
            <motion.img
              src={Logo}
              alt="Mach-A"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="footer-logo cursor-pointer"
            />
          </Link>
          <p className="footer-tagline">Empowering growth through technology.</p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-links-col">
            <h4 className="footer-col-title">Company</h4>
            <motion.nav
              aria-label="Company links"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {footerNavItems.map((item) => (
                <motion.div key={item.href} variants={fadeInUp}>
                  <Link to={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Services</h4>
            <nav aria-label="Service links">
              {serviceCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/services/${cat.subServices[0].slug}`}
                  className="footer-link"
                >
                  {cat.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Connect</h4>
            <motion.nav
              className="footer-social"
              aria-label="Social media links"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit us on ${link.alt}`}
                  variants={scaleIn}
                  whileHover={iconHover}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={link.src} alt="" className="social-icon" />
                </motion.a>
              ))}
            </motion.nav>
            <div className="footer-contact-info">
              <a href="mailto:hello@mach-a.com" className="footer-link">hello@mach-a.com</a>
              <a href="tel:+1234567890" className="footer-link">+91 7708788010</a>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p className="copyright">
          &copy; {new Date().getFullYear()} Mach-A. All rights reserved.
        </p>
        <div className="footer-legal">
          <a href="#" className="legal-link">Privacy Policy</a>
          <a href="#" className="legal-link">Terms of Use</a>
          <a href="#" className="legal-link">Cookie Policy</a>
        </div>
      </motion.div>
    </motion.footer>
  );
}
