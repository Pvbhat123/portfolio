import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Twitter,
  Dribbble,
  ArrowUpRight
} from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Message sent successfully!')
    }, 1500)
  }

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'anushashastri123@gmai.com', href: 'mailto:anushashastri123@gmai.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+91 7760688412', href: 'tel:+91 7760688412' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Bangalore', href: '#' },
  ]

  const socialLinks = [
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/anusha-shastri-344491261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#0077b5' },
    { icon: <Instagram size={20} />, label: 'Instagram', href: 'https://www.instagram.com/shastrianusha22/', color: '#e4405f' },
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-desc">
            Have a project in mind? I'd love to hear about it. Let's discuss
            how we can bring your vision to life through exceptional design.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-card">
              <h3>Contact Information</h3>
              <p>Fill out the form and I'll get back to you within 24 hours.</p>

              <div className="info-list">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="info-item hoverable"
                    whileHover={{ x: 5 }}
                  >
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <span className="info-label">{info.label}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                    <ArrowUpRight size={16} className="info-arrow" />
                  </motion.a>
                ))}
              </div>

              <div className="social-section">
                <h4>Follow Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link hoverable"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ '--social-color': social.color }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="info-decoration">
                <motion.div
                  className="deco-shape shape-1"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                />
                <motion.div
                  className="deco-shape shape-2"
                  animate={{
                    rotate: [360, 0],
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{ duration: 25, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary btn-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo-text">
                <span className="gradient-text">P</span>ortfolio
              </span>
              <p>Crafting visual stories that resonate.</p>
            </div>
            <div className="footer-copyright">
              <p>&copy; 2025 Anusha Shastri. All rights reserved.</p>
              <p>Designed with passion and creativity.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Background */}
      <div className="contact-bg">
        <div className="bg-gradient" />
      </div>
    </section>
  )
}

export default Contact
