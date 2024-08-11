import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import {
    BentoGridDescription,
    BentoGridHeader,
    BentoGridItem,
    BentoGridTitle,
} from '@/components/ui/bento-grid';
import { techStackItems } from '@/data/tech-stack';
import { cn } from '@/lib/utils';

const TechStack = () => {
    return (
        <BentoGridItem className='relative items-center justify-center md:col-span-3 md:row-span-2 lg:col-span-2'>
            {techStackItems.map((item, index) => (
                <AnimatedTooltip
                    key={index}
                    title={item.name}
                    image={item.img}
                    height={16}
                    width={16}
                    position={item.position}
                    className={cn('ball bubble absolute z-50', item.className)}
                />
            ))}
            <BentoGridHeader className='h-full w-full items-center justify-center'>
                <BentoGridDescription>
                    I constantly try to improve
                </BentoGridDescription>
                <BentoGridTitle>My tech stack</BentoGridTitle>
            </BentoGridHeader>
        </BentoGridItem>
    );
};

export default TechStack;
