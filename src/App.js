import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound"
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Lecturer from "./pages/Lecturer";
import LecturersAttendance from "./pages/LecturersAttendance";

function App() {

return(
<ThemeProvider >
<AuthContextProvider>
<Navbar/>
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/signin" element={<SignIn/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path="/account" element={<Account/>}/>
<Route path="/lecturer" element={<Lecturer/>}/>
<Route path="/lecturersattendance" element={<LecturersAttendance/>}/>
<Route path="*" element={<PageNotFound/>}/>
</Routes>
<Footer/>
</AuthContextProvider>

</ThemeProvider>
  )
}
export default App