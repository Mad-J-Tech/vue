import Vue from "vue";
import Router from "vue-router";
import BasicForm from "./components/BasicForm.vue";
import Questions from "./components/Questions.vue";
import Consultarion from "./components/Consultation.vue";
import Confirmation from "./components/Confirmation.vue";

Vue.use(Router);

export default new Router({
    routes: [{ path: "/", component: BasicForm },
    { path: "/questions", component: Questions },
    { path: "/consultation", component: Consultarion },
    { path: "/confirmation", component: Confirmation }]
});