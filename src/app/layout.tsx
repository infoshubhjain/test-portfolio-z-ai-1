import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubh Jain | AI Researcher & Full-Stack Engineer",
  description: "Computer Science @ UIUC. Architecting ambitious AI systems, conducting boundary-pushing research, and shipping full-stack solutions that scale.",
  keywords: ["Shubh Jain", "UIUC", "AI Researcher", "Machine Learning", "Full Stack Engineer", "Computer Science"],
  openGraph: {
    title: "Shubh Jain | AI Researcher & Full-Stack Engineer",
    description: "Computer Science @ UIUC. Architecting ambitious AI systems, conducting boundary-pushing research.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SmoothScrollProvider>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <CommandPalette />
          <main className="relative z-10">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
