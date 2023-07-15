import { createRouter, createWebHistory } from "vue-router";


import Homepage from '../pages/Homepage.vue'
import ProjectList from '../pages/ProjectList.vue'
import Info from '../pages/Info.vue'
import Firstproject from '../pages/Firstproject.vue'
import Secondproject from '../pages/Secondproject.vue'
import Thirdproject from '../pages/Thirdproject.vue'
import Fourthproject from '../pages/Fourthproject.vue'
import Fifthproject from '../pages/Fifthproject.vue'
import Sixthproject from '../pages/Sixthproject.vue'


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
      path: "/projectlist",
      name: "ProjectList",
      component: ProjectList,
    },
     {
      path: "/info",
      name: "Info",
      component: Info,
    },
    {
      path: "/firstproject",
      name: "Firstproject",
      component: Firstproject,
    },

    {
      path: "/secondproject",
      name: "Secondproject",
      component: Secondproject,
    },
    {
      path: "/thirdproject",
      name: "Thirdproject",
      component: Thirdproject,
    },
    {
      path: "/fourthproject",
      name: "Fourthproject",
      component: Fourthproject,
    },
    {
      path: "/fifthproject",
      name: "Fifthproject",
      component: Fifthproject,
    },
    {
      path: "/sixthproject",
      name: "Sixthproject",
      component: Sixthproject,
    },
  ],
});

export { router };