import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: false,
  providers: [],
  subCategory: [],
  games: [],
  gamesCount: 0,
  numberOfPages: 0,
  gameLink: "",
  moreGamesLoading: false,
  referralCode: "",
  banners: [],
  bonusImages: [],
  bannerImages: [],
  currentGame: {},
  loadCrypto: false,
  crptoCurrencyPrice: [],
};

const casinoLobbySlice = createSlice({
  name: "casinoLobby",
  initialState,
  reducers: {
    getProvidersStart: (state, action) => {
      state.loading = true;
    },
    getProvidersSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.providers = action.payload;
    },
    getProvidersFailure: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    getSubCategoryStart: (state, action) => {
      state.loading = true;
    },
    getSubCategorySuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.subCategory = action.payload;
    },
    getSubCategoryFailure: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    getGamesStart: (state, action) => {
      if (action.payload.loadMoreGames) {
        state.moreGamesLoading = true;
      }
      if (!action.payload.loadMoreGames) {
        state.loading = true;
      }
    },
    getGamesSuccess: (state, action) => {
      if (action.payload.loadMoreGames) {
        state.moreGamesLoading = false;
        state.games = [...state.games, ...action.payload.games];
      }
      if (!action.payload.loadMoreGames) {
        state.loading = false;
        state.games = action.payload.games;
      }
      state.success = true;
      state.numberOfPages = action.payload.numberOfPages;
      state.gamesCount = action.payload.gamesCount;
    },
    getGamesFailure: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    getGameLinkStart: (state, action) => {
      state.loading = true;
    },
    getGameLinkSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.gameLink = action.payload.data;
      state.currentGame = action.payload.gameDetail;
    },
    getGameLinkFailure: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    resetGameState: (state, action) => {
      state.games = [];
    },
    getReferralCode: (state, action) => {
      state.referralCode = action.payload;
    },
    getBannerImageStart: (state) => {
      state.loading = true;
    },
    getBannerImageFailure: (state, action) => {
      state.loading = false;
    },
    getBannerImageSuccess: (state, action) => {
      state.loading = false;
      state.banners = action.payload;
    },
    getSearchedGamesStart: (state, action) => {
      if (action.payload.loadMoreSeachedGames) {
        state.moreSearchLoading = true;
      }
      if (!action.payload.loadMoreSeachedGames) {
        state.searchLoading = true;
      }
    },
    getSearchedGamesSuccess: (state, action) => {
      if (action.payload.loadMoreSeachedGames) {
        state.moreSearchLoading = false;
        state.searchGames = [
          ...state.searchGames,
          ...action.payload.searchGames,
        ];
      }
      if (!action.payload.loadMoreSeachedGames) {
        state.searchLoading = false;
        state.searchGames = action.payload.searchGames;
      }
      state.success = true;
      state.searchNoOfPages = action.payload.searchNoOfPages;
      state.searchCount = action.payload.searchCount;
    },
    getSearchedGamesFailure: (state) => {
      state.searchLoading = false;
      state.loading = false;
      state.error = true;
    },
    resetSearchGames: (state) => {
      state.searchGames = [];
      state.searchNoOfPages = 0;
      state.searchCount = 0;
    },

    getBannerImagesStart: (state, action) => {
      state.loading = true;
    },
    getBannerImagesSuccess: (state, action) => {
      state.loading = false;
      state.bannerImages = action.payload;
    },
    getBannerImagesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getBonusImagesStart: (state, action) => {
      state.loading = true;
    },
    getBonusImagesSuccess: (state, action) => {
      state.loading = false;
      state.bonusImages = action.payload;
    },
    getBonusImagesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getCryptoCurrencyPriceStart: (state, action) => {
      state.loadCrypto = true;
    },
    getCryptoCurrencyPriceError: (state, action) => {
      state.loadCrypto = false;
    },
    getTransactionStart: (state, action) => {},
    getCryptoCurrencyPriceSuccess: (state, action) => {
      state.loadCrypto = false;
      state.crptoCurrencyPrice = action.payload?.filter(
        (c) =>
          c?.symbol === "btc" ||
          c?.symbol === "eth" ||
          c?.symbol === "trx" ||
          c?.symbol === "ltc"
      );
    },
    clearGameDetails: (state, action) => {
      state.gameLink = "";
    },
  },
});

export const {
  clearGameDetails,
  getCryptoCurrencyPriceStart,
  getCryptoCurrencyPriceError,
  getCryptoCurrencyPriceSuccess,
  getProvidersStart,
  getProvidersSuccess,
  getProvidersFailure,
  getSubCategoryStart,
  getSubCategorySuccess,
  getSubCategoryFailure,
  getGamesStart,
  getGamesSuccess,
  getGamesFailure,
  getGameLinkStart,
  getGameLinkSuccess,
  getGameLinkFailure,
  resetGameState,
  getReferralCode,
  getBannerImageStart,
  getBannerImageFailure,
  getBannerImageSuccess,
  getSearchedGamesStart,
  getSearchedGamesSuccess,
  getSearchedGamesFailure,
  resetSearchGames,
  getBannerImagesStart,
  getBannerImagesSuccess,
  getBannerImagesFailure,
  getBonusImagesStart,
  getBonusImagesSuccess,
  getBonusImagesFailure,
  getTransactionStart,
} = casinoLobbySlice.actions;

export default casinoLobbySlice.reducer;
