'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

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
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                'card-shine-effect group/bento relative row-span-1 flex h-full flex-col justify-between space-y-4 overflow-hidden rounded-xl border border-background-200 bg-background shadow shadow-background-100 hover:shadow-2xl',
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridHeader = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                'relative flex min-h-40 flex-col p-5 px-5 md:h-full lg:p-10',
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridTitle = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                'z-10 text-lg font-bold text-foreground-900 lg:text-2xl',
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridDescription = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                'z-10 text-sm font-light text-foreground-600 md:text-xs lg:text-base',
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridImage = ({
    imageSrc,
    className,
}: {
    imageSrc: string;
    className?: string;
}) => {
    return (
        <div className='absolute h-full w-full'>
            <Image
                width={700}
                height={700}
                src={imageSrc}
                alt={imageSrc}
                className={cn('object-cover object-center', className)}
            />
        </div>
    );
};

export const BentoGridSpareImage = ({
    imageSrc,
    className,
}: {
    imageSrc: string;
    className?: string;
}) => {
    return (
        <div
            className={cn('absolute -bottom-4 right-0 md:-bottom-8', className)}
        >
            <Image
                width={200}
                height={200}
                src={imageSrc}
                alt={imageSrc}
                className='h-full w-full object-cover object-center'
            />
        </div>
    );
};
