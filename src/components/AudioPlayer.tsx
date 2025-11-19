import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [isHovered, setIsHovered] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Placeholder sci-fi ambient track (using a royalty-free source or placeholder)
    // For this demo, we'll use a generic ambient sound URL. 
    // In a real app, this would be a local asset.
    const audioSrc = "https://cdn.pixabay.com/download/audio/2022/03/24/audio_103f840dc8.mp3?filename=cyberpunk-city-11018.mp3";

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio play failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (newVolume > 0 && isMuted) {
            setIsMuted(false);
            if (audioRef.current) audioRef.current.muted = false;
        }
    };

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <audio ref={audioRef} src={audioSrc} loop />

            <div className="bg-black/80 backdrop-blur-md border border-primary/30 rounded-full p-2 flex items-center gap-2 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                </button>

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 'auto', opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            className="flex items-center gap-2 overflow-hidden pr-2"
                        >
                            <div className="flex flex-col justify-center w-24">
                                <span className="text-[10px] font-orbitron text-primary/80 whitespace-nowrap">
                                    NEO-VERIDIA FM
                                </span>
                                <div className="flex items-center gap-2">
                                    <button onClick={toggleMute} className="text-gray-400 hover:text-white">
                                        {isMuted || volume === 0 ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                                    </button>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={volume}
                                        onChange={handleVolumeChange}
                                        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full"
                                    />
                                </div>
                            </div>

                            {isPlaying && (
                                <div className="flex gap-0.5 items-end h-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-0.5 bg-primary"
                                            animate={{ height: [4, 12, 6, 16, 4] }}
                                            transition={{
                                                duration: 0.5,
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                                delay: i * 0.1,
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {!isHovered && isPlaying && (
                    <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                )}
            </div>
        </motion.div>
    );
};
