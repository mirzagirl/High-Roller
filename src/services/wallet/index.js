import axiosClient from "../axios";

export default class walletService {
  static async getWalletData() {
    try {
      const { data } = await axiosClient.get("user/userWallets");
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

  static async updateWalletData(payload) {
    try {
      const { data } = await axiosClient.post(
        "/user/updateUserDefaultWallet",
        payload
      );
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

  static async searchWalletData(payload) {
    try {
      const { data } = await axiosClient.get(
        `user/userWallets?search=${payload}`
      );
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
