import axiosClient from "../axios";

export default class kycVerificationService {
  static async getCountries() {
    try {
      const { data } = await axiosClient.get("/user/getCountries");
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

  static async getKycDetails({ id }) {
    try {
      const { data } = await axiosClient.get(`/user/getKYCdetails?id=${id}`);
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

  static async getStates(countryId) {
    try {
      const { data } = await axiosClient.get(
        `/user/getStates?countryId=${countryId}`
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
  static async getCities(stateId) {
    try {
      const { data } = await axiosClient.get(
        `/user/getCities?stateId=${stateId}`
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
