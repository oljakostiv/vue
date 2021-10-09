import { createApp } from "vue";
import * as VueRouter from "vue-router";

import App from "./App.vue";
import Home from "@/pages/Home";
// import NotFound from "@/pages/NotFound";
import Todos from "@/pages/Todos";
import CreateTodoForm from "@/pages/CreateTodoForm";
import HelloWorld from "@/components/HelloWorld";

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/hello",
        component: HelloWorld
      }
    ]
  },
  { path: "/todos", component: Todos, props: true },
  { path: "/create", component: CreateTodoForm, props: true }
  // { path: "/*", component: NotFound }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);

app.mount("#app");
