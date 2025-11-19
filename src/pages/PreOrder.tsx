import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Bitcoin, Wallet, CheckCircle, Loader2, ShoppingCart, MapPin, Lock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { EmailTemplate } from '../components/EmailTemplate';
import { sendPreOrderEmail } from '../lib/email';

const editions = [
    { id: 'standard', name: 'Standard Edition', price: 59.99 },
    { id: 'deluxe', name: 'Deluxe Edition', price: 79.99 },
    { id: 'collector', name: 'Collector\'s Edition', price: 129.99 },
];

const platforms = ['PC (Steam)', 'PC (Epic)', 'PlayStation 5', 'Xbox Series X'];

export const PreOrder = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        platform: platforms[0],
        edition: editions[1].id,
        paymentMethod: 'card',
        // Address Fields
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        // Card Fields
        cardNumber: '',
        expiry: '',
        cvc: ''
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [generatedKey, setGeneratedKey] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEditionSelect = (id: string) => {
        setFormData({ ...formData, edition: id });
    };

    const handlePaymentSelect = (method: string) => {
        setFormData({ ...formData, paymentMethod: method });
    };

    const generateKey = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let key = '';
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                key += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            if (i < 3) key += '-';
        }
        return key;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2500));

        const newKey = generateKey();
        setGeneratedKey(newKey);

        // Send Email
        const selectedEditionName = editions.find(e => e.id === formData.edition)?.name || 'Standard Edition';
        await sendPreOrderEmail(
            formData.email,
            formData.name,
            newKey,
            selectedEditionName,
            formData.platform
        );

        setIsProcessing(false);
        setStep(3); // Success step
    };

    const selectedEdition = editions.find(e => e.id === formData.edition);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-dark">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <ShoppingCart className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-4">
                        PRE-ORDER <span className="text-primary">NOW</span>
                    </h1>
                    <p className="text-gray-400 font-rajdhani text-xl">
                        Secure your access to Neo-Veridia. Join the resistance early.
                    </p>
                </motion.div>

                {/* Progress Steps */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-4">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-orbitron font-bold transition-colors ${step >= s ? 'bg-primary text-black' : 'bg-white/10 text-gray-500'
                                    }`}>
                                    {s}
                                </div>
                                {s < 3 && <div className={`w-16 h-1 bg-white/10 ml-4 ${step > s ? 'bg-primary' : ''}`} />}
                            </div>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-white/5 p-8 rounded-2xl border border-white/10"
                        >
                            <h2 className="text-2xl font-orbitron font-bold text-white mb-8">Select Edition & Platform</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                {editions.map((edition) => (
                                    <div
                                        key={edition.id}
                                        onClick={() => handleEditionSelect(edition.id)}
                                        className={`p-6 rounded-xl border cursor-pointer transition-all ${formData.edition === edition.id
                                            ? 'bg-primary/10 border-primary scale-105'
                                            : 'bg-black/20 border-white/10 hover:border-white/30'
                                            }`}
                                    >
                                        <h3 className="font-orbitron font-bold text-white mb-2">{edition.name}</h3>
                                        <p className="text-2xl font-rajdhani text-primary font-bold">${edition.price}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-8">
                                <label className="block text-gray-400 font-rajdhani mb-2">Platform</label>
                                <select
                                    name="platform"
                                    value={formData.platform}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:outline-none font-rajdhani"
                                >
                                    {platforms.map(p => <option key={p} value={p}>{p}</option>)}
                                </select>
                            </div>

                            <div className="flex justify-end">
                                <Button variant="primary" onClick={() => setStep(2)}>
                                    Continue to Payment
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-white/5 p-8 rounded-2xl border border-white/10"
                        >
                            <h2 className="text-2xl font-orbitron font-bold text-white mb-8">Billing & Payment</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Personal Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 font-rajdhani mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:outline-none font-rajdhani"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 font-rajdhani mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:outline-none font-rajdhani"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Billing Address */}
                                <div className="space-y-4 border-t border-white/10 pt-6">
                                    <h3 className="text-lg font-orbitron text-white flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-primary" /> Billing Address
                                    </h3>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div>
                                            <label className="block text-gray-400 font-rajdhani mb-2">Street Address</label>
                                            <input
                                                type="text"
                                                name="street"
                                                required
                                                value={formData.street}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:outline-none font-rajdhani"
                                                placeholder="123 Cyberpunk Blvd"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div className="col-span-2 md:col-span-1">
                                                <label className="block text-gray-400 font-rajdhani mb-2">City</label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    required
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:outline-none font-rajdhani"
                                                />
                                            </div>
                                            <div className="col-span-2 md:col-span-1">
                                                <label className="block text-gray-400 font-rajdhani mb-2">State</label>
                                                <input
                                                    type="text"
                                                    name="state"
                                                    required
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:outline-none font-rajdhani"
                                                />
                                            </div>
                                            <div className="col-span-2 md:col-span-1">
                                                <label className="block text-gray-400 font-rajdhani mb-2">ZIP</label>
                                                <input
                                                    type="text"
                                                    name="zip"
                                                    required
                                                    value={formData.zip}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:outline-none font-rajdhani"
                                                />
                                            </div>
                                            <div className="col-span-2 md:col-span-1">
                                                <label className="block text-gray-400 font-rajdhani mb-2">Country</label>
                                                <input
                                                    type="text"
                                                    name="country"
                                                    required
                                                    value={formData.country}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:outline-none font-rajdhani"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Method Selection */}
                                <div className="space-y-4 border-t border-white/10 pt-6">
                                    <label className="block text-gray-400 font-rajdhani">Payment Method</label>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div
                                            onClick={() => handlePaymentSelect('card')}
                                            className={`p-4 rounded-lg border cursor-pointer flex flex-col items-center gap-2 transition-colors ${formData.paymentMethod === 'card' ? 'bg-primary/10 border-primary text-white' : 'bg-black/20 border-white/10 text-gray-400'
                                                }`}
                                        >
                                            <CreditCard />
                                            <span className="text-sm font-rajdhani">Card</span>
                                        </div>
                                        <div
                                            onClick={() => handlePaymentSelect('paypal')}
                                            className={`p-4 rounded-lg border cursor-pointer flex flex-col items-center gap-2 transition-colors ${formData.paymentMethod === 'paypal' ? 'bg-primary/10 border-primary text-white' : 'bg-black/20 border-white/10 text-gray-400'
                                                }`}
                                        >
                                            <Wallet />
                                            <span className="text-sm font-rajdhani">PayPal</span>
                                        </div>
                                        <div
                                            onClick={() => handlePaymentSelect('crypto')}
                                            className={`p-4 rounded-lg border cursor-pointer flex flex-col items-center gap-2 transition-colors ${formData.paymentMethod === 'crypto' ? 'bg-primary/10 border-primary text-white' : 'bg-black/20 border-white/10 text-gray-400'
                                                }`}
                                        >
                                            <Bitcoin />
                                            <span className="text-sm font-rajdhani">Crypto</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Details (Conditional) */}
                                {formData.paymentMethod === 'card' && (
                                    <div className="space-y-4 bg-black/20 p-4 rounded-lg border border-white/5">
                                        <h3 className="text-lg font-orbitron text-white flex items-center gap-2">
                                            <Lock className="w-4 h-4 text-primary" /> Secure Card Payment
                                        </h3>
                                        <div>
                                            <label className="block text-gray-400 font-rajdhani mb-2">Card Number</label>
                                            <input
                                                type="text"
                                                name="cardNumber"
                                                required
                                                value={formData.cardNumber}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:outline-none font-rajdhani"
                                                placeholder="0000 0000 0000 0000"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-gray-400 font-rajdhani mb-2">Expiry Date</label>
                                                <input
                                                    type="text"
                                                    name="expiry"
                                                    required
                                                    value={formData.expiry}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:outline-none font-rajdhani"
                                                    placeholder="MM/YY"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 font-rajdhani mb-2">CVC</label>
                                                <input
                                                    type="text"
                                                    name="cvc"
                                                    required
                                                    value={formData.cvc}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:outline-none font-rajdhani"
                                                    placeholder="123"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="border-t border-white/10 pt-6 mt-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-gray-400 font-rajdhani">Total Amount:</span>
                                        <span className="text-3xl font-rajdhani font-bold text-primary">${selectedEdition?.price}</span>
                                    </div>

                                    <div className="flex gap-4">
                                        <Button variant="outline" onClick={() => setStep(1)} type="button" className="w-full">
                                            Back
                                        </Button>
                                        <Button variant="primary" type="submit" disabled={isProcessing} className="w-full flex items-center justify-center gap-2">
                                            {isProcessing ? <Loader2 className="animate-spin" /> : 'Complete Purchase'}
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-8"
                        >
                            <div className="text-center">
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-green-500" />
                                </div>
                                <h2 className="text-3xl font-orbitron font-bold text-white mb-2">Purchase Successful!</h2>
                                <p className="text-gray-400 font-rajdhani">
                                    A confirmation email has been sent to {formData.email}.
                                </p>
                            </div>

                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-orbitron font-bold text-gray-400 mb-6 uppercase tracking-widest text-center">
                                    -- Simulated Email Preview --
                                </h3>
                                <EmailTemplate
                                    name={formData.name || 'Operative'}
                                    gameKey={generatedKey}
                                    platform={formData.platform}
                                    edition={selectedEdition?.name || 'Standard Edition'}
                                />
                            </div>

                            <div className="text-center">
                                <Button variant="outline" onClick={() => window.location.href = '/'}>
                                    Return to Home Base
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
