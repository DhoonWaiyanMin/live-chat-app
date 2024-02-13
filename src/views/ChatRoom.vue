<template>
  <h2>Chat Room</h2>
  <div class="container">
    <NavBar></NavBar>
    <ChatForm></ChatForm>
  </div>
</template>

<script>
import ChatForm from '../components/ChatForm'
import { watch } from 'vue'
import NavBar from '../components/NavBar'
import { useRouter } from 'vue-router'
import getUser from '@/composible/getUser';
export default {
  components: {
    ChatForm, NavBar },

  setup(){

    let router = useRouter();

    let {user} = getUser();

    watch(user,()=>{
      if(!user.value){
        // redirect welcome 
        router.push("/")
      }
    })
  }

}
</script>

<style>

</style>