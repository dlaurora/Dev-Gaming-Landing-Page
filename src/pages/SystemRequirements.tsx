import { motion } from 'framer-motion';
import { Monitor, Cpu, HardDrive, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const SystemRequirements = () => {
    const { t } = useTranslation();

    const specs = [
        {
            category: t('specs.resolution'),
            low: "1080p @ 30 FPS",
            medium: "1440p @ 60 FPS",
            high: "4K @ 160+ FPS"
        },
        {
            category: "GPU",
            low: "NVIDIA GTX 1060 / AMD RX 580",
            medium: "NVIDIA RTX 3060 / AMD RX 6700 XT",
            high: "NVIDIA RTX 4090 / AMD RX 7900 XTX"
        },
        {
            category: "CPU",
            low: "Intel Core i5-8400 / AMD Ryzen 5 2600",
            medium: "Intel Core i7-10700K / AMD Ryzen 7 5800X",
            high: "Intel Core i9-13900K / AMD Ryzen 9 7950X"
        },
        {
            category: "RAM",
            low: "16 GB",
            medium: "32 GB",
            high: "64 GB"
        },
        {
            category: t('specs.storage'),
            low: "100 GB SSD",
            medium: "100 GB NVMe SSD",
            high: "100 GB Gen4 NVMe SSD"
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <Monitor className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6">
                        {t('specs.title')} <span className="text-primary">{t('specs.subtitle')}</span>
                    </h1>
                    <p className="text-gray-400 font-rajdhani text-xl max-w-2xl mx-auto">
                        {t('specs.description')}
                    </p>
                </motion.div>

                <div className="overflow-x-auto">
                    <motion.table
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-full border-collapse min-w-[800px]"
                    >
                        <thead>
                            <tr>
                                <th className="p-6 text-left bg-black/50 border-b-2 border-primary/50 text-primary font-orbitron text-xl">{t('specs.component')}</th>
                                <th className="p-6 text-left bg-black/50 border-b-2 border-white/10 text-white font-orbitron text-xl">
                                    <span className="block text-sm text-gray-400 mb-1">{t('specs.minimum')}</span>
                                    {t('specs.lowSettings')}
                                </th>
                                <th className="p-6 text-left bg-black/50 border-b-2 border-white/10 text-white font-orbitron text-xl">
                                    <span className="block text-sm text-gray-400 mb-1">{t('specs.recommended')}</span>
                                    {t('specs.mediumSettings')}
                                </th>
                                <th className="p-6 text-left bg-black/50 border-b-2 border-secondary/50 text-secondary font-orbitron text-xl">
                                    <span className="block text-sm text-gray-400 mb-1">{t('specs.ultra')}</span>
                                    {t('specs.highSettings')}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {specs.map((spec, index) => (
                                <motion.tr
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                >
                                    <td className="p-6 font-orbitron font-bold text-white flex items-center gap-3">
                                        {spec.category === t('specs.resolution') && <Monitor className="w-5 h-5 text-primary" />}
                                        {spec.category === "GPU" && <Zap className="w-5 h-5 text-primary" />}
                                        {spec.category === "CPU" && <Cpu className="w-5 h-5 text-primary" />}
                                        {spec.category === t('specs.storage') && <HardDrive className="w-5 h-5 text-primary" />}
                                        {spec.category}
                                    </td>
                                    <td className="p-6 font-rajdhani text-lg text-gray-300">{spec.low}</td>
                                    <td className="p-6 font-rajdhani text-lg text-gray-300">{spec.medium}</td>
                                    <td className="p-6 font-rajdhani text-lg text-secondary font-bold">{spec.high}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </motion.table>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 text-center p-6 border border-primary/20 rounded-xl bg-primary/5"
                >
                    <p className="text-primary font-rajdhani text-lg">
                        <span className="font-bold">{t('specs.noteLabel')}:</span> {t('specs.noteText')}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
