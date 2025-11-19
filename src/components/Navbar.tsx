import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.gameInfo'), href: '/#game-info' },
        { name: t('nav.features'), href: '/#features' },
        { name: t('nav.characters'), href: '/#characters' },
        { name: t('nav.gallery'), href: '/#gallery' },
        { name: t('nav.news'), href: '/news' },
        { name: t('nav.world'), href: '/world' },
        { name: t('nav.faq'), href: '/faq' },
        { name: t('nav.specs'), href: '/specs' },
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
            scrolled ? "bg-black/80 backdrop-blur-md border-primary/20 py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-orbitron font-bold text-white tracking-widest hover:text-primary transition-colors">
                    NEON<span className="text-primary">HORIZON</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-rajdhani font-medium text-gray-300 hover:text-primary tracking-wider transition-colors uppercase"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Language Switcher */}
                    <div className="flex items-center gap-2 border-l border-white/20 pl-4">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <button onClick={() => changeLanguage('en')} className={cn("text-xs font-bold hover:text-primary transition-colors", i18n.language === 'en' ? "text-primary" : "text-gray-400")}>EN</button>
                        <button onClick={() => changeLanguage('es')} className={cn("text-xs font-bold hover:text-primary transition-colors", i18n.language === 'es' ? "text-primary" : "text-gray-400")}>ES</button>
                        <button onClick={() => changeLanguage('jp')} className={cn("text-xs font-bold hover:text-primary transition-colors", i18n.language === 'jp' ? "text-primary" : "text-gray-400")}>JP</button>
                    </div>

                    <Link to="/preorder">
                        <Button variant="primary">
                            {t('nav.preOrder')}
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-black/95 border-b border-primary/20 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-rajdhani font-bold text-white hover:text-primary tracking-widest uppercase"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}

                            <div className="flex gap-4 justify-center py-4 border-t border-white/10">
                                <button onClick={() => changeLanguage('en')} className={cn("text-sm font-bold", i18n.language === 'en' ? "text-primary" : "text-gray-400")}>EN</button>
                                <button onClick={() => changeLanguage('es')} className={cn("text-sm font-bold", i18n.language === 'es' ? "text-primary" : "text-gray-400")}>ES</button>
                                <button onClick={() => changeLanguage('jp')} className={cn("text-sm font-bold", i18n.language === 'jp' ? "text-primary" : "text-gray-400")}>JP</button>
                            </div>

                            <Link to="/preorder" onClick={() => setIsOpen(false)}>
                                <Button variant="primary" className="w-full">
                                    {t('nav.preOrder')}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
