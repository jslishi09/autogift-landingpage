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
  return <SortableContainer dndKitId="894995d6-cbb4-4c14-a3f1-0212c665785f" containerType="regular" prevTag="div" className="min-h-screen bg-[#F6F6F4] text-[#0C0C0D] overflow-x-hidden" data-magicpath-id="0" data-magicpath-path="AutoGiftLanding.tsx">
      <SortableContainer dndKitId="828d8880-697e-46d4-b374-219d233a594a" containerType="regular" prevTag="motion.section" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden" style={{
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

        <SortableContainer dndKitId="8351d923-17d6-4fd2-b60d-83fa3c50141b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10" data-magicpath-id="5" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="31dc3a94-7663-465a-a19a-1e22caf2462a" containerType="regular" prevTag="motion.div" initial="hidden" animate="visible" variants={staggerChildren} data-magicpath-id="6" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="99fe33e3-b114-4a5b-a65e-52b549b9bc5a" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="7" data-magicpath-path="AutoGiftLanding.tsx">
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

            <SortableContainer dndKitId="8d7fb1bf-e488-4b44-86a4-ea136ef05bc7" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="flex flex-col sm:flex-row gap-4" data-magicpath-id="14" data-magicpath-path="AutoGiftLanding.tsx">
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

          <SortableContainer dndKitId="808ff3e6-114b-4578-a56a-f2f83ffe8e21" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="097b538e-a89e-45dd-a411-ca41a647eaf2" containerType="regular" prevTag="div" className="relative bg-white rounded-3xl shadow-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="21" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="87defeb2-3567-47c5-ae8e-5336b75011a8" containerType="regular" prevTag="motion.div" animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="space-y-6" data-magicpath-id="22" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="2400c629-17c6-4d76-88e3-7d40ddb34b3b" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#F0D8B6]/30 to-[#E2C382]/20 rounded-2xl p-6 backdrop-blur-sm" data-magicpath-id="23" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="663ba39c-87c4-4640-880c-eaa2dfe7caf9" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-4" data-magicpath-id="24" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="ad760d16-327b-463f-8558-f2ca86938c45" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-full flex items-center justify-center" data-magicpath-id="25" data-magicpath-path="AutoGiftLanding.tsx">
                      <Gift className="w-6 h-6 text-[#E2C382]" data-magicpath-id="26" data-magicpath-path="AutoGiftLanding.tsx" />
                    </SortableContainer>
                    <SortableContainer dndKitId="f84f2317-6699-479a-91f6-ce82326deaa5" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="27" data-magicpath-path="AutoGiftLanding.tsx">
                      <div className="h-3 bg-[#E2C382]/30 rounded-full w-3/4 mb-2" data-magicpath-id="28" data-magicpath-path="AutoGiftLanding.tsx" />
                      <div className="h-2 bg-[#E2C382]/20 rounded-full w-1/2" data-magicpath-id="29" data-magicpath-path="AutoGiftLanding.tsx" />
                    </SortableContainer>
                  </SortableContainer>
                  <SortableContainer dndKitId="2cd6892c-3a24-49be-b3e9-13bd0b9367a0" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="30" data-magicpath-path="AutoGiftLanding.tsx">
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="31" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-5/6" data-magicpath-id="32" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="6f495d07-fd56-49a2-89c4-65476497dcfb" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-4" data-magicpath-id="33" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="85572069-45e2-4acc-87c8-e7f4c35fd1ab" containerType="regular" prevTag="div" className="bg-[#073D2B]/5 rounded-xl p-4 backdrop-blur-sm" data-magicpath-id="34" data-magicpath-path="AutoGiftLanding.tsx">
                    <Package className="w-8 h-8 text-[#073D2B] mb-2" data-magicpath-id="35" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/20 rounded-full w-full" data-magicpath-id="36" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="a81b5b37-7800-4438-8c80-c276608d1305" containerType="regular" prevTag="div" className="bg-[#073D2B]/5 rounded-xl p-4 backdrop-blur-sm" data-magicpath-id="37" data-magicpath-path="AutoGiftLanding.tsx">
                    <Sparkles className="w-8 h-8 text-[#E2C382] mb-2" />
                    <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="38" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="42276aad-3b02-4e19-8b1f-5cfcb603c1a0" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/20 to-[#F0D8B6]/30 rounded-2xl p-6 backdrop-blur-sm border-2 border-[#E2C382]/30" data-magicpath-id="39" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="e9de5423-9e8d-42a9-8a47-bb1134ff58da" containerType="regular" prevTag="div" className="flex items-center justify-between mb-4" data-magicpath-id="40" data-magicpath-path="AutoGiftLanding.tsx">
                    <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="41" data-magicpath-path="AutoGiftLanding.tsx">Handwritten Note</span>
                    <CheckCircle2 className="w-5 h-5 text-[#073D2B]" data-magicpath-id="42" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="b55addff-d44a-4a12-8f00-a21660b719b8" containerType="regular" prevTag="div" className="space-y-2 opacity-60" data-magicpath-id="43" data-magicpath-path="AutoGiftLanding.tsx">
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-full" data-magicpath-id="44" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-4/5" data-magicpath-id="45" data-magicpath-path="AutoGiftLanding.tsx" />
                    <div className="h-2 bg-[#073D2B]/30 rounded-full w-3/4" data-magicpath-id="46" data-magicpath-path="AutoGiftLanding.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="1db0f79c-4490-4e97-8167-4e91592e9f67" containerType="regular" prevTag="motion.div" className="absolute -top-6 -right-6 w-24 h-24 bg-[#E2C382] rounded-full flex items-center justify-center shadow-xl" animate={{
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

      {showExampleForm && <SortableContainer dndKitId="df0ff198-ea12-4ce0-8be6-0134df568c1e" containerType="regular" prevTag="motion.div" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowExampleForm(false)} data-magicpath-id="48" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="62003296-189e-4414-a06a-9ec42cbffa1f" containerType="regular" prevTag="motion.div" initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()} data-magicpath-id="49" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="25f7dd26-cef2-4d32-afaf-c91ec5aeb97e" containerType="regular" prevTag="div" className="sticky top-0 bg-gradient-to-br from-[#E2C382] to-[#D4B574] p-8 rounded-t-3xl" data-magicpath-id="50" data-magicpath-path="AutoGiftLanding.tsx">
              <h3 className="text-3xl font-bold text-[#0C0C0D] mb-2" data-magicpath-id="51" data-magicpath-path="AutoGiftLanding.tsx">Request An Example</h3>
              <p className="text-[#0C0C0D]/70" data-magicpath-id="52" data-magicpath-path="AutoGiftLanding.tsx">Tell us about yourself and we'll show you what we can do</p>
            </SortableContainer>

            <SortableContainer dndKitId="5811a523-7449-4fb3-8ce4-7d0c0f82d397" containerType="regular" prevTag="form" onSubmit={handleFormSubmit} className="p-8 space-y-6" data-magicpath-id="53" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="1477ac83-767f-4458-a7b4-ba5a091659a6" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-6" data-magicpath-id="54" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="82a0427a-6df4-4944-ba02-9a6992ca6195" containerType="regular" prevTag="div" data-magicpath-id="55" data-magicpath-path="AutoGiftLanding.tsx">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="56" data-magicpath-path="AutoGiftLanding.tsx">
                    <User className="w-4 h-4 text-[#E2C382]" data-magicpath-id="57" data-magicpath-path="AutoGiftLanding.tsx" />
                    First Name *
                  </label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="John" data-magicpath-id="58" data-magicpath-path="AutoGiftLanding.tsx" />
                </SortableContainer>

                <SortableContainer dndKitId="a9051eb2-18c2-4ab2-b66d-92701b274380" containerType="regular" prevTag="div" data-magicpath-id="59" data-magicpath-path="AutoGiftLanding.tsx">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="60" data-magicpath-path="AutoGiftLanding.tsx">
                    <User className="w-4 h-4 text-[#E2C382]" data-magicpath-id="61" data-magicpath-path="AutoGiftLanding.tsx" />
                    Last Name *
                  </label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="Doe" data-magicpath-id="62" data-magicpath-path="AutoGiftLanding.tsx" />
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="8d06f123-254c-4dbc-a7ae-7b639f6943f2" containerType="regular" prevTag="div" data-magicpath-id="63" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="64" data-magicpath-path="AutoGiftLanding.tsx">
                  <Building2 className="w-4 h-4 text-[#E2C382]" data-magicpath-id="65" data-magicpath-path="AutoGiftLanding.tsx" />
                  Company Name *
                </label>
                <input type="text" name="companyName" required value={formData.companyName} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="Acme Corp" data-magicpath-id="66" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="4f22f97b-2171-4df1-9c6d-7064c33e848a" containerType="regular" prevTag="div" data-magicpath-id="67" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="68" data-magicpath-path="AutoGiftLanding.tsx">
                  <Briefcase className="w-4 h-4 text-[#E2C382]" data-magicpath-id="69" data-magicpath-path="AutoGiftLanding.tsx" />
                  Title *
                </label>
                <input type="text" name="title" required value={formData.title} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="VP of Sales" data-magicpath-id="70" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="999f1002-b66e-4e4a-aa5a-e1397f58177d" containerType="regular" prevTag="div" data-magicpath-id="71" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="72" data-magicpath-path="AutoGiftLanding.tsx">
                  <Mail className="w-4 h-4 text-[#E2C382]" data-magicpath-id="73" data-magicpath-path="AutoGiftLanding.tsx" />
                  Email Address *
                </label>
                <input type="email" name="email" required value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="john@acme.com" data-magicpath-id="74" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="5181d37e-2dd7-477f-b670-08f8fd084b27" containerType="regular" prevTag="div" data-magicpath-id="75" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="76" data-magicpath-path="AutoGiftLanding.tsx">
                  <MapPin className="w-4 h-4 text-[#E2C382]" data-magicpath-id="77" data-magicpath-path="AutoGiftLanding.tsx" />
                  Physical Address *
                </label>
                <input type="text" name="address" required value={formData.address} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="123 Main St, City, State, ZIP" data-magicpath-id="78" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="83533b3e-346c-4bc9-918a-267e11068992" containerType="regular" prevTag="div" data-magicpath-id="79" data-magicpath-path="AutoGiftLanding.tsx">
                <label className="flex items-center gap-2 text-sm font-medium text-[#0C0C0D] mb-2" data-magicpath-id="80" data-magicpath-path="AutoGiftLanding.tsx">
                  <Phone className="w-4 h-4 text-[#E2C382]" data-magicpath-id="81" data-magicpath-path="AutoGiftLanding.tsx" />
                  Phone Number *
                </label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 bg-[#F6F6F4] border border-[#E2C382]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2C382] transition-all" placeholder="(555) 123-4567" data-magicpath-id="82" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="98e9b00d-33c3-49d7-a4c0-7b17ee9a6410" containerType="regular" prevTag="div" className="flex gap-4 pt-4" data-magicpath-id="83" data-magicpath-path="AutoGiftLanding.tsx">
                <button type="button" onClick={() => setShowExampleForm(false)} className="flex-1 px-6 py-3 bg-[#F6F6F4] text-[#0C0C0D] rounded-xl font-medium hover:bg-[#E2C382]/10 transition-all" data-magicpath-id="84" data-magicpath-path="AutoGiftLanding.tsx">
                  Cancel
                </button>
                <SortableContainer dndKitId="43a66959-144b-4c17-bf73-3af7079bf694" containerType="regular" prevTag="button" type="submit" disabled={isSubmitting || submitSuccess} className="flex-1 px-6 py-3 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50" data-magicpath-id="85" data-magicpath-path="AutoGiftLanding.tsx">
                  {submitSuccess ? <span className="flex items-center justify-center gap-2" data-magicpath-id="86" data-magicpath-path="AutoGiftLanding.tsx">
                      <CheckCircle2 className="w-5 h-5" data-magicpath-id="87" data-magicpath-path="AutoGiftLanding.tsx" />
                      Sent!
                    </span> : isSubmitting ? 'Sending...' : 'Submit Request'}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>}

      <SortableContainer dndKitId="d28a942c-5d1a-4880-b347-0446d25b0b55" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-20 px-4" data-magicpath-id="88" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="6412b497-bbdd-4689-b979-19bd44a75378" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="89" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="178c834f-6f84-450f-935b-cf807ac507e8" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="90" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-sm font-semibold text-[#E2C382] tracking-wider uppercase mb-4" data-magicpath-id="91" data-magicpath-path="AutoGiftLanding.tsx">Trusted By</h2>
            <SortableContainer dndKitId="da5408d6-6147-48a9-af1e-d527422588a3" containerType="regular" prevTag="div" className="flex flex-wrap justify-center items-center gap-8 opacity-60" data-magicpath-id="92" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="616f0307-f01b-48af-beaa-145467d11b13" containerType="regular" prevTag="div" className="w-32 h-16 bg-[#2A3B6D] rounded-lg flex items-center justify-center overflow-hidden" data-magicpath-id="93" data-magicpath-path="AutoGiftLanding.tsx">
                <img src="https://i.ibb.co/CJzXDkL/cervo-logo.png" alt="Cervo" className="w-full h-full object-contain p-2" data-magicpath-id="94" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="95" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="96" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
              <div className="w-32 h-16 bg-[#0C0C0D]/5 rounded-lg flex items-center justify-center text-xs font-medium text-[#0C0C0D]/40" data-magicpath-id="97" data-magicpath-path="AutoGiftLanding.tsx">
                CLIENT LOGO
              </div>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="a9bebfa4-4a41-49a7-939d-ed638a04666b" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="98" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="46cae39f-4d58-4459-bd84-dd25785df4fb" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="99" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="b18dab10-a00a-4e4e-a6bf-87c0555c12c0" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="100" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-6" data-magicpath-id="101" data-magicpath-path="AutoGiftLanding.tsx">
              Your Personal Gifting & Outbound Team — On Demand
            </h2>
            <p className="text-xl text-[#0C0C0D]/70 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="102" data-magicpath-path="AutoGiftLanding.tsx">
              The AutoGift Pilot Program is a fully-managed gifting service for teams who need to reach high-value contacts with thoughtful, personalized, premium gifts that stand out.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="76927f8e-ff2b-4242-81cf-311fe73e96ac" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mb-12" data-magicpath-id="103" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="756dfa35-8145-4f85-8138-9e16c95b9ad4" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="104" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="57228449-fc33-4b15-b33c-7397ce1010b4" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="105" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="106" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="107" data-magicpath-path="AutoGiftLanding.tsx">The contacts you want to reach</h3>
            </SortableContainer>

            <SortableContainer dndKitId="c1c608d7-06ba-4cf7-af33-2d958c5db6b4" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="108" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="dce2301a-6d65-40f2-8f95-93b79bf79a89" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="109" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="110" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="111" data-magicpath-path="AutoGiftLanding.tsx">Your budget per person</h3>
            </SortableContainer>

            <SortableContainer dndKitId="cb78cfa4-7e73-45e4-ae7d-e80874bef869" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-2xl p-8 border border-[#E2C382]/20" data-magicpath-id="112" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="16338dff-6977-4865-9974-65bc1745da12" containerType="regular" prevTag="div" className="w-12 h-12 bg-[#073D2B] rounded-xl flex items-center justify-center mb-4" data-magicpath-id="113" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-6 h-6 text-[#E2C382]" data-magicpath-id="114" data-magicpath-path="AutoGiftLanding.tsx" />
              </SortableContainer>
              <h3 className="text-lg font-bold text-[#0C0C0D] mb-2" data-magicpath-id="115" data-magicpath-path="AutoGiftLanding.tsx">The outcome you want</h3>
            </SortableContainer>
          </SortableContainer>

          <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-center text-2xl font-semibold text-[#073D2B]" data-magicpath-id="116" data-magicpath-path="AutoGiftLanding.tsx">
            We handle everything else.
          </motion.p>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="b9aaeceb-8b90-4ba3-96b0-985f11b0ebf1" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-b from-white to-[#F6F6F4]" data-magicpath-id="117" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="34d5a6d9-ab6c-4aaf-91f0-a9bf27e6aac7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="118" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="244d161d-b502-40b3-a23b-c0a2b0afc464" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-20" data-magicpath-id="119" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="120" data-magicpath-path="AutoGiftLanding.tsx">
              How It Works
            </h2>
            <p className="text-xl text-[#0C0C0D]/70" data-magicpath-id="121" data-magicpath-path="AutoGiftLanding.tsx">Four simple steps to perfect gifts</p>
          </SortableContainer>

          <SortableContainer dndKitId="95f353ca-9445-48ba-9731-bb92706c39c8" containerType="regular" prevTag="div" className="space-y-24" data-magicpath-id="122" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="b5f6c1c2-d2c1-41f8-aa5b-6f309f5955c8" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="123" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="63ed6ecc-4ab0-4e4f-ad86-c85d0fb1b9da" containerType="regular" prevTag="div" className="order-2 lg:order-1" data-magicpath-id="124" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="99dab6cf-160f-4f24-98ca-7822e67d8e7c" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="125" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="126" data-magicpath-path="AutoGiftLanding.tsx">1</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="127" data-magicpath-path="AutoGiftLanding.tsx">STEP ONE</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="128" data-magicpath-path="AutoGiftLanding.tsx">
                  Submit Your List (or We Build It for You)
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed" data-magicpath-id="129" data-magicpath-path="AutoGiftLanding.tsx">
                  Give us names OR let our research team find the right prospects. We'll deliver targeted profiles with context, interests, and angles.
                </p>
              </SortableContainer>
              <SortableContainer dndKitId="a2c63fdd-bc36-4502-9093-53cf653914c4" containerType="regular" prevTag="div" className="order-1 lg:order-2" data-magicpath-id="130" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="25e3d3fd-6cea-4832-8ea9-9d191d50a70f" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="131" data-magicpath-path="AutoGiftLanding.tsx">
                  <div className="space-y-4" data-magicpath-id="132" data-magicpath-path="AutoGiftLanding.tsx">
                    {['Contact 1', 'Contact 2', 'Contact 3'].map((contact, i) => <SortableContainer dndKitId="b3d71e4b-015b-4e50-b5ff-ed6b3b6db214" containerType="regular" prevTag="motion.div" key={contact} initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: i * 0.1
                  }} className="flex items-center gap-4 p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="133" data-magicpath-path="AutoGiftLanding.tsx">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#E2C382] to-[#D4B574] rounded-full" data-magicpath-id="134" data-magicpath-path="AutoGiftLanding.tsx" />
                        <SortableContainer dndKitId="3fe91805-20f0-4499-8af5-235b3f340ed9" containerType="regular" prevTag="div" className="flex-1 space-y-2" data-magicpath-id="135" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-3 bg-[#E2C382]/30 rounded-full w-3/4" data-magicpath-id="136" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-1/2" data-magicpath-id="137" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                        <Users className="w-5 h-5 text-[#E2C382]" data-magicpath-id="138" data-magicpath-path="AutoGiftLanding.tsx" />
                      </SortableContainer>)}
                  </div>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="ddc5fae7-425e-4e2a-95e4-c34a3198156f" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="139" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="6398599e-5890-46a4-bbdf-4658a1f02160" containerType="regular" prevTag="div" data-magicpath-id="140" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="2fc5ce16-9e46-4c15-97b6-32836da8036d" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="141" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="0251e71c-ac67-43ac-b471-7a474f966127" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="142" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="cb1fff0f-98bc-4565-9e55-694c244138bc" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="143" data-magicpath-path="AutoGiftLanding.tsx">
                      <Target className="w-8 h-8 text-[#E2C382] flex-shrink-0 mt-1" data-magicpath-id="144" data-magicpath-path="AutoGiftLanding.tsx" />
                      <SortableContainer dndKitId="9d260520-1bc0-4eaf-9e03-8e2cd5fa0eff" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="145" data-magicpath-path="AutoGiftLanding.tsx">
                        <h4 className="font-semibold text-[#0C0C0D] mb-2" data-magicpath-id="146" data-magicpath-path="AutoGiftLanding.tsx">Deep Research</h4>
                        <SortableContainer dndKitId="1c2f4375-a597-4988-ae32-b2ea4a6ceba5" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="147" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-full" data-magicpath-id="148" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-5/6" data-magicpath-id="149" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#073D2B]/20 rounded-full w-4/6" data-magicpath-id="150" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="81aa48cc-805c-4335-b29f-71769829e68e" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="151" data-magicpath-path="AutoGiftLanding.tsx">
                      <Sparkles className="w-8 h-8 text-[#E2C382] flex-shrink-0 mt-1" />
                      <SortableContainer dndKitId="240092e6-aded-4783-b841-7ae186c272b1" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="152" data-magicpath-path="AutoGiftLanding.tsx">
                        <h4 className="font-semibold text-[#0C0C0D] mb-2" data-magicpath-id="153" data-magicpath-path="AutoGiftLanding.tsx">Personality Analysis</h4>
                        <SortableContainer dndKitId="24eec1b4-def3-4bd4-a70c-a4397e57d980" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="154" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-full" data-magicpath-id="155" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-[#E2C382]/20 rounded-full w-3/4" data-magicpath-id="156" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="b77202e6-62a9-4bcc-80df-6a3bd508db9d" containerType="regular" prevTag="div" data-magicpath-id="157" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="1e1863ef-e5d9-4a85-be65-d841c13227fe" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="158" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="159" data-magicpath-path="AutoGiftLanding.tsx">2</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="160" data-magicpath-path="AutoGiftLanding.tsx">STEP TWO</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="161" data-magicpath-path="AutoGiftLanding.tsx">
                  Personalized Research
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed" data-magicpath-id="162" data-magicpath-path="AutoGiftLanding.tsx">
                  We dig into each contact: their role, personality, social footprint, company, interests, critique style, and what would impress them specifically.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="48016852-4fdb-4ef9-8aa9-ade7ce3ebdf9" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="163" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="092ba40a-be01-499d-9cae-a1348ddc6bde" containerType="regular" prevTag="div" className="order-2 lg:order-1" data-magicpath-id="164" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="28bba499-7313-49b0-a2e8-8f43b94e8573" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="165" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="166" data-magicpath-path="AutoGiftLanding.tsx">3</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="167" data-magicpath-path="AutoGiftLanding.tsx">STEP THREE</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="168" data-magicpath-path="AutoGiftLanding.tsx">
                  Gift Design & Production
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed mb-6" data-magicpath-id="169" data-magicpath-path="AutoGiftLanding.tsx">
                  We craft a custom gift for every individual:
                </p>
                <ul className="space-y-3" data-magicpath-id="170" data-magicpath-path="AutoGiftLanding.tsx">
                  {['Sourcing unique items', 'Custom branding & packaging', 'Handwritten or AI-personalized notes', 'Custom inserts', 'Premium kitting & fulfillment'].map((item, i) => <motion.li data-magicpath-motion-tag="motion.li" key={item} initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: i * 0.1
                }} className="flex items-center gap-3" data-magicpath-id="171" data-magicpath-path="AutoGiftLanding.tsx">
                      <CheckCircle2 className="w-5 h-5 text-[#073D2B] flex-shrink-0" data-magicpath-id="172" data-magicpath-path="AutoGiftLanding.tsx" />
                      <span className="text-[#0C0C0D]/80" data-magicpath-id="173" data-magicpath-path="AutoGiftLanding.tsx">{item}</span>
                    </motion.li>)}
                </ul>
              </SortableContainer>
              <SortableContainer dndKitId="82f3a9ee-7a7e-422d-a7ae-cb2d0219e76a" containerType="regular" prevTag="div" className="order-1 lg:order-2" data-magicpath-id="174" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="c05cf3b0-7cbe-47c2-bd63-fe69e569f287" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#073D2B] to-[#0a5a41] rounded-3xl shadow-2xl p-8 text-white" data-magicpath-id="175" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="245a7776-d6c8-48dc-91b3-199a024d53c3" containerType="regular" prevTag="motion.div" animate={{
                  rotateY: [0, 5, 0, -5, 0]
                }} transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} className="relative" data-magicpath-id="176" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="2002d0de-4c7a-4868-ac6c-28a8905e1f06" containerType="regular" prevTag="div" className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20" data-magicpath-id="177" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="58d68caa-2088-414f-b07c-14357741caac" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-6" data-magicpath-id="178" data-magicpath-path="AutoGiftLanding.tsx">
                        <SortableContainer dndKitId="b9bcfdc6-088e-4f3a-9110-d3873aca12de" containerType="regular" prevTag="div" className="w-16 h-16 bg-[#E2C382] rounded-full flex items-center justify-center" data-magicpath-id="179" data-magicpath-path="AutoGiftLanding.tsx">
                          <Gift className="w-8 h-8 text-[#073D2B]" data-magicpath-id="180" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                        <SortableContainer dndKitId="5c0f61ee-bbc2-49a2-afe4-84918cde30d7" containerType="regular" prevTag="div" data-magicpath-id="181" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-3 bg-white/30 rounded-full w-32 mb-2" data-magicpath-id="182" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/20 rounded-full w-24" data-magicpath-id="183" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                      <SortableContainer dndKitId="b020d2db-ecce-4077-b0fc-22955da2ecc3" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-4" data-magicpath-id="184" data-magicpath-path="AutoGiftLanding.tsx">
                        <div className="bg-white/10 rounded-xl p-4 aspect-square" data-magicpath-id="185" data-magicpath-path="AutoGiftLanding.tsx" />
                        <div className="bg-white/10 rounded-xl p-4 aspect-square" data-magicpath-id="186" data-magicpath-path="AutoGiftLanding.tsx" />
                      </SortableContainer>
                      <SortableContainer dndKitId="e2cf8857-932b-469e-9d07-cafa190038fc" containerType="regular" prevTag="div" className="mt-4 p-4 bg-[#E2C382]/20 rounded-xl" data-magicpath-id="187" data-magicpath-path="AutoGiftLanding.tsx">
                        <SortableContainer dndKitId="02e831f9-3de8-4a0b-adef-cd90f25b06cd" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="188" data-magicpath-path="AutoGiftLanding.tsx">
                          <div className="h-2 bg-white/40 rounded-full w-full" data-magicpath-id="189" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/30 rounded-full w-4/5" data-magicpath-id="190" data-magicpath-path="AutoGiftLanding.tsx" />
                          <div className="h-2 bg-white/30 rounded-full w-3/5" data-magicpath-id="191" data-magicpath-path="AutoGiftLanding.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                    <SortableContainer dndKitId="46529f1a-26c5-44ae-b4e3-b2b1e8e703ff" containerType="regular" prevTag="motion.div" animate={{
                    rotate: 360
                  }} transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }} className="absolute -top-4 -right-4 w-16 h-16 bg-[#E2C382] rounded-full flex items-center justify-center shadow-lg" data-magicpath-id="192" data-magicpath-path="AutoGiftLanding.tsx">
                      <Sparkles className="w-8 h-8 text-[#073D2B]" />
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="4de605d9-2009-40ca-a216-05319c756101" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="193" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="a388d9fb-9eef-42e7-9e62-17823e94489c" containerType="regular" prevTag="div" data-magicpath-id="194" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="ee200d1e-be02-4e1c-9dc2-1d4a64aa382f" containerType="regular" prevTag="div" className="bg-white rounded-3xl shadow-xl p-8 border border-[#E2C382]/20" data-magicpath-id="195" data-magicpath-path="AutoGiftLanding.tsx">
                  <SortableContainer dndKitId="e8bf3d6b-b55d-4cae-930c-8145d76e790d" containerType="regular" prevTag="div" className="space-y-6" data-magicpath-id="196" data-magicpath-path="AutoGiftLanding.tsx">
                    <SortableContainer dndKitId="00e947c4-5e19-44e9-b97c-b0d96fc5319f" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="197" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="f17a2cca-d57f-47cf-ae79-969cc4fb569c" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="198" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#073D2B]" data-magicpath-id="199" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="200" data-magicpath-path="AutoGiftLanding.tsx">Gift #1</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#073D2B] text-white text-xs font-medium rounded-full" data-magicpath-id="201" data-magicpath-path="AutoGiftLanding.tsx">
                        Delivered
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="197553ad-1f03-439d-aa7e-3724f5aa594f" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="202" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="a0118730-8f8a-4c6c-a514-57954e923e8c" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="203" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#073D2B]" data-magicpath-id="204" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="205" data-magicpath-path="AutoGiftLanding.tsx">Gift #2</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#073D2B] text-white text-xs font-medium rounded-full" data-magicpath-id="206" data-magicpath-path="AutoGiftLanding.tsx">
                        Delivered
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="7e32bfb6-4bc3-43aa-b261-268eda8513e5" containerType="regular" prevTag="div" className="flex items-center justify-between p-4 bg-[#F6F6F4] rounded-xl" data-magicpath-id="207" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="e787bfbd-7249-4cc3-8b88-7d55e97c34ff" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="208" data-magicpath-path="AutoGiftLanding.tsx">
                        <Package className="w-6 h-6 text-[#E2C382]" data-magicpath-id="209" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-medium text-[#0C0C0D]" data-magicpath-id="210" data-magicpath-path="AutoGiftLanding.tsx">Gift #3</span>
                      </SortableContainer>
                      <span className="px-3 py-1 bg-[#E2C382]/20 text-[#073D2B] text-xs font-medium rounded-full" data-magicpath-id="211" data-magicpath-path="AutoGiftLanding.tsx">
                        In Transit
                      </span>
                    </SortableContainer>
                    <SortableContainer dndKitId="891967ef-20e1-44e0-85a5-d9aaeb366d87" containerType="regular" prevTag="div" className="mt-6 p-4 bg-gradient-to-r from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-xl border border-[#E2C382]/20" data-magicpath-id="212" data-magicpath-path="AutoGiftLanding.tsx">
                      <SortableContainer dndKitId="a8c162f1-43b0-497f-8526-4755d72bbab3" containerType="regular" prevTag="div" className="flex items-center gap-2 mb-2" data-magicpath-id="213" data-magicpath-path="AutoGiftLanding.tsx">
                        <TrendingUp className="w-5 h-5 text-[#073D2B]" data-magicpath-id="214" data-magicpath-path="AutoGiftLanding.tsx" />
                        <span className="font-semibold text-[#0C0C0D]" data-magicpath-id="215" data-magicpath-path="AutoGiftLanding.tsx">Response Rate</span>
                      </SortableContainer>
                      <p className="text-3xl font-bold text-[#073D2B]" data-magicpath-id="216" data-magicpath-path="AutoGiftLanding.tsx">87%</p>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="a8c07b1b-e3ac-4fb2-b11c-5beb50989568" containerType="regular" prevTag="div" data-magicpath-id="217" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="1b7912ee-2490-43b7-9589-3aea0e976057" containerType="regular" prevTag="div" className="inline-flex items-center gap-3 px-4 py-2 bg-[#E2C382]/10 rounded-full border border-[#E2C382]/30 mb-6" data-magicpath-id="218" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="w-8 h-8 bg-[#E2C382] rounded-full flex items-center justify-center text-[#0C0C0D] font-bold text-sm" data-magicpath-id="219" data-magicpath-path="AutoGiftLanding.tsx">4</span>
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="220" data-magicpath-path="AutoGiftLanding.tsx">STEP FOUR</span>
                </SortableContainer>
                <h3 className="text-3xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="221" data-magicpath-path="AutoGiftLanding.tsx">
                  Deliver & Report
                </h3>
                <p className="text-lg text-[#0C0C0D]/70 leading-relaxed" data-magicpath-id="222" data-magicpath-path="AutoGiftLanding.tsx">
                  We ship each gift, track delivery, monitor responses, and follow up with a report on engagement + outcomes.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="6cc66908-33cd-42bd-b4ba-97ff5e89cfe5" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="223" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="727c95e9-fd13-4960-a47c-0f52c42c7ccc" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="224" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="6d857724-a379-4d65-b590-435199dc5d95" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="225" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="226" data-magicpath-path="AutoGiftLanding.tsx">
              Simple, Transparent Pilot Pricing
            </h2>
            <p className="text-xl text-[#0C0C0D]/70 max-w-2xl mx-auto" data-magicpath-id="227" data-magicpath-path="AutoGiftLanding.tsx">
              You set the gift budget. We charge a 10% service margin on top — that's it.
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="4c65a41d-96b4-4551-a72a-13c6a57aa419" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="bg-gradient-to-br from-[#E2C382]/10 to-[#F0D8B6]/10 rounded-3xl p-12 border-2 border-[#E2C382]/30 mb-12" data-magicpath-id="228" data-magicpath-path="AutoGiftLanding.tsx">
            <h3 className="text-2xl font-bold text-[#0C0C0D] mb-8" data-magicpath-id="229" data-magicpath-path="AutoGiftLanding.tsx">We include:</h3>
            <div className="grid md:grid-cols-2 gap-6" data-magicpath-id="230" data-magicpath-path="AutoGiftLanding.tsx">
              {['Contact research', 'Gift concepting', 'Sourcing & procurement', 'Branding & packaging', 'Handwritten notes', 'Kitting & fulfillment', 'Project management'].map((item, i) => <SortableContainer dndKitId="b9a293e7-1a08-409b-8107-d9d8b00d371a" containerType="regular" prevTag="motion.div" key={item} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: i * 0.1
            }} className="flex items-center gap-3" data-magicpath-id="231" data-magicpath-path="AutoGiftLanding.tsx">
                  <CheckCircle2 className="w-6 h-6 text-[#073D2B] flex-shrink-0" data-magicpath-id="232" data-magicpath-path="AutoGiftLanding.tsx" />
                  <span className="text-lg text-[#0C0C0D]" data-magicpath-id="233" data-magicpath-path="AutoGiftLanding.tsx">{item}</span>
                </SortableContainer>)}
            </div>
          </SortableContainer>

          <SortableContainer dndKitId="3061be35-3e8c-4328-a595-cfa572bda474" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="space-y-6 mb-12" data-magicpath-id="234" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="b2e503d7-a205-4485-ba2b-9627394a194e" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="235" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="f021032e-3758-4124-b312-84002ff972e0" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="236" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="7af4556f-0d03-421d-ab90-55d58e0b545a" containerType="regular" prevTag="div" data-magicpath-id="237" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="238" data-magicpath-path="AutoGiftLanding.tsx">$100 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="239" data-magicpath-path="AutoGiftLanding.tsx">$110 <span className="text-lg font-normal text-[#0C0C0D]/60" data-magicpath-id="240" data-magicpath-path="AutoGiftLanding.tsx">total per recipient</span></p>
                </SortableContainer>
                <SortableContainer dndKitId="dea7c873-d684-4cf0-9c32-03b7ba0eba6c" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="241" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="242" data-magicpath-path="AutoGiftLanding.tsx">10% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="b821f45a-2385-4fda-86ea-322157867265" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="243" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="40fb1cc8-6548-483c-9f84-1757877ab318" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="244" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="ece063ec-c4d6-4ba1-bbfb-cbe7488ecce3" containerType="regular" prevTag="div" data-magicpath-id="245" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="246" data-magicpath-path="AutoGiftLanding.tsx">$250 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="247" data-magicpath-path="AutoGiftLanding.tsx">$275 <span className="text-lg font-normal text-[#0C0C0D]/60" data-magicpath-id="248" data-magicpath-path="AutoGiftLanding.tsx">total per recipient</span></p>
                </SortableContainer>
                <SortableContainer dndKitId="7829c09c-a312-4630-a8e2-6b0c8761e7b5" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="249" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="250" data-magicpath-path="AutoGiftLanding.tsx">10% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="5137e05e-d3ec-4289-b813-05e53de5409e" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-8 border-2 border-[#E2C382]/20 shadow-lg" data-magicpath-id="251" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="6408946a-1dfd-430a-83af-baae03e00697" containerType="regular" prevTag="div" className="flex items-center justify-between flex-wrap gap-4" data-magicpath-id="252" data-magicpath-path="AutoGiftLanding.tsx">
                <SortableContainer dndKitId="c2a471cc-776a-4561-9a32-9aaf6eebbc87" containerType="regular" prevTag="div" data-magicpath-id="253" data-magicpath-path="AutoGiftLanding.tsx">
                  <p className="text-[#0C0C0D]/60 mb-1" data-magicpath-id="254" data-magicpath-path="AutoGiftLanding.tsx">$500 gift budget</p>
                  <p className="text-3xl font-bold text-[#0C0C0D]" data-magicpath-id="255" data-magicpath-path="AutoGiftLanding.tsx">$550 <span className="text-lg font-normal text-[#0C0C0D]/60" data-magicpath-id="256" data-magicpath-path="AutoGiftLanding.tsx">total per recipient</span></p>
                </SortableContainer>
                <SortableContainer dndKitId="4b70fbce-62dc-4187-82ba-f6d1d5fe3c0f" containerType="regular" prevTag="div" className="px-6 py-3 bg-gradient-to-r from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-full" data-magicpath-id="257" data-magicpath-path="AutoGiftLanding.tsx">
                  <span className="text-sm font-medium text-[#073D2B]" data-magicpath-id="258" data-magicpath-path="AutoGiftLanding.tsx">10% service margin</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="765988de-96f6-4c3a-9301-c5c8c16f387e" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center" data-magicpath-id="259" data-magicpath-path="AutoGiftLanding.tsx">
            <a href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300" data-magicpath-id="260" data-magicpath-path="AutoGiftLanding.tsx">
              Start Your Pilot
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="547c1145-d080-4915-a374-2803b0ffa36b" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-b from-white to-[#F6F6F4]" data-magicpath-id="261" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="72f223cc-ef01-4871-ac61-c5ba0e7c9896" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="262" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="83bd0e59-9858-418b-a896-e083a4ad6f30" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="263" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="264" data-magicpath-path="AutoGiftLanding.tsx">
              Perfect For Teams That Need…
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="c8836639-114a-4c53-882c-eafb2bff9158" containerType="collection" prevTag="motion.div" variants={staggerChildren} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="265" data-magicpath-path="AutoGiftLanding.tsx">
            {[{
            icon: Target,
            label: 'High-impact outbound',
            mpid: "2bc62530-c6bf-40d0-bfa4-ed98bc215697"
          }, {
            icon: Users,
            label: 'ABM campaigns',
            mpid: "11f431b6-8969-49d8-9651-aa30e91cc115"
          }, {
            icon: TrendingUp,
            label: 'Executive outreach',
            mpid: "3854fab5-9e0c-440b-a15c-85fb4d3470f0"
          }, {
            icon: Send,
            label: 'Pipeline reactivation',
            mpid: "58751bad-aef4-449a-ba84-2cda8f0d1633"
          }, {
            icon: Heart,
            label: 'Founder-to-founder gifting',
            mpid: "e972c347-574b-4642-a72b-6d3e956a8116"
          }, {
            icon: Sparkles,
            label: 'CSM-led surprises & delight',
            mpid: "35c5c1c5-2068-4e24-a17d-5c0a18516f93"
          }, {
            icon: Mail,
            label: 'Sales-to-C-suite intros',
            mpid: "150e08db-b787-48df-992e-1386f27ae052"
          }, {
            icon: Gift,
            label: 'Corporate gifting',
            mpid: "eefaef52-5039-4a4c-93e8-983337db6423"
          }].map((item, i) => <motion.div data-magicpath-motion-tag="motion.div" key={item.label} variants={fadeInUp} whileHover={{
            scale: 1.05,
            y: -5
          }} className="bg-white rounded-2xl p-8 border border-[#E2C382]/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="266" data-magicpath-path="AutoGiftLanding.tsx">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E2C382]/20 to-[#F0D8B6]/20 rounded-2xl flex items-center justify-center mx-auto mb-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="267" data-magicpath-path="AutoGiftLanding.tsx">
                  <item.icon className="w-8 h-8 text-[#073D2B]" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="268" data-magicpath-path="AutoGiftLanding.tsx" />
                </div>
                <p className="font-semibold text-[#0C0C0D]" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="269" data-magicpath-path="AutoGiftLanding.tsx">{item.label}</p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="d4e9ae70-9daf-4f66-a2a3-6214cc834883" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-white" data-magicpath-id="270" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="9ffbbec1-a475-436a-9208-8d92443a80ea" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="271" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="aa0efb94-1356-4b2f-9ecd-9e14d636e6a3" containerType="regular" prevTag="motion.div" variants={fadeInUp} className="text-center mb-16" data-magicpath-id="272" data-magicpath-path="AutoGiftLanding.tsx">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0C0D] mb-4" data-magicpath-id="273" data-magicpath-path="AutoGiftLanding.tsx">
              Because Attention Is Earned, Not Automated
            </h2>
          </SortableContainer>

          <motion.div data-magicpath-motion-tag="motion.div" variants={staggerChildren} className="grid md:grid-cols-2 gap-8" data-magicpath-id="274" data-magicpath-path="AutoGiftLanding.tsx">
            {['Every gift is designed specifically for the recipient', 'We handle all research and context', 'We source items that are unique, premium, and personal', 'Handwritten notes increase response rates dramatically', 'Dimensional mail gets opened almost 100% of the time', 'You save 10–20 hours/week of SDR bandwidth', 'You run a luxury, thoughtful campaign without lifting a finger'].map((benefit, i) => <SortableContainer dndKitId="1c08a01a-0b24-4f7f-b193-c1216ba02bb2" containerType="regular" prevTag="motion.div" key={benefit} variants={fadeInUp} whileHover={{
            x: 10
          }} className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#E2C382]/5 to-[#F0D8B6]/5 rounded-2xl border border-[#E2C382]/20 hover:border-[#E2C382]/40 transition-all duration-300" data-magicpath-id="275" data-magicpath-path="AutoGiftLanding.tsx">
                <CheckCircle2 className="w-7 h-7 text-[#073D2B] flex-shrink-0 mt-1" data-magicpath-id="276" data-magicpath-path="AutoGiftLanding.tsx" />
                <p className="text-lg text-[#0C0C0D]" data-magicpath-id="277" data-magicpath-path="AutoGiftLanding.tsx">{benefit}</p>
              </SortableContainer>)}
          </motion.div>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="e02da947-d387-43d9-bc52-77bec2839a40" containerType="regular" prevTag="motion.section" initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} variants={staggerChildren} className="py-32 px-4 bg-gradient-to-br from-[#073D2B] to-[#0a5a41] text-white relative overflow-hidden" data-magicpath-id="278" data-magicpath-path="AutoGiftLanding.tsx">
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute top-0 right-0 w-96 h-96 bg-[#E2C382]/10 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity
      }} data-magicpath-id="279" data-magicpath-path="AutoGiftLanding.tsx" />
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        delay: 1
      }} data-magicpath-id="280" data-magicpath-path="AutoGiftLanding.tsx" />

        <SortableContainer dndKitId="2edc3a0e-57ca-4ebb-a571-d759ca458917" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center relative z-10" data-magicpath-id="281" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="a48a834b-fdee-4ce8-ba53-8295c24c13f3" containerType="regular" prevTag="motion.div" variants={fadeInUp} data-magicpath-id="282" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="473c0a4b-035f-4fdb-afce-165d3f5e480d" containerType="regular" prevTag="div" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8" data-magicpath-id="283" data-magicpath-path="AutoGiftLanding.tsx">
              <Sparkles className="w-4 h-4 text-[#E2C382]" />
              <span className="text-sm font-medium" data-magicpath-id="284" data-magicpath-path="AutoGiftLanding.tsx">Ready to Get Started?</span>
            </SortableContainer>
          </SortableContainer>

          <motion.h2 data-magicpath-motion-tag="motion.h2" variants={fadeInUp} className="text-5xl lg:text-6xl font-bold mb-6" data-magicpath-id="285" data-magicpath-path="AutoGiftLanding.tsx">
            Ready to Reach Anyone With the Perfect Gift?
          </motion.h2>
          
          <motion.p data-magicpath-motion-tag="motion.p" variants={fadeInUp} className="text-2xl text-white/80 mb-12" data-magicpath-id="286" data-magicpath-path="AutoGiftLanding.tsx">
            Tell us who — and your budget. We'll take care of everything else.
          </motion.p>

          <SortableContainer dndKitId="6e7a7e71-ed60-4705-a2da-0b5d0ac8eb99" containerType="regular" prevTag="motion.div" variants={fadeInUp} data-magicpath-id="287" data-magicpath-path="AutoGiftLanding.tsx">
            <a href="https://www.calendly.com/joshschlisserman" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-gradient-to-r from-[#E2C382] to-[#D4B574] text-[#0C0C0D] rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105" data-magicpath-id="288" data-magicpath-path="AutoGiftLanding.tsx">
              <span className="flex items-center justify-center gap-3" data-magicpath-id="289" data-magicpath-path="AutoGiftLanding.tsx">
                Start Your Pilot
                <Gift className="w-6 h-6" data-magicpath-id="290" data-magicpath-path="AutoGiftLanding.tsx" />
              </span>
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="7d5739e1-97a8-449f-95dc-f2fcdab569b4" containerType="regular" prevTag="footer" className="bg-[#0C0C0D] text-white py-16 px-4" data-magicpath-id="291" data-magicpath-path="AutoGiftLanding.tsx">
        <SortableContainer dndKitId="401c8c64-6434-4f2b-aa71-ad5eefe2d18a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="292" data-magicpath-path="AutoGiftLanding.tsx">
          <SortableContainer dndKitId="a44dcbb6-39c2-45f7-877c-9cb9b04f61ca" containerType="regular" prevTag="div" className="grid md:grid-cols-4 gap-12 mb-12" data-magicpath-id="293" data-magicpath-path="AutoGiftLanding.tsx">
            <SortableContainer dndKitId="76a7e62a-e133-4fa5-885d-b103e3cc01d3" containerType="regular" prevTag="div" className="md:col-span-2" data-magicpath-id="294" data-magicpath-path="AutoGiftLanding.tsx">
              <SortableContainer dndKitId="fe655f4c-b9dc-4b02-b225-87cf56c1804b" containerType="regular" prevTag="div" className="flex items-center gap-2 mb-4" data-magicpath-id="295" data-magicpath-path="AutoGiftLanding.tsx">
                <Gift className="w-8 h-8 text-[#E2C382]" data-magicpath-id="296" data-magicpath-path="AutoGiftLanding.tsx" />
                <span className="text-2xl font-bold" data-magicpath-id="297" data-magicpath-path="AutoGiftLanding.tsx">AutoGift</span>
              </SortableContainer>
              <p className="text-white/60 mb-6 leading-relaxed" data-magicpath-id="298" data-magicpath-path="AutoGiftLanding.tsx">
                Your outsourced ABM gifting team. Handcrafted, hyper-personalized gifts done for you.
              </p>
              <SortableContainer dndKitId="2ff58134-764d-4380-85da-a6acf0313fc6" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="299" data-magicpath-path="AutoGiftLanding.tsx">
                <a href="mailto:jschlisserman@gmail.com" className="text-[#E2C382] hover:text-[#F0D8B6] transition-colors" data-magicpath-id="300" data-magicpath-path="AutoGiftLanding.tsx">
                  <Mail className="w-5 h-5" data-magicpath-id="301" data-magicpath-path="AutoGiftLanding.tsx" />
                </a>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="ae354ce3-9112-4878-9fb8-9cf17134dcf7" containerType="regular" prevTag="div" data-magicpath-id="302" data-magicpath-path="AutoGiftLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="303" data-magicpath-path="AutoGiftLanding.tsx">Quick Links</h4>
              <SortableContainer dndKitId="759fc0e5-a076-4681-a482-85265e7ef77b" containerType="regular" prevTag="ul" className="space-y-3" data-magicpath-id="304" data-magicpath-path="AutoGiftLanding.tsx">
                <li data-magicpath-id="305" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="306" data-magicpath-path="AutoGiftLanding.tsx">About</a></li>
                <li data-magicpath-id="307" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="308" data-magicpath-path="AutoGiftLanding.tsx">Pricing</a></li>
                <li data-magicpath-id="309" data-magicpath-path="AutoGiftLanding.tsx"><a href="mailto:jschlisserman@gmail.com" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="310" data-magicpath-path="AutoGiftLanding.tsx">Contact</a></li>
                <li data-magicpath-id="311" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="312" data-magicpath-path="AutoGiftLanding.tsx">Careers</a></li>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="e16a87b7-c5cf-4ab1-9b1e-db38b8116d4e" containerType="regular" prevTag="div" data-magicpath-id="313" data-magicpath-path="AutoGiftLanding.tsx">
              <h4 className="font-semibold text-white mb-4" data-magicpath-id="314" data-magicpath-path="AutoGiftLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="4146da9a-091d-4726-a17f-3c527303ad48" containerType="regular" prevTag="ul" className="space-y-3" data-magicpath-id="315" data-magicpath-path="AutoGiftLanding.tsx">
                <li data-magicpath-id="316" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="317" data-magicpath-path="AutoGiftLanding.tsx">Terms</a></li>
                <li data-magicpath-id="318" data-magicpath-path="AutoGiftLanding.tsx"><a href="#" className="text-white/60 hover:text-[#E2C382] transition-colors" data-magicpath-id="319" data-magicpath-path="AutoGiftLanding.tsx">Privacy</a></li>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="6314d639-b8e7-4bf2-ba24-f6aa2fca7a4d" containerType="regular" prevTag="div" className="border-t border-white/10 pt-8" data-magicpath-id="320" data-magicpath-path="AutoGiftLanding.tsx">
            <p className="text-center text-white/40 text-sm" data-magicpath-id="321" data-magicpath-path="AutoGiftLanding.tsx">
              © {new Date().getFullYear()} AutoGift. All rights reserved.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};