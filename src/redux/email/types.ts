export enum EmailActionTypes {
  API_RESPONSE_SUCCESS = "@@email/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@email/API_RESPONSE_ERROR",

  SEND_EMAIL = "@@email/SEND_EMAIL",
  UNSUBSCRIBE = "@@email/UNSUBSCRIBE"
}

export interface EmailState {
  isEmailSent: boolean;
  isUnsubscribed: boolean;
  unsubscribed:any;
}
