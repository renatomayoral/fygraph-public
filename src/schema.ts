import { makeExecutableSchema } from '@graphql-tools/schema'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers} from '@graphql-tools/merge'
import path from "path"

 const allTypes = loadFilesSync(path.join(__dirname, "../graphql/**/*.graphql"));
 const allResolvers = loadFilesSync(path.join(__dirname, "../graphql/**/*.resolvers.*"));

 const mergedTypes = mergeTypeDefs(allTypes);
 const mergedResolvers = mergeResolvers(allResolvers);

export const schema = makeExecutableSchema({
  resolvers: mergedResolvers,
  typeDefs: mergedTypes,
})