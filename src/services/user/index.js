import axiosClient from "../axios";

export default class userProfileService {
  static async getUserProfile() {
    try {
      const { data } = await axiosClient.get("/user/userProfile");
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

  static async updateUserProfile(payload) {
    try {
      const { data } = await axiosClient.post("/user/updateProfile", payload);
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

  static async updateUserProfileAvatar(payload) {
    try {
      const { data } = await axiosClient.post(
        "/user/uploadProfileImage",
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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

  static async resetPassword(payload) {
    try {
      const { data } = await axiosClient.post("/user/changePassword", payload);
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
  static async getGameHistory() {
    try {
      const { data } = await axiosClient.get("/user/userTopGameHistory");
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
