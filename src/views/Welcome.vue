<template>
  <div class="welcome container">
    
    <div v-if="showLoginForm">
        <Login></Login>
        <p>Not a member ? <span @click="showLoginForm = !showLoginForm">Create An Account?</span></p>
    </div>

    <div v-else>
        <Signup></Signup>
        <p>Already a member? <span @click="showLoginForm = !showLoginForm">Login to account?</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import Signup from '../components/Signup'
export default {
  components: {
    Login, Signup },
  setup(){
    let showLoginForm = ref(true)

    return {
        showLoginForm
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