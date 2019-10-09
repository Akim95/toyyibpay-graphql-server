const resolvers = {
  Query: {
    getBanks: async (_source, arg, { dataSources }) => {
      return dataSources.toyyibPayAPI.getBank();
    },
    getBillTransactions: (_source, args, { dataSources }) => {
      return dataSources.toyyibPayAPI.getBillTransactions(
        args.billCode,
        args.billExternalReferenceNo
      );
    },
  },
  Mutation: {
    createCategory: (_source, args, { dataSources }) => {
      return dataSources.toyyibPayAPI.createCategory({
        catname: args.name,
        catdescription: args.description,
      });
    },
    createBill: (_source, args, { dataSources }) => {
      return dataSources.toyyibPayAPI.createBill(args.bill);
    },
  },
};

export default resolvers;
