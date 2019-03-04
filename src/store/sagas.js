import { takeEvery, put } from 'redux-saga/effects'
import {
  GET_INIT_LIST
} from './actionTypes';
import axios from 'axios';
import {
  initListAction
} from './actionCreators';     
function* getInitList () {
  try {
    const list_res = yield axios.get('/mock/list.json');
    const action = initListAction(list_res.data);
    yield put(action);
  }catch(e) {
    console.log('net query fail');
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;