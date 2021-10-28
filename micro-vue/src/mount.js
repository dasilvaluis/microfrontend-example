import { createApp } from "vue";
import App from "./App.vue";

export function mount(selector) {
  createApp(App).mount(selector);
};
