import { ref } from 'vue';
import { auth } from '../firebase/config';

let user = ref(auth.currentUser)

// this function will invoke when user is login or log out
auth.onAuthStateChanged((_user)=>{
    console.log("user state chage current is ",_user);
    user.value = _user
})


let getUser = ()=>{
    return {user}
}

export default getUser