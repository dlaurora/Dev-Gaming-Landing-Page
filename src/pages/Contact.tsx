import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const { t } = useTranslation();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-dark">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6">
                        {t('contact.title')} <span className="text-primary">{t('contact.subtitle')}</span>
                    </h1>
                    <p className="text-gray-400 font-rajdhani text-xl">
                        {t('contact.description')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">{t('contact.directChannels')}</h3>
                            <div className="space-y-4 font-rajdhani text-gray-300">
                                <p className="flex items-center gap-3">
                                    <Mail className="text-primary" /> support@neonhorizon.game
                                </p>
                                <p className="flex items-center gap-3">
                                    <MessageSquare className="text-primary" /> press@neonhorizon.game
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">{t('contact.hqLocation')}</h3>
                            <p className="font-rajdhani text-gray-300 leading-relaxed">
                                Neon Horizon Studios<br />
                                1337 Cyberpunk Blvd, Sector 7<br />
                                Neo-Veridia, NV 2077
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-black/50 p-8 rounded-2xl border border-primary/20 backdrop-blur-sm"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-2xl font-orbitron font-bold text-white mb-2">{t('contact.messageSent')}</h3>
                                <p className="text-gray-400 font-rajdhani">
                                    {t('contact.responsePromise')}
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-8 text-primary hover:text-white transition-colors font-rajdhani font-bold"
                                >
                                    {t('contact.sendAnother')}
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-400 font-rajdhani mb-2 text-sm">{t('contact.nameLabel')}</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:border-primary focus:outline-none transition-colors font-rajdhani"
                                            placeholder={t('contact.namePlaceholder')}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-400 font-rajdhani mb-2 text-sm">{t('contact.emailLabel')}</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:border-primary focus:outline-none transition-colors font-rajdhani"
                                            placeholder={t('contact.emailPlaceholder')}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-400 font-rajdhani mb-2 text-sm">{t('contact.subjectLabel')}</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        value={formState.subject}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:outline-none transition-colors font-rajdhani"
                                        placeholder={t('contact.subjectPlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-400 font-rajdhani mb-2 text-sm">{t('contact.messageLabel')}</label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:outline-none transition-colors font-rajdhani resize-none"
                                        placeholder={t('contact.messagePlaceholder')}
                                    />
                                </div>

                                <Button
                                    variant="primary"
                                    className="w-full flex items-center justify-center gap-2"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? t('contact.transmitting') : (
                                        <>
                                            {t('contact.sendButton')} <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
