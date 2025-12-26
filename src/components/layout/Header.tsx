import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Car } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { name: t('nav_home'), path: '/' },
        { name: t('nav_about'), path: '/about' },
        { name: t('nav_cars'), path: '/cars' },
        { name: t('nav_contact'), path: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-bg-main/80 backdrop-blur-md py-4 shadow-lg border-b border-border-main'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group text-text-main">
                    <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Car className="text-white w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg md:text-xl tracking-tight leading-none">ABDISA</span>
                        <span className="text-[10px] md:text-xs text-brand-blue font-semibold tracking-[0.2em] uppercase">Car Importer</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`text-sm font-medium hover:text-brand-blue transition-colors ${location.pathname === link.path ? 'text-brand-blue' : 'text-text-alt'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="h-6 w-px bg-border-main"></div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <LanguageSwitcher />
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden items-center gap-4">
                    <ThemeToggle />
                    <LanguageSwitcher />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-text-main">
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-bg-alt border-b border-border-main animate-in slide-in-from-top duration-300">
                    <nav className="p-6">
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`text-lg font-medium block py-2 ${location.pathname === link.path ? 'text-brand-blue' : 'text-text-alt'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
