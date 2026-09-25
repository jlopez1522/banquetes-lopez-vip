const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  const viewports = [
    { name: "desktop", width: 1440, height: 1000 },
    { name: "mobile", width: 390, height: 844 },
  ];

  for (const viewport of viewports) {
    const page = await browser.newPage({
      viewport: { width: viewport.width, height: viewport.height },
    });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.screenshot({
      path: `.next/${viewport.name}-hero.png`,
      fullPage: false,
    });

    const data = await page.evaluate(() => {
      const canvas = document.querySelector(".hero-scene canvas");
      if (!(canvas instanceof HTMLCanvasElement)) {
        return { exists: false };
      }

      const rect = canvas.getBoundingClientRect();
      const sample = document.createElement("canvas");
      sample.width = 32;
      sample.height = 32;
      const context = sample.getContext("2d");
      if (!context) {
        return { exists: true, width: rect.width, height: rect.height, sampled: false };
      }

      context.drawImage(canvas, 0, 0, 32, 32);
      const pixels = context.getImageData(0, 0, 32, 32).data;
      let nonTransparent = 0;
      let bright = 0;

      for (let index = 0; index < pixels.length; index += 4) {
        if (pixels[index + 3] > 0) {
          nonTransparent += 1;
        }
        if (pixels[index] + pixels[index + 1] + pixels[index + 2] > 35) {
          bright += 1;
        }
      }

      return {
        exists: true,
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        sampled: true,
        nonTransparent,
        bright,
      };
    });

    results.push({ viewport: viewport.name, ...data });
    await page.close();
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
