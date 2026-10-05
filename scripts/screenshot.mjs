// Usage: node scripts/screenshot.mjs <url> <outDir>
// Captures desktop (dark/light), tablet and mobile full-page screenshots using system Chrome.
import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const [url = "http://localhost:3100/", outDir = "docs/shots"] = process.argv.slice(2);
mkdirSync(outDir, { recursive: true });

const targets = [
  { name: "desktop-dark", width: 1440, height: 900, theme: "dark" },
  { name: "desktop-light", width: 1440, height: 900, theme: "light" },
  { name: "tablet-dark", width: 820, height: 1180, theme: "dark" },
  { name: "mobile-dark", width: 390, height: 844, theme: "dark" },
];

const browser = await chromium.launch({ channel: "chrome", headless: true });
for (const t of targets) {
  const page = await browser.newPage({ viewport: { width: t.width, height: t.height }, deviceScaleFactor: 1 });
  const u = new URL(url);
  u.searchParams.set("theme", t.theme);
  await page.goto(u.toString(), { waitUntil: "networkidle" });
  // trigger reveal observers the way a user would: wheel-scroll through the page
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < total; y += 160) {
    await page.mouse.wheel(0, 160);
    await page.waitForTimeout(30);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1600);
  const overflow = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  await page.screenshot({ path: `${outDir}/${t.name}.png`, fullPage: true });
  console.log(`${t.name}: ${t.width}x${t.height} overflow=${overflow.scrollWidth > overflow.clientWidth ? `YES (${overflow.scrollWidth}>${overflow.clientWidth})` : "no"}`);
  await page.close();
}
await browser.close();
