import jsonData, { postData, deleteData } from "./apirequest"
import { call, put, takeLatest } from "redux-saga/effects"

const loadData = (data) => {
  return { type: "LOAD_DATA", data: data }
}

function* getData() {
  try {
    const responseData = yield call(jsonData)
    yield put(loadData(responseData))
  }
  catch (e) {
    console.log(e, "error in saga")
  }
}

const updateData = (data) => {
  return { type: "UPDATE_DATA", data: data }
}

function* postDataThroughSaga(args) {
  try {
    console.log(args.list)
    const responseData = yield call(postData, args.list)
    yield put(updateData(responseData.data))
  }
  catch (e) {
    console.log(e, "error in saga")
  }
}

const deleteTheData = (id) => {
  return { type: "DELETE_THE_DATA", id }
}

function* deleteDataThroughSaga(id) {
  try {
    yield call(deleteData, id)
    yield put(deleteTheData(id))
  }
  catch (e) {
    console.log(e, "err in delete saga")
  }
}

export function* takeEveryCall() {
  yield takeLatest("GET_DATA", getData)
  yield takeLatest("POST_DATA", postDataThroughSaga)
  yield takeLatest("DELETE_DATA", deleteDataThroughSaga)
}
