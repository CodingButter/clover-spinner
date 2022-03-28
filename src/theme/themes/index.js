import dark from "./darkMode";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const base = {
  primary: {
    lighter: "#000000",
    default: "#333333",
    darker: "#555555",
  },
  secondary: {
    lighter: "#ffffff",
    default: "#cccccc",
    darker: "#aaaaaa",
  },
  background: {
    lighter: "#434747",
    default: "#1c2120",
    darker: "#131616",
  },
  forground: {
    lighter: "#ffffff",
    default: "#cccccc",
    darker: "#aaaaaa",
  },
  roller: {
    lighter: "",
    default: "#C0C0C0",
    darker: "",
  },
  faceplate: {
    default: "#646464",
  },
};

export const darkMode = {
  ...dark,
  ...base,
};

export default base;

export const GlobalReset = createGlobalStyle`

${reset}
*{
  font-family: 'Roboto', sans-serif !important;
}
html,body,#root{
  height:100%;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
}


`;
