import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./components/Sing-in/Sign-in";
import SignUp from "./components/Sing-up/Sign-up";
import Context from "./components/Context";

export default function App() {
  const [token, setToken] = useState("");

  return (
    <Context.Provider
      value={{
        token,
        setToken,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
