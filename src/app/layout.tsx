import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GlobalHeader from "@/components/global-header";
import GlobalFooter from "@/components/global-footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Faiz Marzuki",
  description: "Portfolio of Faiz Marzuki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen flex flex-col bg-[#121212] border-t border-r border-dotted border-white/20">
              <header className="w-full sticky top-0 z-50">
                <GlobalHeader />
              </header>
              <main className="flex-1">{children}</main>
              <footer className="w-full">
                <GlobalFooter />
              </footer>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
