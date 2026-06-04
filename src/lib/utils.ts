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
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
};

export const makeUrl = (subPath: string) => `${getBaseUrl()}/${subPath}`;

export const isMailtoLink = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "mailto:";
  } catch {
    return false;
  }
};

export const getEmailUsername = (email: string): string | null => {
  if (!email || typeof email !== "string") return null;

  const atIndex = email.indexOf("@");
  if (atIndex === -1) return null; // not a valid email

  return email.substring(0, atIndex);
};

export const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase())
    .join("");
