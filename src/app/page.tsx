import Hero from '@/components/hero';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { NAV_ITEMS } from '@/constants/nav-items';
import { About } from '@/features/about';

export default function Home() {
    return (
        <main className='relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-background px-5 sm:px-10'>
            <div className='w-full max-w-7xl'>
                <FloatingNav navItems={NAV_ITEMS} />
                <Hero />
                <About />
            </div>
        </main>
    );
}
