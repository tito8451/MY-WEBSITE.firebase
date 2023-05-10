import SignUpForm from "/src/components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "/src/components/sign-in-form/sign-in-form.component.jsx";

import { Auth } from "./authentification.styles.jsx";

const Authentification = () => {
  return (
    <Auth>
      <SignInForm />
      <SignUpForm />
    </Auth>
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
