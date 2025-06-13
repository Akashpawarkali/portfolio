import React from "react";
import { Typography, Grid, Box, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiExpress,
  SiPostman,
  SiMongodb,
  SiNginx,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact size={32} color="#61DAFB" /> },
  { name: "Node.js", icon: <FaNodeJs size={32} color="#3C873A" /> },
  { name: "Express.js", icon: <SiExpress size={32} color="#ffffff" /> },
  { name: "MongoDB", icon: <SiMongodb size={32} color="#4DB33D" /> },
  { name: "SQL", icon: <FaDatabase size={32} color="#f29111" /> },
  { name: "Postman", icon: <SiPostman size={32} color="#FF6C37" /> },
  { name: "RESTful APIs", icon: <FaNetworkWired size={32} color="#00BFFF" /> },
  { name: "VPS Hosting", icon: <FaServer size={32} color="#9c27b0" /> },
  { name: "Nginx", icon: <SiNginx size={32} color="#009639" /> },
];

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Skills = () => (
  <Box
    py={10}
    px={3}
    sx={{
      background: "linear-gradient(to right, #0f1123, #1c1e2e)",
      color: "#ffffff",
      minHeight: "500",
    }}
  >
    <Typography
      variant="h4"
      gutterBottom
      align="center"
      sx={{
        fontWeight: 700,
        letterSpacing: 1,
        color: "#FF2E63",
        textShadow: "1px 1px 5px rgba(255,255,255,0.1)",
      }}
    >
      Tech Stack
    </Typography>

    <Box sx={{ height: "3px", width: "80px", background: "#FF2E63", mx: "auto", mb: 5, borderRadius: 5 }} />

    <Grid container spacing={4} justifyContent="center">
      {skills.map((skill, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <motion.div
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true }}
          >
            <Paper
              elevation={4}
              sx={{
                padding: 3,
                backgroundColor: "#222336",
                color: "#ffffff",
                textAlign: "center",
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px) scale(1.03)",
                  backgroundColor: "#2c2f48",
                },
              }}
            >
              <Stack spacing={1} alignItems="center">
                {skill.icon}
                <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 500 }}>
                  {skill.name}
                </Typography>
              </Stack>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Skills;
