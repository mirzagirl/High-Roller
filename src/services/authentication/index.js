import axiosClient from "../axios";

export default class authenticationService {
  static async login(payload) {
    try {
      const { data } = await axiosClient.post("/user/login", payload);
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

  static async refreshLogin() {
    try {
      const data = await axiosClient.get("/user/refreshToken");
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

  static async signUp(payload) {
    try {
      const { data } = await axiosClient.post("/user/signUp", payload);
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

  static async verifyEmail(payload) {
    try {
      const { data } = await axiosClient.post("/user/verifyOTP", payload);
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

  static async verifyPasswordToken(payload) {
    try {
      const { data } = await axiosClient.post(
        "/user/verifyPasswordToken",
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

  static async forgotPassword(payload) {
    try {
      const { data } = await axiosClient.post("/user/forgotPassword", payload);
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

  static async getMetamaskUser(payload) {
    try {
      const { data } = await axiosClient.post(
        "/user/metamask/getNonce",
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

  static async verifyMetamaskSignature(payload) {
    try {
      const { data } = await axiosClient.post(
        "/user/metamask/verifySignature",
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

  static async verifyKyc(payload) {
    try {
      const { data } = await axiosClient.post("/user/completeKYC", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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

  static async uploadSelfieeCall(payload) {
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

  static async resendOtp(payload) {
    try {
      const { data } = await axiosClient.post("/user/resendOTP", payload);
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
