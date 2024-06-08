import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_SONG,
  ADD_SONG,
  UPDATE_SONG,
  DELETE_SONG,
  addSongSuccess,
  addSongFailure,
  updateSongSuccess,
  updateSongFailure,
  deleteSongSuccess,
  deleteSongFailure,
  fetchSongSuccess,
  fetchSongFailure
} from '../actions';

const url = 'http://localhost:8000/music';


function* fetchSong() {
  try {

    const res = yield call(axios.get, url);
    console.log(res.data);
    yield put(fetchSongSuccess(res.data));
  } catch (error) {
    yield put(fetchSongFailure(error.message));
  }
}

function* addSong(action) {
  try {
    console.log(action.payload);
    const res = yield call(axios.post, url, action.payload);
    yield put(addSongSuccess(res.data));
    alert("successfully added");
  } catch (error) {
    yield put(addSongFailure(error.message));
    alert("song not added");
  }
}

function* updateSong(action) {
  try {
    const res = yield call(axios.put, `${url}/${action.payload.id}`, action.payload);
    yield put(updateSongSuccess(res.data));
  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}

function* deleteSong(action) {
  try {
    console.log(action.payload);
    const response=yield call(axios.delete, `${url}/${action.payload}`);
    
    yield put(deleteSongSuccess(response.data));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

function* watchFetch() {
  yield takeLatest(FETCH_SONG, fetchSong);
}

function* watchAdd() {
  yield takeLatest(ADD_SONG, addSong);
}

function* watchUpdate() {
  yield takeLatest(UPDATE_SONG, updateSong);
}

function* watchDelete() {
  yield takeLatest(DELETE_SONG, deleteSong);
}

export default function* rootSaga() {
  yield all([watchFetch(), watchAdd(), watchUpdate(), watchDelete()]);
}
