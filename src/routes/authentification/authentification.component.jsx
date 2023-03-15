import { React, useState } from "react";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
const Authentification = () => {
  return (
    <div>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentification;

//   useEffect(() => {
//     const fetchdata = async () => {
//       const response = getRedirectResult(auth);
//       console.log(response);
//       if (response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//       }
//     };
//     fetchdata();
//   }, []);
