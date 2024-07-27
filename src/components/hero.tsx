import { FaLocationArrow } from 'react-icons/fa6';
import { BackgroundBeams } from './ui/background-beams';
import MagicButton from './ui/magic-button';
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';

const Hero = () => {
    return (
        <div className='grid h-screen grid-cols-1 content-center'>
            <BackgroundBeams />
            {/* Spotlights */}
            <div>
                <Spotlight
                    className='-left-10 -top-40 h-screen md:-left-32 md:-top-20'
                    fill='white'
                />
                <Spotlight
                    className='left-80 top-28 h-[80vh] w-[50vw]'
                    fill='blue'
                />
                <Spotlight
                    className='left-full top-10 h-[80vh] w-[50vw]'
                    fill='purple'
                />
            </div>

            {/* Content */}
            <div className='relative z-10 flex justify-center'>
                <div className='flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]'>
                    <h2 className='text-foreground-900 max-w-80 text-center text-sm font-light uppercase tracking-widest md:text-base'>
                        Dynamic Web Majic with Next.js
                    </h2>
                    <TextGenerateEffect
                        className='text-center text-3xl md:text-4xl'
                        words='Transforming Concepts into Seamless User Experiences'
                    />
                    <p className='mb-4 text-center text-base md:text-lg md:tracking-wider lg:text-xl'>
                        Hi, I&apos;m Mohamed, a Frontend Engineer based in
                        Egypt.
                    </p>

                    <MagicButton>
                        Show My Work <FaLocationArrow className='size-4' />
                    </MagicButton>
                </div>
            </div>
        </div>
    );
};

export default Hero;
