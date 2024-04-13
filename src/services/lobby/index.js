import axiosClient from "../axios";

export default class lobbyService {
  static async getProviders() {
    try {
      const { data } = await axiosClient.get("/casino/getAllProvider");
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
