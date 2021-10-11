import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import MainLayout from "./components/layout/MainLayout";
import theme from "./components/layout/theme";
import WeatherContainer from "./features/weatherWidget/WeatherContainer";
import ErrorBoundary from "./components/hoc/errorBoundary";
import './App.css'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <MainLayout>
            <ErrorBoundary>
            <WeatherContainer></WeatherContainer>
            </ErrorBoundary>
        </MainLayout>
    </ThemeProvider>
  );
}

export default App;
