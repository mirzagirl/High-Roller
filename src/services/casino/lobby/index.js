import axiosClient from "../../axios";

export default class lobbyService {
  static async getProviders() {
    try {
      const { data } = await axiosClient.get("/casino/getAllProvider", {
        headers: { "with-token": false },
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
  static async getTransactionVbLink() {
    try {
      const { data } = await axiosClient.get("/user/userTransactionVb");
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
  static async getCryptoCurrency() {
    try {
      const data = await axiosClient.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
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
  static async getFeaturedCategories() {
    try {
      const { data } = await axiosClient.get(
        "casino/getAllGames?isMobile=false&isFeatured=true",
        { headers: { "with-token": false } }
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
  static async getRecentsGames() {
    try {
      const { data } = await axiosClient.get(
        "casino/getAllRecentGames?limit=20"
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
  static async getGameDetails({ gameId }) {
    try {
      const { data } = await axiosClient.get(
        `casino/getGameDetails?gameId=${gameId || 5498}`
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

  static async getBonusImages() {
    try {
      const { data } = await axiosClient.get(`/user/getBanner?bannerType=${1}`);
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
  static async getBannerImages() {
    try {
      const { data } = await axiosClient.get(`/user/getBanner?bannerType=${0}`);
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

  static async getSubCategory() {
    try {
      const { data } = await axiosClient.get("/casino/getAllSubCategory", {
        headers: { "with-token": false },
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
  static async getAllGames(params) {
    try {
      const { data } = await axiosClient.get("/casino/getAllGames", {
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

  static async getGameLink(payload) {
    try {
      const { data } = await axiosClient.post("GSoft/start", payload);
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
  static async getBannerImage() {
    try {
      const { data } = await axiosClient.get("/user/getBanner");
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

  static async getAllSearchedGames(params) {
    try {
      const { data } = await axiosClient.get("/casino/getAllFilteredGames", {
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

  static async getfavorites(params) {
    try {
      const { data } = await axiosClient.get("casino/getAllFavoriteGames", {
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

  static async addRemoveFavorites(payload) {
    try {
      const { data } = await axiosClient.post("user/makeCasinoGameFav", {
        ...payload,
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
}
