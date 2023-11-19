import { defineDocumentType, makeSource } from "@contentlayer/source-files";

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.{md,mdx}`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        subtitle: { type: "string", required: true },
        published: { type: "boolean", required: true },
        thumbnail: { type: "string", required: true },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: post => `/posts/${post._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});
