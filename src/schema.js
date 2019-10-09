import { gql } from 'apollo-server';

const typeDefs = gql`
  type Bank {
    id: ID
    bank: String
    status: String
  }

  type CategoryResponse {
    CategoryCode: String
  }

  type BillResponse {
    BillCode: String
  }

  type BillTransaction {
    billpaymentStatus: String
    billpaymentAmount: String
    billpaymentInvoiceNo: String
  }

  input BillInput {
    categoryCode: String!
    billName: String!
    billDescription: String!
    billPriceSetting: Int!
    billPayorInfo: Int!
    billAmount: Int!
    billReturnUrl: String!
    billCallbackUrl: String!
    billExternalReferenceNo: String!
    billTo: String!
    billEmail: String!
    billPhone: String!
    billSplitPayment: Int!
    billSplitPaymentArgs: String!
    billPaymentChannel: Int
  }

  type Query {
    getBanks: [Bank]
    getBillTransactions(
      billCode: String
      billExternalReferenceNo: String
    ): [BillTransaction]
  }

  type Mutation {
    createCategory(name: String!, description: String!): CategoryResponse
    createBill(bill: BillInput): BillResponse
  }
`;

export default typeDefs;
