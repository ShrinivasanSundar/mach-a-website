import './ContactPage.scss';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { Button } from '@/components/ui/button';
import { serviceCategories } from '@/lib/serviceData';
import { fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const form = formRef.current;
    if (!form) return false;
    const newErrors: Record<string, string> = {};
    const data = new FormData(form);

    if (!data.get('name')?.toString().trim()) newErrors.name = 'Full name is required';
    const email = data.get('email')?.toString().trim() || '';
    if (!email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email';
    if (!data.get('message')?.toString().trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !formRef.current) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const allServices = serviceCategories.flatMap(cat =>
    cat.subServices.map(sub => ({ value: sub.slug, label: sub.title }))
  );

  return (
    <Layout>
      <PageHero
        tagline="Contact Us"
        title="Let's Start a Conversation"
        description="Ready to transform your business? Get in touch and let's discuss how we can help you achieve your technology goals."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      <motion.section
        className="contact-page-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.div className="contact-page-info" variants={fadeInLeft}>
          <h2>Get In Touch</h2>
          <p>
            Whether you have a question about our services, need a project estimate, or want to explore partnership opportunities, our team is here to help.
          </p>

          <div className="contact-page-details">
            <div className="contact-page-detail">
              <Mail className="contact-page-icon" aria-hidden="true" />
              <div>
                <p className="detail-label">Email</p>
                <a href="mailto:hello@mach-a.com" className="detail-value">hello@mach-a.com</a>
              </div>
            </div>
            <div className="contact-page-detail">
              <Phone className="contact-page-icon" aria-hidden="true" />
              <div>
                <p className="detail-label">Phone</p>
                <a href="tel:+1234567890" className="detail-value">+91 7708788010</a>
              </div>
            </div>
            <div className="contact-page-detail">
              <MapPin className="contact-page-icon" aria-hidden="true" />
              <div>
                <p className="detail-label">Office</p>
                <p className="detail-value">Coimbatore, India</p>
              </div>
            </div>
          </div>

          <div className="contact-page-hours">
            <h3>Business Hours</h3>
            <p>Monday – Friday: 9:00 AM – 6:00 PM (EST)</p>
            <p>We typically respond within 24 hours.</p>
          </div>
        </motion.div>

        <motion.div className="contact-page-form-wrapper" variants={fadeInRight}>
          <form ref={formRef} onSubmit={handleSubmit} aria-label="Contact form" noValidate>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="cp-name">Full Name *</label>
                <input
                  id="cp-name"
                  name="name"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'cp-name-error' : undefined}
                  placeholder="John Doe"
                />
                {errors.name && <p id="cp-name-error" className="field-error" role="alert">{errors.name}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="cp-email">Email *</label>
                <input
                  id="cp-email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'cp-email-error' : undefined}
                  placeholder="john@company.com"
                />
                {errors.email && <p id="cp-email-error" className="field-error" role="alert">{errors.email}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="cp-company">Company</label>
                <input
                  id="cp-company"
                  name="company"
                  type="text"
                  placeholder="Your Company"
                />
              </div>

              <div className="form-field">
                <label htmlFor="cp-service">Service Interested In</label>
                <select id="cp-service" name="service">
                  <option value="">Select a service</option>
                  {allServices.map(s => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-field form-field-full">
                <label htmlFor="cp-message">Message *</label>
                <textarea
                  id="cp-message"
                  name="message"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'cp-message-error' : undefined}
                  placeholder="Tell us about your project..."
                  rows={6}
                />
                {errors.message && <p id="cp-message-error" className="field-error" role="alert">{errors.message}</p>}
              </div>
            </div>

            <Button type="submit" className="global-button submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : (
                <>
                  <Send className="w-4 h-4" aria-hidden="true" />
                  Send Message
                </>
              )}
            </Button>

            {status === 'success' && (
              <motion.div
                className="form-status form-status-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
              >
                <CheckCircle className="w-5 h-5" aria-hidden="true" />
                <p>Message sent successfully! We'll get back to you soon.</p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                className="form-status form-status-error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
              >
                <AlertCircle className="w-5 h-5" aria-hidden="true" />
                <p>Something went wrong. Please try again or email us directly.</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.section>
    </Layout>
  );
}
