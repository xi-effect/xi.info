import React, { PropsWithChildren } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getScheme } from "./theme";

const theme = () => createTheme(getScheme("light"));

const Root: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default Root;
