import { Dashboard }from "./pages/dashboard";
import { Signup } from "./pages/Signup";
import { BrowserRouter, Routes, Route} from "react-router-dom";


export function App(){
  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element>
  </Routes>
  </BrowserRouter>
  return <Signup/>
} 