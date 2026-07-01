import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Silkscreen } from "next/font/google";

import { NavBar } from "@/components/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display"
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: {
    default: "Chelsea Profile",
    template: "%s | Chelsea Profile"
  },
  description: "Chelsea's retro Mac personal site, projects, and hackathon archive.",
  icons: {
    icon: [
      {
        url: "/cx-icon.jpg",
        type: "image/jpeg"
      }
    ],
    apple: [
      {
        url: "/cx-icon.jpg",
        type: "image/jpeg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${silkscreen.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
