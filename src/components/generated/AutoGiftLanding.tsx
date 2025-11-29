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
  return <SortableContainer dndKitId="4f2e9c46-ce41-4fe0-a42b-fabb4e12abe0" containerType="regular" prevTag="div" className="min-h-screen bg-[#F6F6F4] text-[#0C0C0D] overflow-x-hidden" data-magicpath-id="0" data-magicpath-path="AutoGiftLanding.tsx">
      <SortableContainer dndKitId="a8dd8465-a664-4a17-8fd2-20ae43b12026" containerType="regular" prevTag="motion.section" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden" style={{
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

        <SortableContainer dndKitId="165b9400-b937-4646-a607-71d47654482a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10" data-magicpath-id="5" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="30358424-1e57-4dc4-b0da-e838dd0b74c9" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={staggerChildren} data-magicpath-id="6" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="9933030d-76c5-4cc7-9c23-b953bb876704" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="7" data-magicpath-path="AutoGiftLanding.tsx">
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

            <SortableContainer dndKitId="77450401-fe6f-4eb1-9c34-f253a1cb9e87" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="flex flex-col sm:flex-row gap-4" data-magicpath-id="14" data-magicpath-path="AutoGiftLanding.tsx">
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

          <SortableContainer dndKitId="dc2d82fb-25ab-452b-a9a0-6fb6ab66e349" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="78ca34cc-b789-47fe-8ed5-4cbc5972a59a" containerType="regular" prevTag="div" className="relative bg-white rounded-3xl shadow-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="21" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="399f6f07-24c4-4b5b-badd-d556575e6f49" containerType="regular" prevTag="motion.div" animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="space-y-6" data-magicpath-id="22" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="39e18d1a-0118-426d-ad48-184a4983cc04" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#F0D8B6]/30 to-[#E2C382]/20 rounded-2xl p-6 backdrop-blur-sm" data-magicpath-id="23" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="36d00193-5bd7-453e-bccf-cba7ff62e716" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-4" data-magicpath-id="24" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="c3b4797d-daf1-45ff-805e-b7f3a9b94219" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-full flex items-center justify-center" data-magicpath-id="25" data-magicpath-path="AutoGiftLanding.tsx">
                      <Gift className="w-6 h-6 text-[#E2C382]" data-magicpath-id="26" data-magicpath-path="AutoGiftLanding.tsx" />
                    </SortableContainer>
                    <SortableContainer dndKitId="d0974b94-a076-4382-9d38-7c014297f5fc" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="27" data-magicpath-path="AutoGiftLanding.tsx">
                      <div className="h-3 bg-[#E2C382]/30 rounded-full w-3/4 mb-2" data-magicpath-id="28" data-magicpath-path="AutoGiftLanding.tsx" />
                      <div className="h-2 bg-[#E2C382]/20 rounded-full w-1/2" data-magicpath-id="29" data-magicpath-path="AutoGiftLanding.tsx" />
                    </SortableContainer>
                  </SortableContainer>
                  <SortableContainer dndKitId="09b2770a-1d98-4ddd-8151-4e5a1bfd97e5" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="30" data-magicpath-path="AutoGiftLanding.tsx">
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="31" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-5/6" data-magicpath-id="32" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="4ce494c4-daef-4eaa-9504-445a07deec46" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-4" data-magicpath-id="33" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="de3ce931-6dc0-4dc3-af36-ed1a831a03f5" containerType="regular" prevTag="div" className="bg-[#073D2B]/5 rounded-xl p-4 backdrop-blur-sm" data-magicpath-id="34" data-magicpath-path="AutoGiftLanding.tsx">
                    <Package className="w-8 h-8 text-[#073D2B] mb-2" data-magicpath-id="35" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/20 rounded-full w-full" data-magicpath-id="36" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="ea6ffbfa-77b4-4f14-9da9-e67fa7373ef6" containerType="regular" prevTag="div" className="bg-[#073D2B]/5 rounded-xl p-4 backdrop-blur-sm" data-magicpath-id="37" data-magicpath-path="AutoGiftLanding.tsx">
                    <Sparkles className="w-8 h-8 text-[#E2C382] mb-2" />
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="38" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="24a8b7b4-7d7f-403f-9ad7-88934ebcd416" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/20 to-[#F0D8B6]/30 rounded-2xl p-6 backdrop-blur-sm border-2 border-[#E2C382]/30" data-magicpath-id="39" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="2d05128e-83f3-4f93-b179-6e47dbed9d06" containerType="regular" prevTag="div" className="flex items-center justify-between mb-4" data-magicpath-id="40" data-magicpath-path="AutoGiftLanding.tsx">
                    <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="41" data-magicpath-path="AutoGiftLanding.tsx">Handwritten Note</span>
                    <CheckCircle2 className="w-5 h-5 text-[#073D2B]" data-magicpath-id="42" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="099e8fdf-f290-4e11-924c-7ca2267a6a35" containerType="regular" prevTag="div" className="space-y-2 opacity-60" data-magicpath-id="43" data-magicpath-path="AutoGiftLanding.tsx">
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-full" data-magicpath-id="44" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-4/5" data-magicpath-id="45" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-3/4" data-magicpath-id="46" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="46d640d2-f993-4811-818c-a63e8068656b" containerType="regular" prevTag="motion.div" className="absolute -top-6 -right-6 w-24 h-24 bg-[#E2C382] rounded-full flex items-center justify-center shadow-xl" animate={{
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

      {showExampleForm && <SortableContainer dndKitId="40abe2a5-8c62-4215-b730-06d46bf57127" containerType="regular" prevTag="motion.div" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowExampleForm(false)} data-magicpath-id="48" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="6201f750-112a-46b7-8d1b-d4b4665902c3" containerType="regular" prevTag="motion.div" initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()} data-magicpath-id="49" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="ac2b6790-8884-4e8c-8d79-00471bd2764c" containerType="regular" prevTag="div" className="sticky top-0 bg-gradient-to-br from-[#E2C382] to-[#D4B574] p-8 rounded-t-3xl" data-magicpath-id="50" data-magicpath-path="AutoGiftLanding.tsx">
              <h3 className="text-3xl font-bold text-[#0C0C0D] mb-2" data-magicpath-id="51" data-magicpath-path="AutoGiftLanding.tsx">Request An Example</h3>
              <p className="text-[#0C0C0D]/70" data-magicpath-id="52" data-magicpath-path="AutoGiftLanding.tsx">Tell us about yourself and we'll show you what we can do</p>
            </SortableContainer>

            <SortableContainer dndKitId="a6e9a088-bfb9-4457-954b-7c0d576e6786" containerType="regular" prevTag="form" onSubmit={handleFormSubmit} className="p-8 space-y-6" data-magicpath-id="53" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="81476221-f837-413d-8a66-d837afca7c94" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-6" data-magicpath-id="54" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="50659af8-2784-47f6-9267-57f47e6b28de" containerType="regular" prevTag="div" data-magicpath-id="55" data-magicpath-path="AutoGiftLanding.tsx">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="56" data-magicpath-path="AutoGiftLanding.tsx">
                    <User className="w-4 h-4 text-[#E2C382]" data-magicpath-id="57" data-magicpath-path="AutoGiftLanding.tsx" />
                    First Name *
                  </label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="John" data-magicpath-id="58" data-magicpath-path="AutoGiftLanding.tsx" />
                </SortableContainer>

                <SortableContainer dndKitId="a8bb3818-5add-48e1-9bc9-6608de2e4c98" containerType="regular" prevTag="div" data-magicpath-id="59" data-magicpath-path="AutoGiftLanding.tsx">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="60" data-magicpath-path="AutoGiftLanding.tsx">
                    <User className="w-4 h-4 text-[#E2C382]" data-magicpath-id="61" data-magicpath-path="AutoGiftLanding.tsx" />
                    Last Name *
                  </label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="Doe" data-magicpath-id="62" data-magicpath-path="AutoGiftLanding.tsx" />
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="45d29106-b4ae-4ef1-a92b-9d737428e3e2" containerType="regular" prevTag="div" data-magicpath-id="63" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="64" data-magicpath-path="AutoGiftLanding.tsx">
                  <Building2 className="w-4 h-4 text-[#E2C382]" data-magicpath-id="65" data-magicpath-path="AutoGiftLanding.tsx" />
                  Company Name *
                </label>
                <input type="text" name="companyName" required value={formData.companyName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="Acme Corp" data-magicpath-id="66" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="d76ad701-9538-4c13-9e17-4adba80112c1" containerType="regular" prevTag="div" data-magicpath-id="67" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="68" data-magicpath-path="AutoGiftLanding.tsx">
                  <Briefcase className="w-4 h-4 text-[#E2C382]" data-magicpath-id="69" data-magicpath-path="AutoGiftLanding.tsx" />
                  Title *
                </label>
                <input type="text" name="title" required value={formData.title} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="VP of Sales" data-magicpath-id="70" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="d82c1b0d-7b46-44cf-807d-e07b2ac09c89" containerType="regular" prevTag="div" data-magicpath-id="71" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="72" data-magicpath-path="AutoGiftLanding.tsx">
                  <Mail className="w-4 h-4 text-[#E2C382]" data-magicpath-id="73" data-magicpath-path="AutoGiftLanding.tsx" />
                  Email Address *
                </label>
                <input type="email" name="email" required value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="john@acme.com" data-magicpath-id="74" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="a78720d0-530d-46b1-8f38-242118ec52f0" containerType="regular" prevTag="div" data-magicpath-id="75" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="76" data-magicpath-path="AutoGiftLanding.tsx">
                  <MapPin className="w-4 h-4 text-[#E2C382]" data-magicpath-id="77" data-magicpath-path="AutoGiftLanding.tsx" />
                  Physical Address *
                </label>
                <input type="text" name="address" required value={formData.address} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="123 Main St, City, State, ZIP" data-magicpath-id="78" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="baa24e7c-ea00-4661-9b20-73c8291613ad" containerType="regular" prevTag="div" data-magicpath-id="79" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="80" data-magicpath-path="AutoGiftLanding.tsx">
                  <Phone className="w-4 h-4 text-[#E2C382]" data-magicpath-id="81" data-magicpath-path="AutoGiftLanding.tsx" />
                  Phone Number *
                </label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="(555) 123-4567" data-magicpath-id="82" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="1210d12d-9177-4d2b-9b5e-ca9e542665ea" containerType="regular" prevTag="div" className="flex gap-4 pt-4" data-magicpath-id="83" data-magicpath-path="AutoGiftLanding.tsx">
                <button type="button" onClick={() => setShowExampleForm(false)} className="flex-1 px-6 py-3 bg-[#F6F6F4] text-[#0C0C0D] rounded-xl font-medium hover:bg-[#E2C382]/10 transition-all" data-magicpath-id="84" data-magicpath-path="AutoGiftLanding.tsx">
                  Cancel
                </button>
                <SortableContainer dndKitId="c61a7538-545b-493c-ac23-618a2a7a5e30" containerType="regular" prevTag="button" type="submit" disabled={isSubmitting || submitSuccess} className="flex-1 px-6 py-3 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50" data-magicpath-id="85" data-magicpath-path="AutoGiftLanding.tsx">
                  {submitSuccess ? <span className="flex items-center justify-center gap-2" data-magicpath-id="86" data-magicpath-path="AutoGiftLanding.tsx">
                      <CheckCircle2 className="w-5 h-5" data-magicpath-id="87" data-magicpath-path="AutoGiftLanding.tsx" />
                      Sent!
                    </span> : isSubmitting ? 'Sending...' : 'Submit Request'}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>}

      <SortableContainer dndKitId="91bcc84b-5ca7-4c84-905a-6d72537b1209" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-20 px-4" data-magicpath-id="88" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="9545a060-ae06-4b59-8863-4e8dde5d89a1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="89" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="e2e39b19-230e-445b-a3f9-5e48b6b7261e" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="90" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-sm font-semibold text-[#E2C382] tracking-wider uppercase mb-4" data-magicpath-id="91" data-magicpath-path="AutoGiftLanding.tsx">Trusted By</h2>
            <SortableContainer dndKitId="98b95c1f-0f67-4c49-9ed8-65143959f51c" containerType="regular" prevTag="div" className="flex flex-wrap justify-center items-center gap-8 opacity-60" data-magicpath-id="92" data-magicpath-path="AutoGiftLanding.tsx">
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

      <SortableContainer dndKitId="7ebe7fe1-1263-40b5-92e0-819ae64eb2f1" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="97" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="8c4ddc8b-b311-496c-ac61-fa4a63cdec41" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="98" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="d6711341-29ef-44d5-844d-debd1bd8bbe9" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="99" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-6" data-magicpath-id="100" data-magicpath-path="AutoGiftLanding.tsx">
              Your Personal Gifting & Outbound Team — On Demand
            </h2>
            <p className="text-xl text-[#0C0C0D]/70 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="101" data-magicpath-path="AutoGiftLanding.tsx">
              The AutoGift Pilot Program is a fully-managed gifting service for teams who need to reach high-value contacts with thoughtful, personalized, premium gifts that stand out.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="74600c08-2d5e-4562-b1f3-dcd66e355054" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mb-12" data-magicpath-id="102" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="61eb8fcd-dc0c-476f-b974-bb2613f33d34" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="103" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="2ec477d8-c04e-4ef0-ada5-ea06fc83a967" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="104" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="105" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="106" data-magicpath-path="AutoGiftLanding.tsx">The contacts you want to reach</h3>
            </SortableContainer>

            <SortableContainer dndKitId="5a7cd84c-dbb0-4c66-b15b-005961705da1" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="107" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="afb6e498-9454-4ebe-a13b-2948b52b1033" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="108" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="109" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="110" data-magicpath-path="AutoGiftLanding.tsx">Your budget per person</h3>
            </SortableContainer>

            <SortableContainer dndKitId="f79f1176-5f00-42b3-b0f3-0f6bd5a859d2" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="111" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="05b963aa-3294-46bc-a44e-8d48a1e2659b" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="112" data-magicpath-path="AutoGiftLanding.tsx">
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

      <SortableContainer dndKitId="a8c7f7e2-5a67-48fc-93f6-4d66b163fa7b" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-b from-white to-[#F6F6F4]" data-magicpath-id="116" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="bcf0af89-025a-4730-9f77-d755cab11327" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="117" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="25eca4e9-3673-44d5-b18e-ee9e719158c3" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-20" data-magicpath-id="118" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="119" data-magicpath-path="AutoGiftLanding.tsx">
              How It Works
            </h2>
            <p className="text-xl text-[#0C0C0D]/70" data-magicpath-id="120" data-magicpath-path="AutoGiftLanding.tsx">Four simple steps to perfect gifts</p>
          </SortableContainer>

          <SortableContainer dndKitId="82629224-6008-498f-accb-a704961708ae" containerType="regular" prevTag="div" className="space-y-24" data-magicpath-id="121" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="79d63434-1dac-41e9-87fa-471680234d36" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="122" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="bf451429-0f45-4390-9e92-f92c41cbc934" containerType="regular" prevTag="div" className="order-2 lg:order-1" data-magicpath-id="123" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="183fe821-1e38-4ee5-a853-5361e9d33f48" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="124" data-magicpath-path="AutoGiftLanding.tsx">
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
              <SortableContainer dndKitId="15762e3c-02eb-4fcf-888d-ba4e08e568a8" containerType="regular" prevTag="div" className="order-1 lg:order-2" data-magicpath-id="129" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="98753c5c-67ff-4019-ab90-6420fbd0aec3" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="130" data-magicpath-path="AutoGiftLanding.tsx">
                  <div className="space-y-4" data-magicpath-id="131" data-magicpath-path="AutoGiftLanding.tsx">
                    {['Contact 1', 'Contact 2', 'Contact 3'].map((contact, i) => <SortableContainer dndKitId="fa98fab5-fccb-41b6-8fac-e0e57ec1d2a2" containerType="regular" prevTag="motion.div" key={contact} initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: i * 0.1
                  }} className="flex items-center gap-4 p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="132" data-magicpath-path="AutoGiftLanding.tsx">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#E2C382] to-[#D4B574] rounded-full" data-magicpath-id="133" data-magicpath-path="AutoGiftLanding.tsx" />
                        <SortableContainer dndKitId="2782dd7a-5724-4455-bff2-20c9c78ac179" containerType="regular" prevTag="div" className="flex-1 space-y-2" data-magicpath-id="134" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-3 bg-[#E2C382]/30 rounded-full w-3/4" data-magicpath-id="135" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-1/2" data-magicpath-id="136" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                        <Users className="w-5 h-5 text-[#E2C382]" data-magicpath-id="137" data-magicpath-path="AutoGiftLanding.tsx" />
                      </SortableContainer>)}
                  </div>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="bc1a6ca8-e950-4622-9b34-53de1f3b39c2" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="138" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="4d093b33-5a00-487e-800f-99b315b833f7" containerType="regular" prevTag="div" data-magicpath-id="139" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="62298aef-81e5-484e-a938-65333f4eeda0" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="140" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="50032c1a-bbb2-4c93-86bd-4c4637524ffa" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="141" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="22d7ba8c-f5ac-441d-8553-a145b00178ae" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="142" data-magicpath-path="AutoGiftLanding.tsx">
                      <Target className="w-8 h-8 text-[#E2C382] flex-shrink-0 mt-1" data-magicpath-id="143" data-magicpath-path="AutoGiftLanding.tsx" />
                      <SortableContainer dndKitId="5e4c3c5c-37bf-43ab-986b-6a8460bb71fd" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="144" data-magicpath-path="AutoGiftLanding.tsx">
                        <h4 className="font-semibold text-[#0C0C0D] mb-2" data-magicpath-id="145" data-magicpath-path="AutoGiftLanding.tsx">Deep Research</h4>
                        <SortableContainer dndKitId="531b855b-a5b5-4b76-898d-7c75670e4915" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="146" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-full" data-magicpath-id="147" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-5/6" data-magicpath-id="148" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-4/6" data-magicpath-id="149" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="34387cb4-a42b-43fc-990c-3e6603e73301" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="150" data-magicpath-path="AutoGiftLanding.tsx">
                      <Sparkles className="w-8 h-8 text-[#E2C382] flex-shrink-0 mt-1" />
                      <SortableContainer dndKitId="7f1ef80b-0516-4bb3-a277-ec4b2a934a91" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="151" data-magicpath-path="AutoGiftLanding.tsx">
                        <h4 className="font-semibold text-[#0C0C0D] mb-2" data-magicpath-id="152" data-magicpath-path="AutoGiftLanding.tsx">Personality Analysis</h4>
                        <SortableContainer dndKitId="be61e0ac-bc0b-444c-bdd0-15a3e0d74a51" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="153" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="154" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-3/4" data-magicpath-id="155" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="27256d65-56bc-4c2f-9bfb-6c69622571a8" containerType="regular" prevTag="div" data-magicpath-id="156" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="c6f63951-5c72-4da9-93a6-23ced6f90a47" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="157" data-magicpath-path="AutoGiftLanding.tsx">
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

            <SortableContainer dndKitId="a4e2aa0f-5a05-4711-b03c-e1961b83a47b" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="162" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="d02296f5-beef-44d3-b62c-67c32f9ed030" containerType="regular" prevTag="div" className="order-2 lg:order-1" data-magicpath-id="163" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="6ac1f79d-a1bf-4e44-93aa-7610612f9712" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="164" data-magicpath-path="AutoGiftLanding.tsx">
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
              <SortableContainer dndKitId="3439b95a-5a5e-4fce-abfb-cb6e1adc1b5f" containerType="regular" prevTag="div" className="order-1 lg:order-2" data-magicpath-id="173" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="6cfb4608-e6c8-4b80-b324-b53cbeec3cc4" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#073D2B] to-[#0a5a41] rounded-3xl shadow-2xl p-8 text-white" data-magicpath-id="174" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="91023f42-2cb4-45b8-b34c-7450c6a34a7d" containerType="regular" prevTag="motion.div" animate={{
                  rotateY: [0, 5, 0, -5, 0]
                }} transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} className="relative" data-magicpath-id="175" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="a17ba901-5bb7-4181-95ac-2d4b3c387d10" containerType="regular" prevTag="div" className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20" data-magicpath-id="176" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="f8933896-8706-435e-85e0-83b6da41ccf8" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-6" data-magicpath-id="177" data-magicpath-path="AutoGiftLanding.tsx">
                        <SortableContainer dndKitId="cd667389-3b50-4cbb-a939-1f46a0bd8b21" containerType="regular" prevTag="div" className="w-16 h-16 bg-[#E2C382] rounded-full flex items-center justify-center" data-magicpath-id="178" data-magicpath-path="AutoGiftLanding.tsx">
                          <Gift className="w-8 h-8 text-[#073D2B]" data-magicpath-id="179" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                        <SortableContainer dndKitId="85832b9b-e324-4b2d-81b2-639ae33e8acf" containerType="regular" prevTag="div" data-magicpath-id="180" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-3 bg-white/30 rounded-full w-32 mb-2" data-magicpath-id="181" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/20 rounded-full w-24" data-magicpath-id="182" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                      <SortableContainer dndKitId="3f212886-8c7a-4fa9-b705-8cdd6cbc2c25" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-4" data-magicpath-id="183" data-magicpath-path="AutoGiftLanding.tsx">
                        <div className="bg-white/10 rounded-xl p-4 aspect-square" data-magicpath-id="184" data-magicpath-path="AutoGiftLanding.tsx" />
                        <div className="bg-white/10 rounded-xl p-4 aspect-square" data-magicpath-id="185" data-magicpath-path="AutoGiftLanding.tsx" />
                      </SortableContainer>
                      <SortableContainer dndKitId="7f23c7ec-ce76-4dc7-9d37-70a9f5d5f638" containerType="regular" prevTag="div" className="mt-4 p-4 bg-[#E2C382]/20 rounded-xl" data-magicpath-id="186" data-magicpath-path="AutoGiftLanding.tsx">
                        <SortableContainer dndKitId="9e6d5993-76f3-4180-8e2d-0756df5ce99e" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="187" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-white/40 rounded-full w-full" data-magicpath-id="188" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/30 rounded-full w-4/5" data-magicpath-id="189" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/30 rounded-full w-3/5" data-magicpath-id="190" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="a502590f-de84-4728-b327-b7621ad39a23" containerType="regular" prevTag="motion.div" animate={{
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

            <SortableContainer dndKitId="b6e7139c-9cab-499d-b8a8-33dfc68ef7de" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="192" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="ecc24413-1952-4936-9b1e-0f598617522e" containerType="regular" prevTag="div" data-magicpath-id="193" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="158507ea-ab5c-43ad-ade1-da2836ed0756" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="194" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="d8a407b6-127b-48f6-be7f-a2c75dc799a6" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="195" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="8cedffb1-cf50-4641-b97d-8ff758ccb054" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="196" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="a424b6a3-0b51-44cb-a677-fb601ea99616" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="197" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#073D2B]" data-magicpath-id="198" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="199" data-magicpath-path="AutoGiftLanding.tsx">Gift #1</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#073D2B] text-white text-xs font-medium rounded-full" data-magicpath-id="200" data-magicpath-path="AutoGiftLanding.tsx">
                        Delivered
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="81ad96ca-3fcb-49b3-9ff7-ce0c32a2727a" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="201" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="1e10b963-a8c2-4a1d-ad84-21ab907c23fe" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="202" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#073D2B]" data-magicpath-id="203" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="204" data-magicpath-path="AutoGiftLanding.tsx">Gift #2</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#073D2B] text-white text-xs font-medium rounded-full" data-magicpath-id="205" data-magicpath-path="AutoGiftLanding.tsx">
                        Delivered
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="a08b5d01-4cc1-4e86-8509-fddc6127bced" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="206" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="22a84c5b-9a90-4b7d-9ec5-56fff0786a73" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="207" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#E2C382]" data-magicpath-id="208" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="209" data-magicpath-path="AutoGiftLanding.tsx">Gift #3</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#E2C382]/20 text-[#073D2B] text-xs font-medium rounded-full" data-magicpath-id="210" data-magicpath-path="AutoGiftLanding.tsx">
                        In Transit
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="8f9a1530-37e5-4471-ac69-a2890e176866" containerType="regular" prevTag="div" className="mt-6 p-4 bg-gradient-to-r from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-xl border border-[#E2C382]/20" data-magicpath-id="211" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="3a041c8c-c06c-415b-8f7c-014367d4d2cb" containerType="regular" prevTag="div" className="flex items-center gap-2 mb-2" data-magicpath-id="212" data-magicpath-path="AutoGiftLanding.tsx">
                        <TrendingUp className="w-5 h-5 text-[#073D2B]" data-magicpath-id="213" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-semibold text-[#0C0C0D]" data-magicpath-id="214" data-magicpath-path="AutoGiftLanding.tsx">Response Rate</span>
                      </SortableContainer>
                      <p className="text-3xl font-bold text-[#073D2B]" data-magicpath-id="215" data-magicpath-path="AutoGiftLanding.tsx">87%</p>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="2089e424-3e00-4deb-8a57-f42eb4e445c2" containerType="regular" prevTag="div" data-magicpath-id="216" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="fdcbb2f2-b375-4722-b22b-b269a0a00c0d" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="217" data-magicpath-path="AutoGiftLanding.tsx">
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

      <SortableContainer dndKitId="d363c444-c5a9-41a0-abe9-206d365d06ed" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="222" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="5238ebf2-39c8-430e-91b6-008ca6d33d7b" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="223" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="7efdeb46-6c71-4c7c-9f38-bd737af4a2ba" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="224" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="225" data-magicpath-path="AutoGiftLanding.tsx">
              Simple, Transparent Pilot Pricing
            </h2>
            <p className="text-xl text-[#0C0C0D]/70 max-w-2xl mx-auto" data-magicpath-id="226" data-magicpath-path="AutoGiftLanding.tsx">
              You set the gift budget. We charge a 10% service margin on top — that's it.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="b1dfdf36-02e9-410b-a14a-598692f5a3a8" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-3xl p-12 border-2 border-[#E2C382]/30 mb-12" data-magicpath-id="227" data-magicpath-path="AutoGiftLanding.tsx">
            <h3 className="text-2xl font-bold text-[#0C0C0D] mb-8" data-magicpath-id="228" data-magicpath-path="AutoGiftLanding.tsx">We include:</h3>
            <div className="grid md:grid-cols-2 gap-6" data-magicpath-id="229" data-magicpath-path="AutoGiftLanding.tsx">
              {['Contact research', 'Gift concepting', 'Sourcing & procurement', 'Branding & packaging', 'Handwritten notes', 'Kitting & fulfillment', 'Project management'].map((item, i) => <SortableContainer dndKitId="a78a6132-7841-4442-9ee8-6dab4febaa58" containerType="regular" prevTag="motion.div" key={item} initial={{
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

          <SortableContainer dndKitId="6344cc4d-037f-4df5-8ad5-573b93aacad1" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="space-y-6 mb-12" data-magicpath-id="233" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="9ad8be26-fdf2-4396-b053-7c3443a9ed0f" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="234" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="77253c8b-9bc0-4d7a-a894-95b95ef6b371" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="235" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="7890cb17-3428-4f2a-ad17-dbb525949278" containerType="regular" prevTag="div" data-magicpath-id="236" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="237" data-magicpath-path="AutoGiftLanding.tsx">$100 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="238" data-magicpath-path="AutoGiftLanding.tsx">$110 <span className="text-lg font-normal text-[#0C0C0D]/60" data-magicpath-id="239" data-magicpath-path="AutoGiftLanding.tsx">total per recipient</span></p>
                </SortableContainer>
                <SortableContainer dndKitId="e721febc-130f-4428-b006-47f13d878e45" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="240" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="241" data-magicpath-path="AutoGiftLanding.tsx">20% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="0a27a3a6-7bf6-473b-b0c9-fb3776054b7d" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="242" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="5dd2099a-f360-4f30-8cdb-878b648af1f7" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="243" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="11335607-fd05-4c38-a7cf-7759b51e30c4" containerType="regular" prevTag="div" data-magicpath-id="244" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="245" data-magicpath-path="AutoGiftLanding.tsx">$250 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="246" data-magicpath-path="AutoGiftLanding.tsx">$275 <span className="text-lg font-normal text-[#0C0C0D]/60" data-magicpath-id="247" data-magicpath-path="AutoGiftLanding.tsx">total per recipient</span></p>
                </SortableContainer>
                <SortableContainer dndKitId="c5efaa3f-3c1d-4034-abc9-bdc71f25962d" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="248" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="249" data-magicpath-path="AutoGiftLanding.tsx">20% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="079b8625-33ea-4280-906c-4ef9c58d06d2" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="250" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="a6e78c09-a2f4-45b8-bd75-f64c80aaee25" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="251" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="ea526841-1480-4a30-b8f5-37bfa824644c" containerType="regular" prevTag="div" data-magicpath-id="252" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="253" data-magicpath-path="AutoGiftLanding.tsx">$500 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="254" data-magicpath-path="AutoGiftLanding.tsx">$550 <span className="text-lg font-normal text-[#0C0C0D]/60" data-magicpath-id="255" data-magicpath-path="AutoGiftLanding.tsx">total per recipient</span></p>
                </SortableContainer>
                <SortableContainer dndKitId="55813d94-f212-4073-a6bd-715fce6e4955" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="256" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="257" data-magicpath-path="AutoGiftLanding.tsx">10% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="42afbc13-1679-4b72-b2ce-769e03a967e7" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center" data-magicpath-id="258" data-magicpath-path="AutoGiftLanding.tsx">
            <a href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300" data-magicpath-id="259" data-magicpath-path="AutoGiftLanding.tsx">
              Start Your Pilot
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="dc555d6f-bb11-4826-8321-310d3930b847" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-b from-white to-[#F6F6F4]" data-magicpath-id="260" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="bf2ac0c2-6dc2-4b15-bd57-b83b702a55a9" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="261" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="b5d4098d-146b-4d98-afdc-0e75f81c3a7b" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="262" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="263" data-magicpath-path="AutoGiftLanding.tsx">
              Perfect For Teams That Need…
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="4f925080-fe95-44de-91ec-062ebb8d6311" containerType="collection" prevTag="motion.div" variants={staggerChildren} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="264" data-magicpath-path="AutoGiftLanding.tsx">
            {[{
            icon: Target,
            label: 'High-impact outbound',
            mpid: "acdb5b5d-ffc5-4cf8-8248-54d36922ba65"
          }, {
            icon: Users,
            label: 'ABM campaigns',
            mpid: "a9b229a0-dfc1-4aeb-aa1a-97854dafc605"
          }, {
            icon: TrendingUp,
            label: 'Executive outreach',
            mpid: "d8a2e79c-ae75-43e0-be11-7463d70c8108"
          }, {
            icon: Send,
            label: 'Pipeline reactivation',
            mpid: "bdebf69f-07a2-440f-a6b4-974184906d9c"
          }, {
            icon: Heart,
            label: 'Founder-to-founder gifting',
            mpid: "f8741934-54d0-4c78-b453-5d3288e592bf"
          }, {
            icon: Sparkles,
            label: 'CSM-led surprises & delight',
            mpid: "71e53e99-8e6a-4072-8f85-efd8369eb145"
          }, {
            icon: Mail,
            label: 'Sales-to-C-suite intros',
            mpid: "8c9aa09d-b541-47bf-834f-a6530329e8eb"
          }, {
            icon: Gift,
            label: 'Corporate gifting',
            mpid: "29bb34d2-d2d3-40ae-9fbe-425afd105d35"
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

      <SortableContainer dndKitId="ee93e586-9fd7-4299-9e52-e0ac7f3290cf" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="269" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="3aef246e-f668-4627-9240-b1cf95845f86" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="270" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="aedc578f-a069-496c-9150-ed34864c046f" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="271" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="272" data-magicpath-path="AutoGiftLanding.tsx">
              Because Attention Is Earned, Not Automated
            </h2>
          </SortableContainer>

          <motion.div data-magicpath-motion-tag="motion.div" variants={staggerChildren} className="grid md:grid-cols-2 gap-8" data-magicpath-id="273" data-magicpath-path="AutoGiftLanding.tsx">
            {['Every gift is designed specifically for the recipient', 'We handle all research and context', 'We source items that are unique, premium, and personal', 'Handwritten notes increase response rates dramatically', 'Dimensional mail gets opened almost 100% of the time', 'You save 10–20 hours/week of SDR bandwidth', 'You run a luxury, thoughtful campaign without lifting a finger'].map((benefit, i) => <SortableContainer dndKitId="682c750c-09d4-4a6d-b89f-1b443709d077" containerType="regular" prevTag="motion.div" key={benefit} variants={fadeInUp} whileHover={{
            x: 10
          }} className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#E2C382]/5 to-[#F0D8B6]/5 rounded-2xl border border-[#E2C382]/20 hover:border-[#E2C382]/40 transition-all duration-300" data-magicpath-id="274" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-7 h-7 text-[#073D2B] flex-shrink-0 mt-1" data-magicpath-id="275" data-magicpath-path="AutoGiftLanding.tsx" />
                <p className="text-lg text-[#0C0C0D]" data-magicpath-id="276" data-magicpath-path="AutoGiftLanding.tsx">{benefit}</p>
              </SortableContainer>)}
          </motion.div>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="342b83d9-bd8a-4523-b7e6-7099c5e4701d" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
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

        <SortableContainer dndKitId="cead2705-2fcf-4db0-bb5d-09c1814cb6e4" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center relative z-10" data-magicpath-id="280" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="6ce4faf2-652c-43ed-ac4c-1c3bbed9a255" containerType="regular" prevTag="motion.div" variants={fadeInUp} data-magicpath-id="281" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="2adbb537-ba27-4950-a031-78206133f89a" containerType="regular" prevTag="div" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8" data-magicpath-id="282" data-magicpath-path="AutoGiftLanding.tsx">
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

          <SortableContainer dndKitId="fd0345a6-ec75-4154-a3b3-4b2fd444376b" containerType="regular" prevTag="motion.div" variants={fadeInUp} data-magicpath-id="286" data-magicpath-path="AutoGiftLanding.tsx">
            <a href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105" data-magicpath-id="287" data-magicpath-path="AutoGiftLanding.tsx">
              <span className="flex items-center justify-center gap-3" data-magicpath-id="288" data-magicpath-path="AutoGiftLanding.tsx">
                Start Your Pilot
                <Gift className="w-6 h-6" data-magicpath-id="289" data-magicpath-path="AutoGiftLanding.tsx" />
              </span>
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="25c24cd5-2e75-413b-ad5c-a839a7f90ac0" containerType="regular" prevTag="footer" className="bg-[#0C0C0D] text-white py-16 px-4" data-magicpath-id="290" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="a51757a3-4ac5-4a08-a022-b147fced59a1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="291" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="6b52a4c1-8c0b-472d-adaf-bac82b5127ab" containerType="regular" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="292" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="ffe27b1d-88ab-485d-899f-5b6c8d18ae53" containerType="regular" prevTag="div" className="md:col-span-2" data-magicpath-id="293" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="b6e98f3f-def2-4539-a972-a76df91f0dc6" containerType="regular" prevTag="div" className="flex items-center gap-2 mb-4" data-magicpath-id="294" data-magicpath-path="AutoGiftLanding.tsx">
                <Gift className="w-8 h-8 text-[#E2C382]" data-magicpath-id="295" data-magicpath-path="AutoGiftLanding.tsx" />
                <span className="text-2xl font-bold" data-magicpath-id="296" data-magicpath-path="AutoGiftLanding.tsx">AutoGift</span>
              </SortableContainer>
              <p className="text-white/60 mb-6 leading-relaxed" data-magicpath-id="297" data-magicpath-path="AutoGiftLanding.tsx">
                Your outsourced ABM gifting team. Handcrafted, hyper-personalized gifts done for you.
              </p>
              <SortableContainer dndKitId="0b9b62ca-d8e6-4df2-8d60-627e18945b27" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="298" data-magicpath-path="AutoGiftLanding.tsx">
                <a href="mailto:jschlisserman@gmail.com" className="text-[#E2C382] hover:text-[#F0D8B6] transition-colors" data-magicpath-id="299" data-magicpath-path="AutoGiftLanding.tsx">
                  <Mail className="w-5 h-5" data-magicpath-id="300" data-magicpath-path="AutoGiftLanding.tsx" />
                </a>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="9e080371-f2cc-4967-a0db-03d7f832d9d3" containerType="regular" prevTag="div" data-magicpath-id="301" data-magicpath-path="AutoGiftLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="302" data-magicpath-path="AutoGiftLanding.tsx">Quick Links</h4>
              <SortableContainer dndKitId="7bdeb9b0-2911-4016-9414-268c2fcff8de" containerType="regular" prevTag="ul" className="space-y-3" data-magicpath-id="303" data-magicpath-path="AutoGiftLanding.tsx">
                <li data-magicpath-id="304" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="305" data-magicpath-path="AutoGiftLanding.tsx">About</a></li>
                <li data-magicpath-id="306" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="307" data-magicpath-path="AutoGiftLanding.tsx">Pricing</a></li>
                <li data-magicpath-id="308" data-magicpath-path="AutoGiftLanding.tsx"><a href="mailto:jschlisserman@gmail.com" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="309" data-magicpath-path="AutoGiftLanding.tsx">Contact</a></li>
                <li data-magicpath-id="310" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="311" data-magicpath-path="AutoGiftLanding.tsx">Careers</a></li>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="8b3133c8-254f-4ce1-90cf-9e1f87a49084" containerType="regular" prevTag="div" data-magicpath-id="312" data-magicpath-path="AutoGiftLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="313" data-magicpath-path="AutoGiftLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="fb62d215-2fac-46b6-94b4-e42990096937" containerType="regular" prevTag="ul" className="space-y-3" data-magicpath-id="314" data-magicpath-path="AutoGiftLanding.tsx">
                <li data-magicpath-id="315" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="316" data-magicpath-path="AutoGiftLanding.tsx">Terms</a></li>
                <li data-magicpath-id="317" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="318" data-magicpath-path="AutoGiftLanding.tsx">Privacy</a></li>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="18d07c4a-2f24-46ba-a2a6-2fa14bc1cb25" containerType="regular" prevTag="div" className="border-t border-white/10 pt-8" data-magicpath-id="319" data-magicpath-path="AutoGiftLanding.tsx">
            <p className="text-center text-white/40 text-sm" data-magicpath-id="320" data-magicpath-path="AutoGiftLanding.tsx">
              © {new Date().getFullYear()} AutoGift. All rights reserved.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};