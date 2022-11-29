import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/pondRegistrationPage.vue";
import UpdatePage from "../views/pondUpdatePage.vue";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "pond",
        component: () => import("@/views/PondsPage.vue"),
      },
      {
        path: "pondRegistration",
        component: () => import("@/views/pondRegistrationPage.vue"),
      },
    ],
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/update/:id",
    component: UpdatePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
