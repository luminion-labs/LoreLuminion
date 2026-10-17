import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoreLuminion — Illuminating Every Story",
  description: "Your signal for gaming, anime, movies, technology, and internet culture.",
  applicationName: "LoreLuminion",
  icons: { icon: "/logo.png" }
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
