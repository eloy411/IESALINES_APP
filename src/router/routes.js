const routes = [
  {
    path: "/",
    children: [
      {
        path: "backoffice",
        component: () => import("src/layouts/backofficeLayout.vue"),
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
            component: () => import("src/pages/backoffice/IndexPage.vue"),
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
            component: () => import("src/pages/backoffice/LoginPage.vue"),
          },
          {
            path: "login/:login",
            name: "login/",
            meta: {
              breadCrumb: [
                {
                  text: 'login'
                }
              ]
            },
            component: () => import("src/pages/backoffice/authenticationPage.vue"),
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
            component: () => import("src/pages/backoffice/ResultsPage.vue"),
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
            component: () => import("src/pages/backoffice/ConfiguracionPage.vue"),
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
            component: () => import("src/pages/backoffice/Ronda1Page.vue"),

           },
           {
            path: "jurado",
            name: "jurado",
            meta: {
              breadCrumb: [
                {
                  text: 'jurado'
                }
              ],
              requiresAuth: true
            },
            component: () => import("src/pages/backoffice/JuradoPage.vue"),

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
            component: () => import("src/pages/backoffice/NuevoJuradoPage.vue"),
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
            component: () => import("src/pages/backoffice/EditJuradoPage.vue"),
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
            component: () => import("src/components/backoffice/RecordatorioVotacionComponent.vue"),
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
            component: () => import("src/components/backoffice/InicioVotacionComponent.vue"),
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
            component: () => import("src/components/backoffice/RecordatorioVotacionBtnComponent.vue"),
          },
            {
            path: "jurado/InvitacionJurado",
            name: "InvitacionJurado",
            meta: {
              breadCrumb: [
                {
                  text: 'InvitacionJurado'
                }
              ]
            },
            component: () => import("src/components/backoffice/InvitacionJuradoComponent.vue"),
          },
          {
            path: "results/ResultTab",
            name: "results/ResultTab",
            meta: {
              breadCrumb: [
                {
                  text: 'InvitacionJurado'
                }
              ]
            },
            component: () => import("src/components/backoffice/ResultTabComponent.vue"),
          },
        ],
      },
      {
        path: "login",
        component: () => import("src/layouts/LoginLayout.vue"),
        children: [
          {
            path: "",
            name: "index",
            component: () => import("src/pages/votaciones/LoginVotacionPage.vue"),
          },
        ]
      },
      {
        path: "votaciones",
        component: () => import("src/layouts/votacionLayout.vue"),
        children: [
          {
            path: "loginv",
            name: "loginv",
            component: () => import("src/pages/votaciones/votacionesPageTest.vue"),
          },
          {
            path: "main",
            name: "main",
            component: () => import("src/pages/votaciones/MainDialogVotacionesPage.vue"),
          },
          {
            path: "card",
            name: "card",
            component: () => import("src/pages/votaciones/CategoryIndexPage.vue"),
          },
        ]
      }
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/backoffice/ErrorNotFound.vue"),
  },
];

export default routes;
