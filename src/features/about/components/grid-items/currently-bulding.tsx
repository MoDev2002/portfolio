import {
    BentoGridDescription,
    BentoGridHeader,
    BentoGridImage,
    BentoGridItem,
    BentoGridSpareImage,
    BentoGridTitle,
} from '@/components/ui/bento-grid';

const CurrentlyBuilding = () => {
    return (
        <BentoGridItem className='md:col-span-3 md:row-span-2'>
            <BentoGridImage
                imageSrc='/b5.svg'
                className='absolute -bottom-6 -right-4 w-60 md:-bottom-20 md:right-0 md:w-96'
            />
            <BentoGridSpareImage
                imageSrc='/grid.svg'
                className='w-full opacity-80'
            />
            <BentoGridHeader className='justify-center md:justify-start lg:justify-center'>
                <BentoGridDescription>The Inside Scoop</BentoGridDescription>
                <BentoGridTitle>
                    Currently building a HR platform
                </BentoGridTitle>
            </BentoGridHeader>
        </BentoGridItem>
    );
};

export default CurrentlyBuilding;
