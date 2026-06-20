import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Tamil Palli — தமிழ் பள்ளி",
  description: "A complete Tamil curriculum for school-age children and teenagers. Learn Tamil script, grammar, and culture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ta" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wdth,wght@100,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-amber-50 font-sans antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-orange-100 bg-white py-4 text-center text-xs text-gray-400">
          Tamil Palli · தமிழ் பள்ளி · Built for learners
        </footer>
      </body>
    </html>
  );
}
