import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Meetings from "../views/Meetings.vue";
import Register from "../views/Register.vue";
import CheckIn from "../views/CheckIn.vue";

import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faTrash,faLink, faListUl, faRandom, faStar,faEnvelope

} from "@fortawesome/free-solid-svg-icons";

library.add( faTrash,faLink, faListUl, faRandom, faStar,faEnvelope);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
    {
      path: "/login",
      name: "login",
      component: Login
    },
  
      {
        path: "/meetings",
        name: "meetings",
        component: Meetings
      },
      {
        path: "/register",
        name: "register",
        component: Register
      },
      {
        path:'/checkin/:userID/:meetingID',
        name:'CheckIn',
        component:CheckIn
    },
      {
        path: "*",
        redirect:'/'
        
      },
];

const router = new VueRouter({
  routes
});

export default router;
