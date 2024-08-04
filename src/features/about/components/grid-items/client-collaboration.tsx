import {
    BentoGridHeader,
    BentoGridImage,
    BentoGridItem,
    BentoGridTitle,
} from '@/components/ui/bento-grid';

const ClientCollaboration = () => {
    return (
        <BentoGridItem className='md:col-span-6 md:row-span-4 lg:col-span-3 lg:min-h-[60vh]'>
            <BentoGridImage imageSrc='/b1.svg' className='h-full w-full' />
            <BentoGridHeader className='justify-end'>
                <BentoGridTitle>
                    I prioritize client collaboration, fostering open
                    communication
                </BentoGridTitle>
            </BentoGridHeader>
        </BentoGridItem>
    );
};

export default ClientCollaboration;
