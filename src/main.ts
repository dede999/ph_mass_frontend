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
    green_100: "#45D543",
    green_200: "#2BBC2A",
    green_300: "#229220",
    green_400: "#186817",
    green_500: "#0E3F0E",
    blue_100: "#362BBA",
    blue_200: "#2A2291",
    blue_300: "#1E1867",
    blue_400: "#120E3E",
  },
};

createApp(App).use(router).use(createVuestic({ config })).mount("#app");
