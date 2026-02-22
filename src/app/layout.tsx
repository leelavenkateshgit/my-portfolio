import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Leelavenkatesh | Full Stack & AI Developer",
  description: "Futuristic personal portfolio of Leelavenkatesh Akurathi, a passionate developer building modern web apps and AI tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans bg-black text-gray-100 antialiased overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
