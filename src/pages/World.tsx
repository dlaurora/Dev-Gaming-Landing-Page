import { motion } from 'framer-motion';
import { WorldMap } from '../components/WorldMap';

export const World = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h1 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-4 glitch-text" data-text="NEO-VERIDIA">
                    NEO-VERIDIA
                </h1>
                <p className="text-xl text-primary font-rajdhani tracking-widest">
                    EXPLORE THE SECTORS
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <WorldMap />
            </motion.div>
        </div>
    );
};
