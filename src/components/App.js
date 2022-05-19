import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserContext } from "../context/User";

function App() {
  const { theme } = useContext(UserContext)
  return (
      <main className={theme}>
      <Header />
      <Profile />
      </main>
  );
}

export default App;
