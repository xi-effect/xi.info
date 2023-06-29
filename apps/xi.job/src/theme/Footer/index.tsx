import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import WorkTogether from "./WorkTogether";
import { Team } from "@site/src/components/icons/Team";

const Footer = () => {
  return (
    <Box component="footer">
      <WorkTogether />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: "64px",
        }}
      >
        <Team />

        <Typography
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
            color: "petersburg.60",
          }}
        >
          {`© xieffect.ru ${new Date().getFullYear()}`}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
