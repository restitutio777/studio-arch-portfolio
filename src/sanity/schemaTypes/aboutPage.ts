import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "heroStatement",
      title: "Hero Statement",
      type: "text",
      rows: 3,
      description: 'Bold hero text, e.g., "I DON\'T MAKE RENDERS. I CRAFT VISUAL NARRATIVES FOR ARCHITECTURE."',
    }),
    defineField({
      name: "portraitImage",
      title: "Portrait Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt Text" }],
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "portableText",
    }),
    defineField({
      name: "philosophy",
      title: "Philosophy",
      type: "portableText",
    }),
    defineField({
      name: "philosophyImage",
      title: "Philosophy Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt Text" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
});
