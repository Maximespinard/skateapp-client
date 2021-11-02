import { call } from 'redux-saga/effects';
import requestLogAdmin from '../requests/admin';

export default function* handleLogAdmin(action) {
  try {
    const response = yield call(requestLogAdmin, {...action.payload});
    console.log(response);
  } catch (error) {
    console.log('err', error);
  }
}
