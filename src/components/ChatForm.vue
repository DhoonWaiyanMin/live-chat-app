<template>
  <form>
    <textarea 
    placeholder="Text message & hit enter to send" 
    v-model="message"
    @keypress.enter="handleSend" rows="2"></textarea>
  </form>
</template>

<script>
import getUser from '@/composible/getUser';
import { timestamp } from '@/firebase/config';
import useCollection from '@/composible/useCollection'
import { ref } from 'vue'
export default {
    setup(){
        let message = ref("");

        let {user} = getUser()
        let {error , addDoc } = useCollection("messages");

        let handleSend = async()=>{
            let chat = {
                message : message.value,
                // name : auth.currentUser.displayName
                name : user.value.displayName,
                created_at : timestamp()
                
            }

            await addDoc(chat);

            message.value = ""
        }

        return {
            message,
            handleSend
        }
    }
}
</script>

<style>
form{
    margin: 10px;
}
textarea{
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
    resize: none;
}
</style>