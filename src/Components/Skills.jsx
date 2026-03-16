import React from "react";
import { Typography, Grid, Box, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaNetworkWired,
  FaDocker,
} from "react-icons/fa";
import {
  SiExpress,
  SiPostman,
  SiMongodb,
  SiNginx,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiLinux,
  SiGit,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";  // Add this import

const skills = [
  // Frontend & Backend
  { name: "React.js", icon: <FaReact size={32} color="#61DAFB" />, category: "frontend" },
  { name: "Node.js", icon: <FaNodeJs size={32} color="#3C873A" />, category: "backend" },
  { name: "Express.js", icon: <SiExpress size={32} color="#ffffff" />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb size={32} color="#4DB33D" />, category: "database" },
  { name: "SQL", icon: <FaDatabase size={32} color="#f29111" />, category: "database" },
  
  // API & Tools
  { name: "Postman", icon: <SiPostman size={32} color="#FF6C37" />, category: "tools" },
  { name: "RESTful APIs", icon: <FaNetworkWired size={32} color="#00BFFF" />, category: "api" },
  { name: "Git", icon: <SiGit size={32} color="#F05032" />, category: "tools" },
  
  // Hosting & Servers
  { name: "VPS Hosting", icon: <FaServer size={32} color="#9c27b0" />, category: "hosting" },
  { name: "Nginx", icon: <SiNginx size={32} color="#009639" />, category: "hosting" },
  { name: "Linux", icon: <SiLinux size={32} color="#FCC624" />, category: "devops" },
  
  // DevOps & Cloud
  { name: "Docker", icon: <FaDocker size={32} color="#2496ED" />, category: "devops" },
  { name: "Kubernetes", icon: <SiKubernetes size={32} color="#326CE5" />, category: "devops" },
  { name: "Terraform", icon: <SiTerraform size={32} color="#7B42BC" />, category: "devops" },
{ name: "AWS", icon: <FaAws size={32} color="#FF9900" />, category: "cloud" },
  { name: "Ansible", icon: <SiAnsible size={32} color="#EE0000" />, category: "devops" },
  { name: "Jenkins", icon: <SiJenkins size={32} color="#D24939" />, category: "ci-cd" },
  { name: "GitHub Actions", icon: <SiGithubactions size={32} color="#2088FF" />, category: "ci-cd" },
  { name: "Prometheus", icon: <SiPrometheus size={32} color="#E6522C" />, category: "monitoring" },
  { name: "Grafana", icon: <SiGrafana size={32} color="#F46800" />, category: "monitoring" },
];

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
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

    <Grid container spacing={3} justifyContent="center">
      {skills.map((skill, index) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
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
                padding: { xs: 2, sm: 3 },
                backgroundColor: "#222336",
                color: "#ffffff",
                textAlign: "center",
                borderRadius: 3,
                transition: "all 0.3s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                "&:hover": {
                  transform: "translateY(-5px) scale(1.03)",
                  backgroundColor: "#2c2f48",
                  boxShadow: "0 8px 20px rgba(255,46,99,0.2)",
                },
              }}
            >
              <Stack spacing={1} alignItems="center">
                {skill.icon}
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    mt: 1, 
                    fontWeight: 500,
                    fontSize: { xs: '0.85rem', sm: '1rem' }
                  }}
                >
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