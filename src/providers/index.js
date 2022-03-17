import { RaffleProvider } from "./RaffleProvider";
import ThemeProvider from "../theme/Provider";
const Providers = ({ children }) => (
  <ThemeProvider>
    <RaffleProvider>{children}</RaffleProvider>
  </ThemeProvider>
);

export default Providers;
