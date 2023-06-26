import React from "react";
import { Box, Button, Typography } from "@mui/material";

const FindYourCase = () => {
  return (
    <Box
      sx={{
        margin: "64px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          maxWidth: "70%",
          fontSize: "160px",
          lineHeight: "120%",
          marginBottom: "48px",
          letterSpacing: "3.2px",
          textTransform: "uppercase",
        }}
      >
        найди любимое дело
      </Typography>

      <Button
        variant="outlined"
        sx={{
          marginBottom: "48px",
          color: "petersburg.0",
          backgroundColor: "brand.80",

          "&:hover": {
            backgroundColor: "brand.60",
          },
        }}
      >
        Смотреть вакансии
      </Button>
    </Box>
  );
};

export default FindYourCase;
