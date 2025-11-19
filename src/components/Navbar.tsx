import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Game Info', href: '/#game-info' },
        { name: 'Features', href: '/#features' },
        { name: 'Classes', href: '/#characters' },
        { name: 'Media', href: '/#gallery' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Specs', href: '/specs' },
    ];

    const isHome = location.pathname === '/';

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <Gamepad2 className="w-8 h-8 text-primary animate-pulse" />
                    <span className="text-2xl font-orbitron font-bold tracking-widest text-white">
                        NEON<span className="text-primary">HORIZON</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href.startsWith('/#') && isHome ? link.href.substring(1) : link.href}
                            className="text-sm font-rajdhani font-semibold tracking-wide text-gray-300 hover:text-primary transition-colors uppercase"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/preorder">
                        <Button variant="primary" className="ml-4">
                            Pre-Order Now
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-6 items-center"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-orbitron text-white hover:text-primary"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/preorder" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                            <Button variant="primary" className="w-full">
                                Pre-Order Now
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
