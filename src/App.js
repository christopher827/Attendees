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
import LecturersAttendance from "./pages/LecturersAttendance";
import LecturersSignIn from "./pages/LecturersSignIn";
import Ana302 from "./pages/Ana302"
import Gst207 from "./pages/Gst207"
import Pol201 from "./pages/Pol201"
import Phs234 from "./pages/Phs234"
import Bch202 from "./pages/Bch202"
import Pha302 from "./pages/Pha302"
import Pth304 from "./pages/Pth304"
import Ent302 from "./pages/Ent302";


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
<Route path="/lecturersattendance" element={<LecturersAttendance/>}/>
<Route path="/ana302" element={<Ana302/>}/>
<Route path="/lecturersSignIn" element={<LecturersSignIn/>}/>
<Route path="/Ent302" element={<Ent302/>}/>
<Route path="/Gst207" element={<Gst207/>}/>
<Route path="/Pol201" element={<Pol201/>}/>
<Route path="/Phs234" element={<Phs234/>}/>
<Route path="/Bch202" element={<Bch202/>}/>
<Route path="/Pha302" element={<Pha302/>}/>
<Route path="/Pth304" element={<Pth304/>}/>
<Route path="*" element={<PageNotFound/>}/>
</Routes>
</AuthContextProvider>

</ThemeProvider>
)
}
export default App
