import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What platforms will Neon Horizon be available on?",
        answer: "Neon Horizon will launch on PC (Steam, Epic Games Store), PlayStation 5, and Xbox Series X|S. A cloud version is also in development."
    },
    {
        question: "Is there a multiplayer mode?",
        answer: "Yes! The game features seamless drop-in/drop-out co-op for up to 4 players, as well as dedicated PvP zones within the open world."
    },
    {
        question: "What are the minimum system requirements?",
        answer: "We recommend at least an NVIDIA GTX 1060 or AMD equivalent for 1080p Low settings. For the full experience with Ray Tracing, an RTX 3060 or higher is recommended. Check our System Requirements page for details."
    },
    {
        question: "Will there be microtransactions?",
        answer: "Neon Horizon is a premium title. Microtransactions are strictly limited to cosmetic items only. No pay-to-win mechanics."
    },
    {
        question: "Can I customize my character?",
        answer: "Absolutely. Our 'Cyber-Forge' system allows for deep customization of your character's appearance, cybernetics, and skill trees."
    },
    {
        question: "Is the world fully open?",
        answer: "Yes, the metropolis of 'Neo-Veridia' is a massive, contiguous open world with no loading screens between districts or interiors."
    },
    {
        question: "Does the game support cross-play?",
        answer: "Yes, full cross-play and cross-progression are supported across all platforms from day one."
    },
    {
        question: "When is the release date?",
        answer: "We are targeting a Holiday 2025 release. Sign up for our newsletter to get the latest updates on beta testing."
    },
    {
        question: "Will there be DLC?",
        answer: "We have a robust post-launch roadmap including new districts, story expansions, and character classes."
    },
    {
        question: "How do I report a bug?",
        answer: "During the beta and after launch, you can report bugs directly through the in-game menu or via our official support portal."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                        FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
                    </h1>
                    <p className="text-gray-400 font-rajdhani text-xl">
                        Everything you need to know about Neon Horizon.
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
