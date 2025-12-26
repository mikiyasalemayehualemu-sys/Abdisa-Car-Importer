import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
    const { t } = useTranslation();
    const whatsappNumber = "251974744444";

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Construct professional WhatsApp message
        const text = `Hello Abdisa Car Importer! I am interested in your services. 
        
Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

        // Small delay for "premium" feel before redirect
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false);
            // Optionally clear form
            setFormData({ name: '', phone: '', message: '' });
        }, 800);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    return (
        <div className="pt-32 pb-20 bg-bg-main min-h-screen text-text-main">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('nav_contact')}</h1>
                    <div className="w-20 h-1 bg-brand-blue mx-auto mb-6"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {t('contact_subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info & Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="glass-premium p-6 rounded-2xl hover:border-brand-blue/40 transition-all group">
                                <Phone className="w-6 h-6 text-brand-blue mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold mb-2">{t('contact_call')}</h4>
                                <p className="text-sm text-text-alt font-medium uppercase tracking-widest">0974744444</p>
                            </div>
                            <div className="glass-premium p-6 rounded-2xl hover:border-brand-blue/40 transition-all group">
                                <Mail className="w-6 h-6 text-brand-blue mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold mb-2">{t('contact_email')}</h4>
                                <p className="text-sm text-text-alt font-medium uppercase tracking-widest">info@abdisacar.com</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="glass-premium p-8 rounded-3xl space-y-6 shadow-2xl shadow-black/5">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-black text-brand-blue uppercase tracking-widest">{t('label_name')}</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-bg-main/50 border border-border-main rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all text-text-main"
                                        placeholder={t('placeholder_name')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-black text-brand-blue uppercase tracking-widest">{t('label_phone')}</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-bg-main/50 border border-border-main rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all text-text-main"
                                        placeholder="+251..."
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-black text-brand-blue uppercase tracking-widest">{t('label_message')}</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-bg-main/50 border border-border-main rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all text-text-main"
                                    placeholder={t('placeholder_message')}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full btn-primary py-4 !rounded-xl shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-3 transition-all ${isSubmitting ? 'opacity-70 scale-95' : ''}`}
                            >
                                {isSubmitting ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                    </motion.div>
                                ) : (
                                    <>
                                        {t('btn_send')} <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Map & WhatsApp CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-bg-alt rounded-3xl border border-border-main h-[400px] overflow-hidden relative shadow-2xl">
                            <iframe
                                src="https://maps.google.com/maps?q=Abdisa%20Car%20Importer%20Welosefer,%20Addis%20Ababa&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                            <div className="absolute top-4 left-4 glass-premium px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-blue">
                                {t('map_badge')}
                            </div>
                        </div>

                        <div className="bg-brand-blue/10 p-8 rounded-3xl border border-brand-blue/20 flex flex-col md:flex-row items-center gap-6 group hover:bg-brand-blue/15 transition-colors">
                            <div className="text-center md:text-left flex-grow">
                                <h3 className="text-xl font-bold mb-1">{t('whatsapp_box_title')}</h3>
                                <p className="text-text-alt text-sm">{t('whatsapp_box_desc')}</p>
                            </div>
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t('whatsapp_message'))}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp px-10 !rounded-xl whitespace-nowrap shadow-lg shadow-green-500/20"
                            >
                                <MessageCircle className="w-5 h-5 animate-pulse" /> {t('btn_chat_now')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
