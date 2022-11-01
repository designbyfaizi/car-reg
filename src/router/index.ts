import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import MyVehiclesView from '@/views/MyVehiclesView.vue';
import VehiclesView from '@/views/VehiclesView.vue';
import VehicleDetailsView from '@/views/VehicleDetailsView.vue';
import CategoriesView from '@/views/CategoriesView.vue';
import AddCategoryView from '@/views/AddCategoryView.vue';
import AddVehicleView from '@/views/AddVehicleView.vue';
import LoginView from '@/views/LoginView.vue';
import SignUpView from '@/views/SignUpView.vue';
import ErrorView from '@/views/ErrorView.vue';
import { useAuthStore } from '@/stores/auth';

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
      component: VehiclesView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/vehicles/:registrationNumber',
      name: 'vehicle-details',
      component: VehicleDetailsView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add-vehicle',
      name: 'add-vehicle',
      component: AddVehicleView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add-category',
      name: 'add-category',
      component: AddCategoryView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/my-vehicles',
      name: 'my-vehicles',
      component: MyVehiclesView,
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
      component: AboutView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
      meta: {
        requiresLogOut: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresLogOut: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: ErrorView
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
