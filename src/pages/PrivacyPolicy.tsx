import { motion } from 'framer-motion';
import { Shield, Lock, Eye } from 'lucide-react';

export const PrivacyPolicy = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-dark">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6">
                        PRIVACY <span className="text-primary">POLICY</span>
                    </h1>
                    <p className="text-gray-400 font-rajdhani text-xl">
                        Last Updated: November 19, 2025
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-12 font-rajdhani text-gray-300 leading-relaxed"
                >
                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-4 mb-6">
                            <Lock className="text-primary w-8 h-8" />
                            <h2 className="text-2xl font-orbitron font-bold text-white">1. Data Collection</h2>
                        </div>
                        <p className="mb-4">
                            At Neon Horizon Studios, we take your privacy seriously. We collect only the data necessary to provide you with the best gaming experience. This includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>Account information (username, email address)</li>
                            <li>Gameplay statistics and progression data</li>
                            <li>Hardware specifications for performance optimization</li>
                            <li>Crash reports and technical diagnostics</li>
                        </ul>
                    </section>

                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-4 mb-6">
                            <Eye className="text-primary w-8 h-8" />
                            <h2 className="text-2xl font-orbitron font-bold text-white">2. How We Use Your Data</h2>
                        </div>
                        <p className="mb-4">
                            Your data is used primarily to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>Authenticate your account and secure your progress</li>
                            <li>Match you with other players in multiplayer modes</li>
                            <li>Analyze game balance and improve features</li>
                            <li>Send important updates regarding service status (if opted in)</li>
                        </ul>
                    </section>

                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-orbitron font-bold text-white mb-6">3. Data Protection</h2>
                        <p className="mb-4">
                            We employ industry-standard encryption (AES-256) to protect your personal information both in transit and at rest. We do not sell your personal data to third parties.
                        </p>
                        <p>
                            You have the right to request a copy of your data or request its deletion at any time through our support portal.
                        </p>
                    </section>

                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-orbitron font-bold text-white mb-6">4. Cookies & Tracking</h2>
                        <p>
                            Our website uses essential cookies to maintain your session and preferences. We use limited analytics cookies to understand how users interact with our site to improve navigation and content.
                        </p>
                    </section>

                    <div className="text-center pt-8 border-t border-white/10">
                        <p className="text-sm text-gray-500">
                            For any privacy-related inquiries, please contact our Data Protection Officer at privacy@neonhorizon.game
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
