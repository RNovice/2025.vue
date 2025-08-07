import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import { isAuthenticated } from '@/services/auth'
import ProfileView from '@/views/ProfileView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import SignupView from '@/views/SignupView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/profile'
    },
    {
      path: '/profile',
      component: ProfileView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/sign-up',
      component: SignupView,
    },
    {
      path: '/:pathMath(.*)*',
      name: 'NotFound',
      meta: { requiresAuth: true },
      component: NotFoundView,
    }
  ],
})

router.beforeEach((to, _, next) => {
  const loggedIn = isAuthenticated()

  if (to.meta.requiresAuth && !loggedIn) {
    const redirectUrl = to.fullPath
    next({ path: '/login', query: { redirect: redirectUrl } })
  } else if (to.path === '/login' && loggedIn) {
    next({ path: '/profile' })
  }
  else {
    next()
  }
})

export default router
