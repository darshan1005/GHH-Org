import { useState } from "react";
import Nav from "./Components/Nav-bar/Nav.jsx";
import Hero from "./Components/Hero/hero.jsx";
import Top from "./Components/Top-button/top.jsx";
import Aboutus from "./Components/About/about.jsx";
import Ourwork from "./Components/Ourwork/ourwork.jsx";
import Instruct from "./Components/Instructions/Instruct.jsx";
import Footer from "./Components/Footer/footer.jsx";
import GridImages from "./Components/Grid-gallery/grid-images.jsx";
import ToggleTheme from "./Components/ToggleTheme/ToggleTheme.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeDark, themeLight } from "./theme.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = darkMode ? themeDark : themeLight;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Hero />
      <Aboutus />
      <Ourwork />
      <GridImages />
      <Instruct />
      <Footer />
      <Top />
      <ToggleTheme
        onToggleSwitch={handleThemeChange}
        darkMode={darkMode}
        theme={theme}
      />
    </ThemeProvider>
  );
};

export default App;
