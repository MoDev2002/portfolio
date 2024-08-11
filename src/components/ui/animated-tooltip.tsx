'use client';
import { cn } from '@/lib/utils';
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type AnimatedTooltipProps = {
    title: string;
    image: string;
    description?: string;
    width: number;
    height: number;
    className?: string;
    imgClassName?: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
};

export const AnimatedTooltip = ({
    title,
    description,
    image,
    width,
    height,
    className,
    imgClassName,
    position = 'top',
}: AnimatedTooltipProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0); // going to set this value on mouse move
    // rotate the tooltip
    const rotate = useSpring(
        useTransform(x, [-50, 50], [-25, 25]),
        springConfig
    );
    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [-50, 50], [-25, 25]),
        springConfig
    );
    const handleMouseMove = (event: any) => {
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
    };

    const getTooltipStyle = () => {
        switch (position) {
            case 'right':
                return 'left-full -translate-y-1/2 ml-2';
            case 'bottom':
                return '-bottom-10 translate-x-1/2';
            case 'left':
                return 'right-full -translate-y-1/2 mr-2';
            case 'top':
            default:
                return '-top-10 -left-1/2 translate-x-1/2';
        }
    };

    return (
        <div
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence mode='popLayout'>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                                type: 'spring',
                                stiffness: 260,
                                damping: 10,
                            },
                        }}
                        exit={{ opacity: 0, y: 10, scale: 0.6 }}
                        style={{
                            translateX: translateX,
                            rotate: rotate,
                            whiteSpace: 'nowrap',
                        }}
                        className={`absolute z-50 flex flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl ${getTooltipStyle()}`}
                    >
                        <div className='absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent' />
                        <div className='absolute -bottom-px z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
                        <div className='relative z-50 text-sm font-bold text-foreground'>
                            {title}
                        </div>
                        <div className='text-xs text-foreground-800'>
                            {description}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Image
                onMouseMove={handleMouseMove}
                height={width}
                width={height}
                src={image}
                alt={title}
                className={cn(
                    '!m-0 object-cover object-top !p-0 transition duration-500 hover:z-30 hover:scale-105',
                    imgClassName
                )}
            />
        </div>
    );
};
