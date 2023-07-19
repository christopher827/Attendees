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
import Mathematics from "./pages/Mathematics"
import LecturersSignIn from "./pages/LecturersSignIn";
import English from "./pages/English";

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
<Route path="/math" element={<Mathematics/>}/>
<Route path="/lecturersSignIn" element={<LecturersSignIn/>}/>
<Route path="/english" element={<English/>}/>
<Route path="*" element={<PageNotFound/>}/>
</Routes>
</AuthContextProvider>

</ThemeProvider>
  )
}
export default App
