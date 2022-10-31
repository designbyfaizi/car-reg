import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '@/stores/auth';
// import { supabase } from '@/utils/supabase';

// const {data, error} = await supabase.auth.getSession();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: () => import('../views/VehiclesView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add-vehicle',
      name: 'add-vehicle',
      component: () => import('../views/AddVehicleView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/my-vehicles',
      name: 'my-vehicles',
      component: () => import('../views/MyVehiclesView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue'),
      meta: {
        requiresLogOut: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        requiresLogOut: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/ErrorView.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth) {
    if (auth.isLoggedIn) {
      next();
    }
    else {
      alert("You need to log in");
      next("/")
    }
  }
  else if (to.meta.requiresLogOut) {
    if (!auth.isLoggedIn) {
      next();
    }
    else {
      alert("You need to logout first");
      next("/")
    }
  }
  else {
    next();
  }
})

export default router;
