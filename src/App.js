import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/home/Home";
import  Course  from "./components/Course/Course";
import Books from "./components/books/Books";
import Bookview from "./components/books/Bookview";


function App() {
  return (
    <div>
      {/* <Course/> */}
      {/* <Login/> */}
 {/* <Transferdata username="ajith" password="1234" usertype="Admin"/>  */}
 <BrowserRouter>
 <Routes>
  <Route path={'/'} element={<Login/>}></Route>
  <Route path={'/course'} element={<Course></Course>}></Route> 
  <Route path={'/home'} element={<Home/>}></Route> 
  <Route path={'/Books'} element={<Books/>}></Route> 
 <Route path={"/Bookview"} element={<Bookview/>}></Route>
 </Routes>
 </BrowserRouter>

    </div>
  )
}

export default App;
