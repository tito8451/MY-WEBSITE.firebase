import { React } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentification.styles.scss";

const Authentification = () => {
  return (
    <div className="authentification-container">
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
