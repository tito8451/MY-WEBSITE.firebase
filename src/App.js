import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//? import de mes routes

import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import Shop from "./routes/shop/Shop.component";
import SignIn from "./routes/sign-in/SignIn.component";


const App=()=>{
  return (
    <Router>
    <Routes>
    <Route   path='/' element={<Navigation />}>
    <Route  index={true} element={<Home />}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='sign-in' element={<SignIn/>}/>
    </Route>
  
   </Routes>
   </Router>
   )

}
export default App;