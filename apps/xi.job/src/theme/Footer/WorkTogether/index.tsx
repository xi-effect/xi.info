import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
const WorkTogether = () => {
  return (
    <Stack
      sx={{
        margin: "64px 0",
        padding: "64px",
        borderRadius: "32px",
        flexDirection: "row",
        position: "relative",
        justifyContent: "space-between",
        backgroundColor: "petersburg.10",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          component="h3"
          sx={{ color: "petersburg.100", marginBottom: "64px" }}
        >
          Приходи работать вместе
        </Typography>

        <Typography
          variant="h2"
          component="p"
          sx={{
            marginBottom: "64px",
            color: "petersburg.100",
          }}
        >
          Напиши пару слов о себе и о том, какая вакансия может быть
          вам интересна
        </Typography>

        <Button
          variant="outlined"
          sx={{
            color: "petersburg.0",
            backgroundColor: "brand.80",

            "&:hover": {
              backgroundColor: "brand.60",
            },
          }}
        >
          Отправить резюме
        </Button>
      </Box>

      <Box
        sx={{
          flex: "0 0 600px",
          backgroundSize: "cover",
          borderRadius: "0 32px 32px 0",
          backgroundRepeat: "no-repeat",
          margin: "-64px -64px -64px 20px",
          backgroundImage: `url(${
            require("@site/static/img/team.jpg").default
          })`,
        }}
      />
    </Stack>
  );
};

export default WorkTogether;
