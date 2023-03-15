import { useState } from "react";
import FormInput from "../form-input/form-input.component.jsx";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.jsx";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = ({ user }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  //   console.log(formFields);
  //   const resetFormFields = () => {
  //     setFormFields(defaultFormFields);
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("you have to have the same password");
      return;
    } else {
      try {
        const response = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log(response);
        await createUserDocumentFromAuth(user, { displayName });
        //   resetFormFields();
      } catch (error) {
        console.log(error);
      }
    }
  };
  //   const handleChange = (event) => {
  //     setFormFields(event.target.value);
  //   };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign up with </h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange} //   onChange={(event) => {
          //     setFormFields(event.target.value);
          //   }}
        />

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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange} //   onChange={(event) => {
          //     setFormFields(event.target.value);
          //   }}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
