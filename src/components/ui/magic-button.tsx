import { cn } from '@/lib/utils';
import React from 'react';

interface MagicButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const MagicButton = React.forwardRef<HTMLButtonElement, MagicButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <button
                className={cn(
                    'relative inline-flex h-12 w-full overflow-hidden rounded-xl p-[1px] focus:outline-none md:mt-10 md:w-60'
                )}
                {...props}
                ref={ref}
            >
                <span className='absolute inset-[-1000%] z-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                <div
                    className={cn(
                        'relative z-10 flex h-full w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-xl bg-background-100 px-7 text-sm font-medium text-foreground-900 backdrop-blur-3xl',
                        className
                    )}
                >
                    {children}
                </div>
            </button>
        );
    }
);

MagicButton.displayName = 'Magic Button';

export default MagicButton;
