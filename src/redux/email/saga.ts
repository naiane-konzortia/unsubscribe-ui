import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { setCookie } from "nookies";
//Account Redux states
import { EmailActionTypes } from "./types";
import {
  emailApiResponseSuccess,
  emailApiResponseError,
} from "./actions";

import {
  sendEmail as sendEmailApi,
  unsubscribe as unsubscribeApi
 } from "../../services";
import { showErrorNotification } from "../../helpers/notifications";



//Include Both Helper File with needed methods

// Is user register successfull then direct plot user in redux.
function* sendEmail({ payload:  params  }: any) {
  try {
    const response: Promise<any> = yield call(sendEmailApi, params.data);
    yield put(
      emailApiResponseSuccess(
        EmailActionTypes.SEND_EMAIL,
        response
      )
    );
  } catch (error: any) {
    yield put(
      emailApiResponseError(EmailActionTypes.SEND_EMAIL, error)
    );
  }
}

function* unsubscribe({ payload:  params  }: any) {
  try {
    const response: Promise<any> = yield call(unsubscribeApi, params);
    yield put(
      emailApiResponseSuccess(
        EmailActionTypes.UNSUBSCRIBE,
        response
      )
    );
  } catch (error: any) {
    yield put(
      emailApiResponseError(EmailActionTypes.UNSUBSCRIBE, error)
    );
    yield call(showErrorNotification, error);

  }
}


export function* watchSendEmail() {
  yield takeEvery(EmailActionTypes.SEND_EMAIL, sendEmail);
}

export function* watchUnsubscribe() {
  yield takeEvery(EmailActionTypes.UNSUBSCRIBE, unsubscribe);
}

function* sendEmailSaga() {
  yield all([
    fork(watchSendEmail),
    fork(watchUnsubscribe)
  ]);
}

export default sendEmailSaga;

