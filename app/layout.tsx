import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import ThemeProvider from "@/providers/theme-provider";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Streakify: GitHub Streak Reminder Platform",
  description:
    "Connect your GitHub account and get daily reminders to maintain your coding streak. Never lose your progress—Streakify helps you stay consistent by notifying you if you haven't committed by the end of the day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={`${spaceGrotesk.variable} ${manrope.variable} bg-background text-foreground antialiased`}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
