import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Gift, Package, Sparkles, CheckCircle2, Send, Users, Target, Heart, TrendingUp, Mail, Phone, MapPin, Building2, User, Briefcase } from 'lucide-react';
type AutoGiftLandingProps = Record<string, never>;
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
const staggerChildren = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// @component: AutoGiftLanding
export const AutoGiftLanding = (props: AutoGiftLandingProps) => {
  const [showExampleForm, setShowExampleForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    title: '',
    email: '',
    address: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const {
    scrollYProgress
  } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const mailtoLink = `mailto:jschlisserman@gmail.com?subject=AutoGift Example Request&body=${encodeURIComponent(`First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nCompany: ${formData.companyName}\nTitle: ${formData.title}\nEmail: ${formData.email}\nAddress: ${formData.address}\nPhone: ${formData.phone}`)}`;
    window.location.href = mailtoLink;
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setShowExampleForm(false);
        setSubmitSuccess(false);
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          title: '',
          email: '',
          address: '',
          phone: ''
        });
      }, 2000);
    }, 1000);
  };

  // @return
  return <div className="min-h-screen bg-[#F6F6F4] text-[#0C0C0D] overflow-x-hidden">
      {/* Navigation Bar */}
      <motion.nav initial={{
      y: -100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }} className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E2C382]/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Navigation Tabs */}
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium text-[#0C0C0D]/70 hover:text-[#0C0C0D] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-[#0C0C0D]/70 hover:text-[#0C0C0D] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('use-cases')} className="text-sm font-medium text-[#0C0C0D]/70 hover:text-[#0C0C0D] transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing-details')} className="text-sm font-medium text-[#0C0C0D]/70 hover:text-[#0C0C0D] transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('perfect-for-teams')} className="text-sm font-medium text-[#0C0C0D]/70 hover:text-[#0C0C0D] transition-colors">
              Use Cases
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            {/* AutoGift Logo SVG */}
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Gift box lid top */}
              <path d="M25 30 L47 25 L47 35 L25 40 Z" fill="#D4B574" />
              <path d="M53 25 L75 30 L75 40 L53 35 Z" fill="#C9A961" />
              
              {/* Gift box body */}
              <path d="M25 40 L47 35 L47 70 L25 75 Z" fill="#D4B574" />
              <path d="M53 35 L75 40 L75 75 L53 70 Z" fill="#C9A961" />
              
              {/* Center ribbon vertical */}
              <rect x="47" y="25" width="6" height="50" fill="#F6F6F4" />
            </svg>
            
            {/* AutoGift Text */}
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-[#0C0C0D]" style={{
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
                Auto
              </span>
              <span className="text-2xl font-bold text-[#C9A961]" style={{
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
                Gift
              </span>
            </div>
          </div>
        </div>
      </motion.nav>

      <motion.section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden" style={{
      y: heroY,
      opacity: heroOpacity
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0D8B6]/20 to-transparent pointer-events-none" />
        
        <motion.div className="absolute top-20 right-20 w-64 h-64 bg-[#E2C382]/10 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        
        <motion.div className="absolute bottom-40 left-20 w-96 h-96 bg-[#073D2B]/5 rounded-full blur-3xl" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerChildren}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#E2C382]" />
              <span className="text-sm font-medium text-[#073D2B]">White-Glove Gifting Service</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
              Handcrafted,{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#E2C382] to-[#073D2B] bg-clip-text text-transparent">
                  Hyper-Personalized
                </span>
                <motion.span className="absolute bottom-2 left-0 right-0 h-3 bg-[#E2C382]/20" initial={{
                scaleX: 0
              }} animate={{
                scaleX: 1
              }} transition={{
                delay: 0.8,
                duration: 0.6
              }} />
              </span>{' '}
              Gifts Done For You.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-[#0C0C0D]/70 mb-8 leading-relaxed">
              Tell us who you want to reach. Give us a budget. We research each person, design the perfect gift, source it, brand it, write the copy, and ship it end to end.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <motion.a href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }}>
                <span className="flex items-center justify-center gap-2">
                  Start Your Pilot
                  <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </motion.a>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-6 text-sm text-[#0C0C0D]/60 italic">
              Your outsourced ABM gifting team
            </motion.p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.9,
          rotateY: -15
        }} animate={{
          opacity: 1,
          scale: 1,
          rotateY: 0
        }} transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }} className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-[#E2C382]/20">
              <motion.div animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="space-y-6">
                <div className="bg-gradient-to-br from-[#F0D8B6]/30 to-[#E2C382]/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#073D2B] rounded-full flex items-center justify-center">
                      <Gift className="w-6 h-6 text-[#E2C382]" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-[#E2C382]/30 rounded-full w-3/4 mb-2" />
                      <div className="h-2 bg-[#E2C382]/20 rounded-full w-1/2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" />
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-5/6" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#073D2B]/5 rounded-xl p-4 backdrop-blur-sm">
                    <Package className="w-8 h-8 text-[#073D2B] mb-2" />
                    <div className="h-2 bg-[#073D2B]/20 rounded-full w-full" />
                  </div>
                  <div className="bg-[#073D2B]/5 rounded-xl p-4 backdrop-blur-sm">
                    <Sparkles className="w-8 h-8 text-[#E2C382] mb-2" />
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#E2C382]/20 to-[#F0D8B6]/30 rounded-2xl p-6 backdrop-blur-sm border-2 border-[#E2C382]/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-[#073D2B]">Handwritten Note</span>
                    <CheckCircle2 className="w-5 h-5 text-[#073D2B]" />
                  </div>
                  <div className="space-y-2 opacity-60">
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-full" />
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-4/5" />
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-3/4" />
                  </div>
                </div>
              </motion.div>

              <motion.div className="absolute -top-6 -right-6 w-24 h-24 bg-[#E2C382] rounded-full flex items-center justify-center shadow-xl" animate={{
              rotate: 360
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}>
                <Sparkles className="w-12 h-12 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {showExampleForm && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowExampleForm(false)}>
          <motion.div initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-br from-[#E2C382] to-[#D4B574] p-8 rounded-t-3xl">
              <h3 className="text-3xl font-bold text-[#0C0C0D] mb-2">Request An Example</h3>
              <p className="text-[#0C0C0D]/70">Tell us about yourself and we'll show you what we can do</p>
            </div>

            <form onSubmit={handleFormSubmit} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2">
                    <User className="w-4 h-4 text-[#E2C382]" />
                    First Name *
                  </label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="John" />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2">
                    <User className="w-4 h-4 text-[#E2C382]" />
                    Last Name *
                  </label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2">
                  <Building2 className="w-4 h-4 text-[#E2C382]" />
                  Company Name *
                </label>
                <input type="text" name="companyName" required value={formData.companyName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="Acme Corp" />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2">
                  <Briefcase className="w-4 h-4 text-[#E2C382]" />
                  Title *
                </label>
                <input type="text" name="title" required value={formData.title} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="VP of Sales" />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2">
                  <Mail className="w-4 h-4 text-[#E2C382]" />
                  Email Address *
                </label>
                <input type="email" name="email" required value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="john@acme.com" />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2">
                  <MapPin className="w-4 h-4 text-[#E2C382]" />
                  Physical Address *
                </label>
                <input type="text" name="address" required value={formData.address} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="123 Main St, City, State, ZIP" />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2">
                  <Phone className="w-4 h-4 text-[#E2C382]" />
                  Phone Number *
                </label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="(555) 123-4567" />
              </div>

              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setShowExampleForm(false)} className="flex-1 px-6 py-3 bg-[#F6F6F4] text-[#0C0C0D] rounded-xl font-medium hover:bg-[#E2C382]/10 transition-all">
                  Cancel
                </button>
                <button type="submit" disabled={isSubmitting || submitSuccess} className="flex-1 px-6 py-3 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50">
                  {submitSuccess ? <span className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Sent!
                    </span> : isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>}

      <motion.section id="how-it-works" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-sm font-semibold text-[#E2C382] tracking-wider uppercase mb-4">Trusted By</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
              {/* CREATIUM Logo */}
              <div className="flex flex-col items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Top-left: light brown square */}
                  <rect x="0" y="0" width="40" height="40" fill="#D4A574"/>
                  {/* Top-right: divided diagonally */}
                  <path d="M40 0 L80 0 L80 40 L40 40 Z" fill="#F5E6D3"/>
                  <path d="M40 0 L80 40 L80 0 Z" fill="#E8D5A3"/>
                  {/* Bottom-left: dark teal triangle */}
                  <path d="M0 40 L40 40 L0 80 Z" fill="#2C5F5F"/>
                  {/* Bottom-right: muted yellow-gold */}
                  <rect x="40" y="40" width="40" height="40" fill="#D4B574"/>
                  <line x1="40" y1="45" x2="75" y2="45" stroke="#C9A961" strokeWidth="2"/>
                </svg>
                <span className="mt-2 text-sm font-semibold" style={{color: '#2C5F5F', fontFamily: 'system-ui, -apple-system, sans-serif'}}>
                  CREATIUM
                </span>
              </div>
              
              {/* cervo Logo */}
              <div className="flex items-center justify-center gap-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(20, 20)">
                    {/* Pinwheel pattern with teardrop/petal shapes in various blue shades */}
                    <path d="M 0 -10 L -2 -6 Q -3 -2 -2 2 Q -1 4 0 5 Q 1 4 2 2 Q 3 -2 2 -6 Z" fill="#1E3A8A" transform="rotate(0 0 0)" />
                    <path d="M 0 -10 L -2 -6 Q -3 -2 -2 2 Q -1 4 0 5 Q 1 4 2 2 Q 3 -2 2 -6 Z" fill="#2563EB" transform="rotate(45 0 0)" />
                    <path d="M 0 -10 L -2 -6 Q -3 -2 -2 2 Q -1 4 0 5 Q 1 4 2 2 Q 3 -2 2 -6 Z" fill="#1E40AF" transform="rotate(90 0 0)" />
                    <path d="M 0 -10 L -2 -6 Q -3 -2 -2 2 Q -1 4 0 5 Q 1 4 2 2 Q 3 -2 2 -6 Z" fill="#3B82F6" transform="rotate(135 0 0)" />
                    <path d="M 0 -10 L -2 -6 Q -3 -2 -2 2 Q -1 4 0 5 Q 1 4 2 2 Q 3 -2 2 -6 Z" fill="#1E3A8A" transform="rotate(180 0 0)" />
                    <path d="M 0 -10 L -2 -6 Q -3 -2 -2 2 Q -1 4 0 5 Q 1 4 2 2 Q 3 -2 2 -6 Z" fill="#2563EB" transform="rotate(225 0 0)" />
                    <path d="M 0 -10 L -2 -6 Q -3 -2 -2 2 Q -1 4 0 5 Q 1 4 2 2 Q 3 -2 2 -6 Z" fill="#1E40AF" transform="rotate(270 0 0)" />
                    <path d="M 0 -10 L -2 -6 Q -3 -2 -2 2 Q -1 4 0 5 Q 1 4 2 2 Q 3 -2 2 -6 Z" fill="#3B82F6" transform="rotate(315 0 0)" />
                  </g>
                </svg>
                <span className="text-lg font-semibold lowercase" style={{color: '#2563EB', fontFamily: 'system-ui, -apple-system, sans-serif'}}>
                  cervo
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section id="pricing" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-6">
              Your Personal Gifting & Outbound Team — On Demand
            </h2>
            <p className="text-xl text-[#0C0C0D]/70 max-w-3xl mx-auto leading-relaxed">
              The AutoGift Pilot Program is a fully-managed gifting service for teams who need to reach high-value contacts with thoughtful, personalized, premium gifts that stand out.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20">
              <div className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" />
              </div>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2">The contacts you want to reach</h3>
            </div>

            <div className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20">
              <div className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" />
              </div>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2">Your budget per person</h3>
            </div>

            <div className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20">
              <div className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" />
              </div>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2">The outcome you want</h3>
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-center text-2xl font-semibold text-[#073D2B]">
            We handle everything else.
          </motion.p>
        </div>
      </motion.section>

      <motion.section id="use-cases" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-b from-white to-[#F6F6F4]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-[#0C0C0D]/70">Four simple steps to perfect gifts</p>
          </motion.div>

          <div className="space-y-24">
            <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm">1</span>
                  <span className="text-sm font-medium text-[#073D2B]">STEP ONE</span>
                </div>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4">
                  Submit Your List (or We Build It for You)
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed">
                  Give us names OR let our research team find the right prospects. We'll deliver targeted profiles with context, interests, and angles.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20">
                  <div className="space-y-4">
                    {['Contact 1', 'Contact 2', 'Contact 3'].map((contact, i) => <motion.div key={contact} initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: i * 0.1
                  }} className="flex items-center gap-4 p-4 bg-[#F6F6F4] rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#E2C382] to-[#D4B574] rounded-full" />
                        <div className="flex-1 space-y-2">
                          <div className="h-3 bg-[#E2C382]/30 rounded-full w-3/4" />
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-1/2" />
                        </div>
                        <Users className="w-5 h-5 text-[#E2C382]" />
                      </motion.div>)}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Target className="w-8 h-8 text-[#E2C382] flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#0C0C0D] mb-2">Deep Research</h4>
                        <div className="space-y-2">
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-full" />
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-5/6" />
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-4/6" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Sparkles className="w-8 h-8 text-[#E2C382] flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#0C0C0D] mb-2">Personality Analysis</h4>
                        <div className="space-y-2">
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" />
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-3/4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm">2</span>
                  <span className="text-sm font-medium text-[#073D2B]">STEP TWO</span>
                </div>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4">
                  Personalized Research
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed">
                  We dig into each contact: their role, personality, social footprint, company, interests, critique style, and what would impress them specifically.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm">3</span>
                  <span className="text-sm font-medium text-[#073D2B]">STEP THREE</span>
                </div>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4">
                  Gift Design & Production
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed mb-6">
                  We craft a custom gift for every individual:
                </p>
                <ul className="space-y-3">
                  {['Sourcing unique items', 'Custom branding & packaging', 'Handwritten or AI-personalized notes', 'Custom inserts', 'Premium kitting & fulfillment'].map((item, i) => <motion.li key={item} initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: i * 0.1
                }} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#073D2B] flex-shrink-0" />
                      <span className="text-[#0C0C0D]/80">{item}</span>
                    </motion.li>)}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-[#073D2B] to-[#0a5a41] rounded-3xl shadow-2xl p-8 text-white">
                  <motion.div animate={{
                  rotateY: [0, 5, 0, -5, 0]
                }} transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} className="relative">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-[#E2C382] rounded-full flex items-center justify-center">
                          <Gift className="w-8 h-8 text-[#073D2B]" />
                        </div>
                        <div>
                          <div className="h-3 bg-white/30 rounded-full w-32 mb-2" />
                          <div className="h-2 bg-white/20 rounded-full w-24" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 rounded-xl p-4 aspect-square" />
                        <div className="bg-white/10 rounded-xl p-4 aspect-square" />
                      </div>
                      <div className="mt-4 p-4 bg-[#E2C382]/20 rounded-xl">
                        <div className="space-y-2">
                          <div className="h-2 bg-white/40 rounded-full w-full" />
                          <div className="h-2 bg-white/30 rounded-full w-4/5" />
                          <div className="h-2 bg-white/30 rounded-full w-3/5" />
                        </div>
                      </div>
                    </div>
                    <motion.div animate={{
                    rotate: 360
                  }} transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }} className="absolute -top-4 -right-4 w-16 h-16 bg-[#E2C382] rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="w-8 h-8 text-[#073D2B]" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl">
                      <div className="flex items-center gap-3">
                        <Package className="w-6 h-6 text-[#073D2B]" />
                        <span className="font-medium text-[#0C0C0D]">Gift #1</span>
                      </div>
                      <span className="px-3 py-1 bg-[#073D2B] text-white text-xs font-medium rounded-full">
                        Delivered
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl">
                      <div className="flex items-center gap-3">
                        <Package className="w-6 h-6 text-[#073D2B]" />
                        <span className="font-medium text-[#0C0C0D]">Gift #2</span>
                      </div>
                      <span className="px-3 py-1 bg-[#073D2B] text-white text-xs font-medium rounded-full">
                        Delivered
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl">
                      <div className="flex items-center gap-3">
                        <Package className="w-6 h-6 text-[#E2C382]" />
                        <span className="font-medium text-[#0C0C0D]">Gift #3</span>
                      </div>
                      <span className="px-3 py-1 bg-[#E2C382]/20 text-[#073D2B] text-xs font-medium rounded-full">
                        In Transit
                      </span>
                    </div>
                    <div className="mt-6 p-4 bg-gradient-to-r from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-xl border border-[#E2C382]/20">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-[#073D2B]" />
                        <span className="font-semibold text-[#0C0C0D]">Response Rate</span>
                      </div>
                      <p className="text-3xl font-bold text-[#073D2B]">87%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm">4</span>
                  <span className="text-sm font-medium text-[#073D2B]">STEP FOUR</span>
                </div>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4">
                  Deliver & Report
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed">
                  We ship each gift, track delivery, monitor responses, and follow up with a report on engagement + outcomes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section id="pricing-details" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4">
              Simple, Transparent Pilot Pricing
            </h2>
            <p className="text-xl text-[#0C0C0D]/70 max-w-2xl mx-auto">
              You set the gift budget. We charge a 10% service margin on top — that's it.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-3xl p-12 border-2 border-[#E2C382]/30 mb-12">
            <h3 className="text-2xl font-bold text-[#0C0C0D] mb-8">We include:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {['Contact research', 'Gift concepting', 'Sourcing & procurement', 'Branding & packaging', 'Handwritten notes', 'Kitting & fulfillment', 'Project management', 'Address Validation and Research'].map((item, i) => <motion.div key={item} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: i * 0.1
            }} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#073D2B] flex-shrink-0" />
                  <span className="text-lg text-[#0C0C0D]">{item}</span>
                </motion.div>)}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6 mb-12">
            <div className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-[#0C0C0D]/60 mb-1">$100 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]">$120 total per recipient</p>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full">
                  <span className="text-sm font-medium text-[#073D2B]">20% service margin</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-[#0C0C0D]/60 mb-1">$250 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]">$300 total per recipient</p>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full">
                  <span className="text-sm font-medium text-[#073D2B]">20% service margin</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-[#0C0C0D]/60 mb-1">$500 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]">$600 total per recipient</p>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full">
                  <span className="text-sm font-medium text-[#073D2B]">20% service margin</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <a href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              Start Your Pilot
            </a>
          </motion.div>
        </div>
      </motion.section>

      <motion.section id="perfect-for-teams" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-b from-white to-[#F6F6F4]">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4">
              Perfect For Teams That Need…
            </h2>
          </motion.div>

          <motion.div variants={staggerChildren} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Target,
            label: 'High-impact outbound'
          }, {
            icon: Users,
            label: 'ABM campaigns'
          }, {
            icon: TrendingUp,
            label: 'Executive outreach'
          }, {
            icon: Send,
            label: 'Pipeline reactivation'
          }, {
            icon: Heart,
            label: 'Founder-to-founder gifting'
          }, {
            icon: Sparkles,
            label: 'CSM-led surprises & delight'
          }, {
            icon: Mail,
            label: 'Sales-to-C-suite intros'
          }, {
            icon: Gift,
            label: 'Corporate gifting'
          }].map((item, i) => <motion.div key={item.label} variants={fadeInUp} whileHover={{
            scale: 1.05,
            y: -5
          }} className="bg-white rounded-2xl p-8 border border-[#E2C382]/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#073D2B]" />
                </div>
                <p className="font-semibold text-[#0C0C0D]">{item.label}</p>
              </motion.div>)}
          </motion.div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4">
              Because Attention Is Earned, Not Automated
            </h2>
          </motion.div>

          <motion.div variants={staggerChildren} className="grid md:grid-cols-2 gap-8">
            {['Every gift is designed specifically for the recipient', 'We handle all research and context', 'We source items that are unique, premium, and personal', 'Handwritten notes increase response rates dramatically', 'Dimensional mail gets opened almost 100% of the time', 'You save 10–20 hours/week of SDR bandwidth', 'You run a luxury, thoughtful campaign without lifting a finger'].map((benefit, i) => <motion.div key={benefit} variants={fadeInUp} whileHover={{
            x: 10
          }} className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#E2C382]/5 to-[#F0D8B6]/5 rounded-2xl border border-[#E2C382]/20 hover:border-[#E2C382]/40 transition-all duration-300">
                <CheckCircle2 className="w-7 h-7 text-[#073D2B] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#0C0C0D]">{benefit}</p>
              </motion.div>)}
          </motion.div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-br from-[#073D2B] to-[#0a5a41] text-white relative overflow-hidden">
        <motion.div className="absolute top-0 right-0 w-96 h-96 bg-[#E2C382]/10 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity
      }} />
        <motion.div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        delay: 1
      }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-[#E2C382]" />
              <span className="text-sm font-medium">Ready to Get Started?</span>
            </div>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-5xl lg:text-6xl font-bold mb-6">
            Ready to Reach Anyone With the Perfect Gift?
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-2xl text-white/80 mb-12">
            Tell us who — and your budget. We'll take care of everything else.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <a href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center gap-3">
                Start Your Pilot
                <Gift className="w-6 h-6" />
              </span>
            </a>
          </motion.div>
        </div>
      </motion.section>

      <footer className="bg-[#0C0C0D] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-8 h-8 text-[#E2C382]" />
                <span className="text-2xl font-bold">AutoGift</span>
              </div>
              <p className="text-white/60 mb-6 leading-relaxed">
                Your outsourced ABM gifting team. Handcrafted, hyper-personalized gifts done for you.
              </p>
              <div className="flex items-center gap-4">
                <a href="mailto:jschlisserman@gmail.com" className="text-[#E2C382] hover:text-[#F0D8B6] transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors">About</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors">Pricing</a></li>
                <li><a href="mailto:jschlisserman@gmail.com" className="text-white/60 hover:text-[#E2C382] transition-colors">Contact</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors">Terms</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-white/40 text-sm">
              © {new Date().getFullYear()} AutoGift. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};