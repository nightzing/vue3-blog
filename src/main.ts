import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
// import { Button } from 'vant';
import { Toast,Button } from 'vant';

import "@/assets/styles/reset.scss";
createApp(App)
  .use(store)
  .use(router)
  .use(store)
  .use(Toast)
  .use(Button)
  .mount("#app");
