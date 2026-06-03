import type { CheerioAPI } from "cheerio";

export function extractOGTag(html: CheerioAPI): Tag {
  const title =
    html('meta[property="og:title"]').attr("content") ||
    html("title").text() ||
    html('meta[name="title"]').attr("content");
  const description =
    html('meta[property="og:description"]').attr("content") ||
    html('meta[name="description"]').attr("content");

  const url = html('meta[property="og:url"]').attr("content");
  const site_name = html('meta[property="og:site_name"]').attr("content");
  const image =
    html('meta[property="og:image"]').attr("content") ||
    html('meta[property="og:image:url"]').attr("content");
  const icon =
    html('link[rel="icon"]').attr("href") ||
    html('link[rel="shortcut icon"]').attr("href");
  const keywords =
    html('meta[property="og:keywords"]').attr("content") ||
    html('meta[name="keywords"]').attr("content");

  return {
    title,
    description,
    url,
    site_name,
    image,
    icon,
    keywords,
  } satisfies Tag;
}

export const getBaseUrl = () => {
  // 1) Client-side: use the actual URL in the browser
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  // 2) Server-side on Vercel (production + preview)
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // 3) Fallback for local development (or any other environment)
  return "http://localhost:3000";
};

export const makeUrl = (subPath: string) => {
  // if (process.env.NODE_ENV === "development") {
  //   return `http://localhost:3000/${subPath}`;
  // }

  return `${getBaseUrl()}/${subPath}`;
};
