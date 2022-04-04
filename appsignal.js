
import { Appsignal } from "@appsignal/nodejs";
import 'dotenv/config';


export const appsignal = new Appsignal({

  active: true,
  name: process.env.APPSIGNAL_APP_NAME,
  pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY

});
