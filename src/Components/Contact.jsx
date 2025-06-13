// components/Contact.jsx
import React from "react";
import { Typography, Box, Link, Stack, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Email, LinkedIn, GitHub, Phone } from "@mui/icons-material";

const contactInfo = [
  {
    label: "Email",
    value: "akashpawarkali@gmail.com",
    href: "mailto:akashpawarkali@gmail.com",
    icon: <Email sx={{ mr: 1, color: "#FF2E63" }} />,
  },
  {
    label: "Phone",
    value: "+91 9686875595",
    href: "tel:+919686875595",
    icon: <Phone sx={{ mr: 1, color: "#FF2E63" }} />,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/akash-pawar-835145242/",
    icon: <LinkedIn sx={{ mr: 1, color: "#FF2E63" }} />,
  },
  {
    label: "GitHub",
    value: "GitHub",
    href: "https://github.com/Akashpawarkali",
    icon: <GitHub sx={{ mr: 1, color: "#FF2E63" }} />,
  },
];

const Contact = () => (
  <Box
  id="contact"
    py={10}
    px={3}
    sx={{
      background: "linear-gradient(to right, #141e30, #243b55)",
      color: "#fff",
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, color: "#FF2E63" }}
      >
        Contact Me
      </Typography>

      <Box
        sx={{
          height: "3px",
          width: "80px",
          background: "#FF2E63",
          mx: "auto",
          mb: 5,
          borderRadius: 5,
        }}
      />

      <Stack
        spacing={3}
        sx={{
          maxWidth: 500,
          mx: "auto",
          textAlign: "left",
        }}
      >
        {contactInfo.map((item, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              backgroundColor: "#1e1e2f",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#2a2a3e",
                transform: "scale(1.02)",
              },
            }}
          >
            {item.icon}
            <Link
              href={item.href}
              target="_blank"
              rel="noopener"
              underline="hover"
              sx={{ color: "#E3E3E3", fontSize: "1rem" }}
            >
              {item.value}
            </Link>
          </Paper>
        ))}
      </Stack>
    </motion.div>
  </Box>
);

export default Contact;
