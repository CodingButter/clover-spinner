import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalReset, darkMode } from "./themes";
export const updateThemeContext = createContext();

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(darkMode);
  return (
    <ThemeProvider theme={theme}>
      <updateThemeContext.Provider value={setTheme}>
        <GlobalReset />
        {children}
      </updateThemeContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
