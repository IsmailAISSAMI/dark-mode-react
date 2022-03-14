import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../context/darkMode.context";
import { lightTheme, darkTheme } from "../../theme/theme";

import styled from "styled-components";
import Header from "../header";

const DashboardLayout = ({ children }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [theme, setTheme] = useState({});

  useEffect(()=>{
    setTheme(darkMode ? darkTheme : lightTheme);
  }, [darkMode]);

  return (
      <LayoutContainer theme={theme}>
        <SidenavContainer theme={theme.sidenav}>SidenavContainer</SidenavContainer>
        <AppContainer>
          <Header />
          <AppContent>{children}</AppContent>
        </AppContainer>
      </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color:  ${({theme}) => theme.body};
  color:   ${({theme}) => theme.text};
`;

const SidenavContainer = styled.div`
  height: 100%;
  background-color: ${({theme}) => theme};
`;

const AppContainer = styled.div`
  height: 100%;
  flex: 1;
  background-color: lightGray;
  display: flex;
  flex-direction: column;
`;

const AppContent = styled.div`
  flex: 1;
  width: 100%;
  background-color: lightGreen;
`;

export default DashboardLayout;
