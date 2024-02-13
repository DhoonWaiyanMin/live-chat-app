import { ref } from "vue"
import { auth } from '../firebase/config';

let error = ref();

let signOut = async ()=>{
    try{
        await auth.signOut();
        console.log("user log out")
    }catch(err){
        error.value = err.message
        console.log(err.message);
    }
}

let useSignOut = ()=>{
    return { error , signOut }
}

export default useSignOut