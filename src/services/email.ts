import APIClient from "./api";
import * as url from "./urls";

const api = new APIClient();

const sendEmail = (params: any) => {
  return api.create(`${url.SEND_EMAIL}`, params);
};

const unsubscribe = (params: any) => {
  return api.create(`${url.API}${url.UNSUBSCRIBE}`, params.data);
};



export { 
    sendEmail, unsubscribe
};
