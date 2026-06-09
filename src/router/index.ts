import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import AllProjectsView from '../views/AllProjectsView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import { getProjectBySlug } from '../data/projects'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/projects', name: 'projects', component: ProjectView },
    { path: '/projects/all', name: 'all-projects', component: AllProjectsView },
    {
      path: '/projects/:slug',
      name: 'project-detail',
      component: ProjectDetailView,
      beforeEnter: (to) => {
        const slug = String(to.params.slug)
        return getProjectBySlug(slug) ? true : { name: 'projects' }
      },
    },
  ],
})

export default router
