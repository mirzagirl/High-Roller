import { put, takeEvery, takeLatest } from "redux-saga/effects";

import lobbyService from "../../../../services/casino/lobby";
import {
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
  getBannerImageStart,
  getBannerImageFailure,
  getBannerImageSuccess,
  getSearchedGamesStart,
  getSearchedGamesSuccess,
  getSearchedGamesFailure,
  getBannerImagesStart,
  getBannerImagesSuccess,
  getBannerImagesFailure,
  getBonusImagesStart,
  getBonusImagesSuccess,
  getBonusImagesFailure,
  getCryptoCurrencyPriceStart,
  getCryptoCurrencyPriceError,
  getCryptoCurrencyPriceSuccess,
  getTransactionStart,
} from "../../../redux/casino/lobby";
import { showErrorMessage } from "../../../redux/toast";

function* casinoLobbyWatcher() {
  yield takeLatest(getBannerImageStart.type, getBannerImageWorker);
  yield takeLatest(getBannerImagesStart.type, bannerImagesWorker);
  yield takeLatest(getBonusImagesStart.type, bonusImagesWorker);
  yield takeLatest(getCryptoCurrencyPriceStart.type, cryptoCurrencyWorker);
  yield takeLatest(getTransactionStart.type, getTransactionWorker);
  yield takeEvery(
    [
      getProvidersStart.type,
      getSubCategoryStart.type,
      getGamesStart.type,
      getGameLinkStart.type,
      getSearchedGamesStart.type,
    ],
    casinoLobbyWorker
  );
}
function* cryptoCurrencyWorker(action) {
  try {
    const { data, error } = yield lobbyService.getCryptoCurrency();
    if (!error) {
      yield put(getCryptoCurrencyPriceSuccess(data));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getCryptoCurrencyPriceError());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getCryptoCurrencyPriceError());
  }
}

function* getTransactionWorker() {
  try {
    const { data, error } = yield lobbyService.getTransactionVbLink();
    console.log("resp", data, error);
  } catch (error) {
    console.log("Error Call transaction");
  }
}
function* casinoLobbyWorker(action) {
  try {
    switch (action.type) {
      case getProvidersStart.type: {
        const { data, error } = yield lobbyService.getProviders();
        if (!error) {
          yield put(getProvidersSuccess(data));
        }
        if (error) {
          yield put(showErrorMessage({ msg: error.message }));
          yield put(getProvidersFailure());
        }
        break;
      }

      case getSubCategoryStart.type: {
        const { data, error } = yield lobbyService.getSubCategory();
        if (!error) {
          yield put(getSubCategorySuccess(data));
        }
        if (error) {
          yield put(showErrorMessage({ msg: error.message }));
          yield put(getSubCategoryFailure());
        }
        break;
      }

      case getGamesStart.type: {
        const { data, error } = yield lobbyService.getAllGames({
          ...action.payload,
          isMobile: false,
          loadMoreGames: null,
        });
        if (!error) {
          yield put(
            getGamesSuccess({
              games: data.games,
              numberOfPages: data.numberOfPages,
              gamesCount: data.queriedCount,
              loadMoreGames: action.payload?.loadMoreGames,
            })
          );
        }
        if (error) {
          yield put(showErrorMessage({ msg: error.message }));
          yield put(getGamesFailure());
        }
        break;
      }

      case getGameLinkStart.type: {
        const gameDetail = action.payload;
        const { data, error } = yield lobbyService.getGameLink(action.payload);
        if (!error) {
          yield put(getGameLinkSuccess({ data, gameDetail }));
        }
        if (error) {
          yield put(showErrorMessage({ msg: error.message }));
          yield put(getGameLinkFailure());
        }
        break;
      }

      case getSearchedGamesStart.type: {
        const { data, error } = yield lobbyService.getAllSearchedGames({
          ...action.payload,
          loadMoreSeachedGames: null,
          isMobile: false,
        });
        if (!error) {
          yield put(
            getSearchedGamesSuccess({
              searchGames: data.games,
              searchNoOfPages: data.numberOfPages,
              searchCount: data.queriedCount,
              loadMoreSeachedGames: action.payload?.loadMoreSeachedGames,
            })
          );
        }
        if (error) {
          yield put(showErrorMessage({ msg: error.message }));
          yield put(getSearchedGamesFailure());
        }
        break;
      }

      default: {
        break;
      }
    }
  } catch (error) {
    switch (action.type) {
      case getProvidersStart.type: {
        yield put(getProvidersFailure());
        break;
      }
      case getSubCategoryStart.type: {
        yield put(getSubCategoryFailure());
        break;
      }
      case getGamesStart.type: {
        yield put(getGamesFailure());
        break;
      }
      case getGameLinkStart.type: {
        yield put(getGameLinkFailure());
        break;
      }
      default:
        break;
    }
    yield put(showErrorMessage({ msg: error.message }));
  }
}

function* bonusImagesWorker() {
  try {
    const { data, error } = yield lobbyService.getBonusImages();
    if (!error) {
      yield put(getBonusImagesSuccess(data));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getBonusImagesFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getBonusImagesFailure());
  }
}

function* bannerImagesWorker() {
  try {
    const { data, error } = yield lobbyService.getBannerImages();
    if (!error) {
      yield put(getBannerImagesSuccess(data));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getBannerImagesFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getBannerImagesFailure());
  }
}
function* getBannerImageWorker() {
  try {
    const { data, error } = yield lobbyService.getBannerImage();
    if (!error) {
      yield put(getBannerImageSuccess(data));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getBannerImageFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getProvidersFailure());
  }
}

export default casinoLobbyWatcher;
