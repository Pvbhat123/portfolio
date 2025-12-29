import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Palette,
  Layers,
  Share2,
  Printer,
  Package,
  Wand2,
  Film,
  Video,
  Globe,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedService, setSelectedService] = useState(null)
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0)
  const [viewingWork, setViewingWork] = useState(null)

  const services = [
    {
      icon: <Palette size={32} />,
      title: 'Logo Design',
      description: 'Crafting unique, memorable logos that capture your brand essence and leave lasting impressions on your audience.',
      features: ['Brand Identity', 'Logo Variations', 'Style Guidelines'],
      color: '#ff6b6b',
      detailedDescription: 'I create distinctive logos that become the cornerstone of your brand identity. Each logo is carefully crafted to communicate your brand values and resonate with your target audience.',
      process: ['Discovery & Research', 'Concept Sketching', 'Digital Design', 'Refinement', 'Final Delivery'],
      deliverables: ['Primary Logo', 'Logo Variations', 'Color & B/W Versions', 'Brand Guidelines', 'Source Files'],
      works: [
        { title: '100% Natural Icon', image: '/anushakka_works/100% natural_100% Natural-22.png' },
        { title: 'Herbal Badge', image: '/anushakka_works/Icon-1_100% herbal.png' },
        { title: 'Ayush Certified', image: '/anushakka_works/Icon-1_Ayush Certified.png' },
      ]
    },
    {
      icon: <Layers size={32} />,
      title: 'Icon Design',
      description: 'Creating custom icon sets that enhance user experience and maintain visual consistency across all platforms.',
      features: ['Custom Icons', 'Icon Systems', 'App Icons'],
      color: '#feca57',
      detailedDescription: 'Custom icon sets designed to enhance user experience and maintain visual consistency. From app icons to comprehensive icon systems, I create scalable and pixel-perfect icons.',
      process: ['Style Definition', 'Grid System Setup', 'Icon Sketching', 'Vector Creation', 'Testing & Export'],
      deliverables: ['Icon Set (SVG/PNG)', 'Multiple Sizes', 'Icon Font', 'Usage Guidelines', 'Source Files'],
      works: [
        { title: 'Clinically Tested', image: '/anushakka_works/ICONS PNG_Clinically Tested-.jpg' },
        { title: 'GMP Certified', image: '/anushakka_works/ICONS PNG_GMP Certified-.jpg' },
        { title: 'Science Backed', image: '/anushakka_works/ICONS PNG_Science Backed-.jpg' },
        { title: 'Premium Quality', image: '/anushakka_works/ICONS PNG_Premium Quality.jpg' },
      ]
    },
    {
      icon: <Share2 size={32} />,
      title: 'Social Media',
      description: 'Designing eye-catching social media graphics that boost engagement and strengthen your online presence.',
      features: ['Post Designs', 'Stories', 'Ad Creatives'],
      color: '#48dbfb',
      detailedDescription: 'Engaging social media content that stops the scroll. I design posts, stories, and ad creatives that align with your brand while maximizing engagement and reach.',
      process: ['Content Strategy', 'Template Design', 'Content Creation', 'Platform Optimization', 'Performance Review'],
      deliverables: ['Post Templates', 'Story Templates', 'Ad Creatives', 'Content Calendar', 'Brand Kit'],
      works: [
        // 1 Cricket World Cup Series
        { title: 'Cricket World Cup Anarsha', image: '/anushakka_works/Social Media/Cricket series/Cricket world cup  Anarsha final.jpg' },
        // 5 Festival Posters
        { title: 'Ganesha Festival', image: '/anushakka_works/Social Media/Festival Posters/Ganesha Festival 2025.jpg' },
        { title: 'Holi Festival', image: '/anushakka_works/Social Media/Festival Posters/Holi.jpg' },
        { title: 'Independence Day', image: '/anushakka_works/Social Media/Festival Posters/Independence Day.jpg' },
        { title: 'Onam Festival', image: '/anushakka_works/Social Media/Festival Posters/Onam.jpg' },
        { title: 'New Year 2025', image: '/anushakka_works/Social Media/Festival Posters/New year 2025.jpg' },
        // 4 Health Awareness
        { title: 'World Heart Day', image: '/anushakka_works/Social Media/Health Awareness Posters/Heart day 25.jpg' },
        { title: 'Mental Health Day', image: '/anushakka_works/Social Media/Health Awareness Posters/Mental health day 25.jpg' },
        { title: 'World Stroke Day', image: '/anushakka_works/Social Media/Health Awareness Posters/world Stroke day.jpg' },
        { title: 'Asthma Day', image: '/anushakka_works/Social Media/Health Awareness Posters/Asthma Day.jpg' },
        // 2 Social Media Creative
        { title: 'Ashwamed Poster', image: '/anushakka_works/Social Media/Social Media Creative/Ashwamed Poster.jpg' },
        { title: 'Lipived Poster', image: '/anushakka_works/Social Media/Social Media Creative/Lipived product poster.jpg' },
        // 3 Web Banners
        { title: 'Biotin Banner', image: '/anushakka_works/Websight Posts/Others/Biotin Banner.jpg' },
        { title: 'Muslizen Banner', image: '/anushakka_works/Websight Posts/Others/Muslizen Banner.jpg' },
        { title: 'Wonderpro Banner', image: '/anushakka_works/Websight Posts/Others/Wonderpro Banner (2).jpg' },
      ]
    },
    {
      icon: <Printer size={32} />,
      title: 'Print Media',
      description: 'Producing high-quality print materials from business cards to brochures that make your brand tangible.',
      features: ['Business Cards', 'Brochures', 'Flyers'],
      color: '#ff9ff3',
      detailedDescription: 'Professional print materials that make a lasting impression. From business cards to large-format prints, I ensure your brand looks stunning in the physical world.',
      process: ['Design Consultation', 'Layout Design', 'Print Preparation', 'Proofing', 'Print Supervision'],
      deliverables: ['Print-Ready Files', 'Multiple Formats', 'Bleed & Trim Marks', 'Color Profiles', 'Vendor Coordination'],
      works: [
        { title: 'Ayurveda Poster 1', image: '/anushakka_works/Series Of Posters/1/Ayu 1.jpg' },
        { title: 'Ayurveda Poster 2', image: '/anushakka_works/Series Of Posters/1/Ayu2.png' },
        { title: 'Eyespa Poster', image: '/anushakka_works/Series Of Posters/3/Eyespa 1.jpg' },
        { title: 'Lung Health', image: '/anushakka_works/Series Of Posters/5/Lung 1.jpg' },
        { title: 'Dental Care', image: '/anushakka_works/Series Of Posters/7/teeth 1.jpg' },
        { title: 'Dengue Prevention', image: '/anushakka_works/Series Of Posters/9/Dengue 1.png' },
      ]
    },
    {
      icon: <Package size={32} />,
      title: 'Packaging',
      description: 'Designing innovative packaging solutions that protect your products and captivate customers on shelves.',
      features: ['Product Boxes', 'Labels', '3D Mockups'],
      color: '#54a0ff',
      detailedDescription: 'Packaging that sells. I design packaging solutions that not only protect your products but also create memorable unboxing experiences and stand out on shelves.',
      process: ['Product Analysis', 'Structural Design', 'Graphic Design', '3D Mockups', 'Production Files'],
      deliverables: ['Packaging Design', 'Dieline Templates', '3D Mockups', 'Print Files', 'Material Specs'],
      works: [
        {
          title: 'Sujirna Capsule',
          image: '/anushakka_works/Product              Re- Packaging/Sujirna capsule Packaging.jpg',
          finalProduct: '/anushakka_works/Product              Re- Packaging/Sujirna PNG.png'
        },
        {
          title: 'Anarsha',
          image: '/anushakka_works/Product              Re- Packaging/Anarsha Packaging.jpg',
          finalProduct: '/anushakka_works/Product              Re- Packaging/Anarsha PNG.png'
        },
        {
          title: 'Bal Pro Syrup',
          image: '/anushakka_works/Product              Re- Packaging/Bal pro syrup Packaging.jpg',
          finalProduct: '/anushakka_works/Product              Re- Packaging/Bal pro PNG.png'
        },
      ]
    },
    {
      icon: <Wand2 size={32} />,
      title: 'Brand Identity',
      description: 'Developing comprehensive brand systems that create cohesive experiences across all touchpoints.',
      features: ['Brand Books', 'Visual Systems', 'Templates'],
      color: '#5f27cd',
      detailedDescription: 'Complete brand identity systems that ensure consistency across all touchpoints. From strategy to execution, I build brands that connect and convert.',
      process: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Asset Creation', 'Brand Launch'],
      deliverables: ['Brand Book', 'Logo Suite', 'Color Palette', 'Typography System', 'Templates'],
      works: [
        { title: 'Ayush Certified', image: '/anushakka_works/ICONS PNG_Ayush.jpg' },
        { title: 'DRDO Approved', image: '/anushakka_works/ICONS PNG_DRDO-.jpg' },
        { title: 'FSSAI Approved', image: '/anushakka_works/ICONS PNG_fssai approved-.jpg' },
        { title: 'Lab Certified', image: '/anushakka_works/ICONS PNG_Lab Certified-.jpg' },
      ]
    },
    {
      icon: <Film size={32} />,
      title: 'GIF & Motion Graphics',
      description: 'Creating engaging animated GIFs and motion graphics that capture attention and bring your content to life.',
      features: ['Animated GIFs', 'Loop Animations', 'Motion Graphics'],
      color: '#00d2d3',
      detailedDescription: 'Dynamic motion content that captures attention. I create GIFs and motion graphics that bring your brand to life and boost engagement across digital platforms.',
      process: ['Concept Development', 'Storyboarding', 'Animation', 'Refinement', 'Export & Optimization'],
      deliverables: ['Animated GIFs', 'Loop Animations', 'Social Media Formats', 'Source Files'],
      works: [
        { title: 'Anarsha GIF', video: '/anushakka_works/GIF/Anarsha GIF.gif', isGif: true },
        { title: 'Ayurfine GIF', video: '/anushakka_works/GIF/Ayurfine GIF.mov' },
        { title: 'Prolife GIF', video: '/anushakka_works/GIF/Prolife GIF.mov' },
        { title: 'Sujirna GIF', video: '/anushakka_works/GIF/Sujirna GIF (1).mov' },
      ]
    },
    {
      icon: <Video size={32} />,
      title: 'Short Videos',
      description: 'Producing compelling short-form video content perfect for social media, product launches, and brand awareness campaigns.',
      features: ['Promo Videos', 'Product Videos', 'Social Reels'],
      color: '#e74c3c',
      detailedDescription: 'Engaging short-form video content that drives results. From product showcases to awareness campaigns, I create impactful videos optimized for social media and digital platforms.',
      process: ['Concept Planning', 'Storyboarding', 'Filming/Animation', 'Editing', 'Final Delivery'],
      deliverables: ['MP4 Videos', 'Social Media Formats', 'Vertical & Horizontal Versions', 'Optimized for Platforms', 'Source Files'],
      works: [
        { title: 'Deepavali Annakoot', video: '/anushakka_works/Short videos/Deepavali annakoot (1).mp4' },
        { title: 'Logo Launch', video: '/anushakka_works/Short videos/Logo Launch.mp4' },
        { title: 'PCOS Awareness', video: '/anushakka_works/Short videos/PCOS Awareness month.mp4' },
        { title: 'Product Detailing', video: '/anushakka_works/Short videos/Product detailing 1.mp4' },
        { title: 'Prolife Video', video: '/anushakka_works/Short videos/Prolife video.mp4' },
        { title: 'Sujirna Video', video: '/anushakka_works/Short videos/Sujirna video.mp4' },
      ]
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Posts',
      description: 'Designing visually striking web posts and digital content optimized for maximum online engagement.',
      features: ['Blog Graphics', 'Web Banners', 'Digital Ads'],
      color: '#1dd1a1',
      detailedDescription: 'Web-optimized graphics that drive results. From blog headers to banner ads, I create digital content that looks great and performs even better.',
      process: ['Content Analysis', 'Design Creation', 'Responsive Versions', 'Optimization', 'A/B Variants'],
      deliverables: ['Web Graphics', 'Banner Ads', 'Blog Headers', 'Email Graphics', 'Multiple Sizes'],
      works: [
        { title: 'Biotin Banner', image: '/anushakka_works/Websight Posts/Others/Biotin Banner.jpg' },
        { title: 'Muslizen Banner', image: '/anushakka_works/Websight Posts/Others/Muslizen Banner.jpg' },
        { title: 'Tuska Combo', image: '/anushakka_works/Websight Posts/Others/Tuska Combo Banner.jpg' },
        { title: 'Wonderpro Banner', image: '/anushakka_works/Websight Posts/Others/Wonderpro Banner (2).jpg' },
        { title: 'Ino Banner', image: '/anushakka_works/Websight Posts/Others/Ino Banner.jpg' },
        { title: 'Website Overview', image: '/anushakka_works/Websight Posts/Websight.jpg' },
      ]
    }
  ]

  const closeModal = () => {
    setSelectedService(null)
    setCurrentWorkIndex(0)
    setViewingWork(null)
  }

  const nextWork = () => {
    if (selectedService) {
      setCurrentWorkIndex((prev) => (prev + 1) % selectedService.works.length)
    }
  }

  const prevWork = () => {
    if (selectedService) {
      setCurrentWorkIndex((prev) => (prev - 1 + selectedService.works.length) % selectedService.works.length)
    }
  }

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            What I Do
          </motion.span>
          <h2 className="section-title">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Services That{' '}
            </motion.span>
            <motion.span
              className="gradient-text"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Transform
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Your Brand
            </motion.span>
          </h2>
          <motion.p
            className="section-desc"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            From concept to completion, I offer comprehensive design services
            that bring your vision to life with creativity and precision.
          </motion.p>
        </motion.div>

        <div className="services-carousel-wrapper">
          <motion.div
            className="services-carousel"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: 'linear'
              }
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {/* Double the services for seamless infinite scroll */}
            {[...services, ...services].map((service, index) => (
              <motion.div
                key={index}
                className="service-card hoverable"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (index % services.length) * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ '--accent-color': service.color }}
                onClick={() => setSelectedService(service)}
              >
                <motion.div
                  className="service-icon"
                  style={{ color: service.color }}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="service-link"
                  whileHover={{ x: 5 }}
                >
                  <span>View Work</span>
                  <ArrowUpRight size={16} />
                </motion.div>
                <div className="service-glow" style={{ background: service.color }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="services-bg">
        <motion.div
          className="bg-circle circle-1"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="bg-circle circle-2"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.1, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="bg-circle circle-3"
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, -30, 0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <motion.div
          className="service-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="service-modal"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            style={{ '--modal-color': selectedService.color }}
          >
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <motion.div
                className="modal-icon"
                style={{ color: selectedService.color }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {selectedService.icon}
              </motion.div>
              <h2>{selectedService.title}</h2>
            </div>

            <div className="modal-content">
              <div className="modal-section">
                <h3>About This Service</h3>
                <p>{selectedService.detailedDescription}</p>
              </div>

              <div className="modal-columns">
                <div className="modal-section">
                  <h3>My Process</h3>
                  <ul className="modal-list process-list">
                    {selectedService.process.map((step, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="step-number">{i + 1}</span>
                        {step}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>Deliverables</h3>
                  <ul className="modal-list deliverables-list">
                    {selectedService.deliverables.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-section">
                <h3>Recent Work</h3>
                {selectedService.works.some(work => work.finalProduct) ? (
                  <div className="packaging-grid">
                    {selectedService.works.map((work, i) => (
                      <motion.div
                        key={i}
                        className="work-item work-item-packaging"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                      >
                        <div className="packaging-showcase">
                          <motion.div
                            className="packaging-design-side"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setViewingWork({ src: work.image, title: `${work.title} - Design` })}
                          >
                            <span className="packaging-label">Design</span>
                            <img src={work.image} alt={`${work.title} Design`} />
                          </motion.div>
                          <motion.div
                            className="packaging-final-side"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setViewingWork({ src: work.finalProduct, title: `${work.title} - Final Product` })}
                          >
                            <span className="packaging-label">Final Product</span>
                            <img src={work.finalProduct} alt={`${work.title} Final`} />
                          </motion.div>
                        </div>
                        <span className="work-title">{work.title}</span>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="modal-works">
                    {selectedService.works.map((work, i) => (
                      <motion.div
                        key={i}
                        className="work-item"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        onClick={() => setViewingWork({ src: work.video || work.image, title: work.title, isVideo: !!work.video })}
                      >
                        {work.video ? (
                          <div className="video-work-container">
                            {work.isGif ? (
                              <img src={work.video} alt={work.title} />
                            ) : (
                              <video
                                src={work.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                              />
                            )}
                            <div className="video-play-indicator">
                              <Play size={24} />
                            </div>
                          </div>
                        ) : (
                          <img src={work.image} alt={work.title} />
                        )}
                        <span>{work.title}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              <motion.a
                href="#contact"
                className="modal-cta"
                style={{ background: selectedService.color }}
                whileHover={{ scale: 1.05, boxShadow: `0 10px 40px ${selectedService.color}40` }}
                whileTap={{ scale: 0.95 }}
                onClick={closeModal}
              >
                Get Started with {selectedService.title}
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Full Image Viewer */}
      {viewingWork && (
        <motion.div
          className="image-viewer-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setViewingWork(null)}
        >
          <motion.div
            className="image-viewer-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="viewer-close" onClick={() => setViewingWork(null)}>
              <X size={24} />
            </button>
            <h3 className="viewer-title">{viewingWork.title}</h3>
            {viewingWork.isVideo && !viewingWork.src.endsWith('.gif') ? (
              <video
                src={viewingWork.src}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="viewer-media"
              />
            ) : (
              <img
                src={viewingWork.src}
                alt={viewingWork.title}
                className="viewer-media"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Services
