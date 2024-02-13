<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="handleSignUp">
    <input type="text" placeholder="display name" v-model="displayName"/>
    <input type="email" placeholder="email" v-model="email"/>
    <input type="password" placeholder="password" v-model="password"/>
    <p v-if="error" class="error">{{ error }}</p>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '../composible/useSignup'
export default {
    setup(props,context){
        let displayName = ref("");
        let email = ref("")
        let password = ref("")

        let { error , createAccount } = useSignup();

        let handleSignUp = async()=>{
            let res = await createAccount(email.value , password.value , displayName.value)
            if(res){
              context.emit("enterChatRoom");
            }else{
              console.log(error.value)
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