import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'AL Furkan - Pure Water Delivery Service',
  description: 'Experience the future of water delivery. Premium quality, lightning-fast service, and eco-friendly solutions delivered right to your doorstep.',
  keywords: 'water delivery, bottled water, home delivery, office water supply, pure water, AL Furkan',
  authors: [{ name: 'AL Furkan' }],
  openGraph: {
    title: 'AL Furkan - Pure Water Delivery Service',
    description: 'Premium quality water delivered to your doorstep with 24/7 service',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
