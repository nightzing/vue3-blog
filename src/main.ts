import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
// import { Button } from 'vant';
import { Cell, CellGroup,Button } from 'vant';


import "@/assets/styles/reset.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(store)
  .use(Cell)
  .use(CellGroup)
  .use(Button)
  .mount("#app");
