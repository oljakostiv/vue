import * as VueRouter from "vue-router";

import HelloWorld from "@/components/HelloWorld";
import CreateTodoForm from "@/pages/CreateTodoForm";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Todos from "@/pages/Todos";

export const routes = [
  { path: "/", component: Home },
  { path: "/todos", component: Todos, props: true },
  {
    path: "/create",
    component: CreateTodoForm,
    props: true,
    children: [
      {
        path: "/create/about",
        component: HelloWorld
      }
    ]
  },
  { path: "/:catchAll(.*)", component: NotFound }
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});
