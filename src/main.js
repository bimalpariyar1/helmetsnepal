import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import CoreuiVue from "@coreui/vue";
import { plugin, defaultConfig } from "@formkit/vue";

// import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "vue-select/dist/vue-select.css";

createApp(App)
  .use(router)
  .use(CoreuiVue)
  .use(plugin, defaultConfig)
  .mount("#app");
