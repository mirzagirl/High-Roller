import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { isMobile } from "react-device-detect";

import lobbyService from "../../../../services/casino/lobby";
import {
  getFavoritesStart,
  getFavoritesSuccess,
  getFavoritesFailure,
  addRemoveFavoritesStart,
  addRemoveFavoritesSuccess,
  addRemoveFavoritesFailure,
  getFeaturedGamesError,
  getFeaturedGamesStart,
  getFeaturedGamesSuccess,
  getRecentsGamesStart,
  getRecentsGamesSuccess,
  getRecentsGamesFailure,
  getGameDetailStart,
  getGameDetailSuccess,
  getGameDetailFailure,
} from "../../../redux/casino/lobby/games";
import { showErrorMessage, showSuccessMessage } from "../../../redux/toast";

function* favoritesWatcher() {
  yield takeEvery(
    [getFavoritesStart.type, addRemoveFavoritesStart.type],
    favoritesWorker
  );
  yield takeLatest(getFeaturedGamesStart.type, getFeaturedGamesWorker);
  yield takeLatest(getRecentsGamesStart.type, getRecentsGamesWorker);
  yield takeLatest(getGameDetailStart.type, getGameDetailWorker);
}

function* getFeaturedGamesWorker() {
  try {
    const { data, error } = yield lobbyService.getFeaturedCategories();
    if (!error) yield put(getFeaturedGamesSuccess(data));
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getFeaturedGamesError());
    }
  } catch (error) {
    console.log(error);
  }
}

function* getGameDetailWorker(action) {
  try {
    const { gameId } = action && action.payload;
    const { data, error } = yield lobbyService.getGameDetails({ gameId });
    if (!error) yield put(getGameDetailSuccess(data));
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getGameDetailFailure());
    }
  } catch (error) {
    console.log(error);
  }
}
function* favoritesWorker(action) {
  try {
    switch (action.type) {
      case getFavoritesStart.type: {
        const { data, error } = yield lobbyService.getfavorites({
          ...action.payload,
          loadMoreFavorites: null,
        });
        if (!error) {
          yield put(
            getFavoritesSuccess({
              favorites: data?.games,
              numberOfPages: data?.numberOfPages || 0,
              favoritesCount: data?.queriedCount || 0,
              loadMoreFavorites: action.payload?.loadMoreFavorites,
            })
          );
        }
        if (error) {
          yield put(showErrorMessage({ msg: error.message }));
          yield put(getFavoritesFailure());
        }
        break;
      }

      case addRemoveFavoritesStart.type: {
        const resObj = JSON.parse(JSON.stringify(action.payload));
        delete resObj?.recallFav;
        const { data, error } = yield lobbyService.addRemoveFavorites(resObj);
        if (!action.payload?.favStatus) {
          yield put(showSuccessMessage({ tKey: "LOBBY.GAME_ADDED_TO_FAV" }));
        } else {
          yield put(
            showSuccessMessage(
              { tKey: "LOBBY.GAME_REMOVED_FROM_FAV" },
              { id: "favpage" }
            )
          );
        }

        if (!error) {
          if (action.payload?.recallFav) {
            yield put(
              getFavoritesStart({
                limit: action.payload?.recallFav || 12,
                page: 1,
                isMobile,
              })
            );
          }
          yield put(addRemoveFavoritesSuccess(data));
        }
        if (error) {
          yield put(showErrorMessage({ msg: error.message }));
          yield put(addRemoveFavoritesFailure());
        }
        break;
      }

      default: {
        break;
      }
    }
  } catch (error) {
    switch (action.type) {
      case getFavoritesStart.type: {
        yield put(getFavoritesFailure());
        break;
      }
      case addRemoveFavoritesStart.type: {
        yield put(addRemoveFavoritesFailure());
        break;
      }

      default:
        break;
    }
    yield put(showErrorMessage({ msg: error.message }));
  }
}

function* getRecentsGamesWorker() {
  try {
    const { data, error } = yield lobbyService.getRecentsGames();
    if (!error) yield put(getRecentsGamesSuccess(data));
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getRecentsGamesFailure());
    }
  } catch (error) {
    console.log(error);
  }
}

export default favoritesWatcher;
