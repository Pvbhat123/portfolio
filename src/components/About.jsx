import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Briefcase, Paintbrush, Music, Sparkles } from 'lucide-react'
import canvaLogo from '../assets/1656734719canva-logo-transparent.webp'
import capCutLogo from '../assets/800f31dcd38e0b6129d6490d5df7df2c.jpg'
import vnEditorLogo from '../assets/vn-video-editor-logo.webp'
import corelDrawLogo from '../assets/coreldraw_logo_480x480.jpg'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const personalSkills = [
    { icon: <Paintbrush size={28} />, title: 'Painting', desc: 'Creating beautiful artwork with colors and imagination', color: '#ff6b6b' },
    { icon: <Music size={28} />, title: 'Singing', desc: 'Expressing emotions through melodious vocals', color: '#54a0ff' },
    { icon: <Sparkles size={28} />, title: 'Mehendi Design', desc: 'Crafting intricate and elegant henna patterns', color: '#1dd1a1' },
  ]

  const skills = [
    {
      name: 'Photoshop',
      logo: 'https://img.icons8.com/color/480/adobe-photoshop.png',
      color: '#31A8FF'
    },
    {
      name: 'Illustrator',
      logo: 'https://img.icons8.com/color/480/adobe-illustrator.png',
      color: '#FF9A00'
    },
    {
      name: 'CorelDRAW',
      logo: corelDrawLogo,
      color: '#6DB33F'
    },
    {
      name: 'Figma',
      logo: 'https://img.icons8.com/color/480/figma.png',
      color: '#F24E1E'
    },
    {
      name: 'After Effects',
      logo: 'https://img.icons8.com/color/480/adobe-after-effects.png',
      color: '#9999FF'
    },
    {
      name: 'Canva',
      logo: canvaLogo,
      color: '#00C4CC'
    },
    {
      name: 'CapCut',
      logo: capCutLogo,
      color: '#00F0FF'
    },
    {
      name: 'VN Editor',
      logo: vnEditorLogo,
      color: '#4A90D9'
    },
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Crafting <span className="gradient-text">Visual Stories</span>
            <br />That Resonate
          </h2>
        </motion.div>

        <div className="about-grid">
          {/* Left Column - Image & Qualities */}
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image">
                <img src="/anushakka_works/WhatsApp Image 2025-12-24 at 10.48.10 AM.jpeg" alt="Profile" />
              </div>
              <div className="image-decoration">
                <motion.div
                  className="deco-dot dot-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="deco-dot dot-2"
                  animate={{ scale: [1.2, 1, 1.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Personal Skills */}
            <div className="personal-skills-section">
              <h3 className="personal-skills-title">Personal Skills</h3>
              <div className="personal-skills-grid">
                {personalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="personal-skill-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="personal-skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="personal-skill-content">
                      <h4>{skill.title}</h4>
                      <p>{skill.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column - Bio & Skills */}
          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="about-bio">
              <p className="bio-lead">
                Hello! I'm a passionate graphic designer with over 3+ years of experience
                creating visual solutions that make brands stand out.
              </p>
              <p>
                I specialize in brand identity, logo design, social media graphics,
                print media, and packaging design. My approach combines creativity
                with strategic thinking to deliver designs that not only look beautiful
                but also achieve business goals.
              </p>
              <p>
                Every project I undertake is an opportunity to tell a unique story
                through design. I believe in the power of visual communication to
                connect brands with their audiences in meaningful ways.
              </p>
            </div>

            <div className="education-section">
              <h3><GraduationCap size={24} /> Education</h3>
              <div className="education-list">
                <motion.div
                  className="education-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="education-year">2018 - 2022</div>
                  <div className="education-details">
                    <h4>Bachelor of Visual Arts (Applied Art)</h4>
                    <p>Chamarajendra Govt College of Visual Arts (CAVA)</p>
                  </div>
                </motion.div>
                <motion.div
                  className="education-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="education-year">2018</div>
                  <div className="education-details">
                    <h4>SDM Pre-university College</h4>
                    <p>PU College (PCMB)</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="experience-section">
              <h3><Briefcase size={24} /> Experience</h3>
              <div className="experience-list">
                <motion.div
                  className="experience-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="experience-type freelance">Freelancer</div>
                  <div className="experience-details">
                    <div className="experience-header">
                      <h4>Freelance Graphic Designer</h4>
                      <span className="experience-duration">2022 - Present</span>
                    </div>
                    <p className="experience-company">Self-Employed</p>
                    <p className="experience-desc">
                      Working with diverse clients on branding, logo design, social media graphics, and print materials. Successfully completed 20+ projects.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="experience-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="experience-type company">Company</div>
                  <div className="experience-details">
                    <div className="experience-header">
                      <h4>Graphic Designer Executive</h4>
                      <span className="experience-duration">2023 - Present</span>
                    </div>
                    <p className="experience-company">Bal Pharma Limited</p>
                    <p className="experience-desc">
                      Leading design projects for major brand campaigns, collaborating with marketing teams, and mentoring junior designers.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="skills-section">
              <h3>Core Skills and Tools</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-logo">
                      <img src={skill.logo} alt={skill.name} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a
              href="#contact"
              className="btn btn-primary about-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
