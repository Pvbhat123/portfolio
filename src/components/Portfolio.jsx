import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { X, ExternalLink, Eye, Palette, Layers, Share2, Printer, Package, ChevronLeft, ChevronRight, ZoomIn, Grid3X3, Film } from 'lucide-react'

// 3D Tilt Card Component
const TiltCard = ({ children, className, onClick, style }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 50 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 50 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        ...style
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedWork, setSelectedWork] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  const filters = [
    { id: 'all', label: 'All Works', icon: <Grid3X3 size={16} /> },
    { id: 'gif', label: 'Motion Graphics', icon: <Film size={16} /> },
    { id: 'packaging', label: 'Packaging', icon: <Package size={16} /> },
    { id: 'poster', label: 'Poster Series', icon: <Printer size={16} /> },
    { id: 'icon', label: 'Icon Design', icon: <Layers size={16} /> },
    { id: 'social', label: 'Social Media', icon: <Share2 size={16} /> },
  ]

  const portfolioItems = [
    // GIF / Motion Graphics
    {
      id: 21,
      title: 'Anarsha Product Animation',
      category: 'gif',
      description: 'Eye-catching animated GIF showcasing Anarsha product features. Smooth motion design that captures attention and communicates product benefits.',
      tags: ['Motion Graphics', 'Product Animation', 'GIF'],
      color: '#ff6b6b',
      year: '2024',
      client: 'Anarsha',
      tools: ['After Effects', 'Photoshop'],
      video: '/anushakka_works/GIF/Anarsha GIF.gif',
      thumbnail: '/anushakka_works/GIF/Anarsha GIF.gif',
      isVideo: true
    },
    {
      id: 22,
      title: 'Ayurfine Motion Design',
      category: 'gif',
      description: 'Dynamic motion graphics for Ayurfine product marketing. Engaging animations that bring the brand to life across digital platforms.',
      tags: ['Motion Design', 'Video', 'Marketing'],
      color: '#feca57',
      year: '2024',
      client: 'Ayurfine',
      tools: ['After Effects', 'Premiere'],
      video: '/anushakka_works/GIF/Ayurfine GIF.mov',
      thumbnail: '/anushakka_works/Product              Re- Packaging/Anarsha PNG.png',
      isVideo: true
    },
    {
      id: 23,
      title: 'Prolife Animated Promo',
      category: 'gif',
      description: 'Professional motion graphics for Prolife healthcare products. Combines informative content with captivating visual effects.',
      tags: ['Animation', 'Healthcare', 'Promo Video'],
      color: '#48dbfb',
      year: '2024',
      client: 'Prolife',
      tools: ['After Effects', 'Illustrator'],
      video: '/anushakka_works/GIF/Prolife GIF.mov',
      thumbnail: '/anushakka_works/Product              Re- Packaging/Sujirna PNG.png',
      isVideo: true
    },
    {
      id: 24,
      title: 'Sujirna Animation',
      category: 'gif',
      description: 'Engaging animated content for Sujirna product line. Smooth transitions and professional motion design for digital marketing.',
      tags: ['Motion Graphics', 'Animation', 'Digital'],
      color: '#ff9ff3',
      year: '2024',
      client: 'Sujirna',
      tools: ['After Effects', 'Photoshop'],
      video: '/anushakka_works/GIF/Sujirna GIF (1).mov',
      thumbnail: '/anushakka_works/Product              Re- Packaging/Sujirna.png',
      isVideo: true
    },

    // Packaging Works
    {
      id: 1,
      title: 'Sujirna Capsule Packaging',
      category: 'packaging',
      description: 'Complete packaging design for Sujirna Capsule - a premium ayurvedic health supplement. The design emphasizes natural ingredients and holistic wellness with elegant typography and herbal motifs.',
      tags: ['Packaging Design', 'Product Label', 'Healthcare'],
      color: '#ff6b6b',
      year: '2024',
      client: 'Healthcare Brand',
      tools: ['Illustrator', 'Photoshop'],
      images: [
        '/anushakka_works/Product              Re- Packaging/Sujirna capsule Packaging.jpg',
        '/anushakka_works/Product              Re- Packaging/Sujirna PNG.png',
        '/anushakka_works/Product              Re- Packaging/Sujirna.png'
      ],
      thumbnail: '/anushakka_works/Product              Re- Packaging/Sujirna PNG.png'
    },
    {
      id: 2,
      title: 'Anarsha Product Design',
      category: 'packaging',
      description: 'Premium packaging design for Anarsha healthcare product. Features a sophisticated color palette and clear product hierarchy with emphasis on natural remedies.',
      tags: ['Packaging', 'Brand Design', 'Healthcare'],
      color: '#feca57',
      year: '2024',
      client: 'Ayurvedic Brand',
      tools: ['Illustrator', 'Dimension'],
      images: [
        '/anushakka_works/Product              Re- Packaging/Anarsha Packaging.jpg',
        '/anushakka_works/Product              Re- Packaging/Anarsha PNG.png',
        '/anushakka_works/Product              Re- Packaging/Anarsha.png'
      ],
      thumbnail: '/anushakka_works/Product              Re- Packaging/Anarsha PNG.png'
    },
    {
      id: 3,
      title: 'Bal Pro Syrup Package',
      category: 'packaging',
      description: 'Child-friendly packaging design for Bal Pro Syrup. Vibrant colors and playful elements while maintaining pharmaceutical credibility and safety information hierarchy.',
      tags: ['Packaging', 'Label Design', 'Pharmaceutical'],
      color: '#48dbfb',
      year: '2024',
      client: 'Pharma Company',
      tools: ['Illustrator', 'Photoshop'],
      images: [
        '/anushakka_works/Product              Re- Packaging/Bal pro syrup Packaging.jpg',
        '/anushakka_works/Product              Re- Packaging/Balpro Syrup Label.jpg',
        '/anushakka_works/Product              Re- Packaging/Bal pro PNG.png',
        '/anushakka_works/Product              Re- Packaging/Balpro syrup.png'
      ],
      thumbnail: '/anushakka_works/Product              Re- Packaging/Bal pro PNG.png'
    },

    // Poster Series
    {
      id: 4,
      title: 'Ayurveda Wellness Series',
      category: 'poster',
      description: 'A captivating poster series showcasing the essence of Ayurvedic wellness. Each poster tells a story of natural healing through stunning visuals and thoughtful typography.',
      tags: ['Poster Design', 'Print Media', 'Wellness'],
      color: '#ff9ff3',
      year: '2024',
      client: 'Wellness Brand',
      tools: ['Photoshop', 'Illustrator'],
      images: [
        '/anushakka_works/Series Of Posters/1/Ayu 1.jpg',
        '/anushakka_works/Series Of Posters/1/Ayu2.png'
      ],
      thumbnail: '/anushakka_works/Series Of Posters/1/Ayu 1.jpg'
    },
    {
      id: 5,
      title: 'Healthcare Campaign Posters',
      category: 'poster',
      description: 'Impactful healthcare awareness campaign with bold visuals and clear messaging. Designed to educate and engage viewers about important health topics.',
      tags: ['Campaign', 'Healthcare', 'Awareness'],
      color: '#54a0ff',
      year: '2024',
      client: 'Health Initiative',
      tools: ['Photoshop', 'Illustrator'],
      images: [
        '/anushakka_works/Series Of Posters/2/1.jpg',
        '/anushakka_works/Series Of Posters/2/2.jpg',
        '/anushakka_works/Series Of Posters/2/3.jpg'
      ],
      thumbnail: '/anushakka_works/Series Of Posters/2/1.jpg'
    },
    {
      id: 6,
      title: 'Eyespa Eye Care Series',
      category: 'poster',
      description: 'Eye care awareness poster series with soothing visuals and informative content. Focused on promoting eye health and Eyespa products.',
      tags: ['Healthcare', 'Product Promo', 'Eye Care'],
      color: '#5f27cd',
      year: '2024',
      client: 'Eye Care Brand',
      tools: ['Photoshop', 'Illustrator'],
      images: [
        '/anushakka_works/Series Of Posters/3/Eyespa 1.jpg',
        '/anushakka_works/Series Of Posters/3/Eyespa 2.jpg'
      ],
      thumbnail: '/anushakka_works/Series Of Posters/3/Eyespa 1.jpg'
    },
    {
      id: 7,
      title: 'Brand B Campaign',
      category: 'poster',
      description: 'Modern and sleek campaign posters with minimalist design approach. Strong typography paired with premium imagery for maximum impact.',
      tags: ['Campaign', 'Branding', 'Print'],
      color: '#00d2d3',
      year: '2024',
      client: 'Brand B',
      tools: ['Photoshop', 'Illustrator'],
      images: [
        '/anushakka_works/Series Of Posters/4/B1.jpg',
        '/anushakka_works/Series Of Posters/4/B2.jpg',
        '/anushakka_works/Series Of Posters/4/B3.jpg',
        '/anushakka_works/Series Of Posters/4/B4.jpg'
      ],
      thumbnail: '/anushakka_works/Series Of Posters/4/B1.jpg'
    },
    {
      id: 8,
      title: 'Lung Health Awareness',
      category: 'poster',
      description: 'Respiratory health awareness series with impactful visuals highlighting the importance of lung care and healthy breathing habits.',
      tags: ['Health Awareness', 'Medical', 'Campaign'],
      color: '#1dd1a1',
      year: '2024',
      client: 'Health Organization',
      tools: ['Photoshop', 'Illustrator'],
      images: [
        '/anushakka_works/Series Of Posters/5/Lung 1.jpg',
        '/anushakka_works/Series Of Posters/5/Lung 2.jpg',
        '/anushakka_works/Series Of Posters/5/Lung 3_.jpg',
        '/anushakka_works/Series Of Posters/5/Lung 4.jpg'
      ],
      thumbnail: '/anushakka_works/Series Of Posters/5/Lung 1.jpg'
    },
    {
      id: 9,
      title: 'Thyroid Care Posters',
      category: 'poster',
      description: 'Educational poster series about thyroid health. Combines medical accuracy with accessible design for public health education.',
      tags: ['Healthcare', 'Education', 'Awareness'],
      color: '#ee5a24',
      year: '2024',
      client: 'Medical Campaign',
      tools: ['Photoshop', 'Illustrator'],
      images: [
        '/anushakka_works/Series Of Posters/6/Thy 1.png',
        '/anushakka_works/Series Of Posters/6/Thy 2.jpg'
      ],
      thumbnail: '/anushakka_works/Series Of Posters/6/Thy 1.png'
    },
    {
      id: 10,
      title: 'Dental Care Campaign',
      category: 'poster',
      description: 'Dental hygiene awareness campaign with friendly, approachable designs. Promotes oral health habits with visually engaging content.',
      tags: ['Dental', 'Healthcare', 'Campaign'],
      color: '#0abde3',
      year: '2024',
      client: 'Dental Brand',
      tools: ['Photoshop', 'Illustrator'],
      images: [
        '/anushakka_works/Series Of Posters/7/teeth 1.jpg',
        '/anushakka_works/Series Of Posters/7/teeth 2.jpg',
        '/anushakka_works/Series Of Posters/7/teeth 3.jpg'
      ],
      thumbnail: '/anushakka_works/Series Of Posters/7/teeth 1.jpg'
    },
    {
      id: 11,
      title: 'Children Eye Health',
      category: 'poster',
      description: 'Child-focused eye health awareness posters with playful yet informative design. Created to engage parents and children about eye care.',
      tags: ['Children', 'Eye Care', 'Awareness'],
      color: '#f368e0',
      year: '2024',
      client: 'Pediatric Eye Care',
      tools: ['Photoshop', 'Illustrator'],
      images: [
        '/anushakka_works/Series Of Posters/8/Children Eyehealth1.png',
        '/anushakka_works/Series Of Posters/8/Children Eyehealth2.jpg'
      ],
      thumbnail: '/anushakka_works/Series Of Posters/8/Children Eyehealth1.png'
    },
    {
      id: 12,
      title: 'Dengue Prevention',
      category: 'poster',
      description: 'Public health awareness campaign for dengue prevention. Striking visuals with clear actionable information for community safety.',
      tags: ['Public Health', 'Prevention', 'Awareness'],
      color: '#ff6b6b',
      year: '2024',
      client: 'Public Health',
      tools: ['Photoshop', 'Illustrator'],
      images: [
        '/anushakka_works/Series Of Posters/9/Dengue 1.png',
        '/anushakka_works/Series Of Posters/9/Dengue 2.jpg',
        '/anushakka_works/Series Of Posters/9/Dengue 3.png'
      ],
      thumbnail: '/anushakka_works/Series Of Posters/9/Dengue 1.png'
    },

    // Icon Design
    {
      id: 13,
      title: 'Healthcare Icon System',
      category: 'icon',
      description: 'Comprehensive icon set designed for healthcare and pharmaceutical products. Each icon maintains visual consistency while clearly communicating product benefits.',
      tags: ['Icon Design', 'Healthcare', 'Product Icons'],
      color: '#feca57',
      year: '2024',
      client: 'Pharmaceutical',
      tools: ['Illustrator', 'Figma'],
      images: [
        '/anushakka_works/Icon-1_Ayush Certified.png',
        '/anushakka_works/Icon-1_Immunity Booster.png',
        '/anushakka_works/Icon-1_Safe to use.png',
        '/anushakka_works/Icon-1_Chewable.png'
      ],
      thumbnail: '/anushakka_works/Icon-1_Ayush Certified.png'
    },
    {
      id: 14,
      title: 'Product Feature Icons',
      category: 'icon',
      description: 'Premium product feature icons with detailed illustrations. Used across packaging and marketing materials for clear benefit communication.',
      tags: ['Icons', 'Product Design', 'Illustration'],
      color: '#48dbfb',
      year: '2024',
      client: 'Consumer Goods',
      tools: ['Illustrator'],
      images: [
        '/anushakka_works/ICONS PNG_Ayush.jpg',
        '/anushakka_works/ICONS PNG_Clinically Tested-.jpg',
        '/anushakka_works/ICONS PNG_GMP Certified-.jpg',
        '/anushakka_works/ICONS PNG_Science Backed-.jpg'
      ],
      thumbnail: '/anushakka_works/ICONS PNG_Ayush.jpg'
    },

    // Social Media / Web Posts
    {
      id: 15,
      title: 'Ashwamed Social Campaign',
      category: 'social',
      description: 'Complete social media campaign for Ashwamed product line. Engaging visuals optimized for maximum engagement across platforms.',
      tags: ['Social Media', 'Campaign', 'Digital Marketing'],
      color: '#ff9ff3',
      year: '2024',
      client: 'Ashwamed',
      tools: ['Photoshop', 'Canva'],
      images: [
        '/anushakka_works/Websight Posts/Ashwamed/1.jpg',
        '/anushakka_works/Websight Posts/Ashwamed/2.jpg',
        '/anushakka_works/Websight Posts/Ashwamed/3.jpg',
        '/anushakka_works/Websight Posts/Ashwamed/4.jpg',
        '/anushakka_works/Websight Posts/Ashwamed/5.jpg',
        '/anushakka_works/Websight Posts/Ashwamed/6.jpg'
      ],
      thumbnail: '/anushakka_works/Websight Posts/Ashwamed/1.jpg'
    },
    {
      id: 16,
      title: 'Eyespa Ayur Digital Content',
      category: 'social',
      description: 'Digital content series for Eyespa Ayur eye care products. Informative yet visually appealing posts for social media engagement.',
      tags: ['Social Media', 'Product Marketing', 'Healthcare'],
      color: '#54a0ff',
      year: '2024',
      client: 'Eyespa Ayur',
      tools: ['Photoshop', 'Illustrator'],
      images: [
        '/anushakka_works/Websight Posts/Eyespa Ayur/Eyespa-info 1.jpg',
        '/anushakka_works/Websight Posts/Eyespa Ayur/Eyespa-info 2.jpg',
        '/anushakka_works/Websight Posts/Eyespa Ayur/Eyespa-info 3.jpg',
        '/anushakka_works/Websight Posts/Eyespa Ayur/Eyespa-info 4.jpg',
        '/anushakka_works/Websight Posts/Eyespa Ayur/Eyespa-info 5.jpg'
      ],
      thumbnail: '/anushakka_works/Websight Posts/Eyespa Ayur/Eyespa-info 1.jpg'
    },
    {
      id: 17,
      title: 'Immuwin Social Posts',
      category: 'social',
      description: 'Social media content for Immuwin immunity booster. Focus on wellness messaging with clean, professional design aesthetic.',
      tags: ['Social Media', 'Wellness', 'Product Marketing'],
      color: '#5f27cd',
      year: '2024',
      client: 'Immuwin',
      tools: ['Photoshop', 'Canva'],
      images: [
        '/anushakka_works/Websight Posts/Immuwin/1.jpg',
        '/anushakka_works/Websight Posts/Immuwin/2.jpg',
        '/anushakka_works/Websight Posts/Immuwin/3.jpg',
        '/anushakka_works/Websight Posts/Immuwin/4.jpg',
        '/anushakka_works/Websight Posts/Immuwin/5.jpg',
        '/anushakka_works/Websight Posts/Immuwin/6.jpg'
      ],
      thumbnail: '/anushakka_works/Websight Posts/Immuwin/1.jpg'
    },
    {
      id: 18,
      title: 'Prostowin Campaign',
      category: 'social',
      description: 'Comprehensive digital campaign for Prostowin. Professional medical product marketing with trustworthy visual language.',
      tags: ['Digital Campaign', 'Healthcare', 'Marketing'],
      color: '#00d2d3',
      year: '2024',
      client: 'Prostowin',
      tools: ['Photoshop', 'Illustrator'],
      images: [
        '/anushakka_works/Websight Posts/Prostowin/1.jpg',
        '/anushakka_works/Websight Posts/Prostowin/2.jpg',
        '/anushakka_works/Websight Posts/Prostowin/3.jpg',
        '/anushakka_works/Websight Posts/Prostowin/4.jpg',
        '/anushakka_works/Websight Posts/Prostowin/5.jpg',
        '/anushakka_works/Websight Posts/Prostowin/6.jpg'
      ],
      thumbnail: '/anushakka_works/Websight Posts/Prostowin/1.jpg'
    },
    {
      id: 19,
      title: 'Stonex Digital Marketing',
      category: 'social',
      description: 'Digital marketing content for Stonex kidney care products. Educational content combined with promotional messaging.',
      tags: ['Social Media', 'Healthcare Marketing', 'Digital'],
      color: '#1dd1a1',
      year: '2024',
      client: 'Stonex',
      tools: ['Photoshop', 'Canva'],
      images: [
        '/anushakka_works/Websight Posts/Stonex/1.jpg',
        '/anushakka_works/Websight Posts/Stonex/2.jpg',
        '/anushakka_works/Websight Posts/Stonex/3.jpg',
        '/anushakka_works/Websight Posts/Stonex/4.jpg',
        '/anushakka_works/Websight Posts/Stonex/5.jpg',
        '/anushakka_works/Websight Posts/Stonex/6.jpg'
      ],
      thumbnail: '/anushakka_works/Websight Posts/Stonex/1.jpg'
    },
    {
      id: 20,
      title: 'Web Banners Collection',
      category: 'social',
      description: 'Diverse collection of web banners for various products. Optimized for both desktop and mobile viewing with responsive design principles.',
      tags: ['Web Banners', 'Digital Ads', 'Marketing'],
      color: '#ee5a24',
      year: '2024',
      client: 'Multiple Brands',
      tools: ['Photoshop', 'Illustrator'],
      images: [
        '/anushakka_works/Websight Posts/Others/Biotin Banner.jpg',
        '/anushakka_works/Websight Posts/Others/Muslizen Banner.jpg',
        '/anushakka_works/Websight Posts/Others/Tuska Combo Banner.jpg',
        '/anushakka_works/Websight Posts/Others/Wonderpro Banner (2).jpg',
        '/anushakka_works/Websight Posts/Others/Ino Banner.jpg'
      ],
      thumbnail: '/anushakka_works/Websight Posts/Others/Biotin Banner.jpg'
    }
  ]

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

  // Lightbox navigation
  const openLightbox = (work, index = 0) => {
    setSelectedWork(work)
    setCurrentImageIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedWork(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedWork && selectedWork.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedWork.images.length)
    }
  }

  const prevImage = () => {
    if (selectedWork && selectedWork.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedWork.images.length) % selectedWork.images.length)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen, selectedWork])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
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
            My Work
          </motion.span>
          <h2 className="section-title">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Featured{' '}
            </motion.span>
            <motion.span
              className="gradient-text"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Projects
            </motion.span>
          </h2>
          <motion.p
            className="section-desc"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            A curated selection of my best work showcasing expertise across
            packaging, poster design, icons, social media, and motion graphics.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
            >
              {filter.icon}
              <span>{filter.label}</span>
              {activeFilter === filter.id && (
                <motion.div
                  className="filter-active-indicator"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="visible"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <TiltCard
                  className={`portfolio-card hoverable ${hoveredCard === item.id ? 'hovered' : ''}`}
                  onClick={() => openLightbox(item)}
                  style={{ '--card-color': item.color }}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="card-image" style={{ transform: "translateZ(50px)" }}>
                    {item.isVideo ? (
                      <div className="video-thumbnail">
                        {item.video.endsWith('.gif') ? (
                          <img src={item.video} alt={item.title} />
                        ) : (
                          <video
                            src={item.video}
                            muted
                            loop
                            playsInline
                            autoPlay
                          />
                        )}
                        <div className="video-play-overlay">
                          <Film size={32} />
                        </div>
                      </div>
                    ) : (
                      <img src={item.thumbnail} alt={item.title} />
                    )}
                    <motion.div
                      className="card-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="overlay-content"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ZoomIn size={28} />
                        <span>View Project</span>
                        {item.images && item.images.length > 1 && (
                          <span className="image-count">{item.images.length} images</span>
                        )}
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="card-content" style={{ transform: "translateZ(30px)" }}>
                    <span className="card-category" style={{ color: item.color }}>
                      {filters.find(f => f.id === item.category)?.label}
                    </span>
                    <h3 className="card-title">{item.title}</h3>
                    <div className="card-tags">
                      {item.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="card-glow" style={{ background: item.color }} />
                  <div className="card-shine" />
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {isLightboxOpen && selectedWork && (
            <motion.div
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="lightbox-close" onClick={closeLightbox}>
                  <X size={24} />
                </button>

                <div className="lightbox-main">
                  <div className="lightbox-image-container">
                    {selectedWork.isVideo ? (
                      <div className="lightbox-video">
                        {selectedWork.video.endsWith('.gif') ? (
                          <img src={selectedWork.video} alt={selectedWork.title} />
                        ) : (
                          <video
                            src={selectedWork.video}
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        )}
                      </div>
                    ) : (
                      <>
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImageIndex}
                            src={selectedWork.images[currentImageIndex]}
                            alt={`${selectedWork.title} - ${currentImageIndex + 1}`}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                          />
                        </AnimatePresence>

                        {selectedWork.images.length > 1 && (
                          <>
                            <button className="lightbox-nav prev" onClick={prevImage}>
                              <ChevronLeft size={32} />
                            </button>
                            <button className="lightbox-nav next" onClick={nextImage}>
                              <ChevronRight size={32} />
                            </button>
                            <div className="lightbox-dots">
                              {selectedWork.images.map((_, idx) => (
                                <button
                                  key={idx}
                                  className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                                  onClick={() => setCurrentImageIndex(idx)}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>

                  <div className="lightbox-info">
                    <span className="lightbox-category" style={{ color: selectedWork.color }}>
                      {filters.find(f => f.id === selectedWork.category)?.label}
                    </span>
                    <h2 className="lightbox-title">{selectedWork.title}</h2>
                    <p className="lightbox-desc">{selectedWork.description}</p>

                    <div className="lightbox-meta">
                      <div className="meta-item">
                        <span className="meta-label">Client</span>
                        <span className="meta-value">{selectedWork.client}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Year</span>
                        <span className="meta-value">{selectedWork.year}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Tools</span>
                        <span className="meta-value">{selectedWork.tools.join(', ')}</span>
                      </div>
                    </div>

                    <div className="lightbox-tags">
                      {selectedWork.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="tag"
                          style={{ borderColor: selectedWork.color, color: selectedWork.color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Thumbnail Strip */}
                    {selectedWork.images && selectedWork.images.length > 1 && (
                      <div className="lightbox-thumbnails">
                        {selectedWork.images.map((img, idx) => (
                          <motion.button
                            key={idx}
                            className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(idx)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <img src={img} alt={`Thumbnail ${idx + 1}`} />
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background */}
      <div className="portfolio-bg">
        <motion.div
          className="bg-gradient"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="floating-particles">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.sin(i) * 50, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
