import fetch from "node-fetch";

const resolveMake = (data: { [x: string]: any[]; }) => {
	const promises = data['Results'].map((make: { Make_Name: any; }) => {
		return { Make_Name: make.Make_Name }
	});

	return Promise.all(promises);
};

const resolvers = {
	MakeResults: {
		results: resolveMake
	},
	Query: {
		OutputMake: async () => {
			const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json`);
			return response.json()
		},
		OutputModel: async (_: any, { make }: any) => {
			return {
				Make_Name: make,
				Model_Name: 'BRZ'
			};
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