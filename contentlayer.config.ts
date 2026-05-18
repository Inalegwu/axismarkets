import { defineDocumentType, makeSource } from "contentlayer/source-files";

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
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "studies",
  documentTypes: [Study],
});
