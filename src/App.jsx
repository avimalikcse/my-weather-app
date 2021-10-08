import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import MainLayout from "./components/layout/MainLayout";
import theme from "./components/layout/theme";
import WeatherContainer from "./features/weatherWidget/WeatherContainer";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <MainLayout>
            <WeatherContainer></WeatherContainer>
        </MainLayout>
    </ThemeProvider>
  );
}

export default App;
