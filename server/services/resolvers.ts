import fetch from "node-fetch";

const resolveMake = (data: { [x: string]: any[]; }) => {
	const promises = data['Results'].map((make: { Make_Name: any; }) => {
		return { Make_Name: make.Make_Name }
	});

	return Promise.all(promises);
};

const resolveModel = (data: { [x: string]: any[]; }) => {
	const promises = data['Results'].map((model: { Make_Name: string; Model_Name: any; }) => {
		return {
			Make_Name: model.Make_Name,
			Model_Name: model.Model_Name
		}
	});

	return Promise.all(promises);
};

const resolvers = {
	MakeResults: {
		results: resolveMake
	},
	ModelResults: {
		results: resolveModel
	},
	Query: {
		OutputMake: async () => {
			const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json`);
			return response.json()
		},
		OutputModel: async (_: any, { make }: any) => {

			const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`)
			return response.json()


		},
		OutputVin: async (_: any, { vin }: any) => {
			return {
				Make: 'SUBARU',
				Model: 'BRZ',
				ModelYear: '2018' 
			};
		}
	}
};

export default resolvers;