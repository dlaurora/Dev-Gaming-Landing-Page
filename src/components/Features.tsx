import { motion } from 'framer-motion';
import { Cpu, Globe, Users, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Features = () => {
    const { t } = useTranslation();

    const features = [
        {
            title: t('features.seamlessOpenWorld.title'),
            description: t('features.seamlessOpenWorld.description'),
            icon: Globe,
            colSpan: "md:col-span-2",
            bg: "bg-gradient-to-br from-purple-900/50 to-blue-900/50"
        },
        {
            title: t('features.nextGenCombat.title'),
            description: t('features.nextGenCombat.description'),
            icon: Zap,
            colSpan: "md:col-span-1",
            bg: "bg-gradient-to-br from-red-900/50 to-orange-900/50"
        },
        {
            title: t('features.multiplayerRaids.title'),
            description: t('features.multiplayerRaids.description'),
            icon: Users,
            colSpan: "md:col-span-1",
            bg: "bg-gradient-to-br from-green-900/50 to-emerald-900/50"
        },
        {
            title: t('features.rayTracingOverdrive.title'),
            description: t('features.rayTracingOverdrive.description'),
            icon: Cpu,
            colSpan: "md:col-span-2",
            bg: "bg-gradient-to-br from-blue-900/50 to-cyan-900/50"
        }
    ];

    return (
        <section id="features" className="py-20 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-primary font-rajdhani font-bold tracking-widest uppercase mb-2">{t('features.sectionTitle')}</h2>
                    <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-white">{t('features.mainTitle')}</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${feature.colSpan} group relative overflow-hidden rounded-2xl border border-white/10 bg-dark/50 backdrop-blur-sm p-8 hover:border-primary/50 transition-colors duration-300`}
                        >
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${feature.bg}`} />

                            <feature.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />

                            <h4 className="text-2xl font-orbitron font-bold text-white mb-4">{feature.title}</h4>
                            <p className="text-gray-400 font-rajdhani text-lg leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
