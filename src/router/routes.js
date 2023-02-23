const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children:  [
      {
        path: "",
        name: "home",
        meta: {
          breadCrumb: [
            {
              text: 'Home'
            }
          ]
        },
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "login",
        name: "login",
        meta: {
          breadCrumb: [
            {
              text: 'login'
            }
          ]
        },
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "results",
        name: "results",
        meta: {
          breadCrumb: [
            {
              text: 'result'
            }
          ]
        },
        component: () => import("pages/ResultsPage.vue"),
      },
      {
        path: "configuracion",
        name: "configuracion",
        meta: {
          breadCrumb: [
            {
              text: 'configuracion'
            }
          ]
        },
        component: () => import("pages/ConfiguracionPage.vue"),
      },
      {
        path: "ronda1Page",
        name: "ronda1Page",
        meta: {
          breadCrumb: [
            {
              text: 'ronda1Page'
            }
          ]
        },
        component: () => import("pages/Ronda1Page.vue"),

       },
      {
        path: "jurado",
        name: "jurado",
        meta: {
          breadCrumb: [
            {
              text: 'jurado'
            }
          ]
        },
        component: () => import("pages/JuradoPage.vue"),

      },
      {
        path: "jurado/Nuevo",
        name: "Nuevo",
        meta: {
          breadCrumb: [
            {
              text: 'Nuevo'
            }
          ]
        },
        component: () => import("pages/NuevoJuradoPage.vue"),
      },
      {
        path: "jurado/Nuevo/editar",
        name: "editar",
        meta: {
          breadCrumb: [
            {
              text: 'editar'
            }
          ]
        },
        component: () => import("pages/EditJuradoPage.vue"),
      },
      {
        path: "ronda1Page/EmailRecordatorioVotacion",
        name: "EmailRecordatorioVotacion",
        meta: {
          breadCrumb: [
            {
              text: 'EmailRecordatorioVotacion'
            }
          ]
        },
        component: () => import("components/RecordatorioVotacionComponent.vue"),
      },
      {
        path: "ronda1Page/EmailInicioVotacion",
        name: "EmailInicioVotacion",
        meta: {
          breadCrumb: [
            {
              text: 'EmailInicioVotacion'
            }
          ]
        },
        component: () => import("components/InicioVotacionComponent.vue"),
      },
      {
        path: "ronda1Page/EmailRecordatorioVotacion2",
        name: "EmailRecordatorioVotacion2",
        meta: {
          breadCrumb: [
            {
              text: 'EmailRecordatorioVotacion2'
            }
          ]
        },
        component: () => import("components/RecordatorioVotacionBtn.vue"),
      },
      {
        path: "results/ResultTab",
        name: "results/ResultTab",
        component: () => import("components/ResultTab.vue"),
      },
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
