import axiosClient from "../axios";

export default class currencyService {
  static async getCurrencies() {
    try {
      const { data } = await axiosClient.get("/user/currencies");
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
