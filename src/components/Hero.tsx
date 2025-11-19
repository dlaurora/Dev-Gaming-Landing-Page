import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { Play, ChevronDown } from 'lucide-react';
import { Countdown } from './Countdown';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
    const ref = useRef(null);
    const { t } = useTranslation();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background - Placeholder for Video/Image */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-90" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2676&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-primary font-rajdhani font-bold tracking-[0.2em] text-xl mb-4 uppercase">
                        {t('hero.welcome')}
                    </h2>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-white mb-6 tracking-tighter relative">
                        <span className="relative inline-block">
                            NEON
                            <motion.span
                                className="absolute -inset-1 bg-primary/20 blur-xl"
                                animate={{ opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500"> HORIZON</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-rajdhani leading-relaxed">
                        {t('hero.subtitle')}
                    </p>

                    {/* Countdown Timer */}
                    <div className="mb-10">
                        <Countdown />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <Button variant="primary" className="flex items-center gap-2">
                        <Play className="w-5 h-5 fill-current" />
                        {t('hero.playTrailer')}
                    </Button>
                    <Button variant="outline">
                        {t('hero.explore')}
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown className="w-10 h-10" />
            </motion.div>
        </section>
    );
};
