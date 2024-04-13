import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: false,
  favorites: [],
  favoritesCount: 0,
  gameDetail: null,
  numberOfPages: 0,
  loadMoreFavorites: false,
  favStatus: null,
  featuredGames: [],
  relatedGames: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    getFavoritesStart: (state, action) => {
      if (action.payload?.loadMoreFavorites) {
        state.loading = true;
        state.loadMoreFavorites = true;
      }
      if (!action.payload?.loadMoreFavorites) {
        state.loading = true;
      }
    },
    getFavoritesSuccess: (state, action) => {
      if (action.payload?.loadMoreFavorites) {
        state.loadMoreFavorites = false;
        state.loading = false;
        state.favorites = [...state.favorites, ...action.payload.favorites];
      }
      if (!action.payload?.loadMoreFavorites) {
        state.loading = false;
        state.loadMoreFavorites = false;
        state.favorites = action.payload.favorites;
      }
      state.success = true;
      state.numberOfPages = action.payload?.numberOfPages || 0;
      state.favoritesCount = action.payload?.favoritesCount || 0;
    },
    getFavoritesFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.loadMoreFavorites = false;
    },
    addRemoveFavoritesStart: (state, action) => {
      if (!action.payload?.notShowLoading) {
        state.loading = true;
      }
    },
    addRemoveFavoritesSuccess: (state, action) => {
      state.success = true;
      state.error = false;
      state.loading = false;
      state.favStatus = action.payload;
    },
    addRemoveFavoritesFailure: (state) => {
      state.error = true;
      state.success = false;
      state.loading = false;
    },
    resetSuccess: (state) => {
      state.success = initialState.success;
      state.favStatus = initialState.favStatus;
    },
    getFeaturedGamesStart: (state, action) => {
      state.loading = true;
    },
    getFeaturedGamesSuccess: (state, action) => {
      state.loading = false;
      state.featuredGames = action.payload?.games;
    },
    getFeaturedGamesError: (state, action) => {
      state.loading = false;
    },
    getRecentsGamesStart: (state, action) => {
      state.loading = true;
    },
    getRecentsGamesSuccess: (state, action) => {
      state.loading = false;
      state.recentsGames = action.payload;
    },
    getRecentsGamesFailure: (state, action) => {
      state.loading = false;
    },
    getGameDetailStart: (state) => {
      state.loading = true;
    },
    getGameDetailSuccess: (state, action) => {
      state.gameDetail = action.payload.gameDetails;
      state.relatedGames = action.payload.relatedGames;
      state.loading = false;
    },
    getGameDetailFailure: (state) => {
      state.loading = false;
    },
    resetFavoritesState: () => initialState,
  },
});

export const {
  getFavoritesStart,
  getFavoritesSuccess,
  getFavoritesFailure,
  addRemoveFavoritesStart,
  addRemoveFavoritesSuccess,
  addRemoveFavoritesFailure,
  resetSuccess,
  resetFavoritesState,
  getFeaturedGamesError,
  getFeaturedGamesStart,
  getFeaturedGamesSuccess,
  getRecentsGamesStart,
  getRecentsGamesSuccess,
  getRecentsGamesFailure,
  getGameDetailStart,
  getGameDetailSuccess,
  getGameDetailFailure,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
