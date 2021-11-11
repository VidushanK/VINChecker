import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from './services/typeDefs';
import resolvers from './services/resolvers';

const startServer = async () => {
	const PORT = process.env.PORT || 4000;
	const app = express();
	
	const server = new ApolloServer({ typeDefs, resolvers });
	await server.start()
	server.applyMiddleware({ app });

	app.listen({ port: PORT }, () =>
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	);
};
startServer()