import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import playwright from "playwright";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const browser = await playwright.chromium.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      executablePath: join(
        process.cwd(),
        "node_modules",
        "playwright-core",
        ".local-browsers",
        "chromium",
        "chrome-linux",
        "chrome",
      ),
      headless: true,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url, { waitUntil: "networkidle" });
    const screenshot = await page.screenshot();
    await browser.close();
    return new NextResponse(screenshot, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error: any) {
    console.error("Error capturing screenshot:", error.message);
    return NextResponse.json(
      { error: `Failed to capture screenshot: ${error.message}` },
      { status: 500 },
    );
  }
}
