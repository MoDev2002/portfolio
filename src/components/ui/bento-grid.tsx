'use client';

import confettiAnimation from '@/data/confetti-new.json';
import { techStackLeft, techStackRight } from '@/data/tech-stack';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import Lottie from 'react-lottie';
import { BackgroundGradientAnimation } from './background-gradient-animation';
import { GridGlobe } from './grid-globe';
import MagicButton from './magic-button';

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                'mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8',
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    id,
    className,
    title,
    description,
    image,
    imageClassName,
    spareImage,
    titleClassName,
}: {
    id: number;
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    image?: string;
    imageClassName?: string;
    spareImage?: string;
    titleClassName?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopied = () => {
        const email = 'mohammedalmassry2002@gmail.com';

        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <div
            className={cn(
                'card-shine-effect group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-xl border border-background-200 bg-background shadow shadow-background-100 hover:shadow-2xl',
                className
            )}
        >
            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className='absolute h-full w-full'>
                    {image && (
                        <Image
                            width={700}
                            height={700}
                            src={image}
                            alt={image}
                            className={cn(
                                imageClassName,
                                'object-cover object-center'
                            )}
                        />
                    )}
                </div>
                <div
                    className={`absolute -bottom-8 right-0 ${
                        id === 5 && 'w-full opacity-80'
                    }`}
                >
                    {spareImage && (
                        <Image
                            width={200}
                            height={200}
                            src={spareImage}
                            alt={spareImage}
                            className='h-full w-full object-cover object-center'
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className='pointer-events-none absolute inset-0 z-50 flex cursor-default items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-6xl'></div>
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        'relative flex min-h-40 flex-col p-5 px-5 md:h-full lg:p-10'
                    )}
                >
                    <div className='z-10 text-sm font-light text-foreground-600 md:text-xs lg:text-base'>
                        {description}
                    </div>
                    <div
                        className={cn(
                            'z-10 text-lg font-bold text-foreground-900 lg:text-2xl',
                            id === 2 && 'text-center'
                        )}
                    >
                        {title}
                    </div>

                    {id === 2 && <GridGlobe />}

                    {id === 3 && (
                        <div className='absolute -right-3 flex w-fit gap-1 lg:-right-1 lg:gap-4'>
                            <div className='flex flex-col gap-3 lg:gap-4'>
                                {techStackLeft.map((item) => (
                                    <div
                                        key={item}
                                        className='rounded-lg bg-background-200 px-2 py-2 text-center text-xs opacity-50 lg:px-2 lg:py-3 lg:text-sm lg:opacity-100'
                                    >
                                        {item}
                                    </div>
                                ))}
                                <div className='rounded-lg bg-background-200 px-3 py-4 text-center' />
                            </div>
                            <div className='flex flex-col gap-3 lg:gap-4'>
                                <div className='rounded-lg bg-background-200 px-3 py-4 text-center' />
                                {techStackRight.map((item) => (
                                    <div
                                        key={item}
                                        className='rounded-lg bg-background-200 px-2 py-2 text-center text-xs opacity-50 lg:px-2 lg:py-3 lg:text-sm lg:opacity-100'
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {id === 6 && (
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
                            <MagicButton className='' onClick={handleCopied}>
                                <IoCopyOutline />{' '}
                                {copied ? 'Email Copied' : 'Copy My Email'}
                            </MagicButton>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
