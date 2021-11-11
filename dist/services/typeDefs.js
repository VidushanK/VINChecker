var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "apollo-server-express";
export var typeDefs = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    OutputMake: MakeResults\n    OutputModel(make: String!): Model\n    OutputVin(vin: String!): Vin\n  }\n\n  type MakeResults {\n\tresults: [Make]\n  }\n  \n  type Make {\n\tMake_Name: String\n  }\n\n  type Model {\n\t  Make_Name: String\n\t  Model_Name: String\n  }\n\n  type Vin {\n\t  Make: String\n\t  Model: String\n\t  ModelYear: String \n  }\n"], ["\n  type Query {\n    OutputMake: MakeResults\n    OutputModel(make: String!): Model\n    OutputVin(vin: String!): Vin\n  }\n\n  type MakeResults {\n\tresults: [Make]\n  }\n  \n  type Make {\n\tMake_Name: String\n  }\n\n  type Model {\n\t  Make_Name: String\n\t  Model_Name: String\n  }\n\n  type Vin {\n\t  Make: String\n\t  Model: String\n\t  ModelYear: String \n  }\n"])));
var templateObject_1;
