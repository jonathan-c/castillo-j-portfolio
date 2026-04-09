import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/CabinetGrotesk-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-cabinet-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jonathan Castillo — Full-Stack Engineer",
    template: "%s — Jonathan Castillo",
  },
  description:
    "I build things people actually use. Portfolio featuring Hostalytics, Good Boy Guide, Poll Sports, and more.",
  openGraph: {
    title: "Jonathan Castillo — Full-Stack Engineer",
    description:
      "I build things people actually use. Portfolio featuring Hostalytics, Good Boy Guide, Poll Sports, and more.",
    type: "website",
    images: ["/og/home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${geistMono.variable} ${cabinetGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <main className="flex-1">{children}</main>
        <footer className="max-w-[740px] mx-auto px-6 py-12 border-t border-border text-sm text-muted">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>Jonathan Castillo</p>
            <div className="flex gap-5">
              <a href="https://github.com/castillo-j" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/jonathancastillo" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
              <a href="mailto:jonathan@example.com" className="hover:text-accent transition-colors">Email</a>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
