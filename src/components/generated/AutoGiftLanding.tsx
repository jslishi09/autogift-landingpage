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
  const {
    scrollYProgress
  } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
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
  return <SortableContainer dndKitId="529648b5-8fbd-4322-af52-05d0f5d89512" containerType="regular" prevTag="div" className="min-h-screen bg-[#F6F6F4] text-[#0C0C0D] overflow-x-hidden" data-magicpath-id="0" data-magicpath-path="AutoGiftLanding.tsx">
      {/* Navigation Bar */}
      <SortableContainer dndKitId="466d063e-8a41-4c0a-8eec-b0beb4252e1b" containerType="regular" prevTag="motion.nav" initial={{
      y: -100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }} className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E2C382]/20" data-magicpath-id="1" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="7eb02938-dc51-430d-8f10-bc1048e1378a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-end" data-magicpath-id="2" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="e4fe4481-e112-4c22-a5b0-e5dd91869084" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="3" data-magicpath-path="AutoGiftLanding.tsx">
            {/* AutoGift Logo SVG */}
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" data-magicpath-id="4" data-magicpath-path="AutoGiftLanding.tsx">
              {/* Gift box lid top */}
              <path d="M25 30 L47 25 L47 35 L25 40 Z" fill="#D4B574" data-magicpath-id="5" data-magicpath-path="AutoGiftLanding.tsx" />
              <path d="M53 25 L75 30 L75 40 L53 35 Z" fill="#C9A961" data-magicpath-id="6" data-magicpath-path="AutoGiftLanding.tsx" />
              
              {/* Gift box body */}
              <path d="M25 40 L47 35 L47 70 L25 75 Z" fill="#D4B574" data-magicpath-id="7" data-magicpath-path="AutoGiftLanding.tsx" />
              <path d="M53 35 L75 40 L75 75 L53 70 Z" fill="#C9A961" data-magicpath-id="8" data-magicpath-path="AutoGiftLanding.tsx" />
              
              {/* Center ribbon vertical */}
              <rect x="47" y="25" width="6" height="50" fill="#F6F6F4" data-magicpath-id="9" data-magicpath-path="AutoGiftLanding.tsx" />
            </svg>
            
            {/* AutoGift Text */}
            <SortableContainer dndKitId="ce88fa67-4cd5-4940-b048-c767e357d924" containerType="regular" prevTag="div" className="flex items-baseline" data-magicpath-id="10" data-magicpath-path="AutoGiftLanding.tsx">
              <span className="text-2xl font-bold text-[#0C0C0D]" style={{
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }} data-magicpath-id="11" data-magicpath-path="AutoGiftLanding.tsx">
                Auto
              </span>
              <span className="text-2xl font-bold text-[#C9A961]" style={{
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }} data-magicpath-id="12" data-magicpath-path="AutoGiftLanding.tsx">
                Gift
              </span>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="fca8567d-7046-4615-a553-facc92099645" containerType="regular" prevTag="motion.section" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden" style={{
      y: heroY,
      opacity: heroOpacity
    }} data-magicpath-id="13" data-magicpath-path="AutoGiftLanding.tsx">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0D8B6]/20 to-transparent pointer-events-none" data-magicpath-id="14" data-magicpath-path="AutoGiftLanding.tsx" />
        
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute top-20 right-20 w-64 h-64 bg-[#E2C382]/10 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} data-magicpath-id="15" data-magicpath-path="AutoGiftLanding.tsx" />
        
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-40 left-20 w-96 h-96 bg-[#073D2B]/5 rounded-full blur-3xl" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} data-magicpath-id="16" data-magicpath-path="AutoGiftLanding.tsx" />

        <SortableContainer dndKitId="902dc2a9-356b-4329-bd60-aa6244e4ec13" containerType="regular" prevTag="div" className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10" data-magicpath-id="17" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="680ea42d-13f7-43b0-99c9-8ed23c62bff5" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={staggerChildren} data-magicpath-id="18" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="543262cd-7f50-481f-bf2a-c0eda5c0f557" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="19" data-magicpath-path="AutoGiftLanding.tsx">
              <Sparkles className="w-4 h-4 text-[#E2C382]" />
              <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="20" data-magicpath-path="AutoGiftLanding.tsx">White-Glove Gifting Service</span>
            </SortableContainer>

            <motion.h1 data-magicpath-motion-tag="motion.h1" variants={fadeInUp} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }} data-magicpath-id="21" data-magicpath-path="AutoGiftLanding.tsx">
              Handcrafted,{' '}
              <span className="relative inline-block" data-magicpath-id="22" data-magicpath-path="AutoGiftLanding.tsx">
                <span className="relative z-10 bg-gradient-to-r from-[#E2C382] to-[#073D2B] bg-clip-text text-transparent" data-magicpath-id="23" data-magicpath-path="AutoGiftLanding.tsx">
                  Hyper-Personalized
                </span>
                <motion.span data-magicpath-motion-tag="motion.span" className="absolute bottom-2 left-0 right-0 h-3 bg-[#E2C382]/20" initial={{
                scaleX: 0
              }} animate={{
                scaleX: 1
              }} transition={{
                delay: 0.8,
                duration: 0.6
              }} data-magicpath-id="24" data-magicpath-path="AutoGiftLanding.tsx" />
              </span>{' '}
              Gifts Done For You.
            </motion.h1>

            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-[#0C0C0D]/70 mb-8 leading-relaxed" data-magicpath-id="25" data-magicpath-path="AutoGiftLanding.tsx">
              Tell us who you want to reach. Give us a budget. We research each person, design the perfect gift, source it, brand it, write the copy, and ship it end to end.
            </motion.p>

            <SortableContainer dndKitId="424141d5-7c6d-4bf6-9242-ef40bd39889e" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="flex flex-col sm:flex-row gap-4" data-magicpath-id="26" data-magicpath-path="AutoGiftLanding.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-id="27" data-magicpath-path="AutoGiftLanding.tsx">
                <span className="flex items-center justify-center gap-2" data-magicpath-id="28" data-magicpath-path="AutoGiftLanding.tsx">
                  Start Your Pilot
                  <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" data-magicpath-id="29" data-magicpath-path="AutoGiftLanding.tsx" />
                </span>
              </motion.a>

              <motion.button data-magicpath-motion-tag="motion.button" onClick={() => setShowExampleForm(true)} className="px-8 py-4 bg-white/60 backdrop-blur-sm text-[#0C0C0D] rounded-full font-semibold text-lg border-2 border-[#E2C382]/30 hover:border-[#E2C382] transition-all duration-300 text-center" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-id="30" data-magicpath-path="AutoGiftLanding.tsx">
                See An Example
              </motion.button>
            </SortableContainer>

            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="mt-6 text-sm text-[#0C0C0D]/60 italic" data-magicpath-id="31" data-magicpath-path="AutoGiftLanding.tsx">
              Your outsourced ABM gifting team
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="adac314a-7367-46e1-a99b-c29866a5d6f4" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="relative" data-magicpath-id="32" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="89b636d3-f6a7-424e-81e0-2f297f308f1f" containerType="regular" prevTag="div" className="relative bg-white rounded-3xl shadow-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="33" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="609bd9ae-6ca9-449f-a6a0-1c15900575b6" containerType="regular" prevTag="motion.div" animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="space-y-6" data-magicpath-id="34" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="d79a2068-f0bd-4611-899f-9f6a4411b057" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#F0D8B6]/30 to-[#E2C382]/20 rounded-2xl p-6 backdrop-blur-sm" data-magicpath-id="35" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="dc8eb11e-dcc7-4f83-9eb9-313b692655cc" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-4" data-magicpath-id="36" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="d885794d-c09a-4872-81b7-378f8cb574b8" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-full flex items-center justify-center" data-magicpath-id="37" data-magicpath-path="AutoGiftLanding.tsx">
                      <Gift className="w-6 h-6 text-[#E2C382]" data-magicpath-id="38" data-magicpath-path="AutoGiftLanding.tsx" />
                    </SortableContainer>
                    <SortableContainer dndKitId="ae5c815d-d182-4c08-8af5-3fe1f3bbc6ac" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="39" data-magicpath-path="AutoGiftLanding.tsx">
                      <div className="h-3 bg-[#E2C382]/30 rounded-full w-3/4 mb-2" data-magicpath-id="40" data-magicpath-path="AutoGiftLanding.tsx" />
                      <div className="h-2 bg-[#E2C382]/20 rounded-full w-1/2" data-magicpath-id="41" data-magicpath-path="AutoGiftLanding.tsx" />
                    </SortableContainer>
                  </SortableContainer>
                  <SortableContainer dndKitId="a690f4f3-9783-4cd1-9f37-d8993ed446b1" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="42" data-magicpath-path="AutoGiftLanding.tsx">
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="43" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-5/6" data-magicpath-id="44" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="4dcdf44e-25b6-4e85-994e-de37b96d96a5" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-4" data-magicpath-id="45" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="aefb9767-a7fc-4795-801b-9aa4b38f08cf" containerType="regular" prevTag="div" className="bg-[#073D2B]/5 rounded-xl p-4 backdrop-blur-sm" data-magicpath-id="46" data-magicpath-path="AutoGiftLanding.tsx">
                    <Package className="w-8 h-8 text-[#073D2B] mb-2" data-magicpath-id="47" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/20 rounded-full w-full" data-magicpath-id="48" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="a6ef780c-32e4-4cb7-be87-455256d27cab" containerType="regular" prevTag="div" className="bg-[#073D2B]/5 rounded-xl p-4 backdrop-blur-sm" data-magicpath-id="49" data-magicpath-path="AutoGiftLanding.tsx">
                    <Sparkles className="w-8 h-8 text-[#E2C382] mb-2" />
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="50" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="fd717e1f-614b-467e-a7be-56660f890b14" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/20 to-[#F0D8B6]/30 rounded-2xl p-6 backdrop-blur-sm border-2 border-[#E2C382]/30" data-magicpath-id="51" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="1de0fe7f-0d84-4fa4-b03a-604d920a7703" containerType="regular" prevTag="div" className="flex items-center justify-between mb-4" data-magicpath-id="52" data-magicpath-path="AutoGiftLanding.tsx">
                    <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="53" data-magicpath-path="AutoGiftLanding.tsx">Handwritten Note</span>
                    <CheckCircle2 className="w-5 h-5 text-[#073D2B]" data-magicpath-id="54" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="4b9b52e7-35e0-4c93-831f-f117e3332a31" containerType="regular" prevTag="div" className="space-y-2 opacity-60" data-magicpath-id="55" data-magicpath-path="AutoGiftLanding.tsx">
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-full" data-magicpath-id="56" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-4/5" data-magicpath-id="57" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-3/4" data-magicpath-id="58" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="b39c822b-3d1f-4f43-a9c8-be385e838642" containerType="regular" prevTag="motion.div" className="absolute -top-6 -right-6 w-24 h-24 bg-[#E2C382] rounded-full flex items-center justify-center shadow-xl" animate={{
              rotate: 360
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} data-magicpath-id="59" data-magicpath-path="AutoGiftLanding.tsx">
                <Sparkles className="w-12 h-12 text-white" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {showExampleForm && <SortableContainer dndKitId="1411363f-44c8-4596-b8cf-8ef9f20c8ad0" containerType="regular" prevTag="motion.div" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowExampleForm(false)} data-magicpath-id="60" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="052e86e2-69de-470b-8615-5e60ae4d3cc5" containerType="regular" prevTag="motion.div" initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()} data-magicpath-id="61" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="b3bdaebd-9e8a-4a5b-b2d8-d174a708f41e" containerType="regular" prevTag="div" className="sticky top-0 bg-gradient-to-br from-[#E2C382] to-[#D4B574] p-8 rounded-t-3xl" data-magicpath-id="62" data-magicpath-path="AutoGiftLanding.tsx">
              <h3 className="text-3xl font-bold text-[#0C0C0D] mb-2" data-magicpath-id="63" data-magicpath-path="AutoGiftLanding.tsx">Request An Example</h3>
              <p className="text-[#0C0C0D]/70" data-magicpath-id="64" data-magicpath-path="AutoGiftLanding.tsx">Tell us about yourself and we'll show you what we can do</p>
            </SortableContainer>

            <SortableContainer dndKitId="19929270-4512-4202-950b-ed52d580972b" containerType="regular" prevTag="form" onSubmit={handleFormSubmit} className="p-8 space-y-6" data-magicpath-id="65" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="522896aa-cf55-4df1-bacf-dc9fa6e0f20b" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-6" data-magicpath-id="66" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="994a36c8-0e7f-478e-b364-1a1d84f91e8c" containerType="regular" prevTag="div" data-magicpath-id="67" data-magicpath-path="AutoGiftLanding.tsx">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="68" data-magicpath-path="AutoGiftLanding.tsx">
                    <User className="w-4 h-4 text-[#E2C382]" data-magicpath-id="69" data-magicpath-path="AutoGiftLanding.tsx" />
                    First Name *
                  </label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="John" data-magicpath-id="70" data-magicpath-path="AutoGiftLanding.tsx" />
                </SortableContainer>

                <SortableContainer dndKitId="5f035063-3eb4-4704-b1ef-3b8e4fa779fe" containerType="regular" prevTag="div" data-magicpath-id="71" data-magicpath-path="AutoGiftLanding.tsx">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="72" data-magicpath-path="AutoGiftLanding.tsx">
                    <User className="w-4 h-4 text-[#E2C382]" data-magicpath-id="73" data-magicpath-path="AutoGiftLanding.tsx" />
                    Last Name *
                  </label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="Doe" data-magicpath-id="74" data-magicpath-path="AutoGiftLanding.tsx" />
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="41e0d6ed-8ce3-483e-99de-be984133fd46" containerType="regular" prevTag="div" data-magicpath-id="75" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="76" data-magicpath-path="AutoGiftLanding.tsx">
                  <Building2 className="w-4 h-4 text-[#E2C382]" data-magicpath-id="77" data-magicpath-path="AutoGiftLanding.tsx" />
                  Company Name *
                </label>
                <input type="text" name="companyName" required value={formData.companyName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="Acme Corp" data-magicpath-id="78" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="2864883d-3ea1-4dca-ad46-de8ec494cf9a" containerType="regular" prevTag="div" data-magicpath-id="79" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="80" data-magicpath-path="AutoGiftLanding.tsx">
                  <Briefcase className="w-4 h-4 text-[#E2C382]" data-magicpath-id="81" data-magicpath-path="AutoGiftLanding.tsx" />
                  Title *
                </label>
                <input type="text" name="title" required value={formData.title} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="VP of Sales" data-magicpath-id="82" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="175bf1a2-d453-4ae4-9bb5-8fd3ad1858c6" containerType="regular" prevTag="div" data-magicpath-id="83" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="84" data-magicpath-path="AutoGiftLanding.tsx">
                  <Mail className="w-4 h-4 text-[#E2C382]" data-magicpath-id="85" data-magicpath-path="AutoGiftLanding.tsx" />
                  Email Address *
                </label>
                <input type="email" name="email" required value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="john@acme.com" data-magicpath-id="86" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="3b2c7353-0050-43d1-94e0-811bd1d811ce" containerType="regular" prevTag="div" data-magicpath-id="87" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="88" data-magicpath-path="AutoGiftLanding.tsx">
                  <MapPin className="w-4 h-4 text-[#E2C382]" data-magicpath-id="89" data-magicpath-path="AutoGiftLanding.tsx" />
                  Physical Address *
                </label>
                <input type="text" name="address" required value={formData.address} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="123 Main St, City, State, ZIP" data-magicpath-id="90" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="a751d778-011c-4a77-bade-afad372fd32b" containerType="regular" prevTag="div" data-magicpath-id="91" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="92" data-magicpath-path="AutoGiftLanding.tsx">
                  <Phone className="w-4 h-4 text-[#E2C382]" data-magicpath-id="93" data-magicpath-path="AutoGiftLanding.tsx" />
                  Phone Number *
                </label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="(555) 123-4567" data-magicpath-id="94" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="33994b51-423b-478b-9264-ae9ce6564492" containerType="regular" prevTag="div" className="flex gap-4 pt-4" data-magicpath-id="95" data-magicpath-path="AutoGiftLanding.tsx">
                <button type="button" onClick={() => setShowExampleForm(false)} className="flex-1 px-6 py-3 bg-[#F6F6F4] text-[#0C0C0D] rounded-xl font-medium hover:bg-[#E2C382]/10 transition-all" data-magicpath-id="96" data-magicpath-path="AutoGiftLanding.tsx">
                  Cancel
                </button>
                <SortableContainer dndKitId="b98b2b57-dd30-48d9-98a4-73a74ca5c05d" containerType="regular" prevTag="button" type="submit" disabled={isSubmitting || submitSuccess} className="flex-1 px-6 py-3 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50" data-magicpath-id="97" data-magicpath-path="AutoGiftLanding.tsx">
                  {submitSuccess ? <span className="flex items-center justify-center gap-2" data-magicpath-id="98" data-magicpath-path="AutoGiftLanding.tsx">
                      <CheckCircle2 className="w-5 h-5" data-magicpath-id="99" data-magicpath-path="AutoGiftLanding.tsx" />
                      Sent!
                    </span> : isSubmitting ? 'Sending...' : 'Submit Request'}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>}

      <SortableContainer dndKitId="171029a0-352c-4b70-8015-ac83768272ae" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-20 px-4" data-magicpath-id="100" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="8d82f4be-e702-493b-a3f7-25e0f3dc08e3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="101" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="01675a79-6b72-4b37-86ab-8bcf89678f5c" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="102" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-sm font-semibold text-[#E2C382] tracking-wider uppercase mb-4" data-magicpath-id="103" data-magicpath-path="AutoGiftLanding.tsx">Trusted By</h2>
            <SortableContainer dndKitId="f8a71f18-7a55-4be1-afbe-5bb2da124ede" containerType="regular" prevTag="div" className="flex flex-wrap justify-center items-center gap-8 opacity-60" data-magicpath-id="104" data-magicpath-path="AutoGiftLanding.tsx">
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="105" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="106" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="107" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="108" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="a74ef477-a19a-42f2-9dc9-2a40bc4ae792" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="109" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="28d9ab45-f26a-4027-ace0-0e48b5ee401f" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="110" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="24aeba99-b330-4135-8438-a5490411b900" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="111" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-6" data-magicpath-id="112" data-magicpath-path="AutoGiftLanding.tsx">
              Your Personal Gifting & Outbound Team — On Demand
            </h2>
            <p className="text-xl text-[#0C0C0D]/70 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="113" data-magicpath-path="AutoGiftLanding.tsx">
              The AutoGift Pilot Program is a fully-managed gifting service for teams who need to reach high-value contacts with thoughtful, personalized, premium gifts that stand out.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="a614b263-c540-4668-9398-da4bca191d54" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mb-12" data-magicpath-id="114" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="f9cae467-f03e-43ea-95ea-d8146e4fa76c" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="115" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="cf3f5b38-a2a5-41da-a279-89fcb7aca349" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="116" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="117" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="118" data-magicpath-path="AutoGiftLanding.tsx">The contacts you want to reach</h3>
            </SortableContainer>

            <SortableContainer dndKitId="c6e76b93-125c-45c2-81c0-2f0660c34c65" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="119" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="dee8b91d-4f18-4c30-bd4d-3ea79e289000" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="120" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="121" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="122" data-magicpath-path="AutoGiftLanding.tsx">Your budget per person</h3>
            </SortableContainer>

            <SortableContainer dndKitId="6176d033-1ccd-4ff1-a6d9-30916e3e530e" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="123" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="3cfdb213-d677-472c-9e60-e0836202041e" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="124" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="125" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="126" data-magicpath-path="AutoGiftLanding.tsx">The outcome you want</h3>
            </SortableContainer>
          </SortableContainer>

          <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-center text-2xl font-semibold text-[#073D2B]" data-magicpath-id="127" data-magicpath-path="AutoGiftLanding.tsx">
            We handle everything else.
          </motion.p>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="13926de9-106e-46bd-8ad5-7e12178f268e" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-b from-white to-[#F6F6F4]" data-magicpath-id="128" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="e1dbbfa3-2543-4b61-b580-19bcf8319a35" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="129" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="cad7a6e5-5191-4fc8-96b9-5cc7009c9192" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-20" data-magicpath-id="130" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="131" data-magicpath-path="AutoGiftLanding.tsx">
              How It Works
            </h2>
            <p className="text-xl text-[#0C0C0D]/70" data-magicpath-id="132" data-magicpath-path="AutoGiftLanding.tsx">Four simple steps to perfect gifts</p>
          </SortableContainer>

          <SortableContainer dndKitId="f1d9ad93-a0bd-47df-98cf-df15ece599e1" containerType="regular" prevTag="div" className="space-y-24" data-magicpath-id="133" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="f1313ecd-4a43-440b-a450-bcf851931941" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="134" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="e10283fb-c110-4647-b454-3e7ee183bd26" containerType="regular" prevTag="div" className="order-2 lg:order-1" data-magicpath-id="135" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="18580465-3595-42c7-9883-c7f28e5c39e9" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="136" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="137" data-magicpath-path="AutoGiftLanding.tsx">1</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="138" data-magicpath-path="AutoGiftLanding.tsx">STEP ONE</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="139" data-magicpath-path="AutoGiftLanding.tsx">
                  Submit Your List (or We Build It for You)
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed" data-magicpath-id="140" data-magicpath-path="AutoGiftLanding.tsx">
                  Give us names OR let our research team find the right prospects. We'll deliver targeted profiles with context, interests, and angles.
                </p>
              </SortableContainer>
              <SortableContainer dndKitId="3f5d971b-c12a-4dd8-8659-fd37794d7b6e" containerType="regular" prevTag="div" className="order-1 lg:order-2" data-magicpath-id="141" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="4a12e041-270a-438e-8d4e-f1b0d65432a3" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="142" data-magicpath-path="AutoGiftLanding.tsx">
                  <div className="space-y-4" data-magicpath-id="143" data-magicpath-path="AutoGiftLanding.tsx">
                    {['Contact 1', 'Contact 2', 'Contact 3'].map((contact, i) => <SortableContainer dndKitId="10ed22cb-be84-4778-a763-00980c9eea07" containerType="regular" prevTag="motion.div" key={contact} initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: i * 0.1
                  }} className="flex items-center gap-4 p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="144" data-magicpath-path="AutoGiftLanding.tsx">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#E2C382] to-[#D4B574] rounded-full" data-magicpath-id="145" data-magicpath-path="AutoGiftLanding.tsx" />
                        <SortableContainer dndKitId="7a01b8b7-9498-4fe6-98c9-e1ad7864b793" containerType="regular" prevTag="div" className="flex-1 space-y-2" data-magicpath-id="146" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-3 bg-[#E2C382]/30 rounded-full w-3/4" data-magicpath-id="147" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-1/2" data-magicpath-id="148" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                        <Users className="w-5 h-5 text-[#E2C382]" data-magicpath-id="149" data-magicpath-path="AutoGiftLanding.tsx" />
                      </SortableContainer>)}
                  </div>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="2536e08b-bd1e-49ef-8b60-c68ac48e6ad8" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="150" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="e61c6704-2fb6-4e62-9824-27b056385e86" containerType="regular" prevTag="div" data-magicpath-id="151" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="5ea39a8d-cd92-4fee-a713-e8f94b99ced8" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="152" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="66d72ba4-7a83-47b8-9969-238ac47f272d" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="153" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="be4b8ff9-a591-4d7c-8747-dc8a471f91e7" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="154" data-magicpath-path="AutoGiftLanding.tsx">
                      <Target className="w-8 h-8 text-[#E2C382] flex-shrink-0 mt-1" data-magicpath-id="155" data-magicpath-path="AutoGiftLanding.tsx" />
                      <SortableContainer dndKitId="cda4574a-8303-471f-99a3-f4ec4ac0d632" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="156" data-magicpath-path="AutoGiftLanding.tsx">
                        <h4 className="font-semibold text-[#0C0C0D] mb-2" data-magicpath-id="157" data-magicpath-path="AutoGiftLanding.tsx">Deep Research</h4>
                        <SortableContainer dndKitId="d9f1a1b1-54fd-47bf-b910-477f19302944" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="158" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-full" data-magicpath-id="159" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-5/6" data-magicpath-id="160" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-4/6" data-magicpath-id="161" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="aa28434a-88f7-4124-8736-ec1ff24cd8ec" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="162" data-magicpath-path="AutoGiftLanding.tsx">
                      <Sparkles className="w-8 h-8 text-[#E2C382] flex-shrink-0 mt-1" />
                      <SortableContainer dndKitId="b8c305ac-378c-4d79-a84d-813900c869c6" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="163" data-magicpath-path="AutoGiftLanding.tsx">
                        <h4 className="font-semibold text-[#0C0C0D] mb-2" data-magicpath-id="164" data-magicpath-path="AutoGiftLanding.tsx">Personality Analysis</h4>
                        <SortableContainer dndKitId="5b81a6a3-ef22-4364-a2c6-d95a8a419f10" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="165" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="166" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-3/4" data-magicpath-id="167" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="61908245-86b4-4548-b929-00def183f415" containerType="regular" prevTag="div" data-magicpath-id="168" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="cb8f7923-6f16-40db-9f3e-457c95a966e0" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="169" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="170" data-magicpath-path="AutoGiftLanding.tsx">2</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="171" data-magicpath-path="AutoGiftLanding.tsx">STEP TWO</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="172" data-magicpath-path="AutoGiftLanding.tsx">
                  Personalized Research
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed" data-magicpath-id="173" data-magicpath-path="AutoGiftLanding.tsx">
                  We dig into each contact: their role, personality, social footprint, company, interests, critique style, and what would impress them specifically.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="f4eba593-7dc1-40e3-9357-8c4010b90df0" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="174" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="6ce7aa8e-0ce2-4729-82a8-a7c95d3e5b7d" containerType="regular" prevTag="div" className="order-2 lg:order-1" data-magicpath-id="175" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="f8b4f383-dadd-4aa5-a03d-7ea54cd7801d" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="176" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="177" data-magicpath-path="AutoGiftLanding.tsx">3</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="178" data-magicpath-path="AutoGiftLanding.tsx">STEP THREE</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="179" data-magicpath-path="AutoGiftLanding.tsx">
                  Gift Design & Production
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed mb-6" data-magicpath-id="180" data-magicpath-path="AutoGiftLanding.tsx">
                  We craft a custom gift for every individual:
                </p>
                <ul className="space-y-3" data-magicpath-id="181" data-magicpath-path="AutoGiftLanding.tsx">
                  {['Sourcing unique items', 'Custom branding & packaging', 'Handwritten or AI-personalized notes', 'Custom inserts', 'Premium kitting & fulfillment'].map((item, i) => <motion.li data-magicpath-motion-tag="motion.li" key={item} initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: i * 0.1
                }} className="flex items-center gap-3" data-magicpath-id="182" data-magicpath-path="AutoGiftLanding.tsx">
                      <CheckCircle2 className="w-5 h-5 text-[#073D2B] flex-shrink-0" data-magicpath-id="183" data-magicpath-path="AutoGiftLanding.tsx" />
                      <span className="text-[#0C0C0D]/80" data-magicpath-id="184" data-magicpath-path="AutoGiftLanding.tsx">{item}</span>
                    </motion.li>)}
                </ul>
              </SortableContainer>
              <SortableContainer dndKitId="43d52839-a368-478e-823d-b855e27fc121" containerType="regular" prevTag="div" className="order-1 lg:order-2" data-magicpath-id="185" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="673df2a9-8aa1-4b31-8846-564da393f2cf" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#073D2B] to-[#0a5a41] rounded-3xl shadow-2xl p-8 text-white" data-magicpath-id="186" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="3c600134-c0cf-4b7f-a072-904a63e22f10" containerType="regular" prevTag="motion.div" animate={{
                  rotateY: [0, 5, 0, -5, 0]
                }} transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} className="relative" data-magicpath-id="187" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="9ef35fb2-5119-498a-80ac-fd07028a2c0b" containerType="regular" prevTag="div" className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20" data-magicpath-id="188" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="800e6a10-8d45-4f4d-a9f0-98a08d627a90" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-6" data-magicpath-id="189" data-magicpath-path="AutoGiftLanding.tsx">
                        <SortableContainer dndKitId="3ff53f02-e9c4-4ffb-b690-27feb57b79e5" containerType="regular" prevTag="div" className="w-16 h-16 bg-[#E2C382] rounded-full flex items-center justify-center" data-magicpath-id="190" data-magicpath-path="AutoGiftLanding.tsx">
                          <Gift className="w-8 h-8 text-[#073D2B]" data-magicpath-id="191" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                        <SortableContainer dndKitId="ed303ab2-afa1-41a5-9d66-ad330fa3c0ff" containerType="regular" prevTag="div" data-magicpath-id="192" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-3 bg-white/30 rounded-full w-32 mb-2" data-magicpath-id="193" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/20 rounded-full w-24" data-magicpath-id="194" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                      <SortableContainer dndKitId="32b04bdc-b0f0-404b-91c3-0b857a2b6b0f" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-4" data-magicpath-id="195" data-magicpath-path="AutoGiftLanding.tsx">
                        <div className="bg-white/10 rounded-xl p-4 aspect-square" data-magicpath-id="196" data-magicpath-path="AutoGiftLanding.tsx" />
                        <div className="bg-white/10 rounded-xl p-4 aspect-square" data-magicpath-id="197" data-magicpath-path="AutoGiftLanding.tsx" />
                      </SortableContainer>
                      <SortableContainer dndKitId="34809518-66e6-41ae-914c-372f331e8540" containerType="regular" prevTag="div" className="mt-4 p-4 bg-[#E2C382]/20 rounded-xl" data-magicpath-id="198" data-magicpath-path="AutoGiftLanding.tsx">
                        <SortableContainer dndKitId="df3c7642-c686-47db-96af-90b50908e9c6" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="199" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-white/40 rounded-full w-full" data-magicpath-id="200" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/30 rounded-full w-4/5" data-magicpath-id="201" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/30 rounded-full w-3/5" data-magicpath-id="202" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="695c0839-2932-4423-90b7-59294e1db621" containerType="regular" prevTag="motion.div" animate={{
                    rotate: 360
                  }} transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }} className="absolute -top-4 -right-4 w-16 h-16 bg-[#E2C382] rounded-full flex items-center justify-center shadow-lg" data-magicpath-id="203" data-magicpath-path="AutoGiftLanding.tsx">
                      <Sparkles className="w-8 h-8 text-[#073D2B]" />
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="02564ae4-8602-4720-a4e6-de87662e938a" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="204" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="079a5942-cef5-4ef5-933a-d6047766b699" containerType="regular" prevTag="div" data-magicpath-id="205" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="55e89d6a-b81e-4cb8-bacc-bd74f0d25238" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="206" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="092a7edb-e25e-4161-8f02-1449a6988cc0" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="207" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="f81e8ed1-d40e-4ef2-9cd3-05db76b078d8" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="208" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="12f12ad8-b750-44e5-bb48-698f2579269e" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="209" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#073D2B]" data-magicpath-id="210" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="211" data-magicpath-path="AutoGiftLanding.tsx">Gift #1</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#073D2B] text-white text-xs font-medium rounded-full" data-magicpath-id="212" data-magicpath-path="AutoGiftLanding.tsx">
                        Delivered
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="b5c23f3a-beec-48fa-8815-c66272a1464e" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="213" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="100a879f-d0e4-4a03-a51d-6378e557b01b" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="214" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#073D2B]" data-magicpath-id="215" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="216" data-magicpath-path="AutoGiftLanding.tsx">Gift #2</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#073D2B] text-white text-xs font-medium rounded-full" data-magicpath-id="217" data-magicpath-path="AutoGiftLanding.tsx">
                        Delivered
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="81996d68-d619-431b-ad06-28cf74362ed3" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="218" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="8df195b9-8713-4228-8b82-aca4160820ff" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="219" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#E2C382]" data-magicpath-id="220" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="221" data-magicpath-path="AutoGiftLanding.tsx">Gift #3</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#E2C382]/20 text-[#073D2B] text-xs font-medium rounded-full" data-magicpath-id="222" data-magicpath-path="AutoGiftLanding.tsx">
                        In Transit
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="4d0c5fa4-1651-4b08-b840-106b2ea76cf4" containerType="regular" prevTag="div" className="mt-6 p-4 bg-gradient-to-r from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-xl border border-[#E2C382]/20" data-magicpath-id="223" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="42dee70c-316f-4f64-a547-b207810ca69b" containerType="regular" prevTag="div" className="flex items-center gap-2 mb-2" data-magicpath-id="224" data-magicpath-path="AutoGiftLanding.tsx">
                        <TrendingUp className="w-5 h-5 text-[#073D2B]" data-magicpath-id="225" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-semibold text-[#0C0C0D]" data-magicpath-id="226" data-magicpath-path="AutoGiftLanding.tsx">Response Rate</span>
                      </SortableContainer>
                      <p className="text-3xl font-bold text-[#073D2B]" data-magicpath-id="227" data-magicpath-path="AutoGiftLanding.tsx">87%</p>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="123459c6-6345-4219-bfdb-00c5c37f0f4b" containerType="regular" prevTag="div" data-magicpath-id="228" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="d315fe3c-369f-4360-917f-3256f4773c47" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="229" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="230" data-magicpath-path="AutoGiftLanding.tsx">4</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="231" data-magicpath-path="AutoGiftLanding.tsx">STEP FOUR</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="232" data-magicpath-path="AutoGiftLanding.tsx">
                  Deliver & Report
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed" data-magicpath-id="233" data-magicpath-path="AutoGiftLanding.tsx">
                  We ship each gift, track delivery, monitor responses, and follow up with a report on engagement + outcomes.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="5a8dc95f-3df0-48ec-9417-9aeb8224ef67" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="234" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="74a63831-9972-46ac-bcfd-c198df9ac705" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="235" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="5a1de99d-43d6-4421-aae1-7c39abcd0ded" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="236" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="237" data-magicpath-path="AutoGiftLanding.tsx">
              Simple, Transparent Pilot Pricing
            </h2>
            <p className="text-xl text-[#0C0C0D]/70 max-w-2xl mx-auto" data-magicpath-id="238" data-magicpath-path="AutoGiftLanding.tsx">
              You set the gift budget. We charge a 10% service margin on top — that's it.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="8822dc6b-5f58-4061-ad68-c7c1c56ac415" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-3xl p-12 border-2 border-[#E2C382]/30 mb-12" data-magicpath-id="239" data-magicpath-path="AutoGiftLanding.tsx">
            <h3 className="text-2xl font-bold text-[#0C0C0D] mb-8" data-magicpath-id="240" data-magicpath-path="AutoGiftLanding.tsx">We include:</h3>
            <div className="grid md:grid-cols-2 gap-6" data-magicpath-id="241" data-magicpath-path="AutoGiftLanding.tsx">
              {['Contact research', 'Gift concepting', 'Sourcing & procurement', 'Branding & packaging', 'Handwritten notes', 'Kitting & fulfillment', 'Project management'].map((item, i) => <SortableContainer dndKitId="59fe00aa-041d-4d57-ab33-cd1ea35aa546" containerType="regular" prevTag="motion.div" key={item} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: i * 0.1
            }} className="flex items-center gap-3" data-magicpath-id="242" data-magicpath-path="AutoGiftLanding.tsx">
                  <CheckCircle2 className="w-6 h-6 text-[#073D2B] flex-shrink-0" data-magicpath-id="243" data-magicpath-path="AutoGiftLanding.tsx" />
                  <span className="text-lg text-[#0C0C0D]" data-magicpath-id="244" data-magicpath-path="AutoGiftLanding.tsx">{item}</span>
                </SortableContainer>)}
            </div>
          </SortableContainer>

          <SortableContainer dndKitId="a654aa38-12c1-4917-a1c6-17b099f74b23" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="space-y-6 mb-12" data-magicpath-id="245" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="f1bb8871-30fd-4e5a-8287-28268a866290" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="246" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="956d832e-9fd0-4b18-9738-59b8e4f9958d" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="247" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="fc71405f-1950-4415-839b-eeb80947d24c" containerType="regular" prevTag="div" data-magicpath-id="248" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="249" data-magicpath-path="AutoGiftLanding.tsx">$100 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="250" data-magicpath-path="AutoGiftLanding.tsx">$120 total per recipient</p>
                </SortableContainer>
                <SortableContainer dndKitId="81923f55-2d73-4d30-ad46-bc7a77b3dd2d" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="251" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="252" data-magicpath-path="AutoGiftLanding.tsx">20% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="8796906a-0cbc-48c0-835b-48f31eb49868" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="253" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="c67ab69a-9df0-4427-9e8f-be0e0cd69ab9" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="254" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="084d9c16-86c4-4de2-92d2-29c0b1600947" containerType="regular" prevTag="div" data-magicpath-id="255" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="256" data-magicpath-path="AutoGiftLanding.tsx">$250 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="257" data-magicpath-path="AutoGiftLanding.tsx">$300 total per recipient</p>
                </SortableContainer>
                <SortableContainer dndKitId="13c55063-fc48-4ada-800e-aefac4f77db1" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="258" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="259" data-magicpath-path="AutoGiftLanding.tsx">20% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="dda05883-a1ee-4c26-bbb0-5ff02647d945" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="260" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="00e8b912-16f5-4ef5-a394-f6d80bdc7179" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="261" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="5b693a4d-6ff6-4d2f-8fc0-5d15ced8a604" containerType="regular" prevTag="div" data-magicpath-id="262" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="263" data-magicpath-path="AutoGiftLanding.tsx">$500 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="264" data-magicpath-path="AutoGiftLanding.tsx">$600 total per recipient</p>
                </SortableContainer>
                <SortableContainer dndKitId="3430d547-44ff-475e-9622-9682a3bd5b2f" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="265" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="266" data-magicpath-path="AutoGiftLanding.tsx">20% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="984d73fd-607c-451f-afe5-c9fb9ad9536a" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center" data-magicpath-id="267" data-magicpath-path="AutoGiftLanding.tsx">
            <a href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300" data-magicpath-id="268" data-magicpath-path="AutoGiftLanding.tsx">
              Start Your Pilot
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="b4a36fe8-a365-44bc-b12f-63302f237f76" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-b from-white to-[#F6F6F4]" data-magicpath-id="269" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="aee87dd5-3a90-43c5-b42d-f7a4cf67f52d" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="270" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="c994e92a-4e4f-40e4-97f0-5eeb7db3ea1b" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="271" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="272" data-magicpath-path="AutoGiftLanding.tsx">
              Perfect For Teams That Need…
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="187b76b7-de7b-42c6-8df2-719ca5808a90" containerType="collection" prevTag="motion.div" variants={staggerChildren} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="273" data-magicpath-path="AutoGiftLanding.tsx">
            {[{
            icon: Target,
            label: 'High-impact outbound',
            mpid: "86430de9-c60e-472c-b562-b1e09eec52b6"
          }, {
            icon: Users,
            label: 'ABM campaigns',
            mpid: "41fc3157-ef00-4e3b-87ff-ec7744e352a7"
          }, {
            icon: TrendingUp,
            label: 'Executive outreach',
            mpid: "d622e48b-d72d-4c33-8790-eab15a92d201"
          }, {
            icon: Send,
            label: 'Pipeline reactivation',
            mpid: "794de7ee-6b41-4e13-94a1-4c47b3371fc4"
          }, {
            icon: Heart,
            label: 'Founder-to-founder gifting',
            mpid: "8b68c562-2389-4418-8ce9-dafa1db5e96c"
          }, {
            icon: Sparkles,
            label: 'CSM-led surprises & delight',
            mpid: "1375ab4f-dbab-46a4-abdc-c5ba6fe2044b"
          }, {
            icon: Mail,
            label: 'Sales-to-C-suite intros',
            mpid: "0621a3d6-667a-4a5a-a243-566b78e6ee36"
          }, {
            icon: Gift,
            label: 'Corporate gifting',
            mpid: "63783c9c-1c08-46f7-95fe-a13d52bd2699"
          }].map((item, i) => <motion.div data-magicpath-motion-tag="motion.div" key={item.label} variants={fadeInUp} whileHover={{
            scale: 1.05,
            y: -5
          }} className="bg-white rounded-2xl p-8 border border-[#E2C382]/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="274" data-magicpath-path="AutoGiftLanding.tsx">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-2xl flex items-center justify-center mx-auto mb-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="275" data-magicpath-path="AutoGiftLanding.tsx">
                  <item.icon className="w-8 h-8 text-[#073D2B]" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="276" data-magicpath-path="AutoGiftLanding.tsx" />
                </div>
                <p className="font-semibold text-[#0C0C0D]" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="277" data-magicpath-path="AutoGiftLanding.tsx">{item.label}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="ba9f9dae-ef9d-4ea3-9863-56c58aa30f6d" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="278" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="bc205d74-5513-4a13-a3b9-d72f10643fde" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="279" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="fbf246b0-8662-461e-a0d4-6ee67953b6ad" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="280" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="281" data-magicpath-path="AutoGiftLanding.tsx">
              Because Attention Is Earned, Not Automated
            </h2>
          </SortableContainer>

          <motion.div data-magicpath-motion-tag="motion.div" variants={staggerChildren} className="grid md:grid-cols-2 gap-8" data-magicpath-id="282" data-magicpath-path="AutoGiftLanding.tsx">
            {['Every gift is designed specifically for the recipient', 'We handle all research and context', 'We source items that are unique, premium, and personal', 'Handwritten notes increase response rates dramatically', 'Dimensional mail gets opened almost 100% of the time', 'You save 10–20 hours/week of SDR bandwidth', 'You run a luxury, thoughtful campaign without lifting a finger'].map((benefit, i) => <SortableContainer dndKitId="16328679-9de9-47e8-995f-f7376e871624" containerType="regular" prevTag="motion.div" key={benefit} variants={fadeInUp} whileHover={{
            x: 10
          }} className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#E2C382]/5 to-[#F0D8B6]/5 rounded-2xl border border-[#E2C382]/20 hover:border-[#E2C382]/40 transition-all duration-300" data-magicpath-id="283" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-7 h-7 text-[#073D2B] flex-shrink-0 mt-1" data-magicpath-id="284" data-magicpath-path="AutoGiftLanding.tsx" />
                <p className="text-lg text-[#0C0C0D]" data-magicpath-id="285" data-magicpath-path="AutoGiftLanding.tsx">{benefit}</p>
              </SortableContainer>)}
          </motion.div>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="6daf9157-0134-4f0f-bac2-fcd090836471" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-br from-[#073D2B] to-[#0a5a41] text-white relative overflow-hidden" data-magicpath-id="286" data-magicpath-path="AutoGiftLanding.tsx">
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute top-0 right-0 w-96 h-96 bg-[#E2C382]/10 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity
      }} data-magicpath-id="287" data-magicpath-path="AutoGiftLanding.tsx" />
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        delay: 1
      }} data-magicpath-id="288" data-magicpath-path="AutoGiftLanding.tsx" />

        <SortableContainer dndKitId="b6e86db5-904e-46ce-92a0-7b9152c06656" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center relative z-10" data-magicpath-id="289" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="9ab2cb99-0916-40e9-9ced-4a94cd3ca5dd" containerType="regular" prevTag="motion.div" variants={fadeInUp} data-magicpath-id="290" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="46140c8d-acd3-4f29-9461-a2df54fe3178" containerType="regular" prevTag="div" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8" data-magicpath-id="291" data-magicpath-path="AutoGiftLanding.tsx">
              <Sparkles className="w-4 h-4 text-[#E2C382]" />
              <span className="text-sm font-medium" data-magicpath-id="292" data-magicpath-path="AutoGiftLanding.tsx">Ready to Get Started?</span>
            </SortableContainer>
          </SortableContainer>

          <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-5xl lg:text-6xl font-bold mb-6" data-magicpath-id="293" data-magicpath-path="AutoGiftLanding.tsx">
            Ready to Reach Anyone With the Perfect Gift?
          </motion.h2>
          
          <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-2xl text-white/80 mb-12" data-magicpath-id="294" data-magicpath-path="AutoGiftLanding.tsx">
            Tell us who — and your budget. We'll take care of everything else.
          </motion.p>

          <SortableContainer dndKitId="98d5af2c-f220-4b57-bf40-20714522daff" containerType="regular" prevTag="motion.div" variants={fadeInUp} data-magicpath-id="295" data-magicpath-path="AutoGiftLanding.tsx">
            <a href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105" data-magicpath-id="296" data-magicpath-path="AutoGiftLanding.tsx">
              <span className="flex items-center justify-center gap-3" data-magicpath-id="297" data-magicpath-path="AutoGiftLanding.tsx">
                Start Your Pilot
                <Gift className="w-6 h-6" data-magicpath-id="298" data-magicpath-path="AutoGiftLanding.tsx" />
              </span>
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="4243a4ca-a4f9-42dc-8fd6-9d110a8a0129" containerType="regular" prevTag="footer" className="bg-[#0C0C0D] text-white py-16 px-4" data-magicpath-id="299" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="61554956-3d7d-47af-9f97-1e1320360b57" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="300" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="1e7fb6c8-ebf8-4a45-bd03-e5c0a557908d" containerType="regular" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="301" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="a66cdec8-d04f-4b5d-a3b1-842ee5533586" containerType="regular" prevTag="div" className="md:col-span-2" data-magicpath-id="302" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="c1d6a622-f0d3-480f-b218-6056ce6ff206" containerType="regular" prevTag="div" className="flex items-center gap-2 mb-4" data-magicpath-id="303" data-magicpath-path="AutoGiftLanding.tsx">
                <Gift className="w-8 h-8 text-[#E2C382]" data-magicpath-id="304" data-magicpath-path="AutoGiftLanding.tsx" />
                <span className="text-2xl font-bold" data-magicpath-id="305" data-magicpath-path="AutoGiftLanding.tsx">AutoGift</span>
              </SortableContainer>
              <p className="text-white/60 mb-6 leading-relaxed" data-magicpath-id="306" data-magicpath-path="AutoGiftLanding.tsx">
                Your outsourced ABM gifting team. Handcrafted, hyper-personalized gifts done for you.
              </p>
              <SortableContainer dndKitId="489277d9-9d07-46d6-bc99-8b954d46b8e6" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="307" data-magicpath-path="AutoGiftLanding.tsx">
                <a href="mailto:jschlisserman@gmail.com" className="text-[#E2C382] hover:text-[#F0D8B6] transition-colors" data-magicpath-id="308" data-magicpath-path="AutoGiftLanding.tsx">
                  <Mail className="w-5 h-5" data-magicpath-id="309" data-magicpath-path="AutoGiftLanding.tsx" />
                </a>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="d81fb121-a02d-4a49-b2dd-2536f7c4c5b2" containerType="regular" prevTag="div" data-magicpath-id="310" data-magicpath-path="AutoGiftLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="311" data-magicpath-path="AutoGiftLanding.tsx">Quick Links</h4>
              <SortableContainer dndKitId="88a0020d-3853-4dc7-b8f6-1d7f14c5f62d" containerType="regular" prevTag="ul" className="space-y-3" data-magicpath-id="312" data-magicpath-path="AutoGiftLanding.tsx">
                <li data-magicpath-id="313" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="314" data-magicpath-path="AutoGiftLanding.tsx">About</a></li>
                <li data-magicpath-id="315" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="316" data-magicpath-path="AutoGiftLanding.tsx">Pricing</a></li>
                <li data-magicpath-id="317" data-magicpath-path="AutoGiftLanding.tsx"><a href="mailto:jschlisserman@gmail.com" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="318" data-magicpath-path="AutoGiftLanding.tsx">Contact</a></li>
                <li data-magicpath-id="319" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="320" data-magicpath-path="AutoGiftLanding.tsx">Careers</a></li>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="54615217-811e-46ec-b1a5-d447a081d409" containerType="regular" prevTag="div" data-magicpath-id="321" data-magicpath-path="AutoGiftLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="322" data-magicpath-path="AutoGiftLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="383d33c6-5522-4030-aae4-837025d0e4d3" containerType="regular" prevTag="ul" className="space-y-3" data-magicpath-id="323" data-magicpath-path="AutoGiftLanding.tsx">
                <li data-magicpath-id="324" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="325" data-magicpath-path="AutoGiftLanding.tsx">Terms</a></li>
                <li data-magicpath-id="326" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="327" data-magicpath-path="AutoGiftLanding.tsx">Privacy</a></li>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="3683c807-acc8-45ba-8c6b-4a2779f9b139" containerType="regular" prevTag="div" className="border-t border-white/10 pt-8" data-magicpath-id="328" data-magicpath-path="AutoGiftLanding.tsx">
            <p className="text-center text-white/40 text-sm" data-magicpath-id="329" data-magicpath-path="AutoGiftLanding.tsx">
              © {new Date().getFullYear()} AutoGift. All rights reserved.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};