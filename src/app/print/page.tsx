import type { Metadata } from "next";
import { PrintPortfolio } from "@/components/print/PrintPortfolio";

export const metadata: Metadata = {
  title: "김선아 | QA Engineer — Portfolio (Print)",
  robots: { index: false, follow: false },
};

/** Print-friendly full portfolio. Converted to /portfolio.pdf by scripts/pdf.mjs. */
export default function PrintPage() {
  return <PrintPortfolio />;
}
