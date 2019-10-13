
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/PageTodo') },
      { path: '/settings', component: () => import('pages/PageSettings') },
      { path: '/answer', component: () => import('pages/Answer') },
      { path: '/course', component: () => import('pages/Course') },
      { path: '/discipline', component: () => import('pages/Discipline') },
      { path: '/evaluation', component: () => import('pages/Evaluation') },
      { path: '/institution', component: () => import('pages/Institution') },
      { path: '/institutiontype', component: () => import('pages/InstitutionType') },
      { path: '/local', component: () => import('pages/Local') },
      { path: '/option', component: () => import('pages/Option') },
      { path: '/period', component: () => import('pages/Period') },
      { path: '/question', component: () => import('pages/Question') },
      { path: '/role', component: () => import('pages/Role') },
      { path: '/scalalikert', component: () => import('pages/ScalaLikert') },
      { path: '/student', component: () => import('pages/Student') },
      { path: '/user', component: () => import('pages/User') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
