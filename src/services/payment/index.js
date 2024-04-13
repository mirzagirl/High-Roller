import axiosClient from "../axios";

export default class paymentService {
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
  static async validateAddress(params) {
    try {
      const { data } = await axiosClient.get("/payment/checkWalletAddress", {
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

  static async getAllCurrency(params = {}) {
    try {
      const { data } = await axiosClient.get("/user/currencies", {
        params,
      });
      return data;
    } catch (error) {
      if (error.data) {
        throw new Error(error.data.message);
      }
      throw new Error(error.message);
    }
  }

  static async getCoins() {
    try {
      const { data } = await axiosClient.get("/payment/getCoins");
      return data;
    } catch (error) {
      if (error.data) {
        throw new Error(error.data.message);
      }
      throw new Error(error.message);
    }
  }

  static async generateAddress(params) {
    try {
      const { data } = await axiosClient.get("/payment/generateAddress", {
        params,
      });
      return data;
    } catch (error) {
      if (error.data) {
        throw new Error(error.data.message);
      }
      throw new Error(error.message);
    }
  }

  static async getConvertedBalance(params) {
    try {
      const { data } = await axiosClient.get("/payment/getConvertedBalance", {
        params,
      });
      return data;
    } catch (error) {
      if (error.data) {
        throw new Error(error.data.message);
      }
      throw new Error(error.message);
    }
  }

  static async withdrawalRequest(payload) {
    try {
      const { data } = await axiosClient.post(
        "/payment/withdrawalRequest",
        payload
      );
      return data;
    } catch (error) {
      if (error.data) {
        throw new Error(error.data.message);
      }
      throw new Error(error.message);
    }
  }
}
