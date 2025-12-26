import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'am', label: 'Amharic', native: 'አማርኛ' },
    { code: 'om', label: 'Afaan Oromo', native: 'Afaan Oromo' },
    { code: 'ti', label: 'Tigrinya', native: 'ትግርኛ' }
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
                <Globe className="w-4 h-4 text-brand-blue group-hover:rotate-12 transition-transform" />
                <span className="text-xs font-bold tracking-widest uppercase">{currentLanguage.code}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className="absolute right-0 mt-3 w-48 bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[60]"
                    >
                        <div className="py-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        i18n.changeLanguage(lang.code);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-white/5 ${i18n.language === lang.code ? 'text-brand-blue font-bold' : 'text-slate-400'
                                        }`}
                                >
                                    <span className="flex flex-col items-start">
                                        <span className="text-white font-medium">{lang.native}</span>
                                        <span className="text-[10px] text-slate-500 uppercase tracking-tighter">{lang.label}</span>
                                    </span>
                                    {i18n.language === lang.code && (
                                        <motion.div layoutId="active-lang" className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
