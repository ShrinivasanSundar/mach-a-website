import './ContactForm.scss';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { serviceCategories } from '@/lib/serviceData';
import { fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

// Replace with your CallMeBot API key (get it free from https://www.callmebot.com/blog/free-api-whatsapp-messages/)
const WHATSAPP_NUMBER = '918838325070';
const CALLMEBOT_API_KEY = 'YOUR_CALLMEBOT_API_KEY';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const form = formRef.current;
    if (!form) return false;
    const newErrors: Record<string, string> = {};
    const data = new FormData(form);

    if (!data.get('name')?.toString().trim()) {
      newErrors.name = 'Full name is required';
    }
    const email = data.get('email')?.toString().trim() || '';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!data.get('message')?.toString().trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !formRef.current) return;

    setStatus('sending');
    try {
      const data = new FormData(formRef.current);
      const name = data.get('name')?.toString().trim() || '';
      const email = data.get('email')?.toString().trim() || '';
      const company = data.get('company')?.toString().trim() || '';
      const service = data.get('service')?.toString().trim() || '';
      const message = data.get('message')?.toString().trim() || '';

      const waMessage = encodeURIComponent(
        `New Enquiry from Mach-A Website\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        (company ? `Company: ${company}\n` : '') +
        (service ? `Service: ${service}\n` : '') +
        `Message: ${message}`
      );

      await fetch(
        `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_NUMBER}&text=${waMessage}&apikey=${CALLMEBOT_API_KEY}`
      );

      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <motion.section
      id="contact-form"
      className="contact-section"
      aria-labelledby="contact-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <motion.div className="contact-info" variants={fadeInLeft}>
        <span className="section-label">Get In Touch</span>
        <h2 id="contact-heading" className="contact-title">
          Let's Start a Conversation
        </h2>
        <p className="contact-desc">
          Ready to transform your business? Reach out and let's discuss how we can help you achieve your goals.
        </p>

        <div className="contact-details">
          <div className="contact-detail-item">
            <Mail className="contact-detail-icon" aria-hidden="true" />
            <div>
              <p className="detail-label">Email</p>
              <a href="mailto:hello@mach-a.com" className="detail-value">hello@mach-a.com</a>
            </div>
          </div>
          <div className="contact-detail-item">
            <Phone className="contact-detail-icon" aria-hidden="true" />
            <div>
              <p className="detail-label">Phone</p>
              <a href="tel:+918838325070" className="detail-value">+91 8838325070</a>
            </div>
          </div>
          <div className="contact-detail-item">
            <MapPin className="contact-detail-icon" aria-hidden="true" />
            <div>
              <p className="detail-label">Office</p>
              <p className="detail-value">Coimbatore,India</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="contact-form-wrapper" variants={fadeInRight}>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          aria-label="Contact form"
          noValidate
        >
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="contact-name">Full Name *</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="John Doe"
              />
              {errors.name && <p id="name-error" className="field-error" role="alert">{errors.name}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email *</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                placeholder="john@company.com"
              />
              {errors.email && <p id="email-error" className="field-error" role="alert">{errors.email}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                placeholder="Your Company"
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-service">Service Interested In</label>
              <select id="contact-service" name="service">
                <option value="">Select a service</option>
                {serviceCategories.flatMap(cat =>
                  cat.subServices.map(sub => (
                    <option key={sub.slug} value={sub.slug}>{sub.title}</option>
                  ))
                )}
              </select>
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                required
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                placeholder="Tell us about your project..."
                rows={5}
              />
              {errors.message && <p id="message-error" className="field-error" role="alert">{errors.message}</p>}
            </div>
          </div>

          <Button
            type="submit"
            className="global-button submit-btn"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              'Sending...'
            ) : (
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
  );
}
