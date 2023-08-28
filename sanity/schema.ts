import { type SchemaTypeDefinition } from "sanity"

import blockContent from "./schemas/blockContent"
import blog from "./schemas/blog"
import post from "./schemas/post"
import category from "./schemas/category"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blog, category, blockContent],
}
