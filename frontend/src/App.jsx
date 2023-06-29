import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import "./App.css";
import RequireAuth from "./components/routes/RequireAuth";
import Home from "./pages/Home/Home";
import TestNewSmartphone from "./components/UserComponents/TestNewSmartphone/TestNewSmartphone";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<RequireAuth allowedRoles="admin" />}>
          <Route path="/admin/home" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles="user" />}>
          <Route path="user/home" element={<Home />} />
          <Route path="user/smartphone" element={<TestNewSmartphone />} />
        </Route>

        {/* <Route path="/home/" element={<Home />}>
          <Route index element={<UserHome />} />
          <Route path="smartphone" element={<TestNewSmartphone />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminHome />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
