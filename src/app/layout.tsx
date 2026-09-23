import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { brand } from "@/content/site";
import { motionBootScript } from "@/lib/motion-boot";
import "./globals.css";

// Brand fonts observed on the live site (docs/BRAND.md). Both are SIL OFL
// Google Fonts, self-hosted at build time by next/font.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

/** Review builds stay out of search results until launch is deliberately configured. */
const allowIndexing = process.env.KYAWAMA_ALLOW_INDEXING === "true";

export const metadata: Metadata = {
  title: {
    default: `${brand.publicName} — Digital skills in rural Zambia`,
    template: `%s · ${brand.publicName}`,
  },
  description: brand.description,
  robots: allowIndexing ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#12463a",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${bricolage.variable} ${figtree.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <MotionProvider>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          {process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_REVIEW_BUILD === "true" ? (
            <p className="pointer-events-none fixed bottom-3 left-3 z-40 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-cream">
              Draft concept · not for publication
            </p>
          ) : null}
        </MotionProvider>
      </body>
    </html>
  );
}
