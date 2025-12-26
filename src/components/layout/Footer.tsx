import { useTranslation } from 'react-i18next';
import { Car, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-bg-alt border-t border-border-main pt-16 pb-8 transition-colors duration-300">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div className="flex flex-col gap-6">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                            <Car className="text-white w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl tracking-tight leading-none">ABDISA</span>
                            <span className="text-xs text-brand-blue font-semibold tracking-[0.2em] uppercase">Car Importer</span>
                        </div>
                    </Link>
                    <p className="text-text-alt text-sm leading-relaxed">
                        {t('hero_subtitle')}
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-text-main/5 rounded-full hover:bg-brand-blue hover:text-white transition-all text-text-main"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="p-2 bg-text-main/5 rounded-full hover:bg-brand-blue hover:text-white transition-all text-text-main"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="p-2 bg-text-main/5 rounded-full hover:bg-brand-blue hover:text-white transition-all text-text-main"><Twitter className="w-5 h-5" /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">{t('nav_about')}</h4>
                    <ul className="flex flex-col gap-4 text-sm text-text-alt">
                        <li><Link to="/about" className="hover:text-brand-blue transition-colors">{t('nav_about')}</Link></li>
                        <li><Link to="/cars" className="hover:text-brand-blue transition-colors">{t('nav_cars')}</Link></li>
                        <li><Link to="/contact" className="hover:text-brand-blue transition-colors">{t('nav_contact')}</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">{t('nav_contact')}</h4>
                    <ul className="flex flex-col gap-4 text-sm text-text-alt">
                        <li className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-brand-blue" />
                            <span>0974744444</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-brand-blue" />
                            <span>info@abdisacar.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-brand-blue" />
                            <span>XQP9+FVH, Addis Ababa, Ethiopia</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Business Hours</h4>
                    <ul className="flex flex-col gap-2 text-sm text-text-alt">
                        <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
                        <li className="flex justify-between"><span>Saturday:</span> <span>8:00 AM - 1:00 PM</span></li>
                        <li className="flex justify-between text-brand-blue font-medium"><span>Sunday:</span> <span>Closed</span></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-8 border-t border-border-main text-center text-text-alt opacity-50 text-xs">
                <p>&copy; {new Date().getFullYear()} Abdisa Car Importer. All rights reserved.</p>
            </div>
        </footer>
    );
}
