import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '3D Modeling',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      projectType: '3D Modeling',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0C0C0C]/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-xl bg-[#0C0C0C] border-2 border-[#D7E2EA]/30 rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 text-[#D7E2EA] shadow-[0_25px_60px_-15px_rgba(181,1,167,0.15)] z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:bg-white/5 text-[#D7E2EA] transition-all duration-200 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="hero-heading text-2xl sm:text-3xl font-black uppercase tracking-tight">
                    Let’s build something together
                  </h3>
                  <p className="text-sm text-[#D7E2EA]/60 font-light mt-1">
                    Describe your project idea and let’s turn it into a striking 3D reality.
                  </p>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs uppercase tracking-widest font-semibold text-[#D7E2EA]/70">
                    Your Name <span className="text-[#B600A8]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-[#D7E2EA] placeholder-white/20 focus:outline-none focus:border-[#B600A8] transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs uppercase tracking-widest font-semibold text-[#D7E2EA]/70">
                    Your Email <span className="text-[#B600A8]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-[#D7E2EA] placeholder-white/20 focus:outline-none focus:border-[#B600A8] transition-all duration-300"
                  />
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-project-type" className="text-xs uppercase tracking-widest font-semibold text-[#D7E2EA]/70">
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#0C0C0C] border border-white/10 rounded-2xl px-4 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#B600A8] transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="3D Modeling">3D Modeling</option>
                    <option value="Rendering">Photorealistic Rendering</option>
                    <option value="Motion Design">Motion Design & Animation</option>
                    <option value="Branding">Branding & Identity</option>
                    <option value="Web Design">Web Design</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs uppercase tracking-widest font-semibold text-[#D7E2EA]/70">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Tell Anhaa about your project ideas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-[#D7E2EA] placeholder-white/20 focus:outline-none focus:border-[#B600A8] transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                    outline: '2px solid white',
                    outlineOffset: '-3px',
                  }}
                  className="w-full rounded-full text-white font-medium uppercase tracking-widest py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8 gap-4"
              >
                <CheckCircle size={64} className="text-[#B600A8] animate-bounce" />
                <h3 className="hero-heading text-2xl font-black uppercase tracking-tight">
                  Message Sent!
                </h3>
                <p className="text-[#D7E2EA]/70 font-light max-w-sm">
                  Thank you for reaching out, {formData.name}! Anhaa will review your project requirements and get in touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    resetForm();
                    onClose();
                  }}
                  className="mt-6 border border-[#D7E2EA]/30 hover:border-[#D7E2EA] rounded-full px-6 py-2 uppercase tracking-widest text-xs text-[#D7E2EA] transition-all duration-200"
                >
                  Back to site
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
