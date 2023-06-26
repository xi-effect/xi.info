import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Team } from "@site/src/components/icons/Team";

const Header = () => {
  return (
    <Stack
      component="header"
      sx={{
        padding: "64px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Team />

      <Stack
        component="nav"
        sx={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            marginRight: "64px",
            color: "petersburg.60",
          }}
        >
          Вакансии
        </Typography>

        <Button
          sx={{
            height: "56px",
            fontWeight: 500,
            fontSize: "20px",
            borderRadius: "12px",
            padding: "12px 32px",
            color: "petersburg.0",
            textTransform: "initial",
            backgroundColor: "brand.80",

            "&:hover": {
              backgroundColor: "brand.60",
            },
          }}
        >
          Отправить резюме
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;