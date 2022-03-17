import dark from "./darkMode";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const base = {
  primary: {
    lighter: "#486da1",
    default: "#33609e",
    darker: "#2d5287",
  },
  secondary: {
    lighter: "#e97d48",
    default: "#e3672a",
    darker: "#973f13",
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
