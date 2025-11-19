import { motion } from 'framer-motion';
import { Cpu, Globe, Users, Zap } from 'lucide-react';

const features = [
    {
        title: "Seamless Open World",
        description: "Explore a massive, neon-drenched metropolis without loading screens.",
        icon: Globe,
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-purple-900/50 to-blue-900/50"
    },
    {
        title: "Next-Gen Combat",
        description: "Fluid, physics-based combat system with customizable cybernetics.",
        icon: Zap,
        colSpan: "md:col-span-1",
        bg: "bg-gradient-to-br from-red-900/50 to-orange-900/50"
    },
    {
        title: "Multiplayer Raids",
        description: "Team up with friends to take down mega-corporations.",
        icon: Users,
        colSpan: "md:col-span-1",
        bg: "bg-gradient-to-br from-green-900/50 to-emerald-900/50"
    },
    {
        title: "Ray Tracing Overdrive",
        description: "Experience hyper-realistic lighting and reflections.",
        icon: Cpu,
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-blue-900/50 to-cyan-900/50"
    }
];

export const Features = () => {
    return (
        <section id="features" className="py-20 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-primary font-rajdhani font-bold tracking-widest uppercase mb-2">System Features</h2>
                    <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-white">REDEFINE REALITY</h3>
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
