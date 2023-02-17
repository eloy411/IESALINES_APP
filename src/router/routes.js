const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children:  [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "result",
        name: "result",
        component: () => import("pages/ResultPage.vue"),
      },
      {
        path: "results",
        name: "results",
        component: () => import("pages/ResultsPage.vue"),
      },
      {
        path: "configuracion",
        name: "configuracion",
        component: () => import("pages/ConfiguracionPage.vue"),
      },
      {
        path: "ronda1Page",
        name: "ronda1Page",
        component: () => import("pages/Ronda1Page.vue"),

       },
      {
        path: "jurado",
        name: "jurado",
        component: () => import("pages/JuradoPage.vue"),

      },
      {
        path: "jurado/Nuevo",
        name: "jurado/Nuevo",
        component: () => import("pages/NuevoJuradoPage.vue"),
      },
      {
        path: "jurado/Nuevo/editar",
        name: "jurado/Nuevo/editar",
        component: () => import("pages/EditJuradoPage.vue"),
      },
      {
        path: "ronda1Page/EmailRecordatorioVotacion",
        name: "ronda1Page/EmailRecordatorioVotacion",
        component: () => import("components/RecordatorioVotacionComponent.vue"),
      },
      {
        path: "ronda1Page/EmailInicioVotacion",
        name: "ronda1Page/EmailInicioVotacion",
        component: () => import("components/InicioVotacionComponent.vue"),
      },
      {
        path: "ronda1Page/EmailRecordatorioVotacion2",
        name: "ronda1Page/EmailRecordatorioVotacion2",
        component: () => import("components/RecordatorioVotacionBtn.vue"),
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
