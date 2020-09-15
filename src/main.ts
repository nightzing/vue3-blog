import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Cell, CellGroup } from 'vant';

import "@/assets/styles/reset.scss";

const app = createApp(App);
app.use(Cell);
app.use(CellGroup);

app
  .use(store)
  .use(router)
  .mount("#app");


