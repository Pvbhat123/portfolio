import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader-content">
        <motion.div
          className="loader-circle"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 100 100" className="loader-svg">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b6b" />
                <stop offset="50%" stopColor="#feca57" />
                <stop offset="100%" stopColor="#48dbfb" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" stroke="url(#gradient)" strokeWidth="3" fill="none" />
            <motion.path
              d="M30 50 L45 65 L70 35"
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </svg>
        </motion.div>
        <motion.h2
          className="loader-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="gradient-text">Creative</span> Designer
        </motion.h2>
        <motion.div
          className="loader-bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

export default Loader
