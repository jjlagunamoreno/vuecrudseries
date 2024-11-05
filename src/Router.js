import { createWebHistory, createRouter } from "vue-router";
import HomeSeries from '@/components/HomeSeries.vue';
import SerieComponent from "@/components/SerieComponent.vue";
import PersonajesSerie from "@/components/PersonajesSerie.vue";
import CreatePersonaje from '@/components/CreatePersonaje.vue';
import UpdatePersonaje from '@/components/UpdatePersonaje.vue';

const myRoutes = [
    {
        path: "/", component: HomeSeries
    },
    {
        path: "/series/:idSerie", component: SerieComponent
    },
    {
        path: "/series/:idSerie/personajes", component: PersonajesSerie
    },
    {
        path: "/createpersonaje", component: CreatePersonaje
    },
    {
        path: "/updatepersonaje", component: UpdatePersonaje
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router;
