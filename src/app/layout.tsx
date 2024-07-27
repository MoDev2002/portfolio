import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme-provider';
import type { Metadata } from 'next';
import { Urbanist as FontSans } from 'next/font/google';
import './globals.css';

const fontSans = FontSans({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-sans',
});

// TODO: Change Metadata when generating content
// TODO: Apply Pallette
// TODO: Change Grid BG

export const metadata: Metadata = {
    title: "Mohamed's Portfolio",
    description: 'Modern & Minimalist Portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={cn(
                    'bg-background font-sans text-foreground antialiased',
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
