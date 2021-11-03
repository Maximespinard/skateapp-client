import { call, put } from 'redux-saga/effects';
import { logAdminError, logAdminSuccess } from '../../features/adminSlice';
import requestLogAdmin from '../requests/admin';

export default function* handleLogAdmin(action) {
  try {
    const response = yield call(requestLogAdmin, { ...action.payload });
    const {
      data: { token },
    } = response;
    yield put(logAdminSuccess({ token }));
  } catch (err) {
    const {
      response: {
        data: { message },
      },
    } = err;
    yield put(logAdminError({ message }));
  }
}
