import Home from "@/pages/Home";
import Todos from "@/pages/Todos";
import CreateTodoForm from "@/pages/CreateTodoForm";
import HelloWorld from "@/components/HelloWorld";
import NotFound from "@/pages/NotFound";
import * as VueRouter from "vue-router";

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
