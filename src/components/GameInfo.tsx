import { motion } from 'framer-motion';
import { Globe, Target, Users } from 'lucide-react';

export const GameInfo = () => {
    return (
        <section id="game-info" className="py-20 bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        ENTER THE <span className="text-primary">SIMULATION</span>
                    </h2>
                    <p className="text-gray-400 font-rajdhani text-xl max-w-3xl mx-auto">
                        Neon Horizon is not just a game; it's a living, breathing digital ecosystem.
                        In the year 2077, the boundaries between physical and digital reality have dissolved.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <Globe className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-4">A Living World</h3>
                        <p className="text-gray-400 font-rajdhani leading-relaxed">
                            Explore Neo-Veridia, a sprawling metropolis where every NPC has a routine, every action has a consequence, and the city itself evolves based on player choices.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors"
                    >
                        <Target className="w-12 h-12 text-secondary mb-6" />
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Your Mission</h3>
                        <p className="text-gray-400 font-rajdhani leading-relaxed">
                            As a rogue operative, you must uncover the truth behind "Project Aether." Infiltrate mega-corporations, hack secure networks, and decide the fate of humanity.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <Users className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Social Warfare</h3>
                        <p className="text-gray-400 font-rajdhani leading-relaxed">
                            Form alliances with other players, control districts, and engage in massive faction wars that reshape the political landscape of the city.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
