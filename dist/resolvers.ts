const resolvers = {
	Query: {
		OutputMake: async () => {
			return {
				Make_Name: 'SUBARU'
			}
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