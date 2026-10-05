import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";
import { themeInitScript } from "@/hooks/useTheme";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://masha0465.github.io";
const title = `${profile.nameKo} | QA Engineer — Building Testable Systems`;
const description =
  "10년 경력 QA Engineer 김선아의 포트폴리오. 테스트 자동화, Cloud QA, 산업용 Robot/PLC/3D Vision 시스템 QA, QA 조직·프로세스 0→1 구축, Test Simulator 설계, AI-assisted QA.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "QA Engineer",
    "Test Automation",
    "Playwright",
    "Cloud QA",
    "Robot PLC Vision QA",
    "Test Simulator",
    "AI-assisted QA",
    "김선아",
    "Sunah Kim",
  ],
  authors: [{ name: profile.nameEn }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title,
    description,
    siteName: `${profile.nameEn} Portfolio`,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.nameEn,
  alternateName: profile.nameKo,
  jobTitle: profile.title,
  url: siteUrl,
  email: `mailto:${profile.links.email}`,
  sameAs: [profile.links.linkedin, profile.links.github],
  knowsAbout: [
    "Software QA",
    "Test Automation",
    "Playwright",
    "Cloud QA",
    "Kubernetes",
    "Industrial Robot / PLC / Vision QA",
    "Test Simulator",
    "AI-assisted QA",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={`${jetbrains.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
        >
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
