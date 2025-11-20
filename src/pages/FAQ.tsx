import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { t } = useTranslation();

    const faqs = [
        {
            question: t('faq.q1'),
            answer: t('faq.a1')
        },
        {
            question: t('faq.q2'),
            answer: t('faq.a2')
        },
        {
            question: t('faq.q3'),
            answer: t('faq.a3')
        },
        {
            question: t('faq.q4'),
            answer: t('faq.a4')
        },
        {
            question: t('faq.q5'),
            answer: t('faq.a5')
        },
        {
            question: t('faq.q6'),
            answer: t('faq.a6')
        },
        {
            question: t('faq.q7'),
            answer: t('faq.a7')
        },
        {
            question: t('faq.q8'),
            answer: t('faq.a8')
        },
        {
            question: t('faq.q9'),
            answer: t('faq.a9')
        },
        {
            question: t('faq.q10'),
            answer: t('faq.a10')
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-dark">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6">
                        {t('faq.title')} <span className="text-primary">{t('faq.subtitle')}</span>
                    </h1>
                    <p className="text-gray-400 font-rajdhani text-xl">
                        {t('faq.description')}
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg md:text-xl font-orbitron font-bold text-white">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-primary w-6 h-6" />
                                ) : (
                                    <ChevronDown className="text-gray-400 w-6 h-6" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-300 font-rajdhani text-lg leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
