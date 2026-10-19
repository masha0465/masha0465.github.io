// Renders /print to public/portfolio.pdf (A4) using system Chrome.
// Usage: node scripts/pdf.mjs [url] [out]   e.g. node scripts/pdf.mjs http://localhost:3100/print/ public/portfolio.pdf
import { chromium } from "playwright-core";

const [url = "http://localhost:3100/print/", out = "public/portfolio.pdf"] = process.argv.slice(2);

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
await page.goto(url, { waitUntil: "load" });
// Pretendard is injected on window load; wait for fonts + network to settle.
await page.waitForLoadState("networkidle");
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(800);
await page.emulateMedia({ media: "print" });

const footer = `
<div style="width:100%;padding:0 12mm;display:flex;justify-content:space-between;font-family:ui-monospace,Menlo,monospace;font-size:7.5px;color:#6b7280;">
  <span>김선아 · QA Engineer · masha0465.github.io</span>
  <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
</div>`;

await page.pdf({
  path: out,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: false,
  margin: { top: "10mm", right: "0mm", bottom: "14mm", left: "0mm" },
  displayHeaderFooter: true,
  headerTemplate: "<span></span>",
  footerTemplate: footer,
});
await browser.close();
console.log(`written ${out}`);
