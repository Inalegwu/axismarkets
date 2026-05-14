import HoverLink from "@/components/hover-link";
import { WORKS } from "@/lib/constants";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date || ""), new Date(b.date || "")),
  );

  return (
    <div className="flex w-4/6 mx-auto flex-col items-start justify-center p-32 gap-5">
      <div className="flex flex-col items-start justify-center">
        <h1 className="font-medium text-5xl">Ikwue Inalegwu</h1>
        <p className="text-lg font-medium text-accent-400">
          Typescript Developer
        </p>
      </div>
      <div className="flex flex-col item-start gap-1">
        <p className="text-base text-accent-100">
          I'm <span className="text-teal-500">Inalegwu Ikwue</span>, A FullStack
          developer based in Abuja (Nigeria) focused on building unique and
          high-quality software products that bridge the gap between beautiful
          UI, peak UX and Performant Code.
          <br className="my-10" />
          With a career spanning 6 years in the industry, I've built products in
          industries ranging from education to communication.
        </p>
        <p className="text-base text-accent-100 my-1">
          With a career spanning 6 years in the industry, I've built products
          for{" "}
          <HoverLink href="https://dlhosolutions.ng" target="_blank">
            DLHOSolutions
          </HoverLink>
          ,{" "}
          <HoverLink href="https://trutab.com" target="_blank">
            Trutab Systems
          </HoverLink>{" "}
          and{" "}
          <HoverLink href="https://cstemp.org" target="_blank">
            CSTEmp Edutech
          </HoverLink>
        </p>
      </div>
      <div className="flex flex-col items-start gap-2">
        <p className="text-lg text-accent-300 underline">
          Works {WORKS.length}
        </p>
        {WORKS.map((work, key) => (
          <Link
            href={work.url}
            target="_blank"
            key={key}
            className="rounded-md w-full flex flex-col items-start"
          >
            <p className="underline underline-offset-2">{work.title}</p>
            <p className="text-accent-400">{work.description}</p>
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="text-accent-300 text-lg underline">Library</p>
        {posts.map((post) => (
          <Link className="py-1" key={post._id} href={post.url}>
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
