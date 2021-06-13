import { all } from "redux-saga/effects";
import * as genreSagas from './Genre/saga';
import * as movieSagas from './Movie/saga';

export function* saga() {
    yield all([
        genreSagas.saga(),
        movieSagas.saga()
    ]);
}