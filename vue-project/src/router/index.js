import { createRouter, createWebHistory } from "vue-router";


import Homepage from '../pages/Homepage.vue'
import Info from '../pages/Info.vue'
import Tagli from '../pages/Tagli.vue'
import ShopPage from '../pages/ShopPage.vue'



const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "",
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
    },
   
     {
      path: "/info",
      name: "Info",
      component: Info,
    },
    {
      path: "/tagli",
      name: "Tagli",
      component: Tagli,
    },

    {
      path: "/shoppage",
      name: "ShopPage",
      component: ShopPage,
    },
    
  ],
});

export { router };