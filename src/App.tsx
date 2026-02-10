import './App.scss'

import { motion, useScroll, useTransform } from 'framer-motion'
import Logo from "@/assets/Logo.svg"
import Business from "@/assets/home/Business.svg"
import Meeting from "@/assets/home/meeting.svg"
import People from "@/assets/home/people.svg"
import PaperPlane from "@/assets/home/paper_plane.svg"
import fb from "@/assets/footer/fb.svg"
import insta from "@/assets/footer/insta.svg"
import linkedIn from "@/assets/footer/linkedIN.svg"
import twitter from "@/assets/footer/twitter.svg"
import utube from "@/assets/footer/utube.svg"
import Quote from "@/assets/home/Quote.svg"
import uiux from "@/assets/service/uiux.svg"
import AIIcon from "@/assets/service/AIIcon.svg"
import automation from "@/assets/service/automation.svg"
import cloud from "@/assets/service/cloud.svg"
import shop from "@/assets/service/shop.svg"
import backgroundTile from "@/assets/service/background-tile.png"
import ProductivityImage from "@/assets/tech/Productivity Image.svg"
import { Button } from "@/components/ui/button"
import { useState, useRef } from 'react'

// ─── Animation Variants ─────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const floatingAnimation = {
  y: [0, -18, 0],
  rotate: [0, 6, -4, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

const iconHover = {
  scale: 1.3,
  rotate: 12,
  transition: { duration: 0.3, ease: "easeOut" }
}

const serviceIconHover = {
  scale: 1.15,
  y: -8,
  transition: { duration: 0.3, ease: "easeOut" }
}



const glowPulse = {
  scale: [1, 1.05, 1],
  opacity: [0.3, 0.6, 0.3],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

// ─── Gradient Orb Component ─────────────────────────────────────────

function GradientOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`gradient-orb ${className || ''}`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    />
  )
}

