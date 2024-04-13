import axiosClient from "../axios";

export default class liveTableService {
  static async getTopBets() {
    try {
      const { data } = await axiosClient.get(
        "/casino/getAllRecentBet?limit=8",
        {
          headers: {
            "with-token": false,
          },
        }
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
