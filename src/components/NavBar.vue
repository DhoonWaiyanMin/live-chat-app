<template>
  <nav v-if="user">
    <div>
        <p>Hi <span class="name">{{ user.displayName }}</span></p>
        <p class="email">Log in as {{ user.email }}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>

import { ref } from 'vue';
import useSignOut from "../composible/useSignOut"
import { auth } from '@/firebase/config';
import getUser from '@/composible/getUser';

export default {
    setup(){
        
        let {error , signOut } = useSignOut()
        let logout = async()=>{
            await signOut()
        }

        let {user} = getUser();

        // this function will invoke when user is login or log out
        
        return {
            logout,
            user
        }
    }
}
</script>

<style>
nav{
    padding: 10px 20px;
    border-bottom: 1px solid #444;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.name{
    color: #555;
    font-weight: bold;
}
nav p{
    margin: 2px auto;
    font-size: 16px;
    color: #666;
}
nav p.email{
    font-size: 14px;
    color: #999;
}
</style>