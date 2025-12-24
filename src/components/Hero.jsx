import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Palette, PenTool } from 'lucide-react'

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Animated Background Elements */}
      <div className="hero-bg">
        <motion.div
          className="floating-shape shape-1"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="floating-shape shape-2"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="floating-shape shape-3"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid Pattern */}
        <div className="grid-pattern" />
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles size={16} />
          <span>Creative Graphic Designer</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transforming
          <br />
          <span className="gradient-text">Ideas</span> into
          <br />
          Visual <span className="outline-text">Masterpieces</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I craft stunning visual experiences that captivate audiences
          and elevate brands. From logos to packaging, every pixel tells a story.
        </motion.p>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects Done</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="btn btn-primary"
            onClick={scrollToPortfolio}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View My Work</span>
            <Palette size={18} />
          </motion.button>
          <motion.a
            href="#contact"
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Talk</span>
            <PenTool size={18} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="hero-decoration">
        <motion.div
          className="deco-circle"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  )
}

export default Hero
