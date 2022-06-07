import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createVuestic, GlobalConfig } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";

const config: GlobalConfig = {
  colors: {
    brown_100: "#F2CD6D",
    brown_200: "#D9B14C",
    brown_300: "#BF9730",
    brown_400: "#A67A08",
    brown_500: "#8C6500",
  },
};

createApp(App).use(router).use(createVuestic({ config })).mount("#app");
