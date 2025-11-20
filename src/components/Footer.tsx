import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Gamepad2, Twitter, Youtube, Twitch, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-black pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                {/* Newsletter Section */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 mb-20 relative overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-orbitron font-bold text-white mb-2">{t('footer.newsletter.title')}</h3>
                            <p className="text-gray-400 font-rajdhani">{t('footer.newsletter.description')}</p>
                        </div>
                        <div className="flex w-full md:w-auto gap-4">
                            <input
                                type="email"
                                placeholder={t('footer.newsletter.placeholder')}
                                className="bg-black/50 border border-white/20 rounded-lg px-6 py-3 text-white focus:outline-none focus:border-primary w-full md:w-80 font-rajdhani"
                            />
                            <Button variant="primary">{t('footer.newsletter.button')}</Button>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <Gamepad2 className="w-8 h-8 text-primary" />
                            <span className="text-2xl font-orbitron font-bold text-white">
                                NEON<span className="text-primary">HORIZON</span>
                            </span>
                        </Link>
                        <p className="text-gray-500 font-rajdhani text-sm leading-relaxed">
                            {t('footer.description')}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-orbitron font-bold mb-6">{t('footer.explore')}</h4>
                        <ul className="space-y-4 text-gray-400 font-rajdhani">
                            <li><Link to="/#features" className="hover:text-primary transition-colors">{t('nav.features')}</Link></li>
                            <li><Link to="/#characters" className="hover:text-primary transition-colors">{t('nav.characters')}</Link></li>
                            <li><Link to="/#gallery" className="hover:text-primary transition-colors">{t('nav.gallery')}</Link></li>
                            <li><Link to="/specs" className="hover:text-primary transition-colors">{t('nav.specs')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-orbitron font-bold mb-6">{t('footer.support')}</h4>
                        <ul className="space-y-4 text-gray-400 font-rajdhani">
                            <li><Link to="/faq" className="hover:text-primary transition-colors">{t('nav.faq')}</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">{t('contact.title')}</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">{t('privacy.title')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-orbitron font-bold mb-6">{t('footer.connect')}</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300">
                                <Twitch className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-600 font-rajdhani text-sm">
                    <p>&copy; 2025 Neon Horizon Studios. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
