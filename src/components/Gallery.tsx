import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const images = [
    { src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop", span: "col-span-1 md:col-span-2 row-span-2" },
    { src: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2670&auto=format&fit=crop", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2694&auto=format&fit=crop", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop", span: "col-span-1 md:col-span-2 row-span-1" },
];

export const Gallery = () => {
    const { t } = useTranslation();

    return (
        <section id="gallery" className="py-20 bg-dark relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-primary font-rajdhani font-bold tracking-widest uppercase mb-2">{t('gallery.sectionTitle')}</h2>
                    <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-white">{t('gallery.mainTitle')}</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${img.span} relative group overflow-hidden rounded-xl border border-white/10`}
                        >
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                            <img
                                src={img.src}
                                alt={`Gallery ${index}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
