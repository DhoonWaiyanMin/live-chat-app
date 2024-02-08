<template>
    <h2>Log In</h2>
    <form @submit.prevent="handleLogin">
      <input type="email" placeholder="email" v-model="email"/>
      <input type="password" placeholder="password" v-model="password"/>
      <button>Log in</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
      setup(){
          let email = ref("")
          let password = ref("")
  
          let handleLogin = ()=>{
              console.log(displayName.value , email.value , password.value)
          }
  
          return {

              email,
              password,
              handleLogin
          }
      }
  }
  </script>
  
  <style>
  
  </style>