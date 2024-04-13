import axiosClient from "../axios";

export default class transactionsService {
  static async getTransactions(params) {
    try {
      const { data } = await axiosClient.get("/user/transactions", {
        params,
      });
      return data;
    } catch (error) {
      if (error.data) {
        return { error: error.data };
      }
      return {
        error,
      };
    }
  }
  static async getMyBets(params) {
    try {
      const { data } = await axiosClient.get("/Gsoft/getAllBets", {
        params,
      });
      return data;
    } catch (error) {
      if (error.data) {
        return { error: error.data };
      }
      return {
        error,
      };
    }
  }
}
