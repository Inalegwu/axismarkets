import { Copyable, MarkdownView } from "@/components";
import { makeUrl } from "@/lib/utils";
import { LinkRound } from "@solar-icons/react/ssr";
import { allStudies } from "contentlayer/generated";
import { formatRelative } from "date-fns";

export const generateMetadata = async ({
  params,
}: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const post = allStudies.find((study) => study.slug === slug);

  if (!post) throw new Error("Post not found for slug ${slug}");

  return {
    title: post.title,
    description: post.subtitle,
  };
};

export default async function Page({
  params,
}: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const study = allStudies.find((study) => study.slug === slug);

  if (!study) throw new Error(`Post not found for Slug ${slug}`);

  return (
    <div className="w-full h-full overflow-hidden overflow-y-scroll px-10 py-5">
      <div className="flex mb-8 items-center justify-between w-full">
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-title text-foreground-100 font-medium text-4xl">
            {study.title}
          </h1>
          <h5 className="text-lg text-foreground-500">{study.subtitle}</h5>
        </div>
        <div className="flex flex-col items-end justify-center gap-1">
          <div className="flex items-center justify-end gap-2 text-sm text-foreground-400">
            <Copyable copyable={makeUrl(`studies/${study.slug}`)}>
              <div className="rounded-sm p-1 bg-background-950/10 border border-solid border-background-900 flex items-center justify-center">
                <LinkRound size={16} weight="Bold" />
              </div>
            </Copyable>
          </div>
          <span className="text-sm text-foreground-300">
            {formatRelative(new Date(study.date), new Date())}
          </span>
        </div>
      </div>
      <MarkdownView content={study.body.raw} />
    </div>
  );
}
