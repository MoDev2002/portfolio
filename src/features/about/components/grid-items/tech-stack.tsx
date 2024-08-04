import {
    BentoGridDescription,
    BentoGridHeader,
    BentoGridItem,
    BentoGridTitle,
} from '@/components/ui/bento-grid';
import { techStackLeft, techStackRight } from '@/data/tech-stack';

const TechStack = () => {
    return (
        <BentoGridItem className='md:col-span-3 md:row-span-2 lg:col-span-2'>
            <BentoGridHeader className='justify-center'>
                <BentoGridDescription>
                    I constantly try to improve
                </BentoGridDescription>
                <BentoGridTitle>My tech stack</BentoGridTitle>
            </BentoGridHeader>
            <div className='absolute -right-3 -top-6 flex w-fit gap-1 lg:-right-1 lg:gap-4'>
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
        </BentoGridItem>
    );
};

export default TechStack;
