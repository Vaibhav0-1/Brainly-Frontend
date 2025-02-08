import { Dashboard }from "./pages/dashboard";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { BrowserRouter, Routes, Route} from "react-router-dom";


export function App(){
  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signin" element={<Signin/>}/>
  </Routes>
  </BrowserRouter>
  return <Signup/>
} 