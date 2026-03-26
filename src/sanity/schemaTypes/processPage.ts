import { defineField, defineType } from "sanity";

export const processPage = defineType({
  name: "processPage",
  title: "Process Page",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "steps",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", type: "string", title: "Step Number" },
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "portableText", title: "Description" },
            {
              name: "image",
              type: "image",
              title: "Image",
              options: { hotspot: true },
              fields: [{ name: "alt", type: "string", title: "Alt Text" }],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Process Page" };
    },
  },
});
