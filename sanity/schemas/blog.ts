import { defineField, defineType } from "sanity"

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Featured",
      name: "featured",
      type: "boolean",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
})
