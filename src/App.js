import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./components/Sing-in/Sign-in";
import SignUp from "./components/Sing-up/Sign-up";
import Context from "./components/Context";
import Home from "./components/Home/Home";
import NewEntry from "./components/newEntry/NewEntry";
import NewExit from "./components/newExit/NewExit";

export default function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        name,
        setName,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newEntry" element={<NewEntry />} />
          <Route path="/newExit" element={<NewExit />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
