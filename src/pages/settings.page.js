import React, { useContext } from "react";
import {DarkModeContext} from '../context/darkMode.context';
import DashboardLayout from "../components/layouts/dashboard.layout";
import { Link } from "react-router-dom";

const Setting = () => {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => toggleDarkMode()

    return(
        <DashboardLayout>
          <h1>Hello!</h1>
          <button onClick={handleClick}>
            {darkMode ? (
              <span aria-label="Light mode" role="img">
                🌞
              </span>
            ) : (
              <span aria-label="Dark mode" role="img">
                🌜
              </span>
            )}
          </button>
          <Link to='/'>Home link</Link>
        </DashboardLayout>
    );
}

export default Setting;