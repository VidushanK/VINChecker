import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./services/typeDefs";
import resolvers from "./services/resolvers";
export var schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
});
