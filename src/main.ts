import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Toast } from 'vant';

import "@/assets/styles/reset.scss";

const app = createApp(App);
app.use(Toast);

app
  .use(store)
  .use(router)
  .use(store)
  .mount("#app");


