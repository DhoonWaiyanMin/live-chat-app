// import { ref } from "vue"
// import { auth } from "../firebase/config"

// let error = ref()

// let signIn = async (email,password)=>{
//   try{
//       let res = await auth.signInWithEmailAndPassword(email,password)
//       if(!res){
//           throw new Error("Can't login to your accout!")
//       }
//       return res;
//     }catch(err){
//       console.log(err.message)
//       error.value = err.message
//     }
// }

// let useLogin = ()=>{
    
//   return { error , signIn }
// }

// export default useLogin

import { ref } from "vue"
import { auth } from '../firebase/config'

let error = ref()
let signIn = async (email,password)=>{
    try{
        let res = await auth.signInWithEmailAndPassword(email,password)
        // console.log(res)
        if(!res){
            throw new Error("Can't login to your account!!!")
        }
        return res;
      }catch(err){
        console.log(JSON.parse(err.message).error.message)
        error.value = JSON.parse(err.message).error.message
      }
}

let useLogin = ()=>{
    
    return { error , signIn }
}

export default useLogin