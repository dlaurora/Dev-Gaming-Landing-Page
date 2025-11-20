import { motion } from 'framer-motion';
import { Shield, Lock, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-32 pb-20 min-h-screen bg-dark">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6">
                        {t('privacy.title')} <span className="text-primary">{t('privacy.subtitle')}</span>
                    </h1>
                    <p className="text-gray-400 font-rajdhani text-xl">
                        {t('privacy.lastUpdated')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-12 font-rajdhani text-gray-300 leading-relaxed"
                >
                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-4 mb-6">
                            <Lock className="text-primary w-8 h-8" />
                            <h2 className="text-2xl font-orbitron font-bold text-white">{t('privacy.section1.title')}</h2>
                        </div>
                        <p className="mb-4">
                            {t('privacy.section1.content')}
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>{t('privacy.section1.item1')}</li>
                            <li>{t('privacy.section1.item2')}</li>
                            <li>{t('privacy.section1.item3')}</li>
                            <li>{t('privacy.section1.item4')}</li>
                        </ul>
                    </section>

                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-4 mb-6">
                            <Eye className="text-primary w-8 h-8" />
                            <h2 className="text-2xl font-orbitron font-bold text-white">{t('privacy.section2.title')}</h2>
                        </div>
                        <p className="mb-4">
                            {t('privacy.section2.content')}
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>{t('privacy.section2.item1')}</li>
                            <li>{t('privacy.section2.item2')}</li>
                            <li>{t('privacy.section2.item3')}</li>
                            <li>{t('privacy.section2.item4')}</li>
                        </ul>
                    </section>

                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-orbitron font-bold text-white mb-6">{t('privacy.section3.title')}</h2>
                        <p className="mb-4">
                            {t('privacy.section3.content1')}
                        </p>
                        <p>
                            {t('privacy.section3.content2')}
                        </p>
                    </section>

                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-orbitron font-bold text-white mb-6">{t('privacy.section4.title')}</h2>
                        <p>
                            {t('privacy.section4.content')}
                        </p>
                    </section>

                    <div className="text-center pt-8 border-t border-white/10">
                        <p className="text-sm text-gray-500">
                            {t('privacy.contact')}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
