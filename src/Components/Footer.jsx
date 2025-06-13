// components/Footer.jsx
import React from "react";
import { Box, Typography, IconButton, Stack, Link } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0f1123",
        color: "#ffffff",
        py: 4,
        px: 2,
        textAlign: "center",
        borderTop: "1px solid #333",
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Akash Pawar
        </Typography>

        <Stack direction="row" spacing={2}>
          <IconButton
            component="a"
            href="https://github.com/Akashpawarkali"
            target="_blank"
            rel="noopener"
            sx={{ color: "#FF2E63", "&:hover": { color: "#ffffff" } }}
          >
            <GitHub />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/akash-pawar-835145242/"
            target="_blank"
            rel="noopener"
            sx={{ color: "#FF2E63", "&:hover": { color: "#ffffff" } }}
          >
            <LinkedIn />
          </IconButton>
        </Stack>

        <Typography variant="caption" color="#aaa">
          &copy; {new Date().getFullYear()} Akash Pawar. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
