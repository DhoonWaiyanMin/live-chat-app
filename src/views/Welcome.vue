<template>
  <div class="welcome container">
    
    <div v-if="showLoginForm">
        <Login @enterChatRoom="enterChatRoom"></Login>
        <p>Not a member ? <span @click="showLoginForm = !showLoginForm">Create An Account?</span></p>
    </div>

    <div v-else>
        <Signup @enterChatRoom="enterChatRoom"></Signup>
        <p>Already a member? <span @click="showLoginForm = !showLoginForm">Login to account?</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { useRouter } from 'vue-router'
export default {
  components: {
    Login, Signup },
  setup(){
    let showLoginForm = ref(true)
    let router = useRouter();
    let enterChatRoom = ()=>{
        // router.push("/chatroom");
        router.push({name:"Chatroom"})
    }

    return {
        showLoginForm,
        enterChatRoom
    }
  }

}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }
    .welcome form{
        width: 300px;
        margin: 20px auto;
    }
    .welcome input{
        width: 80%;
        padding: 10px 20px;
        border: 0;
        border-bottom: 2px solid #777;
        outline: none;
        color: #999;
        margin: 10px auto;
    }
    .welcome input:focus{
        border-bottom-color: steelblue;
    }
    .welcome span{
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
    .welcome button{
        margin-top: 20px;
    }
    .welcome button:hover{
        box-shadow: 0 0 20px #777;
    }
</style>