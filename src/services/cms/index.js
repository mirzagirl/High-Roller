import axiosClient from "../axios";

export default class cmsService {
  static async getCMSData() {
    try {
      const { data } = await axiosClient.get("/user/getCms");
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
