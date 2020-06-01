import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";




firebase.initializeApp(firebaseConfig);


const Auth =()=>{
    const [user,setUser]=useState(null);
   
   const signWithGoogle =()=>{
    const provider= new firebase.auth.GoogleAuthProvider();
       firebase.auth().signInWithPopup(provider)
       .then(res=>{
           const{displayName,email,photoURL}=res.user;
          const singedInUser={name:displayName, email,photo:photoURL};
          setUser(singedInUser);
          return res.user;



       })
       .catch(err=>{
           setUser(null);
           return err.message
       })
   }

   const signOut=()=>{
    firebase.auth().signOut().then(function() {
        setUser(null);
        // Sign-out successful.
      }).catch(function(error) {
        console.log(error);
      });
   }
   return{
       user,
       signWithGoogle,
       signOut
   }
}
export default Auth;