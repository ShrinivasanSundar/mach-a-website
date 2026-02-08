import './App.scss'

import { motion } from 'framer-motion'
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
import { Button } from "@/components/ui/button"
import { useState } from 'react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
  y: [0, -15, 0],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

const iconHover = {
  scale: 1.2,
  rotate: 10,
  transition: { duration: 0.3, ease: "easeOut" }
}

const serviceIconHover = {
  scale: 1.1,
  y: -5,
  transition: { duration: 0.3, ease: "easeOut" }
}

const buttonHover = {
  scale: 1.05,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  transition: { duration: 0.3 }
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    { img: uiux, title: "UX/UI Design", desc: "Create engaging user experiences with our expert design and development services." },
    { img: shop, title: "E-Commerce Development", desc: "Launch your online store with our comprehensive e-commerce development solutions." },
    { img: automation, title: "Business Automation", desc: "Streamline operations and enhance efficiency with our tailored automation solutions." },
    { img: cloud, title: "ERP & Cloud Solutions", desc: "Transform your business processes with our robust ERP and cloud-based solutions." },
    { img: AIIcon, title: "AI Automation", desc: "Transform your business processes with our robust ERP and cloud-based solutions." },
  ];

  const socialIcons = [
    { src: fb, alt: "Facebook" },
    { src: insta, alt: "Instagram" },
    { src: twitter, alt: "Twitter" },
    { src: linkedIn, alt: "LinkedIn" },
    { src: utube, alt: "YouTube" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className='home-section'>
        <motion.div
          className='navigation-menu flex flex-col md:flex-row justify-between py-4 px-16'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={Logo}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div whileHover={buttonHover}>
            <Button className="global-button">Contact Us</Button>
          </motion.div>
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
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Empowering Growth Through Technology
            </motion.p>
            <motion.p
              className='sub-title pb-[40px]'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Mach-A helps you build smarter solutions, automate processes, and scale seamlessly with digital innovation. Together, we can unlock the full potential of your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={buttonHover}
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
            className='image-container md:w-1/2 relative'
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.img
              className='relative border-0 rounded-lg'
              src={People}
              variants={scaleIn}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />
            <motion.img
              className='relative border-0 rounded-lg'
              src={Business}
              variants={scaleIn}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />
            <motion.img
              className='relative border-0 rounded-lg'
              src={Meeting}
              variants={scaleIn}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </div>
      </div>

      {/* Collaboration Section */}
      <motion.div
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
            <motion.div whileHover={buttonHover}>
              <Button className="global-button">Learn More</Button>
            </motion.div>
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
                whileHover={{ scale: 1.2, color: "#6366f1" }}
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

      {/* Mission Section */}
      <motion.div
        className='our-mission flex items-center gap-[160px]'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInLeft}>
          <motion.p
            className='title'
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            OUR
          </motion.p>
          <motion.p
            className='title'
            whileHover={{ x: 10 }}
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
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
          <motion.p
            className='ml-[80px]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className='service-offered pt-[220px] pb-[112px] px-[80px] flex flex-col items-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
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
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
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

      {/* Footer */}
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
          />
          <div className='flex'></div>
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
          <motion.p className='options' whileHover={{ color: "#6366f1", x: 3 }}>Privacy Policy</motion.p>
          <motion.p className='options' whileHover={{ color: "#6366f1", x: 3 }}>Term of Use</motion.p>
          <motion.p className='options' whileHover={{ color: "#6366f1", x: 3 }}>Cookie Policy</motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App
