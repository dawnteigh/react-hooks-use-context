import React, { useContext } from "react";
import { UserContext } from '../context/User'

function Interests({ interests}) {
  const { theme } = useContext(UserContext)
  return (
    <div>
      <h4>Interests</h4>
      <ul className={theme}>
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}

export default Interests;
