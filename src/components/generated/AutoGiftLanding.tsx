import { SortableContainer } from "@/dnd-kit/SortableContainer";
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
  return <SortableContainer dndKitId="0379578d-14a1-448e-8857-11e80f20306f" containerType="regular" prevTag="div" className="min-h-screen bg-[#F6F6F4] text-[#0C0C0D] overflow-x-hidden" data-magicpath-id="0" data-magicpath-path="AutoGiftLanding.tsx">
      {/* Navigation Bar */}
      <SortableContainer dndKitId="edc034f7-7da0-426d-8d86-15836241cfae" containerType="regular" prevTag="motion.nav" initial={{
      y: -100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }} className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E2C382]/20" data-magicpath-id="1" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="f7995557-3fcb-44f8-a7c9-bc1dd91349a5" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between" data-magicpath-id="2" data-magicpath-path="AutoGiftLanding.tsx">
          {/* Navigation Tabs */}
          <SortableContainer dndKitId="f2af5261-ff39-4e51-92d7-0748342eec58" containerType="regular" prevTag="div" className="flex items-center gap-6" data-magicpath-id="3" data-magicpath-path="AutoGiftLanding.tsx">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium text-[#0C0C0D]/70 hover:text-[#0C0C0D] transition-colors" data-magicpath-id="4" data-magicpath-path="AutoGiftLanding.tsx">
              Home
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-[#0C0C0D]/70 hover:text-[#0C0C0D] transition-colors" data-magicpath-id="5" data-magicpath-path="AutoGiftLanding.tsx">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-[#0C0C0D]/70 hover:text-[#0C0C0D] transition-colors" data-magicpath-id="6" data-magicpath-path="AutoGiftLanding.tsx">
              Pricing
            </button>
            <button onClick={() => scrollToSection('use-cases')} className="text-sm font-medium text-[#0C0C0D]/70 hover:text-[#0C0C0D] transition-colors" data-magicpath-id="7" data-magicpath-path="AutoGiftLanding.tsx">
              Use Cases
            </button>
          </SortableContainer>
          
          <SortableContainer dndKitId="fa45fe5f-0430-4f16-9b64-b2bd772c32a5" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="8" data-magicpath-path="AutoGiftLanding.tsx">
            {/* AutoGift Logo SVG */}
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" data-magicpath-id="9" data-magicpath-path="AutoGiftLanding.tsx">
              {/* Gift box lid top */}
              <path d="M25 30 L47 25 L47 35 L25 40 Z" fill="#D4B574" data-magicpath-id="10" data-magicpath-path="AutoGiftLanding.tsx" />
              <path d="M53 25 L75 30 L75 40 L53 35 Z" fill="#C9A961" data-magicpath-id="11" data-magicpath-path="AutoGiftLanding.tsx" />
              
              {/* Gift box body */}
              <path d="M25 40 L47 35 L47 70 L25 75 Z" fill="#D4B574" data-magicpath-id="12" data-magicpath-path="AutoGiftLanding.tsx" />
              <path d="M53 35 L75 40 L75 75 L53 70 Z" fill="#C9A961" data-magicpath-id="13" data-magicpath-path="AutoGiftLanding.tsx" />
              
              {/* Center ribbon vertical */}
              <rect x="47" y="25" width="6" height="50" fill="#F6F6F4" data-magicpath-id="14" data-magicpath-path="AutoGiftLanding.tsx" />
            </svg>
            
            {/* AutoGift Text */}
            <SortableContainer dndKitId="b22bf18a-09d6-4515-a074-b88b5b6ef7e5" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="15" data-magicpath-path="AutoGiftLanding.tsx">
              <span className="text-2xl font-bold text-[#0C0C0D]" style={{
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }} data-magicpath-id="16" data-magicpath-path="AutoGiftLanding.tsx">
                Auto
              </span>
              <span className="text-2xl font-bold text-[#C9A961]" style={{
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }} data-magicpath-id="17" data-magicpath-path="AutoGiftLanding.tsx">
                Gift
              </span>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="49458b52-974b-4561-b0f8-cd2d1391be9b" containerType="regular" prevTag="motion.section" id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden" style={{
      y: heroY,
      opacity: heroOpacity
    }} data-magicpath-id="18" data-magicpath-path="AutoGiftLanding.tsx">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0D8B6]/20 to-transparent pointer-events-none" data-magicpath-id="19" data-magicpath-path="AutoGiftLanding.tsx" />
        
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute top-20 right-20 w-64 h-64 bg-[#E2C382]/10 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} data-magicpath-id="20" data-magicpath-path="AutoGiftLanding.tsx" />
        
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-40 left-20 w-96 h-96 bg-[#073D2B]/5 rounded-full blur-3xl" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} data-magicpath-id="21" data-magicpath-path="AutoGiftLanding.tsx" />

        <SortableContainer dndKitId="65b8440a-ec0c-45f6-a6f7-73fd81b0d10c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10" data-magicpath-id="22" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="f47b6862-cff7-474a-8dd8-e7812cff4311" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={staggerChildren} data-magicpath-id="23" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="e173c0c4-8497-4d3a-82db-e681d7d894dc" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="24" data-magicpath-path="AutoGiftLanding.tsx">
              <Sparkles className="w-4 h-4 text-[#E2C382]" />
              <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="25" data-magicpath-path="AutoGiftLanding.tsx">White-Glove Gifting Service</span>
            </SortableContainer>

            <motion.h1 data-magicpath-motion-tag="motion.h1" variants={fadeInUp} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }} data-magicpath-id="26" data-magicpath-path="AutoGiftLanding.tsx">
              Handcrafted,{' '}
              <span className="relative inline-block" data-magicpath-id="27" data-magicpath-path="AutoGiftLanding.tsx">
                <span className="relative z-10 bg-gradient-to-r from-[#E2C382] to-[#073D2B] bg-clip-text text-transparent" data-magicpath-id="28" data-magicpath-path="AutoGiftLanding.tsx">
                  Hyper-Personalized
                </span>
                <motion.span data-magicpath-motion-tag="motion.span" className="absolute bottom-2 left-0 right-0 h-3 bg-[#E2C382]/20" initial={{
                scaleX: 0
              }} animate={{
                scaleX: 1
              }} transition={{
                delay: 0.8,
                duration: 0.6
              }} data-magicpath-id="29" data-magicpath-path="AutoGiftLanding.tsx" />
              </span>{' '}
              Gifts Done For You.
            </motion.h1>

            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-[#0C0C0D]/70 mb-8 leading-relaxed" data-magicpath-id="30" data-magicpath-path="AutoGiftLanding.tsx">
              Tell us who you want to reach. Give us a budget. We research each person, design the perfect gift, source it, brand it, write the copy, and ship it end to end.
            </motion.p>

            <SortableContainer dndKitId="82345db6-9073-461b-8c5a-e8db00244d53" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="flex flex-col sm:flex-row gap-4" data-magicpath-id="31" data-magicpath-path="AutoGiftLanding.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-id="32" data-magicpath-path="AutoGiftLanding.tsx">
                <span className="flex items-center justify-center gap-2" data-magicpath-id="33" data-magicpath-path="AutoGiftLanding.tsx">
                  Start Your Pilot
                  <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" data-magicpath-id="34" data-magicpath-path="AutoGiftLanding.tsx" />
                </span>
              </motion.a>

              <motion.button data-magicpath-motion-tag="motion.button" onClick={() => setShowExampleForm(true)} className="px-8 py-4 bg-white/60 backdrop-blur-sm text-[#0C0C0D] rounded-full font-semibold text-lg border-2 border-[#E2C382]/30 hover:border-[#E2C382] transition-all duration-300 text-center" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-id="35" data-magicpath-path="AutoGiftLanding.tsx">
                See An Example
              </motion.button>
            </SortableContainer>

            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="mt-6 text-sm text-[#0C0C0D]/60 italic" data-magicpath-id="36" data-magicpath-path="AutoGiftLanding.tsx">
              Your outsourced ABM gifting team
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="faaf96c5-593d-43b7-9e01-8560b2efcdd3" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="relative" data-magicpath-id="37" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="2f805f98-71fb-4de7-a8ab-bc8cc2782fc8" containerType="regular" prevTag="div" className="relative bg-white rounded-3xl shadow-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="38" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="94a86ab9-fa68-448d-b817-b62fcf667189" containerType="regular" prevTag="motion.div" animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="space-y-6" data-magicpath-id="39" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="9d80f1a4-f855-4b89-aa21-54f7ae1caaa2" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#F0D8B6]/30 to-[#E2C382]/20 rounded-2xl p-6 backdrop-blur-sm" data-magicpath-id="40" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="ec2f7851-b7e8-4cc3-9a39-0962c8b68bf8" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-4" data-magicpath-id="41" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="62ca1084-36b7-4bc8-b458-022310df3b31" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-full flex items-center justify-center" data-magicpath-id="42" data-magicpath-path="AutoGiftLanding.tsx">
                      <Gift className="w-6 h-6 text-[#E2C382]" data-magicpath-id="43" data-magicpath-path="AutoGiftLanding.tsx" />
                    </SortableContainer>
                    <SortableContainer dndKitId="3bb95e15-6955-447d-b0fd-378a1c3ceed2" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="44" data-magicpath-path="AutoGiftLanding.tsx">
                      <div className="h-3 bg-[#E2C382]/30 rounded-full w-3/4 mb-2" data-magicpath-id="45" data-magicpath-path="AutoGiftLanding.tsx" />
                      <div className="h-2 bg-[#E2C382]/20 rounded-full w-1/2" data-magicpath-id="46" data-magicpath-path="AutoGiftLanding.tsx" />
                    </SortableContainer>
                  </SortableContainer>
                  <SortableContainer dndKitId="559b85f9-e9d8-4611-8e06-fe2505618710" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="47" data-magicpath-path="AutoGiftLanding.tsx">
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="48" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-5/6" data-magicpath-id="49" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="1546b298-7815-4b24-a622-6f0c6f28b694" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-4" data-magicpath-id="50" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="b142ac24-0f13-432d-a6fa-21b69b344070" containerType="regular" prevTag="div" className="bg-[#073D2B]/5 rounded-xl p-4 backdrop-blur-sm" data-magicpath-id="51" data-magicpath-path="AutoGiftLanding.tsx">
                    <Package className="w-8 h-8 text-[#073D2B] mb-2" data-magicpath-id="52" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/20 rounded-full w-full" data-magicpath-id="53" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="c308a7ad-f25c-4b18-917e-e2d398943661" containerType="regular" prevTag="div" className="bg-[#073D2B]/5 rounded-xl p-4 backdrop-blur-sm" data-magicpath-id="54" data-magicpath-path="AutoGiftLanding.tsx">
                    <Sparkles className="w-8 h-8 text-[#E2C382] mb-2" />
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="55" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="dc397ecd-8ae3-402b-abcc-6410cf5d0534" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/20 to-[#F0D8B6]/30 rounded-2xl p-6 backdrop-blur-sm border-2 border-[#E2C382]/30" data-magicpath-id="56" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="a4ca7990-e9fd-43bc-90ac-3651506123e6" containerType="regular" prevTag="div" className="flex items-center justify-between mb-4" data-magicpath-id="57" data-magicpath-path="AutoGiftLanding.tsx">
                    <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="58" data-magicpath-path="AutoGiftLanding.tsx">Handwritten Note</span>
                    <CheckCircle2 className="w-5 h-5 text-[#073D2B]" data-magicpath-id="59" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="e4fab635-0678-4515-8a21-bdbe1e50e27d" containerType="regular" prevTag="div" className="space-y-2 opacity-60" data-magicpath-id="60" data-magicpath-path="AutoGiftLanding.tsx">
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-full" data-magicpath-id="61" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-4/5" data-magicpath-id="62" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-3/4" data-magicpath-id="63" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="5594dd6b-bb77-424d-8264-796a699cc7c9" containerType="regular" prevTag="motion.div" className="absolute -top-6 -right-6 w-24 h-24 bg-[#E2C382] rounded-full flex items-center justify-center shadow-xl" animate={{
              rotate: 360
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} data-magicpath-id="64" data-magicpath-path="AutoGiftLanding.tsx">
                <Sparkles className="w-12 h-12 text-white" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {showExampleForm && <SortableContainer dndKitId="aaab0b9a-069c-4508-a91c-0950ab666def" containerType="regular" prevTag="motion.div" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowExampleForm(false)} data-magicpath-id="65" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="770a4004-63f5-4335-9c10-412d0963a944" containerType="regular" prevTag="motion.div" initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()} data-magicpath-id="66" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="67267631-fcbd-4810-8793-0baaf7d1d94f" containerType="regular" prevTag="div" className="sticky top-0 bg-gradient-to-br from-[#E2C382] to-[#D4B574] p-8 rounded-t-3xl" data-magicpath-id="67" data-magicpath-path="AutoGiftLanding.tsx">
              <h3 className="text-3xl font-bold text-[#0C0C0D] mb-2" data-magicpath-id="68" data-magicpath-path="AutoGiftLanding.tsx">Request An Example</h3>
              <p className="text-[#0C0C0D]/70" data-magicpath-id="69" data-magicpath-path="AutoGiftLanding.tsx">Tell us about yourself and we'll show you what we can do</p>
            </SortableContainer>

            <SortableContainer dndKitId="f31e36fc-6c95-4df0-b82a-5733f9a15a0d" containerType="regular" prevTag="form" onSubmit={handleFormSubmit} className="p-8 space-y-6" data-magicpath-id="70" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="8f02a73b-1528-4905-be07-1e1adb6b633a" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-6" data-magicpath-id="71" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="a5eadaab-6644-4274-aba3-861698fea739" containerType="regular" prevTag="div" data-magicpath-id="72" data-magicpath-path="AutoGiftLanding.tsx">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="73" data-magicpath-path="AutoGiftLanding.tsx">
                    <User className="w-4 h-4 text-[#E2C382]" data-magicpath-id="74" data-magicpath-path="AutoGiftLanding.tsx" />
                    First Name *
                  </label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="John" data-magicpath-id="75" data-magicpath-path="AutoGiftLanding.tsx" />
                </SortableContainer>

                <SortableContainer dndKitId="fd229b38-bec8-4448-b33e-15a06e833dd3" containerType="regular" prevTag="div" data-magicpath-id="76" data-magicpath-path="AutoGiftLanding.tsx">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="77" data-magicpath-path="AutoGiftLanding.tsx">
                    <User className="w-4 h-4 text-[#E2C382]" data-magicpath-id="78" data-magicpath-path="AutoGiftLanding.tsx" />
                    Last Name *
                  </label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="Doe" data-magicpath-id="79" data-magicpath-path="AutoGiftLanding.tsx" />
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="863d766c-daef-4d8e-b436-952b3cf9b09d" containerType="regular" prevTag="div" data-magicpath-id="80" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="81" data-magicpath-path="AutoGiftLanding.tsx">
                  <Building2 className="w-4 h-4 text-[#E2C382]" data-magicpath-id="82" data-magicpath-path="AutoGiftLanding.tsx" />
                  Company Name *
                </label>
                <input type="text" name="companyName" required value={formData.companyName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="Acme Corp" data-magicpath-id="83" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="2a9b8eae-e1de-461e-b1ee-569958c78eaf" containerType="regular" prevTag="div" data-magicpath-id="84" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="85" data-magicpath-path="AutoGiftLanding.tsx">
                  <Briefcase className="w-4 h-4 text-[#E2C382]" data-magicpath-id="86" data-magicpath-path="AutoGiftLanding.tsx" />
                  Title *
                </label>
                <input type="text" name="title" required value={formData.title} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="VP of Sales" data-magicpath-id="87" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="77b71d57-8c40-4398-b50f-afd4a59d67d3" containerType="regular" prevTag="div" data-magicpath-id="88" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="89" data-magicpath-path="AutoGiftLanding.tsx">
                  <Mail className="w-4 h-4 text-[#E2C382]" data-magicpath-id="90" data-magicpath-path="AutoGiftLanding.tsx" />
                  Email Address *
                </label>
                <input type="email" name="email" required value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="john@acme.com" data-magicpath-id="91" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="49eca7d3-13cc-4658-8581-767298db348a" containerType="regular" prevTag="div" data-magicpath-id="92" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="93" data-magicpath-path="AutoGiftLanding.tsx">
                  <MapPin className="w-4 h-4 text-[#E2C382]" data-magicpath-id="94" data-magicpath-path="AutoGiftLanding.tsx" />
                  Physical Address *
                </label>
                <input type="text" name="address" required value={formData.address} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="123 Main St, City, State, ZIP" data-magicpath-id="95" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="4a22c322-b2f7-4117-9d0b-c97dff8a3944" containerType="regular" prevTag="div" data-magicpath-id="96" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="97" data-magicpath-path="AutoGiftLanding.tsx">
                  <Phone className="w-4 h-4 text-[#E2C382]" data-magicpath-id="98" data-magicpath-path="AutoGiftLanding.tsx" />
                  Phone Number *
                </label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="(555) 123-4567" data-magicpath-id="99" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="637739e4-fa3d-4c99-bb9c-03604beb3e8a" containerType="regular" prevTag="div" className="flex gap-4 pt-4" data-magicpath-id="100" data-magicpath-path="AutoGiftLanding.tsx">
                <button type="button" onClick={() => setShowExampleForm(false)} className="flex-1 px-6 py-3 bg-[#F6F6F4] text-[#0C0C0D] rounded-xl font-medium hover:bg-[#E2C382]/10 transition-all" data-magicpath-id="101" data-magicpath-path="AutoGiftLanding.tsx">
                  Cancel
                </button>
                <SortableContainer dndKitId="45e7a112-c013-4797-becf-22da053c8c8c" containerType="regular" prevTag="button" type="submit" disabled={isSubmitting || submitSuccess} className="flex-1 px-6 py-3 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50" data-magicpath-id="102" data-magicpath-path="AutoGiftLanding.tsx">
                  {submitSuccess ? <span className="flex items-center justify-center gap-2" data-magicpath-id="103" data-magicpath-path="AutoGiftLanding.tsx">
                      <CheckCircle2 className="w-5 h-5" data-magicpath-id="104" data-magicpath-path="AutoGiftLanding.tsx" />
                      Sent!
                    </span> : isSubmitting ? 'Sending...' : 'Submit Request'}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>}

      <SortableContainer dndKitId="e0e18ac9-6747-4c6c-b938-cca4185d3810" containerType="regular" prevTag="motion.section" id="how-it-works" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-20 px-4" data-magicpath-id="105" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="707d5b8d-50da-4d1c-a33f-a2059a4c33c1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="106" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="07474904-cb7d-4e6f-983f-68fafa8dbf10" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="107" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-sm font-semibold text-[#E2C382] tracking-wider uppercase mb-4" data-magicpath-id="108" data-magicpath-path="AutoGiftLanding.tsx">Trusted By</h2>
            <SortableContainer dndKitId="d0d92626-e3f1-4402-8bcc-09a75d6812bb" containerType="regular" prevTag="div" className="flex flex-wrap justify-center items-center gap-8 opacity-60" data-magicpath-id="109" data-magicpath-path="AutoGiftLanding.tsx">
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="110" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="111" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="112" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="113" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="daf1b128-ed15-47cb-9d70-e9dc6dd7bd02" containerType="regular" prevTag="motion.section" id="pricing" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="114" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="65e09cef-0fc9-4f89-9479-e5ee2f66ff3a" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="115" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="a0508730-7835-492c-bff3-45b008fda131" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="116" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-6" data-magicpath-id="117" data-magicpath-path="AutoGiftLanding.tsx">
              Your Personal Gifting & Outbound Team — On Demand
            </h2>
            <p className="text-xl text-[#0C0C0D]/70 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="118" data-magicpath-path="AutoGiftLanding.tsx">
              The AutoGift Pilot Program is a fully-managed gifting service for teams who need to reach high-value contacts with thoughtful, personalized, premium gifts that stand out.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="0d693c3d-7394-44f4-8dda-eab8423e3a81" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mb-12" data-magicpath-id="119" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="e779bfc4-8442-4f1d-9859-bcba574a8d5f" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="120" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="ccba45e6-b78a-4d83-baee-1812bc7a6315" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="121" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="122" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="123" data-magicpath-path="AutoGiftLanding.tsx">The contacts you want to reach</h3>
            </SortableContainer>

            <SortableContainer dndKitId="fd1f1de5-e420-41ea-a5ca-e205ebb4f80f" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="124" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="d1d44fc3-427f-4889-8d2f-75edf43a8b30" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="125" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="126" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="127" data-magicpath-path="AutoGiftLanding.tsx">Your budget per person</h3>
            </SortableContainer>

            <SortableContainer dndKitId="27d5bf88-e13a-4748-941e-d8cded0062d4" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="128" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="96accf20-f892-4d31-8bdb-11bd37df58e4" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="129" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="130" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="131" data-magicpath-path="AutoGiftLanding.tsx">The outcome you want</h3>
            </SortableContainer>
          </SortableContainer>

          <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-center text-2xl font-semibold text-[#073D2B]" data-magicpath-id="132" data-magicpath-path="AutoGiftLanding.tsx">
            We handle everything else.
          </motion.p>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="80a4a8f1-75e9-4ac0-84c9-72a551688502" containerType="regular" prevTag="motion.section" id="use-cases" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-b from-white to-[#F6F6F4]" data-magicpath-id="133" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="9028e402-734a-41da-a42b-5ea860870c5d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="134" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="07bd3a3f-d121-4878-b9f2-df1f9a1033fe" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-20" data-magicpath-id="135" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="136" data-magicpath-path="AutoGiftLanding.tsx">
              How It Works
            </h2>
            <p className="text-xl text-[#0C0C0D]/70" data-magicpath-id="137" data-magicpath-path="AutoGiftLanding.tsx">Four simple steps to perfect gifts</p>
          </SortableContainer>

          <SortableContainer dndKitId="b7f66210-d63a-4db9-a937-9aeba4765e81" containerType="regular" prevTag="div" className="space-y-24" data-magicpath-id="138" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="fda9d60d-979d-4abf-b895-f9a76c38f351" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="139" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="0dcb84e4-29c6-4b4c-bb35-773ea95ee84c" containerType="regular" prevTag="div" className="order-2 lg:order-1" data-magicpath-id="140" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="cf9575bd-3ced-44af-b5c1-ba90ad3d9fb9" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="141" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="142" data-magicpath-path="AutoGiftLanding.tsx">1</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="143" data-magicpath-path="AutoGiftLanding.tsx">STEP ONE</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="144" data-magicpath-path="AutoGiftLanding.tsx">
                  Submit Your List (or We Build It for You)
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed" data-magicpath-id="145" data-magicpath-path="AutoGiftLanding.tsx">
                  Give us names OR let our research team find the right prospects. We'll deliver targeted profiles with context, interests, and angles.
                </p>
              </SortableContainer>
              <SortableContainer dndKitId="4a24e597-020f-4c9a-821e-173f078d3b5e" containerType="regular" prevTag="div" className="order-1 lg:order-2" data-magicpath-id="146" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="acfa3f51-63aa-44cf-bf55-85950e7a7494" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="147" data-magicpath-path="AutoGiftLanding.tsx">
                  <div className="space-y-4" data-magicpath-id="148" data-magicpath-path="AutoGiftLanding.tsx">
                    {['Contact 1', 'Contact 2', 'Contact 3'].map((contact, i) => <SortableContainer dndKitId="9eeb6dee-de51-4f25-a741-7cfff015cb4c" containerType="regular" prevTag="motion.div" key={contact} initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: i * 0.1
                  }} className="flex items-center gap-4 p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="149" data-magicpath-path="AutoGiftLanding.tsx">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#E2C382] to-[#D4B574] rounded-full" data-magicpath-id="150" data-magicpath-path="AutoGiftLanding.tsx" />
                        <SortableContainer dndKitId="783470ab-1767-41a3-a9c0-b64746e7dae3" containerType="regular" prevTag="div" className="flex-1 space-y-2" data-magicpath-id="151" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-3 bg-[#E2C382]/30 rounded-full w-3/4" data-magicpath-id="152" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-1/2" data-magicpath-id="153" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                        <Users className="w-5 h-5 text-[#E2C382]" data-magicpath-id="154" data-magicpath-path="AutoGiftLanding.tsx" />
                      </SortableContainer>)}
                  </div>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="acee3ea7-ebef-491e-901a-927e5ae7a693" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="155" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="bc8aba43-50da-4a0f-8448-782726ceced1" containerType="regular" prevTag="div" data-magicpath-id="156" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="87979472-481d-4830-99c9-df1121717be2" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="157" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="3b1bbf83-29e1-4b43-b3f9-87b4f5cd9eef" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="158" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="8b793b95-7336-427d-9f00-d5be79182238" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="159" data-magicpath-path="AutoGiftLanding.tsx">
                      <Target className="w-8 h-8 text-[#E2C382] flex-shrink-0 mt-1" data-magicpath-id="160" data-magicpath-path="AutoGiftLanding.tsx" />
                      <SortableContainer dndKitId="872f8dab-48a0-4df6-bda8-79bcfc9c09c6" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="161" data-magicpath-path="AutoGiftLanding.tsx">
                        <h4 className="font-semibold text-[#0C0C0D] mb-2" data-magicpath-id="162" data-magicpath-path="AutoGiftLanding.tsx">Deep Research</h4>
                        <SortableContainer dndKitId="02dbf746-8d60-4d7d-9049-114c35846e17" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="163" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-full" data-magicpath-id="164" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-5/6" data-magicpath-id="165" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-4/6" data-magicpath-id="166" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="9402efd4-6925-4c53-b023-167b7d4498cb" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="167" data-magicpath-path="AutoGiftLanding.tsx">
                      <Sparkles className="w-8 h-8 text-[#E2C382] flex-shrink-0 mt-1" />
                      <SortableContainer dndKitId="643bb32c-6362-4355-a2fb-a62f4597fa68" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="168" data-magicpath-path="AutoGiftLanding.tsx">
                        <h4 className="font-semibold text-[#0C0C0D] mb-2" data-magicpath-id="169" data-magicpath-path="AutoGiftLanding.tsx">Personality Analysis</h4>
                        <SortableContainer dndKitId="e52ef77e-dc22-412d-aa0f-2ff2ca289309" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="170" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="171" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-3/4" data-magicpath-id="172" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="fd8b0f00-cadc-4f08-b33f-ff83c4a7b5e1" containerType="regular" prevTag="div" data-magicpath-id="173" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="20dbbaa0-6e5e-453b-a633-9b028fad1801" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="174" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="175" data-magicpath-path="AutoGiftLanding.tsx">2</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="176" data-magicpath-path="AutoGiftLanding.tsx">STEP TWO</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="177" data-magicpath-path="AutoGiftLanding.tsx">
                  Personalized Research
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed" data-magicpath-id="178" data-magicpath-path="AutoGiftLanding.tsx">
                  We dig into each contact: their role, personality, social footprint, company, interests, critique style, and what would impress them specifically.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="8c9f4ecb-4f37-437b-9c98-be55969fc660" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="179" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="0a3c0019-52e2-47af-96f6-2ecf5e2b77bd" containerType="regular" prevTag="div" className="order-2 lg:order-1" data-magicpath-id="180" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="f9587805-e402-445a-8266-527a3a32ad5d" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="181" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="182" data-magicpath-path="AutoGiftLanding.tsx">3</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="183" data-magicpath-path="AutoGiftLanding.tsx">STEP THREE</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="184" data-magicpath-path="AutoGiftLanding.tsx">
                  Gift Design & Production
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed mb-6" data-magicpath-id="185" data-magicpath-path="AutoGiftLanding.tsx">
                  We craft a custom gift for every individual:
                </p>
                <ul className="space-y-3" data-magicpath-id="186" data-magicpath-path="AutoGiftLanding.tsx">
                  {['Sourcing unique items', 'Custom branding & packaging', 'Handwritten or AI-personalized notes', 'Custom inserts', 'Premium kitting & fulfillment'].map((item, i) => <motion.li data-magicpath-motion-tag="motion.li" key={item} initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: i * 0.1
                }} className="flex items-center gap-3" data-magicpath-id="187" data-magicpath-path="AutoGiftLanding.tsx">
                      <CheckCircle2 className="w-5 h-5 text-[#073D2B] flex-shrink-0" data-magicpath-id="188" data-magicpath-path="AutoGiftLanding.tsx" />
                      <span className="text-[#0C0C0D]/80" data-magicpath-id="189" data-magicpath-path="AutoGiftLanding.tsx">{item}</span>
                    </motion.li>)}
                </ul>
              </SortableContainer>
              <SortableContainer dndKitId="0ca388ff-9287-41a5-a3a9-340ae74f9aad" containerType="regular" prevTag="div" className="order-1 lg:order-2" data-magicpath-id="190" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="e99f5954-c63d-45d5-b504-722b7bc6825a" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#073D2B] to-[#0a5a41] rounded-3xl shadow-2xl p-8 text-white" data-magicpath-id="191" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="79c51788-a38f-49d1-9cc7-b8f3f9a363b3" containerType="regular" prevTag="motion.div" animate={{
                  rotateY: [0, 5, 0, -5, 0]
                }} transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} className="relative" data-magicpath-id="192" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="79ae8f87-61cb-4ab4-aa29-e71fbbc3ca62" containerType="regular" prevTag="div" className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20" data-magicpath-id="193" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="ee383fd8-1cf3-4a05-9fbf-ed0ebbc6b7b3" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-6" data-magicpath-id="194" data-magicpath-path="AutoGiftLanding.tsx">
                        <SortableContainer dndKitId="82f8b77e-8ab6-44a9-9bc9-8ce5fd4c7a88" containerType="regular" prevTag="div" className="w-16 h-16 bg-[#E2C382] rounded-full flex items-center justify-center" data-magicpath-id="195" data-magicpath-path="AutoGiftLanding.tsx">
                          <Gift className="w-8 h-8 text-[#073D2B]" data-magicpath-id="196" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                        <SortableContainer dndKitId="04f5f7bf-c619-4d81-9f6d-4adf1d5e21b2" containerType="regular" prevTag="div" data-magicpath-id="197" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-3 bg-white/30 rounded-full w-32 mb-2" data-magicpath-id="198" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/20 rounded-full w-24" data-magicpath-id="199" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                      <SortableContainer dndKitId="30b19c77-7605-4dde-bf90-5631a31cab1c" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-4" data-magicpath-id="200" data-magicpath-path="AutoGiftLanding.tsx">
                        <div className="bg-white/10 rounded-xl p-4 aspect-square" data-magicpath-id="201" data-magicpath-path="AutoGiftLanding.tsx" />
                        <div className="bg-white/10 rounded-xl p-4 aspect-square" data-magicpath-id="202" data-magicpath-path="AutoGiftLanding.tsx" />
                      </SortableContainer>
                      <SortableContainer dndKitId="dd5cdc92-14b9-4a2b-abae-50c1df970628" containerType="regular" prevTag="div" className="mt-4 p-4 bg-[#E2C382]/20 rounded-xl" data-magicpath-id="203" data-magicpath-path="AutoGiftLanding.tsx">
                        <SortableContainer dndKitId="a9962190-910c-4147-b8ed-8c26572c7f18" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="204" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-white/40 rounded-full w-full" data-magicpath-id="205" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/30 rounded-full w-4/5" data-magicpath-id="206" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/30 rounded-full w-3/5" data-magicpath-id="207" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="43188983-5d51-4dfa-9bea-c8a424598426" containerType="regular" prevTag="motion.div" animate={{
                    rotate: 360
                  }} transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }} className="absolute -top-4 -right-4 w-16 h-16 bg-[#E2C382] rounded-full flex items-center justify-center shadow-lg" data-magicpath-id="208" data-magicpath-path="AutoGiftLanding.tsx">
                      <Sparkles className="w-8 h-8 text-[#073D2B]" />
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="6606295a-0cac-4a61-bf73-aeed34cb1140" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="209" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="139b8d37-a5e4-455f-a3dd-89872e3bac39" containerType="regular" prevTag="div" data-magicpath-id="210" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="ceac1272-7333-4700-a424-e70a18e87fb4" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="211" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="da41a53d-4a52-4254-9b06-93cf60753f0b" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="212" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="48597748-d0cf-433a-866c-a161769f578f" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="213" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="6d9b2b02-b67b-4793-9b09-caed1cafecb9" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="214" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#073D2B]" data-magicpath-id="215" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="216" data-magicpath-path="AutoGiftLanding.tsx">Gift #1</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#073D2B] text-white text-xs font-medium rounded-full" data-magicpath-id="217" data-magicpath-path="AutoGiftLanding.tsx">
                        Delivered
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="a08f25de-5ef6-49ab-848a-6b9a2c760437" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="218" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="7da702b1-a26b-447d-b251-30d65775300d" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="219" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#073D2B]" data-magicpath-id="220" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="221" data-magicpath-path="AutoGiftLanding.tsx">Gift #2</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#073D2B] text-white text-xs font-medium rounded-full" data-magicpath-id="222" data-magicpath-path="AutoGiftLanding.tsx">
                        Delivered
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="bf3dd0d8-a3c8-4333-9842-b379657d9cbe" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="223" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="c988a7e8-6de8-4b78-b3da-7d6574df2e78" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="224" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#E2C382]" data-magicpath-id="225" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="226" data-magicpath-path="AutoGiftLanding.tsx">Gift #3</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#E2C382]/20 text-[#073D2B] text-xs font-medium rounded-full" data-magicpath-id="227" data-magicpath-path="AutoGiftLanding.tsx">
                        In Transit
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="240328ed-deaa-4412-b0be-da7e14402b05" containerType="regular" prevTag="div" className="mt-6 p-4 bg-gradient-to-r from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-xl border border-[#E2C382]/20" data-magicpath-id="228" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="d02b2ed7-1304-4b21-8c0b-e69b4d6df339" containerType="regular" prevTag="div" className="flex items-center gap-2 mb-2" data-magicpath-id="229" data-magicpath-path="AutoGiftLanding.tsx">
                        <TrendingUp className="w-5 h-5 text-[#073D2B]" data-magicpath-id="230" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-semibold text-[#0C0C0D]" data-magicpath-id="231" data-magicpath-path="AutoGiftLanding.tsx">Response Rate</span>
                      </SortableContainer>
                      <p className="text-3xl font-bold text-[#073D2B]" data-magicpath-id="232" data-magicpath-path="AutoGiftLanding.tsx">87%</p>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="011a2a7b-78d9-4bb4-955c-37c2d3c1b26d" containerType="regular" prevTag="div" data-magicpath-id="233" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="dc896918-2961-4a0f-acf8-cdc39364589c" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="234" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="235" data-magicpath-path="AutoGiftLanding.tsx">4</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="236" data-magicpath-path="AutoGiftLanding.tsx">STEP FOUR</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="237" data-magicpath-path="AutoGiftLanding.tsx">
                  Deliver & Report
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed" data-magicpath-id="238" data-magicpath-path="AutoGiftLanding.tsx">
                  We ship each gift, track delivery, monitor responses, and follow up with a report on engagement + outcomes.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="0216cf68-162d-47a0-8943-9a4a114a370b" containerType="regular" prevTag="motion.section" id="pricing" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="239" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="d4d4b215-dd07-468c-ab18-2dc1838754ca" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="240" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="fead64bd-9775-4198-a8fc-ec273e8f5d9e" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="241" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="242" data-magicpath-path="AutoGiftLanding.tsx">
              Simple, Transparent Pilot Pricing
            </h2>
            <p className="text-xl text-[#0C0C0D]/70 max-w-2xl mx-auto" data-magicpath-id="243" data-magicpath-path="AutoGiftLanding.tsx">
              You set the gift budget. We charge a 10% service margin on top — that's it.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="1060cd25-4798-4fd1-9e65-0e1eca653cc2" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-3xl p-12 border-2 border-[#E2C382]/30 mb-12" data-magicpath-id="244" data-magicpath-path="AutoGiftLanding.tsx">
            <h3 className="text-2xl font-bold text-[#0C0C0D] mb-8" data-magicpath-id="245" data-magicpath-path="AutoGiftLanding.tsx">We include:</h3>
            <div className="grid md:grid-cols-2 gap-6" data-magicpath-id="246" data-magicpath-path="AutoGiftLanding.tsx">
              {['Contact research', 'Gift concepting', 'Sourcing & procurement', 'Branding & packaging', 'Handwritten notes', 'Kitting & fulfillment', 'Project management'].map((item, i) => <SortableContainer dndKitId="a0768071-1cec-48e6-bae1-c4f489f7df8c" containerType="regular" prevTag="motion.div" key={item} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: i * 0.1
            }} className="flex items-center gap-3" data-magicpath-id="247" data-magicpath-path="AutoGiftLanding.tsx">
                  <CheckCircle2 className="w-6 h-6 text-[#073D2B] flex-shrink-0" data-magicpath-id="248" data-magicpath-path="AutoGiftLanding.tsx" />
                  <span className="text-lg text-[#0C0C0D]" data-magicpath-id="249" data-magicpath-path="AutoGiftLanding.tsx">{item}</span>
                </SortableContainer>)}
            </div>
          </SortableContainer>

          <SortableContainer dndKitId="2c49ace4-c2b8-479a-b96b-6b13a9167189" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="space-y-6 mb-12" data-magicpath-id="250" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="91cdd503-29d6-437b-b461-225637800a22" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="251" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="664a4171-1e1a-4c4c-a668-f2239ab3e7b7" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="252" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="b9dc79c5-a9ee-498f-8a30-4aadf1ecb7ec" containerType="regular" prevTag="div" data-magicpath-id="253" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="254" data-magicpath-path="AutoGiftLanding.tsx">$100 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="255" data-magicpath-path="AutoGiftLanding.tsx">$120 total per recipient</p>
                </SortableContainer>
                <SortableContainer dndKitId="11363e54-744a-4005-b753-be3a3610ea7a" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="256" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="257" data-magicpath-path="AutoGiftLanding.tsx">20% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="7e631db0-2526-4da1-9d67-572977149ae8" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="258" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="21531b36-b934-4b66-a753-85d140615b26" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="259" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="bfdf47bb-f03e-49c7-9c68-2933950baf07" containerType="regular" prevTag="div" data-magicpath-id="260" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="261" data-magicpath-path="AutoGiftLanding.tsx">$250 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="262" data-magicpath-path="AutoGiftLanding.tsx">$300 total per recipient</p>
                </SortableContainer>
                <SortableContainer dndKitId="efa123db-01e9-44a8-ba43-98557996f9d7" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="263" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="264" data-magicpath-path="AutoGiftLanding.tsx">20% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="4a2be20d-5beb-4cb3-b41e-192cadd1f4dd" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="265" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="fa0bad98-10d1-4b7e-9a45-987d0da58c24" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="266" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="ec914e55-3051-4acd-a527-07ac71788b80" containerType="regular" prevTag="div" data-magicpath-id="267" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="268" data-magicpath-path="AutoGiftLanding.tsx">$500 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="269" data-magicpath-path="AutoGiftLanding.tsx">$600 total per recipient</p>
                </SortableContainer>
                <SortableContainer dndKitId="40a6c66c-3961-4b80-a2cf-e69946013b2b" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="270" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="271" data-magicpath-path="AutoGiftLanding.tsx">20% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="fef6ecdb-1ea6-423e-86fb-6e24e504795c" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center" data-magicpath-id="272" data-magicpath-path="AutoGiftLanding.tsx">
            <a href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300" data-magicpath-id="273" data-magicpath-path="AutoGiftLanding.tsx">
              Start Your Pilot
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="31fdf6a5-df35-4af5-8cde-6c0a7dfacad6" containerType="regular" prevTag="motion.section" id="use-cases" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-b from-white to-[#F6F6F4]" data-magicpath-id="274" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="1b5cba18-17e5-43e5-828b-aa66541503da" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="275" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="9a815f13-3733-4c6f-a14a-6ba10fd4aab3" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="276" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="277" data-magicpath-path="AutoGiftLanding.tsx">
              Perfect For Teams That Need…
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="565858de-e01f-4e6a-a0e6-cfee9f3cff3e" containerType="collection" prevTag="motion.div" variants={staggerChildren} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="278" data-magicpath-path="AutoGiftLanding.tsx">
            {[{
            icon: Target,
            label: 'High-impact outbound',
            mpid: "72649b11-5e05-4327-a544-122d72bf2e8b"
          }, {
            icon: Users,
            label: 'ABM campaigns',
            mpid: "064c452f-88c6-499f-b360-5ea78662ddd7"
          }, {
            icon: TrendingUp,
            label: 'Executive outreach',
            mpid: "69627094-2678-4f47-9bdf-bd6e47d47976"
          }, {
            icon: Send,
            label: 'Pipeline reactivation',
            mpid: "81adff3d-cb98-4bdc-b335-5d654fcb44dd"
          }, {
            icon: Heart,
            label: 'Founder-to-founder gifting',
            mpid: "6b7c9d6e-1bbb-4bb9-b6d2-7a28baf77f51"
          }, {
            icon: Sparkles,
            label: 'CSM-led surprises & delight',
            mpid: "60a8dbec-5b28-457f-b8d7-87a5ed904272"
          }, {
            icon: Mail,
            label: 'Sales-to-C-suite intros',
            mpid: "3c9d2df1-f389-436e-87bf-98a8d7bc5610"
          }, {
            icon: Gift,
            label: 'Corporate gifting',
            mpid: "cd2ca3bb-b160-41eb-ac9b-275d7a778043"
          }].map((item, i) => <motion.div data-magicpath-motion-tag="motion.div" key={item.label} variants={fadeInUp} whileHover={{
            scale: 1.05,
            y: -5
          }} className="bg-white rounded-2xl p-8 border border-[#E2C382]/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="279" data-magicpath-path="AutoGiftLanding.tsx">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-2xl flex items-center justify-center mx-auto mb-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="280" data-magicpath-path="AutoGiftLanding.tsx">
                  <item.icon className="w-8 h-8 text-[#073D2B]" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="281" data-magicpath-path="AutoGiftLanding.tsx" />
                </div>
                <p className="font-semibold text-[#0C0C0D]" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="282" data-magicpath-path="AutoGiftLanding.tsx">{item.label}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="b6cab4f8-95bb-4c2b-8ef2-5e261c3f525c" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="283" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="5aeb0c11-a1ee-46fc-9ca2-e7f7367f1504" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="284" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="15e7eeaf-ae92-4ab2-8f10-2ddd2d153a30" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="285" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="286" data-magicpath-path="AutoGiftLanding.tsx">
              Because Attention Is Earned, Not Automated
            </h2>
          </SortableContainer>

          <motion.div data-magicpath-motion-tag="motion.div" variants={staggerChildren} className="grid md:grid-cols-2 gap-8" data-magicpath-id="287" data-magicpath-path="AutoGiftLanding.tsx">
            {['Every gift is designed specifically for the recipient', 'We handle all research and context', 'We source items that are unique, premium, and personal', 'Handwritten notes increase response rates dramatically', 'Dimensional mail gets opened almost 100% of the time', 'You save 10–20 hours/week of SDR bandwidth', 'You run a luxury, thoughtful campaign without lifting a finger'].map((benefit, i) => <SortableContainer dndKitId="59be59cb-a4a0-468a-8d7d-d65251bbf58a" containerType="regular" prevTag="motion.div" key={benefit} variants={fadeInUp} whileHover={{
            x: 10
          }} className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#E2C382]/5 to-[#F0D8B6]/5 rounded-2xl border border-[#E2C382]/20 hover:border-[#E2C382]/40 transition-all duration-300" data-magicpath-id="288" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-7 h-7 text-[#073D2B] flex-shrink-0 mt-1" data-magicpath-id="289" data-magicpath-path="AutoGiftLanding.tsx" />
                <p className="text-lg text-[#0C0C0D]" data-magicpath-id="290" data-magicpath-path="AutoGiftLanding.tsx">{benefit}</p>
              </SortableContainer>)}
          </motion.div>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="e03298d8-6732-4597-aa82-fe83ec38c45d" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-br from-[#073D2B] to-[#0a5a41] text-white relative overflow-hidden" data-magicpath-id="291" data-magicpath-path="AutoGiftLanding.tsx">
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute top-0 right-0 w-96 h-96 bg-[#E2C382]/10 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity
      }} data-magicpath-id="292" data-magicpath-path="AutoGiftLanding.tsx" />
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        delay: 1
      }} data-magicpath-id="293" data-magicpath-path="AutoGiftLanding.tsx" />

        <SortableContainer dndKitId="4d12cf12-8063-44a4-8ceb-80454e0fdf0e" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center relative z-10" data-magicpath-id="294" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="a1f45b17-a426-4077-878d-48b10e704c8f" containerType="regular" prevTag="motion.div" variants={fadeInUp} data-magicpath-id="295" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="b5ff29f9-ecac-426b-a2a3-c9ca36196ec7" containerType="regular" prevTag="div" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8" data-magicpath-id="296" data-magicpath-path="AutoGiftLanding.tsx">
              <Sparkles className="w-4 h-4 text-[#E2C382]" />
              <span className="text-sm font-medium" data-magicpath-id="297" data-magicpath-path="AutoGiftLanding.tsx">Ready to Get Started?</span>
            </SortableContainer>
          </SortableContainer>

          <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-5xl lg:text-6xl font-bold mb-6" data-magicpath-id="298" data-magicpath-path="AutoGiftLanding.tsx">
            Ready to Reach Anyone With the Perfect Gift?
          </motion.h2>
          
          <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-2xl text-white/80 mb-12" data-magicpath-id="299" data-magicpath-path="AutoGiftLanding.tsx">
            Tell us who — and your budget. We'll take care of everything else.
          </motion.p>

          <SortableContainer dndKitId="27f650e9-f3d2-4ff9-87c2-2735fa295657" containerType="regular" prevTag="motion.div" variants={fadeInUp} data-magicpath-id="300" data-magicpath-path="AutoGiftLanding.tsx">
            <a href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105" data-magicpath-id="301" data-magicpath-path="AutoGiftLanding.tsx">
              <span className="flex items-center justify-center gap-3" data-magicpath-id="302" data-magicpath-path="AutoGiftLanding.tsx">
                Start Your Pilot
                <Gift className="w-6 h-6" data-magicpath-id="303" data-magicpath-path="AutoGiftLanding.tsx" />
              </span>
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="a3fed067-766f-4dd8-a933-88aee68e8c65" containerType="regular" prevTag="footer" className="bg-[#0C0C0D] text-white py-16 px-4" data-magicpath-id="304" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="ec89bc1e-a7ad-4989-889e-e3e344022f3b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="305" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="07243b0c-5e26-453b-8bf8-34582a8cc481" containerType="regular" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="306" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="3b3a8501-93ae-4d83-8777-cca38244b86d" containerType="regular" prevTag="div" className="md:col-span-2" data-magicpath-id="307" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="bf3ad6d0-299e-4bb9-8000-314477ec83a3" containerType="regular" prevTag="div" className="flex items-center gap-2 mb-4" data-magicpath-id="308" data-magicpath-path="AutoGiftLanding.tsx">
                <Gift className="w-8 h-8 text-[#E2C382]" data-magicpath-id="309" data-magicpath-path="AutoGiftLanding.tsx" />
                <span className="text-2xl font-bold" data-magicpath-id="310" data-magicpath-path="AutoGiftLanding.tsx">AutoGift</span>
              </SortableContainer>
              <p className="text-white/60 mb-6 leading-relaxed" data-magicpath-id="311" data-magicpath-path="AutoGiftLanding.tsx">
                Your outsourced ABM gifting team. Handcrafted, hyper-personalized gifts done for you.
              </p>
              <SortableContainer dndKitId="f748a5df-ed08-4c5a-a6c1-1f813221fdb7" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="312" data-magicpath-path="AutoGiftLanding.tsx">
                <a href="mailto:jschlisserman@gmail.com" className="text-[#E2C382] hover:text-[#F0D8B6] transition-colors" data-magicpath-id="313" data-magicpath-path="AutoGiftLanding.tsx">
                  <Mail className="w-5 h-5" data-magicpath-id="314" data-magicpath-path="AutoGiftLanding.tsx" />
                </a>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="5009dd37-bdcd-4e23-a3d1-cb2ddc496fa8" containerType="regular" prevTag="div" data-magicpath-id="315" data-magicpath-path="AutoGiftLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="316" data-magicpath-path="AutoGiftLanding.tsx">Quick Links</h4>
              <SortableContainer dndKitId="75265726-7e6f-4270-820b-6062dbd71159" containerType="regular" prevTag="ul" className="space-y-3" data-magicpath-id="317" data-magicpath-path="AutoGiftLanding.tsx">
                <li data-magicpath-id="318" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="319" data-magicpath-path="AutoGiftLanding.tsx">About</a></li>
                <li data-magicpath-id="320" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="321" data-magicpath-path="AutoGiftLanding.tsx">Pricing</a></li>
                <li data-magicpath-id="322" data-magicpath-path="AutoGiftLanding.tsx"><a href="mailto:jschlisserman@gmail.com" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="323" data-magicpath-path="AutoGiftLanding.tsx">Contact</a></li>
                <li data-magicpath-id="324" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="325" data-magicpath-path="AutoGiftLanding.tsx">Careers</a></li>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="42817247-dfbe-494a-ae23-d6d55f10f305" containerType="regular" prevTag="div" data-magicpath-id="326" data-magicpath-path="AutoGiftLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="327" data-magicpath-path="AutoGiftLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="2509618e-a9ab-4dd4-925a-76e3e7e5e660" containerType="regular" prevTag="ul" className="space-y-3" data-magicpath-id="328" data-magicpath-path="AutoGiftLanding.tsx">
                <li data-magicpath-id="329" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="330" data-magicpath-path="AutoGiftLanding.tsx">Terms</a></li>
                <li data-magicpath-id="331" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="332" data-magicpath-path="AutoGiftLanding.tsx">Privacy</a></li>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="7eaffc2d-af1a-41ab-a8ff-ef6f665364f5" containerType="regular" prevTag="div" className="border-t border-white/10 pt-8" data-magicpath-id="333" data-magicpath-path="AutoGiftLanding.tsx">
            <p className="text-center text-white/40 text-sm" data-magicpath-id="334" data-magicpath-path="AutoGiftLanding.tsx">
              © {new Date().getFullYear()} AutoGift. All rights reserved.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};