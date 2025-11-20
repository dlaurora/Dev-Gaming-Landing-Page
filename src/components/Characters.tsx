import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Characters = () => {
    const { t } = useTranslation();

    const characters = [
        {
            id: 1,
            name: t('characters.vanguard.name'),
            role: t('characters.vanguard.role'),
            description: t('characters.vanguard.description'),
            image: "https://images.unsplash.com/photo-1620648378507-4ad3467d8999?q=80&w=2500&auto=format&fit=crop",
            stats: { strength: 90, speed: 40, tech: 50 }
        },
        {
            id: 2,
            name: t('characters.ghost.name'),
            role: t('characters.ghost.role'),
            description: t('characters.ghost.description'),
            image: "https://images.unsplash.com/photo-1531297461136-82lw9z2c?q=80&w=2670&auto=format&fit=crop", // Placeholder
            stats: { strength: 50, speed: 95, tech: 70 }
        },
        {
            id: 3,
            name: t('characters.technomancer.name'),
            role: t('characters.technomancer.role'),
            description: t('characters.technomancer.description'),
            image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2564&auto=format&fit=crop", // Placeholder
            stats: { strength: 30, speed: 60, tech: 100 }
        }
    ];

    const [activeChar, setActiveChar] = useState(characters[0]);

    return (
        <section id="characters" className="py-20 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-primary font-rajdhani font-bold tracking-widest uppercase mb-2">{t('characters.sectionTitle')}</h2>
                    <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-white">{t('characters.mainTitle')}</h3>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Character List */}
                    <div className="lg:w-1/3 flex flex-col gap-4">
                        {characters.map((char) => (
                            <button
                                key={char.id}
                                onClick={() => setActiveChar(char)}
                                className={`text-left p-6 rounded-xl border transition-all duration-300 group ${activeChar.id === char.id
                                    ? 'bg-white/10 border-primary'
                                    : 'bg-transparent border-white/10 hover:border-white/30'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className={`font-orbitron font-bold text-xl ${activeChar.id === char.id ? 'text-primary' : 'text-white group-hover:text-white'
                                            }`}>
                                            {char.name}
                                        </h4>
                                        <p className="text-gray-400 text-sm font-rajdhani">{char.role}</p>
                                    </div>
                                    {activeChar.id === char.id && (
                                        <ChevronRight className="text-primary animate-pulse" />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Character Preview */}
                    <div className="lg:w-2/3 relative h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-dark/50">
                        <motion.div
                            key={activeChar.id}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                            <img
                                src={activeChar.image}
                                alt={activeChar.name}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-4xl md:text-6xl font-orbitron font-black text-white mb-4"
                                >
                                    {activeChar.name}
                                </motion.h3>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-300 text-lg max-w-xl font-rajdhani mb-6"
                                >
                                    {activeChar.description}
                                </motion.p>

                                {/* Stats */}
                                <div className="flex gap-8">
                                    {Object.entries(activeChar.stats).map(([stat, value], index) => (
                                        <motion.div
                                            key={stat}
                                            initial={{ width: 0, opacity: 0 }}
                                            animate={{ width: "auto", opacity: 1 }}
                                            transition={{ delay: 0.4 + (index * 0.1) }}
                                            className="flex flex-col gap-2"
                                        >
                                            <span className="text-xs uppercase text-gray-500 font-bold tracking-wider">{stat}</span>
                                            <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${value}%` }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className="h-full bg-primary"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
