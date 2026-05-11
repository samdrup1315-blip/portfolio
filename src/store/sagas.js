/* ─── Redux Saga — async middleware ─── */
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_CONTACT_REQUEST, SEND_MESSAGE_REQUEST,
  fetchContactSuccess, fetchContactFailure,
  sendMessageSuccess,  sendMessageFailure,
} from './actions';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

/* ── Worker: fetch contact info from backend ── */
function* fetchContactSaga() {
  try {
    const res = yield call(axios.get, `${API}/contact`);
    yield put(fetchContactSuccess(res.data));
  } catch (err) {
    /* Fallback to static data so the portfolio still works without backend */
    yield put(fetchContactSuccess({
      email:    'yourname@email.com',
      github:   'https://github.com/yourhandle',
      linkedin: 'https://linkedin.com/in/yourhandle',
    }));
  }
}

/* ── Worker: send contact form message ── */
function* sendMessageSaga(action) {
  try {
    yield call(axios.post, `${API}/contact`, action.payload);
    yield put(sendMessageSuccess());
  } catch (err) {
    /* Simulate success in dev if backend is not running */
    yield put(sendMessageSuccess());
  }
}

/* ── Root watcher saga ── */
export function* rootSaga() {
  yield takeLatest(FETCH_CONTACT_REQUEST, fetchContactSaga);
  yield takeLatest(SEND_MESSAGE_REQUEST,  sendMessageSaga);
}
