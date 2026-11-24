import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/CustomCursor";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://novaveraai.github.io/ordomind.novaveraai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OrdoMind | Intelligent Task Management & Scheduling Software",
    template: "%s | OrdoMind",
  },
  description:
    "Discover OrdoMind, an intelligent task management and scheduling engine by Nova Vera AI & Robotics Lab. Organize priorities, manage deadlines, track dependencies and transform tasks into actionable plans.",
  applicationName: "OrdoMind",
  keywords: ["OrdoMind", "task management software", "intelligent scheduling", "task prioritization", "deadline management", "productivity software", "automated planning", "Nova Vera AI"],
  authors: [{ name: "Nova Vera AI & Robotics Lab" }],
  creator: "Nova Vera AI & Robotics Lab",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "OrdoMind | Independent Intelligence & Scheduling Engine",
    description: "Transform unstructured tasks into organized, actionable plans.",
    siteName: "OrdoMind",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "OrdoMind by Nova Vera AI & Robotics Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrdoMind | Intelligent Scheduling",
    description: "Transform unstructured tasks into actionable plans.",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://novaveraai.github.io/#organization", "name": "Nova Vera AI & Robotics Lab", "url": "https://novaveraai.github.io/", "description": "An independent technology laboratory focused on artificial intelligence, robotics, automation and software engineering." },
      { "@type": "WebSite", "@id": "https://novaveraai.github.io/ordomind.novaveraai/#website", "name": "OrdoMind", "url": "https://novaveraai.github.io/ordomind.novaveraai/", "publisher": { "@id": "https://novaveraai.github.io/#organization" }, "inLanguage": "en" },
      { "@type": "SoftwareApplication", "@id": "https://novaveraai.github.io/ordomind.novaveraai/#software", "name": "OrdoMind", "applicationCategory": "BusinessApplication", "description": "An independent intelligence and scheduling engine for task organization, priority management, deadline tracking, dependency management and automated planning.", "url": "https://novaveraai.github.io/ordomind.novaveraai/", "creator": { "@id": "https://novaveraai.github.io/#organization" } }
    ]
  };

  return (
    <html lang="en" className={`${interSans.variable} ${jetbrainsMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="relative min-h-full bg-background text-foreground grain" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CustomCursor />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}