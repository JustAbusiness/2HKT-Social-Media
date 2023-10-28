import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
// import { ClerkInstanceContext } from '@clerk/clerk-react';
import '../globals.css';

export const metatdata = {
  title: "College Social Media App",
  description: "A College Social Media App"
};


const inter = Inter({subsets: ["latin"]});
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
   return ( 
   <ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
  </ClerkProvider> 
   )
}