import React, { useContext } from "react";
import { UserContext } from '../context/User'

function ThemedButton({ ...props }) {
const { theme } = useContext(UserContext)
  return <button className={theme} {...props} />;
}

export default ThemedButton;
