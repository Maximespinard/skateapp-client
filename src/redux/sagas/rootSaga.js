import { takeLatest } from 'redux-saga/effects';
import  handleLogAdmin  from './handlers/admin';
import { logAdmin } from '../features/adminSlice';

export default function* watcherSaga() {
  yield takeLatest(logAdmin.type, handleLogAdmin);
}
