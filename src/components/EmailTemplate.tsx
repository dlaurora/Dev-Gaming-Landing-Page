import { Gamepad2, CheckCircle, Copy } from 'lucide-react';
import { useState } from 'react';

interface EmailTemplateProps {
    name: string;
    gameKey: string;
    platform: string;
    edition: string;
}

export const EmailTemplate = ({ name, gameKey, platform, edition }: EmailTemplateProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(gameKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-2xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-rajdhani text-gray-300 shadow-2xl">
            {/* Email Header */}
            <div className="bg-black p-8 text-center border-b border-white/10">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Gamepad2 className="w-8 h-8 text-[#00f3ff]" />
                    <span className="text-2xl font-orbitron font-bold tracking-widest text-white">
                        NEON<span className="text-[#00f3ff]">HORIZON</span>
                    </span>
                </div>
                <h1 className="text-2xl font-orbitron font-bold text-white">WELCOME TO THE RESISTANCE</h1>
            </div>

            {/* Email Body */}
            <div className="p-8 space-y-6">
                <p className="text-lg">
                    Greetings, <span className="text-white font-bold">{name}</span>.
                </p>
                <p>
                    Your pre-order for <span className="text-[#00f3ff] font-bold">Neon Horizon: {edition} Edition</span> on <span className="text-white">{platform}</span> has been confirmed. You are now officially part of the vanguard that will reshape Neo-Veridia.
                </p>

                {/* Order Summary Box */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
                    <h3 className="text-white font-orbitron font-bold border-b border-white/10 pb-2">ORDER SUMMARY</h3>
                    <div className="flex justify-between">
                        <span>Item:</span>
                        <span className="text-white">Neon Horizon ({edition})</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Platform:</span>
                        <span className="text-white">{platform}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="text-[#00f3ff] flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" /> Confirmed
                        </span>
                    </div>
                </div>

                {/* Serial Key Section */}
                <div className="bg-[#00f3ff]/10 border border-[#00f3ff]/30 rounded-lg p-6 text-center">
                    <p className="text-[#00f3ff] text-sm mb-2 uppercase tracking-wider">Your Activation Key</p>
                    <div className="flex items-center justify-center gap-4 bg-black/50 p-4 rounded border border-[#00f3ff]/20 mb-2">
                        <code className="text-2xl font-mono text-white tracking-widest">{gameKey}</code>
                        <button
                            onClick={handleCopy}
                            className="text-gray-400 hover:text-white transition-colors"
                            title="Copy Key"
                        >
                            {copied ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                        </button>
                    </div>
                    <p className="text-xs text-gray-500">
                        Redeem this key on your selected platform store when the pre-load becomes available.
                    </p>
                </div>

                <p className="text-sm text-gray-500 pt-6 border-t border-white/10">
                    This is an automated transmission. Do not reply. <br />
                    Neon Horizon Studios, 1337 Cyberpunk Blvd, Neo-Veridia.
                </p>
            </div>
        </div>
    );
};
