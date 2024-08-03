'use client';
import { gridItems } from '@/data/grid-items';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {gridItems.map(
                    ({
                        id,
                        title,
                        description,
                        className,
                        img,
                        imgClassName,
                        spareImg,
                        titleClassName,
                    }) => (
                        <BentoGridItem
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            className={className}
                            image={img}
                            imageClassName={imgClassName}
                            spareImage={spareImg}
                            titleClassName={titleClassName}
                        />
                    )
                )}
            </BentoGrid>
        </section>
    );
};

export default Grid;
