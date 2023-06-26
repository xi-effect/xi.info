import { Box, Container } from "@mui/material";
import React, { PropsWithChildren } from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        maxWidth: "1840px",
        flexDirection: "column",
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flex: "1 1 auto",
        }}
      >
        {children}
      </Box>

      <Footer />
    </Container>
  );
};

export default Layout;
