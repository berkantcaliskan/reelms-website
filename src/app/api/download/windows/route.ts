import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const fallbackUrl = "https://github.com/berkantcaliskan/reelms/releases/latest/download/Reelms.exe";

  try {
    const res = await fetch("https://api.github.com/repos/berkantcaliskan/reelms/releases/latest", {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "Reelms-Website-Downloader",
      },
      next: { revalidate: 30 },
    });

    if (res.ok) {
      const release = await res.json();
      const exeAsset = release.assets?.find((asset: { name: string; browser_download_url: string }) =>
        asset.name.toLowerCase().endsWith(".exe")
      );

      if (exeAsset?.browser_download_url) {
        return NextResponse.redirect(exeAsset.browser_download_url, 302);
      }
    }
  } catch (err) {
    console.error("Failed to query latest release:", err);
  }

  return NextResponse.redirect(fallbackUrl, 302);
}
