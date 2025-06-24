
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    category: {
      type: 'enum',
      options: ['досуг', 'родители', 'здоровье', 'учёба', 'спорт', 'творчество', 'животные', 'сделай-сам', 'шутки', 'класс'],
      description: 'The category of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'A short excerpt of the post',
      required: true,
    },
    author: {
      type: 'string',
      description: 'The author of the post',
      required: true,
    },
    image: {
      type: 'string',
      description: 'The main image for the post',
      required: false,
    },
    featured: {
      type: 'boolean',
      description: 'Whether this post is featured',
      required: false,
      default: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
})
