This project is created to demo how to ensure type safety in a full stack app from backend to frontend and vice versa.

## Used techs

- [Prisma](https://www.prisma.io/) as the Object-Relational Mapper (ORM)
- [PostgreSQL](https://www.postgresql.org/) as the database
- [Railway](https://railway.app/) to host the database
- [TypeScript](https://www.typescriptlang.org/) as the programming language
- [GraphQL Yoga](https://github.com/dotansimha/graphql-yoga) as the GraphQL server
- [Pothos GraphQL](https://pothos-graphql.dev/) as the code-first GraphQL schema builder
- [GraphQL Codegen](https://the-guild.dev/graphql/codegen) to generate types for the frontend based on the GraphQL schema
- [GraphQL Scalars](https://the-guild.dev/graphql/scalars) for custom scalar types.
- [urql](https://formidable.com/open-source/urql/) a GraphQL client library that allows easily query a GraphQL API and integrates with React.
- [Vite](https://vitejs.dev/) to manage frontend project environment
- [React](https://react.dev/) as the frontend JavaScript library
- [TailwindCSS](https://tailwindcss.com/) for styling the application

## Setup

### 1.Environment Variables

In `.env` , add your `DATABASE_URL`.

### 2. Install dependencies

Within both the client and server folders, run `npm i`.

### 3. Start the app

Within both the client and server folders, run `npm run dev`.
