import { put, call, takeLatest, all } from 'redux-saga/effects'
import { setRequest, setPoint } from './actions/requests'
import { SET_REQUEST_ASYNC, SET_REQUEST_POINT_ASYNC } from './types'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* fetchRequest(action) {
  yield call(delay, 1000)
  yield put(setRequest(action.payload))
}

function* fetchRequestPoint(action) {
  yield call(delay, 1000)
  yield put(setPoint(action.payload))
}

function* watchFetchRequest() {
  yield takeLatest(SET_REQUEST_ASYNC, fetchRequest)
}

function* watchFetchRequestPoint() {
  yield takeLatest(SET_REQUEST_POINT_ASYNC, fetchRequestPoint)
}

export default function* rootSaga() {
  yield all([
    watchFetchRequest(),
    watchFetchRequestPoint()
  ])
}
