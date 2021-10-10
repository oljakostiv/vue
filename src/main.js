import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
import { router } from "@/routes";

const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    increment(state, arg) {
      console.log(state, arg);
      state.count++;
    }
    //  job: update(change) state
  },
  actions: {
    inc(context, args) {
      console.log(context, args);
      //  for mutations:
      context.commit("increment", args);
    }
    //  job: receiving input data, calling mutations
  }
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
