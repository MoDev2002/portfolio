import {
    BentoGridHeader,
    BentoGridItem,
    BentoGridTitle,
} from '@/components/ui/bento-grid';
import { GridGlobe } from '@/components/ui/grid-globe';
import { Suspense } from 'react';

const Communication = () => {
    return (
        <BentoGridItem className='md:col-span-3 md:row-span-2 lg:col-span-2'>
            <Suspense>
                <GridGlobe />
            </Suspense>
            <BentoGridHeader className='justify-start'>
                <BentoGridTitle className='text-center'>
                    I&apos;m very flexible with time zone communications
                </BentoGridTitle>
            </BentoGridHeader>
        </BentoGridItem>
    );
};

export default Communication;
