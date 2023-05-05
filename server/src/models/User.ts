import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    messages: t.relation("messages"),
  }),
});
// type User {
//     id: ID!
//     messages: [Message!]!
//     name: String!
//   }

// Adds a field to the GraphQL schema's Query type named "users"
// Defines a field that resolves to some type in your Prisma schema
// Lets Pothos know this field will resolve to an array of your Prisma Client's User type
// Sets up a resolver function for this field.
builder.queryField("users", (t) =>
  t.prismaField({
    type: ["User"],
    resolve: async (query, root, args, ctx, info) =>
      prisma.user.findMany({ ...query }),
  })
);

// type Query {
//     users: [User!]!
//   }
