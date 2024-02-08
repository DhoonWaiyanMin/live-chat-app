<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="handleSignUp">
    <input type="text" placeholder="display name" v-model="displayName"/>
    <input type="email" placeholder="email" v-model="email"/>
    <p v-if="error" class="error">{{ error }}</p>
    <input type="password" placeholder="password" v-model="password"/>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../firebase/config'
export default {
    setup(){
        let displayName = ref("");
        let email = ref("")
        let password = ref("")
        let error = ref("")

        let handleSignUp = async ()=>{
            try{
                let res = await auth.createUserWithEmailAndPassword(email.value,password.value)
                if(!res){
                    throw new Error("Couldn't create new user")
                }
            }catch(err){
                error.value = err.message
            }
        }

        return {
            displayName,
            email,
            password,
            handleSignUp,
            error
        }
    }
}
</script>

<style>

</style>