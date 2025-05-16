// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import '../styles/index.css';
import '../styles/globals.css';

const PUBLISHABLE_KEY =  process.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

export const metadata = {
    title: 'My App',
    description: 'My Next.js + Clerk app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
            <html lang="en">
                <body>{children}</body>
            </html>
        </ClerkProvider>
    );
}
export default RootLayout;