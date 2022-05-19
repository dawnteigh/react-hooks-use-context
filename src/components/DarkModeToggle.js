import React, { useContext } from "react";
import { UserContext } from '../context/User'

function DarkModeToggle() {

  const { theme, setTheme } = useContext(UserContext)
  function handleToggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }
  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggleTheme}
      />
    </label>
  );
}

export default DarkModeToggle;
