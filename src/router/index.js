import ChatRoomVue from '@/views/ChatRoom.vue'
import WelcomeVue from '@/views/Welcome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path : "/",
      name : "Welcome",
      component : WelcomeVue
    },
    {
      path : "/chatroom",
      name : "Chatroom",
      component : ChatRoomVue
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
