import { expect, test } from "@playwright/test";

test("carga la experiencia principal sin errores", async ({ page }, testInfo) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));

  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page).toHaveTitle(/Banquetes López V\.I\.P\./);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Banquetes López");
  await expect(page.locator(".hero-image")).toBeVisible();
  await expect(page.locator(".hero-scene")).toHaveAttribute("data-webgl", "ready");
  await expect(page.getByRole("link", { name: "+57 316 242 4641" })).toHaveAttribute("href", "tel:+573162424641");
  await expect(page.getByTitle("CASA DE BANQUETES V.I.P. LOPEZ")).toHaveAttribute("loading", "lazy");
  await expect(page.getByTitle("Ubicación de Banquetes López en Google Maps")).toHaveAttribute("loading", "lazy");

  const horizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(horizontalOverflow).toBe(0);
  expect(consoleErrors).toEqual([]);

  const canvasStats = await page.locator(".hero-scene canvas").evaluate((canvas) => {
    const source = canvas as HTMLCanvasElement;
    const sample = document.createElement("canvas");
    sample.width = 32;
    sample.height = 32;
    const context = sample.getContext("2d");
    if (!context) return { nonTransparent: 0, bright: 0 };

    context.drawImage(source, 0, 0, 32, 32);
    const pixels = context.getImageData(0, 0, 32, 32).data;
    let nonTransparent = 0;
    let bright = 0;

    for (let index = 0; index < pixels.length; index += 4) {
      if (pixels[index + 3] > 0) nonTransparent += 1;
      if (pixels[index] + pixels[index + 1] + pixels[index + 2] > 35) bright += 1;
    }

    return { nonTransparent, bright };
  });

  expect(canvasStats.nonTransparent).toBeGreaterThan(0);
  expect(canvasStats.bright).toBeGreaterThan(0);

  if (testInfo.project.name === "mobile-chromium") {
    const menuButton = page.getByRole("button", { name: "Abrir menú" });
    await menuButton.click();
    await expect(page.getByRole("navigation").getByRole("link", { name: "Galería" })).toBeVisible();
    await expect(page.getByRole("link", { name: /Cotizar evento/ })).toBeVisible();
  }
});

test("expone los recursos básicos para buscadores", async ({ request }) => {
  for (const path of ["/robots.txt", "/sitemap.xml", "/manifest.webmanifest", "/icon"]) {
    const response = await request.get(path);
    expect(response.ok(), `${path} debe responder correctamente`).toBeTruthy();
  }
});
