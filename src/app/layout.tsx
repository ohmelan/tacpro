import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/layout/SkipLink";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { siteConfig } from "@/content/nav";
import "./globals.css";
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});
const description =
  "Tax, GST, audit, compliance, and business registration services — expert guidance for your financial future.";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.fullName,
    template: `%s | ${siteConfig.fullName}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: siteConfig.fullName,
    title: siteConfig.fullName,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description,
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${bricolage.variable} h-full antialiased`}>
      <body className="bg-canvas text-canvas-fg flex min-h-full flex-col font-sans">
        <SkipLink />
        <MotionConfig reducedMotion="user">
          <Navbar />
          <div id="main-content" tabIndex={-1} className="flex flex-1 flex-col outline-none">
            {children}
          </div>
          <Footer />
          <WhatsAppButton />
        </MotionConfig>
        <Analytics />
      </body>
    </html>
  );
}
