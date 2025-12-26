import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group focus:outline-none"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-45 transition-transform" />
            ) : (
                <Moon className="w-5 h-5 text-brand-blue group-hover:-rotate-12 transition-transform" />
            )}
        </button>
    );
}
