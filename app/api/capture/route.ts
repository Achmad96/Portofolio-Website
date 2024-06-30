import { NextRequest, NextResponse } from "next/server";
import * as puppeteer from "puppeteer";
import chrome from "chrome-aws-lambda";
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }
  try {
    const browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    });
    if (!browser) return;
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(url, { waitUntil: "networkidle2" });
    const screenshot = await page.screenshot();
    await browser.close();
    return new NextResponse(screenshot, {
      headers: { "Content-Type": "image/png" },
    });
  } catch (error: any) {
    console.error("Error capturing screenshot:", error);
    return NextResponse.json(
      { error: `Failed to capture screenshot: ${error.message}` },
      { status: 500 },
    );
  }
}
