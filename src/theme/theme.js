import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

`;

// body {
//   background: ${({ theme }) => theme.body};
//   color: ${({ theme }) => theme.text};
//   transition: background 0.2s ease-in, color 0.2s ease-in;
// }

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
  sidenav: "lightCyan",
};

export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
  sidenav: "darkCyan",
};
