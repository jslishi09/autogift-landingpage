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
  return <SortableContainer dndKitId="6cead76a-3f33-44f6-b45c-deed1e37ddd4" containerType="regular" prevTag="div" className="min-h-screen bg-[#F6F6F4] text-[#0C0C0D] overflow-x-hidden" data-magicpath-id="0" data-magicpath-path="AutoGiftLanding.tsx">
      <SortableContainer dndKitId="7cc135ae-26f1-4613-b1db-696dd30af09a" containerType="regular" prevTag="motion.section" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden" style={{
      y: heroY,
      opacity: heroOpacity
    }} data-magicpath-id="1" data-magicpath-path="AutoGiftLanding.tsx">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0D8B6]/20 to-transparent pointer-events-none" data-magicpath-id="2" data-magicpath-path="AutoGiftLanding.tsx" />
        
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute top-20 right-20 w-64 h-64 bg-[#E2C382]/10 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} data-magicpath-id="3" data-magicpath-path="AutoGiftLanding.tsx" />
        
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-40 left-20 w-96 h-96 bg-[#073D2B]/5 rounded-full blur-3xl" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} data-magicpath-id="4" data-magicpath-path="AutoGiftLanding.tsx" />

        <SortableContainer dndKitId="3bab2c5b-cee7-44bd-8c2e-d1a080da8e24" containerType="regular" prevTag="div" className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10" data-magicpath-id="5" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="1cf6c3e8-be5c-470a-bd01-f134dfb10926" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={staggerChildren} data-magicpath-id="6" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="10573606-4892-4520-8ab1-765fa5fe8088" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="7" data-magicpath-path="AutoGiftLanding.tsx">
              <Sparkles className="w-4 h-4 text-[#E2C382]" />
              <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="8" data-magicpath-path="AutoGiftLanding.tsx">White-Glove Gifting Service</span>
            </SortableContainer>

            <motion.h1 data-magicpath-motion-tag="motion.h1" variants={fadeInUp} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }} data-magicpath-id="9" data-magicpath-path="AutoGiftLanding.tsx">
              Handcrafted,{' '}
              <span className="relative inline-block" data-magicpath-id="10" data-magicpath-path="AutoGiftLanding.tsx">
                <span className="relative z-10 bg-gradient-to-r from-[#E2C382] to-[#073D2B] bg-clip-text text-transparent" data-magicpath-id="11" data-magicpath-path="AutoGiftLanding.tsx">
                  Hyper-Personalized
                </span>
                <motion.span data-magicpath-motion-tag="motion.span" className="absolute bottom-2 left-0 right-0 h-3 bg-[#E2C382]/20" initial={{
                scaleX: 0
              }} animate={{
                scaleX: 1
              }} transition={{
                delay: 0.8,
                duration: 0.6
              }} data-magicpath-id="12" data-magicpath-path="AutoGiftLanding.tsx" />
              </span>{' '}
              Gifts Done For You.
            </motion.h1>

            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-xl text-[#0C0C0D]/70 mb-8 leading-relaxed" data-magicpath-id="13" data-magicpath-path="AutoGiftLanding.tsx">
              Tell us who you want to reach. Give us a budget. We research each person, design the perfect gift, source it, brand it, write the copy, and ship it end to end.
            </motion.p>

            <SortableContainer dndKitId="dd02894e-ce29-44a3-8911-df2c47c826ef" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="flex flex-col sm:flex-row gap-4" data-magicpath-id="14" data-magicpath-path="AutoGiftLanding.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-id="15" data-magicpath-path="AutoGiftLanding.tsx">
                <span className="flex items-center justify-center gap-2" data-magicpath-id="16" data-magicpath-path="AutoGiftLanding.tsx">
                  Start Your Pilot
                  <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" data-magicpath-id="17" data-magicpath-path="AutoGiftLanding.tsx" />
                </span>
              </motion.a>

              <motion.button data-magicpath-motion-tag="motion.button" onClick={() => setShowExampleForm(true)} className="px-8 py-4 bg-white/60 backdrop-blur-sm text-[#0C0C0D] rounded-full font-semibold text-lg border-2 border-[#E2C382]/30 hover:border-[#E2C382] transition-all duration-300 text-center" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-id="18" data-magicpath-path="AutoGiftLanding.tsx">
                See An Example
              </motion.button>
            </SortableContainer>

            <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="mt-6 text-sm text-[#0C0C0D]/60 italic" data-magicpath-id="19" data-magicpath-path="AutoGiftLanding.tsx">
              Your outsourced ABM gifting team
            </motion.p>
          </SortableContainer>

          <SortableContainer dndKitId="4eda9462-df21-48a6-b847-e26942d5a61b" containerType="regular" prevTag="motion.div" initial={{
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
        }} className="relative" data-magicpath-id="20" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="11d38a33-94f7-4e0d-baf9-c46d97e88822" containerType="regular" prevTag="div" className="relative bg-white rounded-3xl shadow-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="21" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="e145ef65-2eb3-4cda-9b73-a9dd0d30bcf1" containerType="regular" prevTag="motion.div" animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="space-y-6" data-magicpath-id="22" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="bff60f32-690d-4cda-9776-9d72b8ec3fd9" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#F0D8B6]/30 to-[#E2C382]/20 rounded-2xl p-6 backdrop-blur-sm" data-magicpath-id="23" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="6e5f9881-8e61-4c6a-a392-c1a0b148775b" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-4" data-magicpath-id="24" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="884a4bfa-b5dd-4dfb-8879-46feebc35e12" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-full flex items-center justify-center" data-magicpath-id="25" data-magicpath-path="AutoGiftLanding.tsx">
                      <Gift className="w-6 h-6 text-[#E2C382]" data-magicpath-id="26" data-magicpath-path="AutoGiftLanding.tsx" />
                    </SortableContainer>
                    <SortableContainer dndKitId="83a497aa-c601-4347-88c3-8810289c2214" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="27" data-magicpath-path="AutoGiftLanding.tsx">
                      <div className="h-3 bg-[#E2C382]/30 rounded-full w-3/4 mb-2" data-magicpath-id="28" data-magicpath-path="AutoGiftLanding.tsx" />
                      <div className="h-2 bg-[#E2C382]/20 rounded-full w-1/2" data-magicpath-id="29" data-magicpath-path="AutoGiftLanding.tsx" />
                    </SortableContainer>
                  </SortableContainer>
                  <SortableContainer dndKitId="3564810c-a126-4d0b-ada8-2d3204636d7a" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="30" data-magicpath-path="AutoGiftLanding.tsx">
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="31" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-5/6" data-magicpath-id="32" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="895fd631-e81f-488d-b475-f0c32c4e4879" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-4" data-magicpath-id="33" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="1f7bcf63-e3bb-43b5-84ee-dfa5a61b7d6f" containerType="regular" prevTag="div" className="bg-[#073D2B]/5 rounded-xl p-4 backdrop-blur-sm" data-magicpath-id="34" data-magicpath-path="AutoGiftLanding.tsx">
                    <Package className="w-8 h-8 text-[#073D2B] mb-2" data-magicpath-id="35" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/20 rounded-full w-full" data-magicpath-id="36" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="1b4a03b3-1bad-41e1-b0e6-92c3733a58ff" containerType="regular" prevTag="div" className="bg-[#073D2B]/5 rounded-xl p-4 backdrop-blur-sm" data-magicpath-id="37" data-magicpath-path="AutoGiftLanding.tsx">
                    <Sparkles className="w-8 h-8 text-[#E2C382] mb-2" />
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="38" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="1c0c2352-1062-44fe-873e-6d6d7c8bf193" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/20 to-[#F0D8B6]/30 rounded-2xl p-6 backdrop-blur-sm border-2 border-[#E2C382]/30" data-magicpath-id="39" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="67516808-c796-427e-9316-b9b2a7e85315" containerType="regular" prevTag="div" className="flex items-center justify-between mb-4" data-magicpath-id="40" data-magicpath-path="AutoGiftLanding.tsx">
                    <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="41" data-magicpath-path="AutoGiftLanding.tsx">Handwritten Note</span>
                    <CheckCircle2 className="w-5 h-5 text-[#073D2B]" data-magicpath-id="42" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="cf25228b-f310-4912-9304-97930fdc13d5" containerType="regular" prevTag="div" className="space-y-2 opacity-60" data-magicpath-id="43" data-magicpath-path="AutoGiftLanding.tsx">
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-full" data-magicpath-id="44" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-4/5" data-magicpath-id="45" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-3/4" data-magicpath-id="46" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="370184eb-e363-42f6-b9c4-3b5e514ce380" containerType="regular" prevTag="motion.div" className="absolute -top-6 -right-6 w-24 h-24 bg-[#E2C382] rounded-full flex items-center justify-center shadow-xl" animate={{
              rotate: 360
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} data-magicpath-id="47" data-magicpath-path="AutoGiftLanding.tsx">
                <Sparkles className="w-12 h-12 text-white" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {showExampleForm && <SortableContainer dndKitId="faed5d6f-e196-4419-a270-1ea6fe7f236e" containerType="regular" prevTag="motion.div" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowExampleForm(false)} data-magicpath-id="48" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="4489fc5b-22e7-4bad-abd8-90970e12916b" containerType="regular" prevTag="motion.div" initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()} data-magicpath-id="49" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="507d8536-482d-4361-a50f-2e7046df3d13" containerType="regular" prevTag="div" className="sticky top-0 bg-gradient-to-br from-[#E2C382] to-[#D4B574] p-8 rounded-t-3xl" data-magicpath-id="50" data-magicpath-path="AutoGiftLanding.tsx">
              <h3 className="text-3xl font-bold text-[#0C0C0D] mb-2" data-magicpath-id="51" data-magicpath-path="AutoGiftLanding.tsx">Request An Example</h3>
              <p className="text-[#0C0C0D]/70" data-magicpath-id="52" data-magicpath-path="AutoGiftLanding.tsx">Tell us about yourself and we'll show you what we can do</p>
            </SortableContainer>

            <SortableContainer dndKitId="2ae3eeb0-b72a-4c3d-a99d-ce4370dd6c0b" containerType="regular" prevTag="form" onSubmit={handleFormSubmit} className="p-8 space-y-6" data-magicpath-id="53" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="ff571ac7-24df-4434-9639-76d6ec0599fc" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-6" data-magicpath-id="54" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="2bfc6ff6-a272-44e3-9a6b-d28d343b9f67" containerType="regular" prevTag="div" data-magicpath-id="55" data-magicpath-path="AutoGiftLanding.tsx">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="56" data-magicpath-path="AutoGiftLanding.tsx">
                    <User className="w-4 h-4 text-[#E2C382]" data-magicpath-id="57" data-magicpath-path="AutoGiftLanding.tsx" />
                    First Name *
                  </label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="John" data-magicpath-id="58" data-magicpath-path="AutoGiftLanding.tsx" />
                </SortableContainer>

                <SortableContainer dndKitId="43171eec-1082-4520-8f3f-d98206e2ac2f" containerType="regular" prevTag="div" data-magicpath-id="59" data-magicpath-path="AutoGiftLanding.tsx">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="60" data-magicpath-path="AutoGiftLanding.tsx">
                    <User className="w-4 h-4 text-[#E2C382]" data-magicpath-id="61" data-magicpath-path="AutoGiftLanding.tsx" />
                    Last Name *
                  </label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="Doe" data-magicpath-id="62" data-magicpath-path="AutoGiftLanding.tsx" />
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="ba54628b-34ee-4b1d-a9d9-41eafa6931a5" containerType="regular" prevTag="div" data-magicpath-id="63" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="64" data-magicpath-path="AutoGiftLanding.tsx">
                  <Building2 className="w-4 h-4 text-[#E2C382]" data-magicpath-id="65" data-magicpath-path="AutoGiftLanding.tsx" />
                  Company Name *
                </label>
                <input type="text" name="companyName" required value={formData.companyName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="Acme Corp" data-magicpath-id="66" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="1b4e3fc2-6152-48d7-b258-d149cd3a224a" containerType="regular" prevTag="div" data-magicpath-id="67" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="68" data-magicpath-path="AutoGiftLanding.tsx">
                  <Briefcase className="w-4 h-4 text-[#E2C382]" data-magicpath-id="69" data-magicpath-path="AutoGiftLanding.tsx" />
                  Title *
                </label>
                <input type="text" name="title" required value={formData.title} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="VP of Sales" data-magicpath-id="70" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="1ae4c077-853d-451f-8f78-d8ce2f46ef26" containerType="regular" prevTag="div" data-magicpath-id="71" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="72" data-magicpath-path="AutoGiftLanding.tsx">
                  <Mail className="w-4 h-4 text-[#E2C382]" data-magicpath-id="73" data-magicpath-path="AutoGiftLanding.tsx" />
                  Email Address *
                </label>
                <input type="email" name="email" required value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="john@acme.com" data-magicpath-id="74" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="9e2be273-f24f-45a5-aea1-85a107af6a82" containerType="regular" prevTag="div" data-magicpath-id="75" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="76" data-magicpath-path="AutoGiftLanding.tsx">
                  <MapPin className="w-4 h-4 text-[#E2C382]" data-magicpath-id="77" data-magicpath-path="AutoGiftLanding.tsx" />
                  Physical Address *
                </label>
                <input type="text" name="address" required value={formData.address} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="123 Main St, City, State, ZIP" data-magicpath-id="78" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="e3b6d175-d8b6-47f2-b877-7b7f7f9fb049" containerType="regular" prevTag="div" data-magicpath-id="79" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="80" data-magicpath-path="AutoGiftLanding.tsx">
                  <Phone className="w-4 h-4 text-[#E2C382]" data-magicpath-id="81" data-magicpath-path="AutoGiftLanding.tsx" />
                  Phone Number *
                </label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="(555) 123-4567" data-magicpath-id="82" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="a1fb7fac-69b0-42c6-aa28-83408ed0ded9" containerType="regular" prevTag="div" className="flex gap-4 pt-4" data-magicpath-id="83" data-magicpath-path="AutoGiftLanding.tsx">
                <button type="button" onClick={() => setShowExampleForm(false)} className="flex-1 px-6 py-3 bg-[#F6F6F4] text-[#0C0C0D] rounded-xl font-medium hover:bg-[#E2C382]/10 transition-all" data-magicpath-id="84" data-magicpath-path="AutoGiftLanding.tsx">
                  Cancel
                </button>
                <SortableContainer dndKitId="62235f3f-5c5a-43ed-b35e-a1ade15d7d92" containerType="regular" prevTag="button" type="submit" disabled={isSubmitting || submitSuccess} className="flex-1 px-6 py-3 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50" data-magicpath-id="85" data-magicpath-path="AutoGiftLanding.tsx">
                  {submitSuccess ? <span className="flex items-center justify-center gap-2" data-magicpath-id="86" data-magicpath-path="AutoGiftLanding.tsx">
                      <CheckCircle2 className="w-5 h-5" data-magicpath-id="87" data-magicpath-path="AutoGiftLanding.tsx" />
                      Sent!
                    </span> : isSubmitting ? 'Sending...' : 'Submit Request'}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>}

      <SortableContainer dndKitId="f5f9857e-33e7-4ddc-83f6-cbba2009509c" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-20 px-4" data-magicpath-id="88" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="0683e7e0-b542-49fb-a075-6b211e5231b0" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="89" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="42f9eddc-717e-4712-bca9-5838ff2d9241" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="90" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-sm font-semibold text-[#E2C382] tracking-wider uppercase mb-4" data-magicpath-id="91" data-magicpath-path="AutoGiftLanding.tsx">Trusted By</h2>
            <SortableContainer dndKitId="adf7a1dc-203b-48db-b406-04808ecbc92d" containerType="regular" prevTag="div" className="flex flex-wrap justify-center items-center gap-8 opacity-60" data-magicpath-id="92" data-magicpath-path="AutoGiftLanding.tsx">
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="93" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="94" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="95" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="96" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="9b3fc026-adaf-4c84-94f5-20ddea54d9e8" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="97" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="f124c515-04ba-4843-8b50-d63d3028506f" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="98" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="6c0b55de-8aaf-4f97-8ef6-93009bcd02f1" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="99" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-6" data-magicpath-id="100" data-magicpath-path="AutoGiftLanding.tsx">
              Your Personal Gifting & Outbound Team — On Demand
            </h2>
            <p className="text-xl text-[#0C0C0D]/70 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="101" data-magicpath-path="AutoGiftLanding.tsx">
              The AutoGift Pilot Program is a fully-managed gifting service for teams who need to reach high-value contacts with thoughtful, personalized, premium gifts that stand out.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="65765ded-9589-470e-9f5c-bcf3c6c8fdc5" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mb-12" data-magicpath-id="102" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="ce6dda6c-db9e-4c59-9fd1-a7d8619382d8" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="103" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="72d86c7f-3b91-40e2-8be5-dcbc684810cc" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="104" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="105" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="106" data-magicpath-path="AutoGiftLanding.tsx">The contacts you want to reach</h3>
            </SortableContainer>

            <SortableContainer dndKitId="29d3a433-b8ea-48c1-b11b-c19d4193a792" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="107" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="1e7b7be7-be1a-44be-9cfe-3a164d75e38b" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="108" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="109" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="110" data-magicpath-path="AutoGiftLanding.tsx">Your budget per person</h3>
            </SortableContainer>

            <SortableContainer dndKitId="23181d62-9c88-4d02-8abe-92b72aa8a0a3" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="111" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="a6fbfc4f-9763-44a4-943a-80ff66b2402a" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="112" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="113" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="114" data-magicpath-path="AutoGiftLanding.tsx">The outcome you want</h3>
            </SortableContainer>
          </SortableContainer>

          <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-center text-2xl font-semibold text-[#073D2B]" data-magicpath-id="115" data-magicpath-path="AutoGiftLanding.tsx">
            We handle everything else.
          </motion.p>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="231ba897-ba20-4a9a-8851-d4d5511e3fbb" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-b from-white to-[#F6F6F4]" data-magicpath-id="116" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="04884b6a-3481-4244-b4fb-02831a1b9469" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="117" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="2aaf590b-8b90-4992-9b66-c1d32133d1d8" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-20" data-magicpath-id="118" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="119" data-magicpath-path="AutoGiftLanding.tsx">
              How It Works
            </h2>
            <p className="text-xl text-[#0C0C0D]/70" data-magicpath-id="120" data-magicpath-path="AutoGiftLanding.tsx">Four simple steps to perfect gifts</p>
          </SortableContainer>

          <SortableContainer dndKitId="6a9b83e6-55d8-4b1f-ab50-c64b1cae97e3" containerType="regular" prevTag="div" className="space-y-24" data-magicpath-id="121" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="6a9c3e0b-f30d-4b28-aed7-d85fec1f064a" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="122" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="e00385cc-1be2-4c61-b494-db008f0110af" containerType="regular" prevTag="div" className="order-2 lg:order-1" data-magicpath-id="123" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="286beead-be72-4492-89a8-83f5218a9c12" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="124" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="125" data-magicpath-path="AutoGiftLanding.tsx">1</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="126" data-magicpath-path="AutoGiftLanding.tsx">STEP ONE</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="127" data-magicpath-path="AutoGiftLanding.tsx">
                  Submit Your List (or We Build It for You)
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed" data-magicpath-id="128" data-magicpath-path="AutoGiftLanding.tsx">
                  Give us names OR let our research team find the right prospects. We'll deliver targeted profiles with context, interests, and angles.
                </p>
              </SortableContainer>
              <SortableContainer dndKitId="a1f40206-7d63-48a0-af7f-0bfab161f7b8" containerType="regular" prevTag="div" className="order-1 lg:order-2" data-magicpath-id="129" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="0aaf0b8e-777f-4947-911c-14db9b3175b7" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="130" data-magicpath-path="AutoGiftLanding.tsx">
                  <div className="space-y-4" data-magicpath-id="131" data-magicpath-path="AutoGiftLanding.tsx">
                    {['Contact 1', 'Contact 2', 'Contact 3'].map((contact, i) => <SortableContainer dndKitId="ba6d93b2-13af-4d20-bb16-aee78c5ec917" containerType="regular" prevTag="motion.div" key={contact} initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: i * 0.1
                  }} className="flex items-center gap-4 p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="132" data-magicpath-path="AutoGiftLanding.tsx">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#E2C382] to-[#D4B574] rounded-full" data-magicpath-id="133" data-magicpath-path="AutoGiftLanding.tsx" />
                        <SortableContainer dndKitId="adcee390-9017-44aa-b374-f6931f5e41f9" containerType="regular" prevTag="div" className="flex-1 space-y-2" data-magicpath-id="134" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-3 bg-[#E2C382]/30 rounded-full w-3/4" data-magicpath-id="135" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-1/2" data-magicpath-id="136" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                        <Users className="w-5 h-5 text-[#E2C382]" data-magicpath-id="137" data-magicpath-path="AutoGiftLanding.tsx" />
                      </SortableContainer>)}
                  </div>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="e6f6f28d-066b-4e3b-ab8c-407daa669440" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="138" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="c806e4f2-0292-41a8-9f2e-7e6a118dc610" containerType="regular" prevTag="div" data-magicpath-id="139" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="c9317524-203b-4146-81f3-1a0378d35b5b" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="140" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="79c82b11-0a97-440c-a8db-5a7d554722c5" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="141" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="14fe11f7-c739-4f5b-a658-b69bf117d39b" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="142" data-magicpath-path="AutoGiftLanding.tsx">
                      <Target className="w-8 h-8 text-[#E2C382] flex-shrink-0 mt-1" data-magicpath-id="143" data-magicpath-path="AutoGiftLanding.tsx" />
                      <SortableContainer dndKitId="1058352a-69de-4a9f-9c7c-beb23ba8de73" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="144" data-magicpath-path="AutoGiftLanding.tsx">
                        <h4 className="font-semibold text-[#0C0C0D] mb-2" data-magicpath-id="145" data-magicpath-path="AutoGiftLanding.tsx">Deep Research</h4>
                        <SortableContainer dndKitId="4eea49b3-abfd-428c-938b-e4c49ad612f1" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="146" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-full" data-magicpath-id="147" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-5/6" data-magicpath-id="148" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-4/6" data-magicpath-id="149" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="ab2713fa-f5a1-4273-9914-32dcdba2a900" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="150" data-magicpath-path="AutoGiftLanding.tsx">
                      <Sparkles className="w-8 h-8 text-[#E2C382] flex-shrink-0 mt-1" />
                      <SortableContainer dndKitId="9383b5a5-5e64-477a-bf14-e1fe26444d6d" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="151" data-magicpath-path="AutoGiftLanding.tsx">
                        <h4 className="font-semibold text-[#0C0C0D] mb-2" data-magicpath-id="152" data-magicpath-path="AutoGiftLanding.tsx">Personality Analysis</h4>
                        <SortableContainer dndKitId="4773d69f-4fba-4e59-854c-e1f0eb24eb53" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="153" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="154" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-3/4" data-magicpath-id="155" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="db7d4ed1-f6d7-493c-922c-4256de2c2be9" containerType="regular" prevTag="div" data-magicpath-id="156" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="ba362f54-7df3-4f7b-8e45-49fd6d7cc786" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="157" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="158" data-magicpath-path="AutoGiftLanding.tsx">2</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="159" data-magicpath-path="AutoGiftLanding.tsx">STEP TWO</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="160" data-magicpath-path="AutoGiftLanding.tsx">
                  Personalized Research
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed" data-magicpath-id="161" data-magicpath-path="AutoGiftLanding.tsx">
                  We dig into each contact: their role, personality, social footprint, company, interests, critique style, and what would impress them specifically.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="ae728acd-5ea2-4789-9992-0a6f4ad0d57f" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="162" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="08cc6e80-11d0-4d67-80c9-eeb2e5c9a77a" containerType="regular" prevTag="div" className="order-2 lg:order-1" data-magicpath-id="163" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="28ea5bee-40d7-4ed8-89cc-7c82a9f0df76" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="164" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="165" data-magicpath-path="AutoGiftLanding.tsx">3</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="166" data-magicpath-path="AutoGiftLanding.tsx">STEP THREE</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="167" data-magicpath-path="AutoGiftLanding.tsx">
                  Gift Design & Production
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed mb-6" data-magicpath-id="168" data-magicpath-path="AutoGiftLanding.tsx">
                  We craft a custom gift for every individual:
                </p>
                <ul className="space-y-3" data-magicpath-id="169" data-magicpath-path="AutoGiftLanding.tsx">
                  {['Sourcing unique items', 'Custom branding & packaging', 'Handwritten or AI-personalized notes', 'Custom inserts', 'Premium kitting & fulfillment'].map((item, i) => <motion.li data-magicpath-motion-tag="motion.li" key={item} initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: i * 0.1
                }} className="flex items-center gap-3" data-magicpath-id="170" data-magicpath-path="AutoGiftLanding.tsx">
                      <CheckCircle2 className="w-5 h-5 text-[#073D2B] flex-shrink-0" data-magicpath-id="171" data-magicpath-path="AutoGiftLanding.tsx" />
                      <span className="text-[#0C0C0D]/80" data-magicpath-id="172" data-magicpath-path="AutoGiftLanding.tsx">{item}</span>
                    </motion.li>)}
                </ul>
              </SortableContainer>
              <SortableContainer dndKitId="50dd2d53-3b90-47af-a68d-780f912a5d03" containerType="regular" prevTag="div" className="order-1 lg:order-2" data-magicpath-id="173" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="7cd8bf22-09ad-419a-a74b-4fa315c97463" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#073D2B] to-[#0a5a41] rounded-3xl shadow-2xl p-8 text-white" data-magicpath-id="174" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="9e959be6-c043-4e70-806d-3df058d9c600" containerType="regular" prevTag="motion.div" animate={{
                  rotateY: [0, 5, 0, -5, 0]
                }} transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} className="relative" data-magicpath-id="175" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="6ad5a414-4664-4d9c-82b4-b40d61ebab74" containerType="regular" prevTag="div" className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20" data-magicpath-id="176" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="9bbc2d3e-0c4a-4602-95fe-69b5b9b3653a" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-6" data-magicpath-id="177" data-magicpath-path="AutoGiftLanding.tsx">
                        <SortableContainer dndKitId="b630a40a-209f-455d-bd53-8d3a8f8769cc" containerType="regular" prevTag="div" className="w-16 h-16 bg-[#E2C382] rounded-full flex items-center justify-center" data-magicpath-id="178" data-magicpath-path="AutoGiftLanding.tsx">
                          <Gift className="w-8 h-8 text-[#073D2B]" data-magicpath-id="179" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                        <SortableContainer dndKitId="1a9f18e9-b7ba-411d-9b0e-857afa3c9da0" containerType="regular" prevTag="div" data-magicpath-id="180" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-3 bg-white/30 rounded-full w-32 mb-2" data-magicpath-id="181" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/20 rounded-full w-24" data-magicpath-id="182" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                      <SortableContainer dndKitId="081a0891-2e62-4b46-98f6-a168809d338c" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-4" data-magicpath-id="183" data-magicpath-path="AutoGiftLanding.tsx">
                        <div className="bg-white/10 rounded-xl p-4 aspect-square" data-magicpath-id="184" data-magicpath-path="AutoGiftLanding.tsx" />
                        <div className="bg-white/10 rounded-xl p-4 aspect-square" data-magicpath-id="185" data-magicpath-path="AutoGiftLanding.tsx" />
                      </SortableContainer>
                      <SortableContainer dndKitId="ee04baaa-5251-4526-a9b5-76704cdbe766" containerType="regular" prevTag="div" className="mt-4 p-4 bg-[#E2C382]/20 rounded-xl" data-magicpath-id="186" data-magicpath-path="AutoGiftLanding.tsx">
                        <SortableContainer dndKitId="492e746d-43a5-45e9-9885-f2b9803e0de9" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="187" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-white/40 rounded-full w-full" data-magicpath-id="188" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/30 rounded-full w-4/5" data-magicpath-id="189" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/30 rounded-full w-3/5" data-magicpath-id="190" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="42bec643-237e-4c77-9df0-be2d2942fd12" containerType="regular" prevTag="motion.div" animate={{
                    rotate: 360
                  }} transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }} className="absolute -top-4 -right-4 w-16 h-16 bg-[#E2C382] rounded-full flex items-center justify-center shadow-lg" data-magicpath-id="191" data-magicpath-path="AutoGiftLanding.tsx">
                      <Sparkles className="w-8 h-8 text-[#073D2B]" />
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="da9bd18a-86fb-4135-92ea-f3c7c0016af4" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="192" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="96a09a34-671d-4271-903f-39a32d712caa" containerType="regular" prevTag="div" data-magicpath-id="193" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="628c1e32-fdbb-4689-b137-94cd6c79b434" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="194" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="80a4dae3-e32d-4403-842f-ab5399901003" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="195" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="506a2bf8-ec9d-4b24-be89-6a5ad265e8c9" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="196" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="cb379901-ba88-4b50-ab13-5417bd3ada2f" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="197" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#073D2B]" data-magicpath-id="198" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="199" data-magicpath-path="AutoGiftLanding.tsx">Gift #1</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#073D2B] text-white text-xs font-medium rounded-full" data-magicpath-id="200" data-magicpath-path="AutoGiftLanding.tsx">
                        Delivered
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="c979483b-033d-44af-9ef7-6b8b25d32c77" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="201" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="9da1aa68-07b9-4a18-b3a1-ca86327107af" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="202" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#073D2B]" data-magicpath-id="203" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="204" data-magicpath-path="AutoGiftLanding.tsx">Gift #2</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#073D2B] text-white text-xs font-medium rounded-full" data-magicpath-id="205" data-magicpath-path="AutoGiftLanding.tsx">
                        Delivered
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="a185a623-cd99-4bec-b941-8d1d1ac41587" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="206" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="79ea1175-be3c-4ed4-ab80-ed1481795ddd" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="207" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#E2C382]" data-magicpath-id="208" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="209" data-magicpath-path="AutoGiftLanding.tsx">Gift #3</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#E2C382]/20 text-[#073D2B] text-xs font-medium rounded-full" data-magicpath-id="210" data-magicpath-path="AutoGiftLanding.tsx">
                        In Transit
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="0215d0df-dddc-42c2-9fcd-f06d495080e4" containerType="regular" prevTag="div" className="mt-6 p-4 bg-gradient-to-r from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-xl border border-[#E2C382]/20" data-magicpath-id="211" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="d3e3c927-c985-4b79-9958-7a0663bb190e" containerType="regular" prevTag="div" className="flex items-center gap-2 mb-2" data-magicpath-id="212" data-magicpath-path="AutoGiftLanding.tsx">
                        <TrendingUp className="w-5 h-5 text-[#073D2B]" data-magicpath-id="213" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-semibold text-[#0C0C0D]" data-magicpath-id="214" data-magicpath-path="AutoGiftLanding.tsx">Response Rate</span>
                      </SortableContainer>
                      <p className="text-3xl font-bold text-[#073D2B]" data-magicpath-id="215" data-magicpath-path="AutoGiftLanding.tsx">87%</p>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="bfb6008d-5cea-4e9a-bb70-8cf8594aed91" containerType="regular" prevTag="div" data-magicpath-id="216" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="86d55069-0574-47fa-b5f7-d1fe759c39c4" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="217" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="218" data-magicpath-path="AutoGiftLanding.tsx">4</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="219" data-magicpath-path="AutoGiftLanding.tsx">STEP FOUR</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="220" data-magicpath-path="AutoGiftLanding.tsx">
                  Deliver & Report
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed" data-magicpath-id="221" data-magicpath-path="AutoGiftLanding.tsx">
                  We ship each gift, track delivery, monitor responses, and follow up with a report on engagement + outcomes.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="216f1cdd-6d91-4f12-b9b8-183903becf44" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="222" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="b333da16-0afa-44dd-9dc9-470f030f8a32" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="223" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="6eba45b4-3620-4502-acad-e6deb26c3fb5" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="224" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="225" data-magicpath-path="AutoGiftLanding.tsx">
              Simple, Transparent Pilot Pricing
            </h2>
            <p className="text-xl text-[#0C0C0D]/70 max-w-2xl mx-auto" data-magicpath-id="226" data-magicpath-path="AutoGiftLanding.tsx">
              You set the gift budget. We charge a 10% service margin on top — that's it.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="e986be6b-bf43-4433-9564-2720471265aa" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-3xl p-12 border-2 border-[#E2C382]/30 mb-12" data-magicpath-id="227" data-magicpath-path="AutoGiftLanding.tsx">
            <h3 className="text-2xl font-bold text-[#0C0C0D] mb-8" data-magicpath-id="228" data-magicpath-path="AutoGiftLanding.tsx">We include:</h3>
            <div className="grid md:grid-cols-2 gap-6" data-magicpath-id="229" data-magicpath-path="AutoGiftLanding.tsx">
              {['Contact research', 'Gift concepting', 'Sourcing & procurement', 'Branding & packaging', 'Handwritten notes', 'Kitting & fulfillment', 'Project management'].map((item, i) => <SortableContainer dndKitId="0cae10c9-96ef-4ad2-b3c8-9dff1cb8bed4" containerType="regular" prevTag="motion.div" key={item} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: i * 0.1
            }} className="flex items-center gap-3" data-magicpath-id="230" data-magicpath-path="AutoGiftLanding.tsx">
                  <CheckCircle2 className="w-6 h-6 text-[#073D2B] flex-shrink-0" data-magicpath-id="231" data-magicpath-path="AutoGiftLanding.tsx" />
                  <span className="text-lg text-[#0C0C0D]" data-magicpath-id="232" data-magicpath-path="AutoGiftLanding.tsx">{item}</span>
                </SortableContainer>)}
            </div>
          </SortableContainer>

          <SortableContainer dndKitId="18eeb90f-b8fd-4947-8c66-bce0b2b8ca2a" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="space-y-6 mb-12" data-magicpath-id="233" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="353c9885-d55a-4c23-9007-494526dc526c" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="234" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="395f6823-2833-44f9-9b22-3cf9bdd619e1" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="235" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="da1b407c-c6d0-4c24-bc9a-1b00fcc95776" containerType="regular" prevTag="div" data-magicpath-id="236" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="237" data-magicpath-path="AutoGiftLanding.tsx">$100 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="238" data-magicpath-path="AutoGiftLanding.tsx">$110 <span className="text-lg font-normal text-[#0C0C0D]/60" data-magicpath-id="239" data-magicpath-path="AutoGiftLanding.tsx">total per recipient</span></p>
                </SortableContainer>
                <SortableContainer dndKitId="22f04c05-0460-4f1e-a815-3eebea2a87d2" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="240" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="241" data-magicpath-path="AutoGiftLanding.tsx">10% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="80148f10-1170-4514-a3f0-a3363930da6d" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="242" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="ae1c69bb-58e4-4777-b856-5d1dd7aeecf6" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="243" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="5a64fc9f-e9bd-4785-b753-a4b519e160f0" containerType="regular" prevTag="div" data-magicpath-id="244" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="245" data-magicpath-path="AutoGiftLanding.tsx">$250 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="246" data-magicpath-path="AutoGiftLanding.tsx">$275 <span className="text-lg font-normal text-[#0C0C0D]/60" data-magicpath-id="247" data-magicpath-path="AutoGiftLanding.tsx">total per recipient</span></p>
                </SortableContainer>
                <SortableContainer dndKitId="7276d535-e472-4c2c-ab93-3f880e3e8dc2" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="248" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="249" data-magicpath-path="AutoGiftLanding.tsx">10% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="ea169010-7ef7-4c10-b467-01bc69b1b644" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="250" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="5f5746fc-97fc-485c-b5d5-56bf308f88ce" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="251" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="3df5d709-3ff4-47c9-bb12-995aef2e6883" containerType="regular" prevTag="div" data-magicpath-id="252" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="253" data-magicpath-path="AutoGiftLanding.tsx">$500 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="254" data-magicpath-path="AutoGiftLanding.tsx">$550 <span className="text-lg font-normal text-[#0C0C0D]/60" data-magicpath-id="255" data-magicpath-path="AutoGiftLanding.tsx">total per recipient</span></p>
                </SortableContainer>
                <SortableContainer dndKitId="7c8fda5a-f240-4d7e-8048-2a8ec95e5417" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="256" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="257" data-magicpath-path="AutoGiftLanding.tsx">10% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="5395f660-fffc-4b3f-a7fb-10881c7ca4d5" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center" data-magicpath-id="258" data-magicpath-path="AutoGiftLanding.tsx">
            <a href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300" data-magicpath-id="259" data-magicpath-path="AutoGiftLanding.tsx">
              Start Your Pilot
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="2bacd976-0eb4-43d3-a217-879319534609" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-b from-white to-[#F6F6F4]" data-magicpath-id="260" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="ba74c96e-71b2-4148-a8cc-0ec7e81e02ea" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="261" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="eb46e694-71be-44fa-b009-ece9df349332" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="262" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="263" data-magicpath-path="AutoGiftLanding.tsx">
              Perfect For Teams That Need…
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="9ff77fcc-c362-42cc-9a59-05bfc69466cc" containerType="collection" prevTag="motion.div" variants={staggerChildren} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="264" data-magicpath-path="AutoGiftLanding.tsx">
            {[{
            icon: Target,
            label: 'High-impact outbound',
            mpid: "21469c19-3f7d-44af-8f24-a5b01462f6e6"
          }, {
            icon: Users,
            label: 'ABM campaigns',
            mpid: "ec0b46ea-5c6c-4803-be66-95b866af106a"
          }, {
            icon: TrendingUp,
            label: 'Executive outreach',
            mpid: "8028ca16-a11b-4481-995d-6af7f407df60"
          }, {
            icon: Send,
            label: 'Pipeline reactivation',
            mpid: "a7c4f654-79fa-420a-b5ea-2d2f00f1f588"
          }, {
            icon: Heart,
            label: 'Founder-to-founder gifting',
            mpid: "38c8024f-719f-493a-af68-ab5a31f13fad"
          }, {
            icon: Sparkles,
            label: 'CSM-led surprises & delight',
            mpid: "d18bc271-b1dd-4d5b-86f4-5499bf89905c"
          }, {
            icon: Mail,
            label: 'Sales-to-C-suite intros',
            mpid: "3cd70966-42c8-4008-a16b-9bf21f8320b1"
          }, {
            icon: Gift,
            label: 'Corporate gifting',
            mpid: "b6ce52e7-0870-432c-bc57-786e0aad951e"
          }].map((item, i) => <motion.div data-magicpath-motion-tag="motion.div" key={item.label} variants={fadeInUp} whileHover={{
            scale: 1.05,
            y: -5
          }} className="bg-white rounded-2xl p-8 border border-[#E2C382]/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="265" data-magicpath-path="AutoGiftLanding.tsx">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-2xl flex items-center justify-center mx-auto mb-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="266" data-magicpath-path="AutoGiftLanding.tsx">
                  <item.icon className="w-8 h-8 text-[#073D2B]" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="267" data-magicpath-path="AutoGiftLanding.tsx" />
                </div>
                <p className="font-semibold text-[#0C0C0D]" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="268" data-magicpath-path="AutoGiftLanding.tsx">{item.label}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="7637472c-88b0-4ded-ab83-0a1082ea8f42" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="269" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="740ee704-59e6-4802-b86a-b759ba8da024" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="270" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="51cdbcec-c7d2-4053-b4da-ee07c7758d00" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="271" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="272" data-magicpath-path="AutoGiftLanding.tsx">
              Because Attention Is Earned, Not Automated
            </h2>
          </SortableContainer>

          <motion.div data-magicpath-motion-tag="motion.div" variants={staggerChildren} className="grid md:grid-cols-2 gap-8" data-magicpath-id="273" data-magicpath-path="AutoGiftLanding.tsx">
            {['Every gift is designed specifically for the recipient', 'We handle all research and context', 'We source items that are unique, premium, and personal', 'Handwritten notes increase response rates dramatically', 'Dimensional mail gets opened almost 100% of the time', 'You save 10–20 hours/week of SDR bandwidth', 'You run a luxury, thoughtful campaign without lifting a finger'].map((benefit, i) => <SortableContainer dndKitId="024eb2d6-e649-4217-b36b-4af5a6816918" containerType="regular" prevTag="motion.div" key={benefit} variants={fadeInUp} whileHover={{
            x: 10
          }} className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#E2C382]/5 to-[#F0D8B6]/5 rounded-2xl border border-[#E2C382]/20 hover:border-[#E2C382]/40 transition-all duration-300" data-magicpath-id="274" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-7 h-7 text-[#073D2B] flex-shrink-0 mt-1" data-magicpath-id="275" data-magicpath-path="AutoGiftLanding.tsx" />
                <p className="text-lg text-[#0C0C0D]" data-magicpath-id="276" data-magicpath-path="AutoGiftLanding.tsx">{benefit}</p>
              </SortableContainer>)}
          </motion.div>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="5a66f872-cbc5-4134-8f53-93926990ecff" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-br from-[#073D2B] to-[#0a5a41] text-white relative overflow-hidden" data-magicpath-id="277" data-magicpath-path="AutoGiftLanding.tsx">
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute top-0 right-0 w-96 h-96 bg-[#E2C382]/10 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity
      }} data-magicpath-id="278" data-magicpath-path="AutoGiftLanding.tsx" />
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        delay: 1
      }} data-magicpath-id="279" data-magicpath-path="AutoGiftLanding.tsx" />

        <SortableContainer dndKitId="73152693-db37-461c-a6e0-52b378f48e37" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center relative z-10" data-magicpath-id="280" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="1e7b6593-bc2a-4d75-80a9-201f8e720aee" containerType="regular" prevTag="motion.div" variants={fadeInUp} data-magicpath-id="281" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="1d48fc0d-cbb3-47fb-a02f-dddea36ee99f" containerType="regular" prevTag="div" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8" data-magicpath-id="282" data-magicpath-path="AutoGiftLanding.tsx">
              <Sparkles className="w-4 h-4 text-[#E2C382]" />
              <span className="text-sm font-medium" data-magicpath-id="283" data-magicpath-path="AutoGiftLanding.tsx">Ready to Get Started?</span>
            </SortableContainer>
          </SortableContainer>

          <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-5xl lg:text-6xl font-bold mb-6" data-magicpath-id="284" data-magicpath-path="AutoGiftLanding.tsx">
            Ready to Reach Anyone With the Perfect Gift?
          </motion.h2>
          
          <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-2xl text-white/80 mb-12" data-magicpath-id="285" data-magicpath-path="AutoGiftLanding.tsx">
            Tell us who — and your budget. We'll take care of everything else.
          </motion.p>

          <SortableContainer dndKitId="0a54fec3-0088-4db5-9fb9-963cefdcda00" containerType="regular" prevTag="motion.div" variants={fadeInUp} data-magicpath-id="286" data-magicpath-path="AutoGiftLanding.tsx">
            <a href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105" data-magicpath-id="287" data-magicpath-path="AutoGiftLanding.tsx">
              <span className="flex items-center justify-center gap-3" data-magicpath-id="288" data-magicpath-path="AutoGiftLanding.tsx">
                Start Your Pilot
                <Gift className="w-6 h-6" data-magicpath-id="289" data-magicpath-path="AutoGiftLanding.tsx" />
              </span>
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="efa7a07a-c988-48f6-9673-040c47ca5a8a" containerType="regular" prevTag="footer" className="bg-[#0C0C0D] text-white py-16 px-4" data-magicpath-id="290" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="e18738bf-1866-4aac-9927-356a033bb807" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="291" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="cf464c37-78ac-4f7e-b2b1-8fd0db96f9b5" containerType="regular" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="292" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="32d7f5b0-f22a-4b71-99b6-8a81ccebeff4" containerType="regular" prevTag="div" className="md:col-span-2" data-magicpath-id="293" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="b6d97d6c-264f-4fdc-b0e4-7bf89278ca5a" containerType="regular" prevTag="div" className="flex items-center gap-2 mb-4" data-magicpath-id="294" data-magicpath-path="AutoGiftLanding.tsx">
                <Gift className="w-8 h-8 text-[#E2C382]" data-magicpath-id="295" data-magicpath-path="AutoGiftLanding.tsx" />
                <span className="text-2xl font-bold" data-magicpath-id="296" data-magicpath-path="AutoGiftLanding.tsx">AutoGift</span>
              </SortableContainer>
              <p className="text-white/60 mb-6 leading-relaxed" data-magicpath-id="297" data-magicpath-path="AutoGiftLanding.tsx">
                Your outsourced ABM gifting team. Handcrafted, hyper-personalized gifts done for you.
              </p>
              <SortableContainer dndKitId="9f375536-3e36-44cc-bcc8-c94d9e807c7d" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="298" data-magicpath-path="AutoGiftLanding.tsx">
                <a href="mailto:jschlisserman@gmail.com" className="text-[#E2C382] hover:text-[#F0D8B6] transition-colors" data-magicpath-id="299" data-magicpath-path="AutoGiftLanding.tsx">
                  <Mail className="w-5 h-5" data-magicpath-id="300" data-magicpath-path="AutoGiftLanding.tsx" />
                </a>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="fb2d17a6-8858-4bf1-9ead-01bd600b716d" containerType="regular" prevTag="div" data-magicpath-id="301" data-magicpath-path="AutoGiftLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="302" data-magicpath-path="AutoGiftLanding.tsx">Quick Links</h4>
              <SortableContainer dndKitId="a95fb415-e687-40ed-877a-78fd6a3b7c18" containerType="regular" prevTag="ul" className="space-y-3" data-magicpath-id="303" data-magicpath-path="AutoGiftLanding.tsx">
                <li data-magicpath-id="304" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="305" data-magicpath-path="AutoGiftLanding.tsx">About</a></li>
                <li data-magicpath-id="306" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="307" data-magicpath-path="AutoGiftLanding.tsx">Pricing</a></li>
                <li data-magicpath-id="308" data-magicpath-path="AutoGiftLanding.tsx"><a href="mailto:jschlisserman@gmail.com" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="309" data-magicpath-path="AutoGiftLanding.tsx">Contact</a></li>
                <li data-magicpath-id="310" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="311" data-magicpath-path="AutoGiftLanding.tsx">Careers</a></li>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="95eadbed-48ee-4fe9-aabc-b9fd0bae24e3" containerType="regular" prevTag="div" data-magicpath-id="312" data-magicpath-path="AutoGiftLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="313" data-magicpath-path="AutoGiftLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="26e7cf8e-1069-4d0a-9067-898c6ebc16e1" containerType="regular" prevTag="ul" className="space-y-3" data-magicpath-id="314" data-magicpath-path="AutoGiftLanding.tsx">
                <li data-magicpath-id="315" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="316" data-magicpath-path="AutoGiftLanding.tsx">Terms</a></li>
                <li data-magicpath-id="317" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="318" data-magicpath-path="AutoGiftLanding.tsx">Privacy</a></li>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="839d6a8e-0695-415f-96ca-8e4cb9238eb3" containerType="regular" prevTag="div" className="border-t border-white/10 pt-8" data-magicpath-id="319" data-magicpath-path="AutoGiftLanding.tsx">
            <p className="text-center text-white/40 text-sm" data-magicpath-id="320" data-magicpath-path="AutoGiftLanding.tsx">
              © {new Date().getFullYear()} AutoGift. All rights reserved.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};