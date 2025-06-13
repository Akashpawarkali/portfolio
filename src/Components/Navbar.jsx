// src/components/Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="fixed"  sx={{ backgroundColor: "#0e0e2c", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "#ff00aa", fontWeight: 700 }}>
          Akash Pawar
        </Typography>
        <Stack direction="row" spacing={2}>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <Button
              key={item}
              sx={{ color: '#fff', textTransform: 'none', fontWeight: 500 }}
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
