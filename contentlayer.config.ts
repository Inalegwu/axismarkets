import { defineDocumentType, makeSource } from "contentlayer/source-files";
import slugify from "slugify";

const makeSlug = (text: string) =>
  slugify(text, {
    replacement: "_",
    lower: true,
    strict: true,
  });

export const Study = defineDocumentType(() => ({
  name: "Study",
  filePathPattern: "**/*.md",
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: false },
    date: { type: "date", required: true },
    coverImage: { type: "string", required: false },
    tags: {
      type: "list",
      of: [{ type: "string" }],
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => makeSlug(post.title),
    },
    url: {
      type: "string",
      resolve: (post) => `/studies/${makeSlug(post.title)}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "studies",
  documentTypes: [Study],
});
