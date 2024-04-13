import axiosClient from "../axios";

export default class promotionsService {
  static async getPromotions() {
    try {
      const { data } = await axiosClient.get("/user/getPromotions");
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