// ─── Main App ───────────────────────────────────────────────────────

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const services = [
    { img: uiux, title: "UX/UI Design", desc: "Create engaging user experiences with our expert design and development services." },
    { img: shop, title: "E-Commerce Development", desc: "Launch your online store with our comprehensive e-commerce development solutions." },
    { img: automation, title: "Business Automation", desc: "Streamline operations and enhance efficiency with our tailored automation solutions." },
    { img: cloud, title: "ERP & Cloud Solutions", desc: "Transform your business processes with our robust ERP and cloud-based solutions." },
    { img: AIIcon, title: "AI Automation", desc: "Leverage artificial intelligence to automate workflows and unlock new efficiencies." },
  ];

  const socialIcons = [
    { src: fb, alt: "Facebook" },
    { src: insta, alt: "Instagram" },
    { src: twitter, alt: "Twitter" },
    { src: linkedIn, alt: "LinkedIn" },
    { src: utube, alt: "YouTube" },
  ];

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const techFeatures = [
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div ref={containerRef} className="app-wrapper">
      {/* ═══════════ HERO SECTION ═══════════ */}
      <div id="home" className='home-section'>
        {/* Animated gradient background orbs */}
        <GradientOrb className="orb-1" delay={0} />
        <GradientOrb className="orb-2" delay={2} />
        <GradientOrb className="orb-3" delay={4} />

        <motion.div
          className='navigation-menu flex flex-col md:flex-row items-center justify-between py-4 px-16'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            src={Logo}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
          />
          <motion.nav
            className="nav-links flex items-center gap-[40px]"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="nav-link"
                variants={fadeInUp}
                whileHover={{ color: "#FF7400", y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
          <div>
            <Button className="global-button">Contact Us</Button>
          </div>
        </motion.div>

        <div className='flex flex-col md:flex-row items-center justify-between px-20 py-8 relative'>
          <motion.div
            className='md:w-1/2'
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
          >
            <motion.div
              className='dock pb-[24px]'
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p># WELCOME TO MACHINE_A</p>
            </motion.div>
            <motion.p
              className='title pb-[24px]'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Empowering Growth Through Technology
            </motion.p>
            <motion.p
              className='sub-title pb-[40px]'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Mach-A helps you build smarter solutions, automate processes, and scale seamlessly with digital innovation. Together, we can unlock the full potential of your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button className="global-button">Start your project</Button>
            </motion.div>

            {/* Floating Paper Plane */}
            <motion.img
              className='absolute top-[21rem] left-[26rem]'
              src={PaperPlane}
              animate={floatingAnimation}
            />
          </motion.div>

          <motion.div
            className='hero-image-grid md:w-1/2 relative'
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Play button icon — top center */}
            <motion.div
              className="hero-icon hero-icon-play"
              animate={{
                x: [0, -12, 4, -8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#0D0B00" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M20 16L32 24L20 32V16Z" fill="#0D0B00" />
              </svg>
            </motion.div>

            {/* Top row: People (large) + Business (medium, offset down) */}
            <div className="hero-image-row-top">
              <motion.img
                className='hero-img hero-img-large'
                src={People}
                variants={scaleIn}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              />
              <motion.img
                className='hero-img hero-img-medium hero-img-offset-down'
                src={Business}
                variants={scaleIn}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              />
            </div>

            {/* Rewind icon — center between rows */}
            <motion.div
              className="hero-icon hero-icon-rewind"
              animate={{
                x: [0, -18, 6, -12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.25, 0.1, 0.25, 1],
                repeatDelay: 0.8,
              }}
            >
              <div className="rewind-pill">
                <svg width="52" height="32" viewBox="0 0 52 32" fill="none">
                  <path d="M14 8L4 16L14 24V8Z" fill="#0D0B00" />
                  <path d="M28 8L18 16L28 24V8Z" fill="#0D0B00" />
                  <path d="M40 8L30 16L40 24V8Z" fill="#0D0B00" />
                </svg>
              </div>
            </motion.div>

            {/* Bottom row: Meeting (medium, offset left) */}
            <div className="hero-image-row-bottom">
              <motion.img
                className='hero-img hero-img-medium'
                src={Meeting}
                variants={scaleIn}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════ COLLABORATION SECTION ═══════════ */}
      <motion.div
        id="about"
        className='collaboration-section px-16 pt-[100px] pb-[112px]'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className='flex gap-[80px] pb-[80px]'>
          <motion.div variants={fadeInLeft}>
            <p className='title'>Collaborative</p>
            <p className='sub-title flex flex-col md:flex-row justify-between'>Why Choose Mach-A as Your Partner?</p>
          </motion.div>
          <motion.div className='pt-[58px]' variants={fadeInRight}>
            <p className='pb-[40px]'>
              At Mach-A, we're more than service providers—we're your growth partners, committed to helping you innovate, scale, and succeed.
            </p>
            <div>
              <Button className="global-button">Learn More</Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className='points flex gap-[40px]'
          variants={staggerContainer}
        >
          {[
            { num: "01", title: "End-to-End Solutions", desc: "From web to AI, we deliver everything you need—customized and end-to-end." },
            { num: "02", title: "True Partnership", desc: "We work with you, not just for you—every step of the way." },
            { num: "03", title: "Future-Ready Tech", desc: "We build smart, scalable solutions that drive real growth." }
          ].map((point, i) => (
            <motion.div
              key={i}
              className='flex flex-col items-center justify-center gap-[24px]'
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.p
                className='number'
                whileHover={{ scale: 1.2, color: "#FF9A00" }}
                transition={{ duration: 0.3 }}
              >
                {point.num}
              </motion.p>
              <p className='title'>{point.title}</p>
              <p className='subtitle'>{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ═══════════ OUR MISSION SECTION ═══════════ */}
      <motion.div
        className='our-mission flex items-center gap-[160px]'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Subtle animated gradient behind mission text */}
        <div className="mission-gradient-bg" />

        <motion.div variants={fadeInLeft}>
          <motion.p
            className='title'
            whileHover={{ x: 10, textShadow: "0 0 30px rgba(255, 116, 0, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            OUR
          </motion.p>
          <motion.p
            className='title'
            whileHover={{ x: 10, textShadow: "0 0 30px rgba(255, 116, 0, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            MISSION
          </motion.p>
        </motion.div>
        <motion.div variants={fadeInRight}>
          <motion.img
            src={Quote}
            initial={{ rotate: -10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
          <motion.p
            className='ml-[80px]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            At Mach-A, our mission is to democratize technology for every business. We believe that innovation shouldn't be a privilege—it should be a tool accessible to all. We're committed to building solutions that transform possibilities into realities, empowering growth at every stage.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* ═══════════ TECHNOLOGY / STATS SECTION ═══════════ */}
      <motion.div
        className='tech-section'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Animated gradient mesh background */}
        <div className="tech-gradient-mesh" />

        <div className="tech-content flex flex-col md:flex-row items-center gap-[80px] px-[80px] py-[120px]">
          <motion.div className="md:w-1/2" variants={fadeInLeft}>
            <motion.img
              src={ProductivityImage}
              alt="Technology & Productivity"
              className="tech-hero-image"
              whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
            />
          </motion.div>

          <motion.div className="md:w-1/2" variants={fadeInRight}>
            <motion.p className="tech-label" variants={fadeInUp}>Technology</motion.p>
            <motion.p className="tech-title" variants={fadeInUp}>
              Driving Results with Smart Solutions
            </motion.p>
            <motion.p className="tech-description" variants={fadeInUp}>
              Our solutions go beyond code. We combine cutting-edge technology with deep industry insight to deliver measurable outcomes. From scalable cloud architectures to intelligent AI systems, every solution is built for impact.
            </motion.p>

            <motion.div
              className="tech-stats-grid"
              variants={staggerContainer}
            >
              {techFeatures.map((feat, i) => (
                <motion.div
                  key={i}
                  className="tech-stat-card"
                  variants={scaleIn}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 15px 40px rgba(255, 116, 0, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.p
                    className="stat-number"
                    animate={glowPulse}
                  >
                    {feat.number}
                  </motion.p>
                  <p className="stat-label">{feat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ═══════════ SERVICES SECTION ═══════════ */}
      <motion.div
        id="services"
        className='service-offered pt-[220px] pb-[112px] px-[80px] flex flex-col items-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Animated glow behind services */}
        <div className="services-glow" />

        <motion.div
          className='flex flex-col items-center text-center px-[18%]'
          variants={fadeInUp}
        >
          <motion.p
            className='topic'
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Services
          </motion.p>
          <motion.p
            className='title'
            variants={fadeInUp}
          >
            Explore Our Comprehensive Service Offerings
          </motion.p>
          <motion.p
            className='sub-title'
            variants={fadeInUp}
          >
            At Mach-A, we provide a suite of innovative services designed to empower your business. Our solutions are tailored to meet your unique needs and drive growth.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center container gap-[80px] sm:flex-col md:flex-row sm:p-[10px] md:p-[80px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex flex-col card transition-all duration-300 
                w-full sm:w-full md:w-[27.5%]
                px-[14px] py-[28px] ${activeIndex == i ? 'active' : ''}`}
              variants={fadeInUp}
              whileHover={{
                y: -15,
                boxShadow: "0 20px 40px rgba(255, 116, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {activeIndex == i && <img className='absolute opacity-[2%]' src={backgroundTile} />}
              <motion.img
                src={s.img}
                className="pb-[24px]"
                whileHover={serviceIconHover}
              />
              <p className="title pb-[16px]">{s.title}</p>
              <p className="sub-title">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ═══════════ CTA SECTION ═══════════ */}
      <motion.div
        id="contact"
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <GradientOrb className="orb-cta-1" delay={1} />
        <GradientOrb className="orb-cta-2" delay={3} />

        <motion.div className="cta-content" variants={fadeInUp}>
          <motion.p className="cta-label" variants={fadeInUp}>Get Started</motion.p>
          <motion.h2 className="cta-title" variants={fadeInUp}>
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p className="cta-description" variants={fadeInUp}>
            Let's build something extraordinary together. Partner with Mach-A and unlock the full potential of technology for your business growth.
          </motion.p>
          <motion.div
            className="cta-buttons"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Button className="global-button cta-primary-btn">Start Your Project</Button>
            </motion.div>
            <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button className="cta-secondary-btn">Schedule a Call</Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ═══════════ FOOTER ═══════════ */}
      <motion.div
        className='footer p-[80px]'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className='flex justify-between p-[80px]'>
          <motion.img
            src={Logo}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
          />
          <motion.nav
            className="footer-nav flex items-center gap-[32px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="footer-link"
                variants={fadeInUp}
                whileHover={{ color: "#FF7400", y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
          <motion.div
            className='flex items-center gap-[12px]'
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialIcons.map((icon, i) => (
              <motion.img
                key={i}
                src={icon.src}
                alt={icon.alt}
                className='w-[20px] h-[20px] cursor-pointer'
                variants={scaleIn}
                whileHover={iconHover}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>
        <motion.div
          className='copy-right flex gap-[24px] justify-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className='text'>© 2025 Mach-A. All rights reserved.</p>
          <motion.p className='options' whileHover={{ color: "#FF7400", x: 3 }}>Privacy Policy</motion.p>
          <motion.p className='options' whileHover={{ color: "#FF7400", x: 3 }}>Term of Use</motion.p>
          <motion.p className='options' whileHover={{ color: "#FF7400", x: 3 }}>Cookie Policy</motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App
