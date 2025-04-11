import { createRouter,createWebHashHistory   } from "vue-router";
//agregando paginas de la aplicacion
import Home from "../Pages/Home.vue";
import About from "../Pages/about.vue";
import CalculadoraV1 from "../Pages/CalculadoraV1.vue";
import CalculadoraV2 from "../Pages/CalculadoraV2.vue";
import Recorrido   from "../Pages/Recorrido.vue";
import RecorridoJaczibeth from "../Pages/RecorridoJaczibeth.vue";
import Padre from "../Pages/Propps/Padre.vue"
import PadreJ from "../Pages/PropsJaczibeth/PadreJ.vue";
import Horario from "../Pages/Horario/Horario.vue";
import HorarioJaczibeth from "../Pages/Horario/HorarioJaczibeth.vue";
import Tulipanes from "../Pages/Tulipanes.vue";
import Gatos from "../Pages/Gatos.vue";
import GatosC from "../Pages/CardGatos/GatosC.vue";
import CardTulipan from "../Pages/CardTulipanes/CardTulipan.vue"
import Evento from "../Pages/Eventos/Evento.vue";
import EventosJaczibeth from "../Pages/Eventos/EventosJaczibeth.vue";
import PaginaCafe from "../Pages/PaginaWeb/PaginaCafe.vue";

const routes = [
  { path: "/", 
    name: "Home", 
    component: Home,
 },
{
        path: "/about",
        name: "About",
        component: About,
} ,
{
  path: "/calculadorav1",
  name: "CalculadoraV1",
  component: CalculadoraV1,
},
{
  path: "/calculadorav2",
  name: "CalculadoraV2",
  component: CalculadoraV2,
},
{
  path: "/recorrido",
  name: "Recorrido",
  component:  Recorrido,
},
{
  path: "/recorridoJaczibeth",
  name: "RecorridoJaczibeth",
  component:  RecorridoJaczibeth,
},

{
  path: '/padre',
  name: 'Padre',
  component: Padre,
},
{
  path: '/padrej',
  name: 'Padre J',
  component: PadreJ,
},
{
  path: '/horario',
  name: 'Horario',
  component: Horario,
},
{
  path: '/horariojaczibeth',
  name: 'HorarioJaczibeth',
  component: HorarioJaczibeth,
},
{
  path: '/tulipanes',
  name: 'Tulipanes',
  component: Tulipanes,
},

{
  path: '/gatos',
  name: 'Gatos',
  component: Gatos,
},
{
  path: '/gatosc',
  name: 'GatosC',
  component: GatosC,
},
{
  path: '/cardtulipanes',
  name: 'CardTulipan',
  component: CardTulipan,
},
{
  path: '/evento',
  name: 'Evento',
  component: Evento,
},
{
  path: '/eventosJaczibeth',
  name: 'EventosJaczibeth',
  component: EventosJaczibeth,
},

{
  path: '/paginaCafe',
  name: 'paginaCafe',
  component: PaginaCafe,
},
] 
//creando el router
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
}); 
//exportando el router
export default router;