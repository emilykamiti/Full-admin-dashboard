import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { themeSettings } from "theme";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";

function App() {
  const mode = useSelector((state) => state.global.mode); // Get mode (dark/light) from Redux store
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); // Dynamically create theme based on mode

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* Layout wraps all routes */}
            <Route element={<Layout />}>
              {/* Redirect "/" to "dashboard" */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
