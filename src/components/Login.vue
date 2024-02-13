<template>
    <h2>Log In</h2>
    <form @submit.prevent="handleLogin">
      <input type="email" placeholder="email" v-model="email"/>
      <input type="password" placeholder="password" v-model="password"/>
      <p v-if="error" class="error">{{ error }}</p>
      <button>Log in</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import useLogin from '../composible/useLogin'
  export default {
      setup(props,context){
          let email = ref("")
          let password = ref("")
  
          let {error , signIn } = useLogin();


          let handleLogin = async ()=>{

            let res = await signIn(email.value,password.value)
            if(res){
                // console.log(res.user)
                context.emit("enterChatRoom")
            }

          }
          return {
              email,
              password,
              error,
              handleLogin
          }
      }
  }
  </script>
  
  <style>
  
  </style>