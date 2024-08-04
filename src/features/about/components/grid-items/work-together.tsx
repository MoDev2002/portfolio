'use client';

import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import {
    BentoGridHeader,
    BentoGridItem,
    BentoGridTitle,
} from '@/components/ui/bento-grid';
import MagicButton from '@/components/ui/magic-button';
import confettiAnimation from '@/data/confetti-new.json';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import Lottie from 'react-lottie';

const WorkTogether = () => {
    const [copied, setCopied] = useState(false);

    const handleCopied = () => {
        const email = 'mohammedalmassry2002@gmail.com';

        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <BentoGridItem className='flex items-center justify-center md:col-span-3 md:row-span-1 lg:col-span-2'>
            <BackgroundGradientAnimation>
                <div className='pointer-events-none absolute inset-0 z-50 flex cursor-default items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-6xl'></div>
            </BackgroundGradientAnimation>
            <BentoGridHeader className='max-w-60 items-center justify-center text-center md:max-w-full'>
                <BentoGridTitle>
                    Do you want to start a project together?
                </BentoGridTitle>
                <div className='relative mt-2'>
                    <div className={cn('absolute -bottom-32 right-0')}>
                        <Lottie
                            options={{
                                loop: copied,
                                autoplay: copied,
                                animationData: confettiAnimation,
                            }}
                        />
                    </div>
                    <MagicButton onClick={handleCopied}>
                        <IoCopyOutline />{' '}
                        {copied ? 'Email Copied' : 'Copy My Email'}
                    </MagicButton>
                </div>
            </BentoGridHeader>
        </BentoGridItem>
    );
};

export default WorkTogether;
