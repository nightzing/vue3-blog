import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Toast, Dialog, Notify } from 'vant';

import "@/assets/styles/reset.scss";

const app = createApp(App);
app.use(Toast);
app.use(Dialog);
app.use(Notify);

app
  .use(store)
  .use(router)
  .use(store)
  .mount("#app");


