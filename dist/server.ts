import express from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";

const startServer = async () => {
	const PORT = process.env.PORT || 4000;
	const app = express();
	
	const server = new ApolloServer({ schema });
	await server.start()
	server.applyMiddleware({ app });

	app.listen({ port: PORT }, () =>
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	);
};
startServer()