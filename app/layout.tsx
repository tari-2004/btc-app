import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sovereign Grace | A Sanctuary for Modern Souls",
  description: "Experience deep worship and apostolic teaching in an atmosphere designed for the next generation of believers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="selection:bg-[#00B0F0] selection:text-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* The Navbar stays here to show on every page */}
        <Navbar />
        
        <main>
          {children}
        </main>

        {/* The Footer stays here to show on every page */}
        <Footer />
      </body>
    </html>
  );
}