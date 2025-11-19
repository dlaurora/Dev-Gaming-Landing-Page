import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
}

// Utility to merge classes (simple version if clsx/tailwind-merge not installed, 
// but I'll assume simple string concatenation for now or install them if needed.
// Actually, I'll implement a simple 'cn' utility or just inline it. I'll inline for now to keep it simple, 
// or better, create src/lib/utils.ts).

export const Button = ({
    variant = 'primary',
    className,
    children,
    ...props
}: ButtonProps) => {
    const baseStyles = "relative px-8 py-3 font-orbitron font-bold tracking-wider uppercase transition-all duration-300 clip-path-polygon";

    const variants = {
        primary: "bg-primary text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]",
        secondary: "bg-secondary text-white hover:bg-white hover:text-secondary hover:shadow-[0_0_20px_rgba(255,0,85,0.5)]",
        outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(0,243,255,0.3)]",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, variants[variant], className)}
            style={{
                clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)"
            }}
            {...props}
        >
            {children}
        </motion.button>
    );
};
