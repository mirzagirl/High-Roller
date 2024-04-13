import axiosClient from "../axios";

export default class chatboxService {
  static async getPrevousChatsList({ language }) {
    try {
      const { data } = await axiosClient.get(
        `/user/get-messages?language=${language}`
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
  static async updateUnseenCount() {
    try {
      const { data } = await axiosClient.post("/user/update-unseen-count");
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
  static async getUsersList({ search }) {
    try {
      const { data } = await axiosClient.get(
        `/user/getUserList?search=${search}`
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
