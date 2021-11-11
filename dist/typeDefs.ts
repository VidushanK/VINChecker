import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    OutputMake: Make
    OutputModel(make: String!): Model
    OutputVin(vin: String!): Vin
  }

  type Make {
	Make_Name: String
  }

  type Model {
	  Make_Name: String
	  Model_Name: String
  }

  type Vin {
	  Make: String
	  Model: String
	  ModelYear: String 
  }
`;
