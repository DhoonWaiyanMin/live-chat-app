<template>
    <div class="chatWindow">
        <div class="messages" ref="messageBox">
            <div class="singleMessage"  v-for="message in formattedMessages" :key="message.id">
                <span class="created_at">{{ message.created_at }}</span>
                <span class="name">{{ message.name }}</span>
                <span class="message">{{ message.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase/config';
import { computed, onUpdated, ref } from 'vue';
import { formatDistanceToNow } from "date-fns"
export default {
    setup(){
        let messages = ref([]);
        let messageBox = ref(null)

        // auto scrolling feature
        onUpdated(()=>{
            // console.log(messageBox.value);
            messageBox.value.scrollTop = messageBox.value.scrollHeight
        })

        let formattedMessages = computed(()=>{
            return messages.value.map((message)=>{
                if(message.created_at){
                    let formattedTime = formatDistanceToNow(message.created_at.toDate());
                    return {...message,created_at : formattedTime}

                }
            })
        })

        db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
            // console.log(snap)
            let result = [];
            snap.docs.map(doc=>{
                let document = {...doc.data() , id : doc.id}
                // result.push(document)

                // toDate() function ကို null value မှာ မခေါ်စေဖို့ သုံးပါတယ်
                if(doc.data().created_at){
                    result.push(document)
                }

                // short hand 
                // doc.data().created_at && result.push(document)

                messages.value = result
                console.log(messages.value)
            })
        })

        return {
            messages,
            formattedMessages,
            messageBox
        }
    }
}
</script>

<style>
.chatWindow{
    background: #f4f4f4;
    padding: 30px 20px;
}
.singleMessage{
    margin: 18px 0;
}
.created_at{
    display: block;
    color: #818181;
    font-size: 10px;
    margin-bottom: 4px;
}
.message{
    background-color: slateblue;
    /* margin-top: 4px; */
    padding: 7px 5px;
    border-radius: 10px 10px 10px 0;
    color: #f4f4f4;
}
.name{
    font-weight: bold;
    margin-right: 10px;
}
.messages{
    max-height: 300px;
    overflow-y: scroll;
}
</style>