import { motion } from 'framer-motion';
import { Calendar, Tag, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

interface NewsItem {
    id: number;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    image: string;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        title: "TRANSMISSION #042: THE NEON DISTRICT EXPANSION",
        date: "2025-11-15",
        category: "Development",
        excerpt: "Our environment artists have been hard at work fleshing out the lower levels of Sector 7. Expect denser crowds, more verticality, and hidden pathways.",
        image: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=2098&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "COMBAT SYSTEM OVERHAUL: CYBERNETIC AUGMENTATIONS",
        date: "2025-10-30",
        category: "Gameplay",
        excerpt: "We've reworked the skill tree for the 'Spectre' class. New active camouflage abilities and wall-running mechanics are now live in the latest internal build.",
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "SOUNDTRACK REVEAL: SYNTHWAVE LEGENDS JOIN THE PROJECT",
        date: "2025-10-12",
        category: "Audio",
        excerpt: "We are thrilled to announce that several legendary synthwave artists will be composing original tracks for Neon Horizon's dynamic combat music system.",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
    }
];

export const News = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-4 glitch-text" data-text={t('news.title')}>
                    {t('news.title')}
                </h1>
                <p className="text-xl text-primary font-rajdhani tracking-widest">
                    {t('news.subtitle')}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsData.map((item, index) => (
                    <motion.article
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-black/40 border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors duration-300"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        </div>

                        <div className="p-6 relative">
                            <div className="flex items-center gap-4 mb-4 text-sm font-rajdhani">
                                <span className="flex items-center gap-1 text-primary">
                                    <Calendar className="w-4 h-4" />
                                    {item.date}
                                </span>
                                <span className="flex items-center gap-1 text-gray-400">
                                    <Tag className="w-4 h-4" />
                                    {item.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-orbitron font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 font-rajdhani mb-6 line-clamp-3">
                                {item.excerpt}
                            </p>

                            <Button variant="outline" className="w-full group-hover:bg-primary/10 group-hover:border-primary/50">
                                {t('news.readMore')} <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    );
};
