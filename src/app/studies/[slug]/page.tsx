import { MarkdownView } from "@/components";
import { allStudies } from "contentlayer/generated";

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
    <div>
      <MarkdownView content={study.body.raw} />
    </div>
  );
}
