import { ref } from "vue"
import { auth } from '../firebase/config'

let error = ref()
    let createAccount = async (email,password,displayName)=>{
        try{
            let res = await auth.createUserWithEmailAndPassword(email,password)
            if(!res){
                throw new Error("Couldn't create new user")
            }
            res.user.updateProfile({displayName : displayName})
            return res;
        }catch(err){
            error.value = err.message
        }
    }

let useSignup = ()=>{
    
    return { error , createAccount }
}

export default useSignup