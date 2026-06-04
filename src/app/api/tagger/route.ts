import { extractOGTag } from "@/lib/utils";
import { load } from "cheerio";

export async function GET(req: Request) {
  const searchParams = new URL(req.url).searchParams;
  const url = searchParams.get("url");

  if (!url) {
    return Response.json({});
  }

  const page = await fetch(url)
    .then((res) => res.text())
    .catch((err) => console.log(err))
    .then((txt) => load(txt ? txt : ""));

  const tags = extractOGTag(page);

  return Response.json(tags);
}
