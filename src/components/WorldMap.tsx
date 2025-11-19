import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Info, X } from 'lucide-react';

interface District {
    id: string;
    name: string;
    x: number;
    y: number;
    description: string;
    dangerLevel: 'Low' | 'Medium' | 'High' | 'Extreme';
    population: string;
    faction: string;
}

const districts: District[] = [
    {
        id: 'd1',
        name: 'Central Plaza',
        x: 50,
        y: 50,
        description: 'The beating heart of Neo-Veridia. Home to the mega-corps and the elite. Heavily patrolled by private security.',
        dangerLevel: 'Low',
        population: '2.5M',
        faction: 'Veridia Corp'
    },
    {
        id: 'd2',
        name: 'Sector 7 (The Slums)',
        x: 20,
        y: 70,
        description: 'A dense, vertical labyrinth of neon and rust. Law enforcement rarely ventures here. The Black Lotus gang runs the streets.',
        dangerLevel: 'High',
        population: '8.1M',
        faction: 'Black Lotus'
    },
    {
        id: 'd3',
        name: 'Industrial Zone',
        x: 80,
        y: 60,
        description: 'Massive factories and power plants. The air is thick with smog. Automated drones are the primary workforce.',
        dangerLevel: 'Medium',
        population: '500K',
        faction: 'Mechanist Union'
    },
    {
        id: 'd4',
        name: 'Neon Bay',
        x: 60,
        y: 20,
        description: 'The entertainment district. Casinos, clubs, and holographic theaters. Everything has a price here.',
        dangerLevel: 'Medium',
        population: '1.2M',
        faction: 'The Syndicate'
    },
    {
        id: 'd5',
        name: 'The Wastes',
        x: 10,
        y: 10,
        description: 'The radioactive outskirts of the city. Only nomads and outcasts survive here. Beware of sandstorms and scavengers.',
        dangerLevel: 'Extreme',
        population: 'Unknown',
        faction: 'Nomads'
    }
];

export const WorldMap = () => {
    const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);

    return (
        <div className="relative w-full h-[600px] bg-black/50 border border-white/10 rounded-xl overflow-hidden group">
            {/* Map Background (Abstract Grid/Cyberpunk style) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-80" />
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Map Shape (Simplified for demo - normally an SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#00f3ff" strokeWidth="0.5" />
                <path d="M20,70 Q40,60 50,50 T80,60" fill="none" stroke="#ff00ff" strokeWidth="0.5" strokeDasharray="2 2" />
            </svg>

            {/* Hotspots */}
            {districts.map((district) => (
                <motion.button
                    key={district.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group/pin"
                    style={{ left: `${district.x}%`, top: `${district.y}%` }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setSelectedDistrict(district)}
                >
                    <div className="relative">
                        <MapPin className={`w-8 h-8 ${selectedDistrict?.id === district.id ? 'text-primary fill-primary/20' : 'text-gray-400 fill-black/50'} transition-colors duration-300`} />
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-ping" />

                        {/* Tooltip on hover */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/pin:opacity-100 transition-opacity bg-black/90 border border-primary/30 px-2 py-1 rounded text-xs whitespace-nowrap pointer-events-none">
                            {district.name}
                        </div>
                    </div>
                </motion.button>
            ))}

            {/* Info Panel */}
            <AnimatePresence>
                {selectedDistrict && (
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', damping: 20 }}
                        className="absolute top-0 right-0 w-full md:w-80 h-full bg-black/90 border-l border-primary/30 backdrop-blur-md p-6 z-20 overflow-y-auto"
                    >
                        <button
                            onClick={() => setSelectedDistrict(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="mt-8">
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-2">{selectedDistrict.name}</h3>
                            <div className="h-0.5 w-full bg-gradient-to-r from-primary to-transparent mb-6" />

                            <div className="space-y-6 font-rajdhani">
                                <div>
                                    <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-1">Description</h4>
                                    <p className="text-gray-200 leading-relaxed">{selectedDistrict.description}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-1">Danger Level</h4>
                                        <span className={`text-lg font-bold ${selectedDistrict.dangerLevel === 'Low' ? 'text-green-400' :
                                                selectedDistrict.dangerLevel === 'Medium' ? 'text-yellow-400' :
                                                    selectedDistrict.dangerLevel === 'High' ? 'text-orange-500' : 'text-red-600'
                                            }`}>
                                            {selectedDistrict.dangerLevel}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-1">Population</h4>
                                        <span className="text-lg font-bold text-white">{selectedDistrict.population}</span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-1">Controlling Faction</h4>
                                    <div className="flex items-center gap-2">
                                        <Info className="w-4 h-4 text-primary" />
                                        <span className="text-lg font-bold text-primary">{selectedDistrict.faction}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-4 border border-white/10 rounded bg-white/5">
                                <p className="text-xs text-gray-400 italic">
                                    "WARNING: Unauthorized entry into {selectedDistrict.name} may result in immediate termination by {selectedDistrict.faction} security forces."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
