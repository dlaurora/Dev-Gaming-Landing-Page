import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const Countdown = () => {
    const targetDate = new Date('2030-07-01T00:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex gap-4 md:gap-8 justify-center items-center my-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                    <motion.div
                        key={value}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="bg-black/50 border border-primary/30 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[80px] md:min-w-[100px] text-center shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                    >
                        <span className="text-2xl md:text-4xl font-orbitron font-bold text-white block">
                            {value.toString().padStart(2, '0')}
                        </span>
                    </motion.div>
                    <span className="text-xs md:text-sm font-rajdhani text-primary uppercase tracking-widest mt-2">
                        {unit}
                    </span>
                </div>
            ))}
        </div>
    );
};
