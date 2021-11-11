import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    OutputMake: MakeResults
    OutputModel(make: String!): ModelResults
    OutputVin(vin: String!): Vin
  }

  type MakeResults {
	results: [Make]
  }

  type ModelResults{
	  results: [Model]
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
