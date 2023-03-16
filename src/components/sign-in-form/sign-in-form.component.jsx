import { useState } from "react";
import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

import {
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // console.log({ user });
    // console.log(userDocRef);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      // console.log(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  //   const handleChange = (event) => {
  //     setFormFields(event.target.value);
  //   };
  // ! auth/popup-closed-by-user
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          value={email}
          name="email"
          required
          autoComplete="none"
          onChange={handleChange} //   onChange={(event) => {
          //     setFormFields(event.target.value);
          //   }}
        />

        <FormInput
          label="Password"
          type="text"
          value={password}
          required
          name="password"
          autoComplete="none"
          onChange={handleChange} //   onChange={(event) => {
          //     setFormFields(event.target.value);
          //   }}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            // className="button"
            type="button"
            buttonType="google"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
