import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/style.css";

import { createApp } from "vue";
import { createPinia, storeToRefs } from "pinia";
import { useLoadingStore } from "./stores/loading";
import { useErrorStore } from "./stores/error";
import route from "./router";
import api from "./http/api";
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(route);

const loadingStore = useLoadingStore();
const errorStore = useErrorStore();
const { loading } = storeToRefs(loadingStore);
const { error } = storeToRefs(errorStore);

api.interceptors.request.use((config) => {
  error.value = "";
  loading.value = true;
  return config;
});

api.interceptors.response.use(
  (response) => {
    loading.value = false;
    return response;
  },
  (err) => {
    console.log(err);
    loading.value = false;
    return Promise.reject(err);
  }
);

app.mount("#app");
