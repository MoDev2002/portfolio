import {
    BentoGridHeader,
    BentoGridImage,
    BentoGridItem,
    BentoGridSpareImage,
    BentoGridTitle,
} from '@/components/ui/bento-grid';

const DevelopmentPassion = () => {
    return (
        <BentoGridItem className='md:col-span-3 md:row-span-1 lg:col-span-2'>
            <BentoGridImage imageSrc='/grid.svg' />
            <BentoGridSpareImage imageSrc='/b4.svg' />
            <BentoGridHeader className='justify-start'>
                <BentoGridTitle>
                    Tech enthusiast with a passion for development.
                </BentoGridTitle>
            </BentoGridHeader>
        </BentoGridItem>
    );
};

export default DevelopmentPassion;
