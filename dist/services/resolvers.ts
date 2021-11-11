import fetch from "node-fetch";

const resolveMake = (data: { [x: string]: any[]; }) => {
	const promises = data['Results'].map((make: { Make_Name: string; }) => {
		return { Make_Name: make.Make_Name }
	});

	return Promise.all(promises);
};

const resolveModel = (data: { [x: string]: any[]; }) => {
	const promises = data['Results'].map((model: { Make_Name: string; Model_Name: string; }) => {
		return {
			Make_Name: model.Make_Name,
			Model_Name: model.Model_Name
		}
	});

	return Promise.all(promises);
};

const resolveVin = (data: { [x: string]: any[]; }) => {
	const promises = data['Results'].map((vin: { Make: string; Model: string; ModelYear: string; }) => {
		return {
			Make: vin.Make,
			Model: vin.Model,
			ModelYear: vin.ModelYear
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
	VinResults: {
		results: resolveVin
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
			const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`)
			return response.json()
		}
	}
};

export default resolvers;