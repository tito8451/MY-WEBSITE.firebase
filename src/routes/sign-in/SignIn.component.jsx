import { React, useState } from "react";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log({ user });
    console.log(userDocRef);
  };

  return (
    <>
      <form onSubmit={() => {}}>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google</button>

        {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      </form>
      <SignUpForm />
    </>
  );
};
export default SignIn;

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
