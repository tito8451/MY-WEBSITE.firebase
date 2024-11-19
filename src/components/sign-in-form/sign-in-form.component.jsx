import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../../components/form-input/form-input.component.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component.jsx";

import { ButtonsContainer, SigninContainer } from "../../components/sign-in-form/sign-in-form.styles.jsx";

import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
    // console.log(userDocRef);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
      // switch (error.code) {
      //   case "auth/wrong-password":
      //     alert("incorrect password for email");
      //     break;
      //   case "auth/user-not-found":
      //     alert("no user associated with this email");
      //     break;
      //   default:
      //     console.log(error);
      // }
    }
  };

  // ! auth/popup-closed-by-user
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SigninContainer>
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
          type="password"
          value={password}
          required
          name="password"
          autoComplete="none"
          onChange={handleChange} //   onChange={(event) => {
          //     setFormFields(event.target.value);
          //   }}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            // className="button"
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SigninContainer>
  );
};
export default SignInForm;
