import { auth } from '@/firebase/config'
import ChatRoomVue from '@/views/ChatRoom.vue'
import WelcomeVue from '@/views/Welcome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path : "/",
      name : "Welcome",
      component : WelcomeVue,
      beforeEnter(to,from,next){
        let user = auth.currentUser
        if(user){
          next({name : "Chatroom"})
        }else{
          next();
        }
      }
    },
    {
      path : "/chatroom",
      name : "Chatroom",
      component : ChatRoomVue,
      beforeEnter(to,from,next){
        let user = auth.currentUser;
        if(user){
          next();
        }else{
          next({name : "Welcome"})
        }
      }
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
