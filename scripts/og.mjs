// Renders public/og.png (1200x630) from an inline HTML template using system Chrome.
// Run: node scripts/og.mjs
import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const html = `<!doctype html><html lang="ko"><head><meta charset="utf-8">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
<style>
  html,body{margin:0;width:1200px;height:630px;background:#0b0f14;color:#e5e7eb;font-family:"Pretendard Variable",Pretendard,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
  .grid{position:absolute;inset:0;background-image:linear-gradient(to right,rgba(229,231,235,.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(229,231,235,.05) 1px,transparent 1px);background-size:48px 48px;-webkit-mask-image:radial-gradient(ellipse 80% 70% at 30% 20%,#000 40%,transparent 100%)}
  .wrap{position:relative;padding:72px 80px;height:100%;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between}
  .eyebrow{font-family:ui-monospace,Menlo,monospace;font-size:20px;letter-spacing:.14em;color:#9ca3af;text-transform:uppercase}
  h1{margin:28px 0 0;font-size:76px;line-height:1.05;font-weight:650;letter-spacing:-.02em}
  h1 span{color:#9ca3af}
  .sub{margin-top:26px;font-size:30px;color:#9ca3af}
  .row{display:flex;flex-direction:column;align-items:flex-start;gap:22px}
  .name{font-size:34px;font-weight:600}
  .name{white-space:nowrap}
  .name small{font-family:ui-monospace,Menlo,monospace;font-size:20px;color:#9ca3af;margin-left:14px;font-weight:400}
  .chips{display:flex;gap:10px}
  .chip{white-space:nowrap;font-family:ui-monospace,Menlo,monospace;font-size:18px;border:1.5px solid #334155;border-radius:8px;padding:10px 14px;color:#e5e7eb;background:#111827}
  .chip.a{border-color:#22c55e;color:#22c55e;background:rgba(34,197,94,.12)}
  .url{position:absolute;right:80px;top:72px;font-family:ui-monospace,Menlo,monospace;font-size:20px;color:#9ca3af;letter-spacing:.08em}
</style></head><body>
<div class="grid"></div>
<div class="wrap">
  <div>
    <div class="eyebrow">QA Engineer · 10 Years of Software QA</div>
    <div class="url">masha0465.github.io</div>
    <h1>Building Testable Systems,<br><span>Not Just Tests.</span></h1>
    <div class="sub">테스트를 수행하는 QA에서, 테스트 가능한 시스템을 만드는 QA로.</div>
  </div>
  <div class="row">
    <div class="name">김선아 <small>Sunah Kim · QA Engineer</small></div>
    <div class="chips">
      <span class="chip">Test Automation</span><span class="chip">Cloud QA</span>
      <span class="chip">Robot · PLC · Vision QA</span><span class="chip a">AI-assisted QA</span>
    </div>
  </div>
</div></body></html>`;

mkdirSync("public", { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle" });
await page.waitForTimeout(500);
await page.screenshot({ path: "public/og.png", type: "png" });
await browser.close();
console.log("public/og.png written");
