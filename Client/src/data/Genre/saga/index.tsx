import { all, takeEvery } from "redux-saga/effects";
import { fetchGenres } from "./fetchGenres";
import * as actions from '../actions';

export function* saga(){
    yield all([
        takeEvery(actions.FETCH_GENRES_STARTED, fetchGenres)
    ]);
}