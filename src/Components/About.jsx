// components/About.jsx
import React from "react";
import { Box, Typography, Container, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { FaNodeJs, FaServer, FaAws, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNginx } from "react-icons/si";

const About = () => {
  const theme = useTheme();

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconHover = {
    whileHover: {
      scale: 1.2,
      rotate: 3,
      transition: { type: "spring", stiffness: 250 },
    },
  };

  return (
    
    <Box
    id="about"
      sx={{
        backgroundColor: "#0f1123",
        color: theme.palette.text.primary,
        py: { xs: 10, md: 14 },
        px: 3,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            gutterBottom
            sx={{
              textAlign: "center",
              color: "#FF2E63",
              mb: 2,
              letterSpacing: 1.2,
            }}
          >
            About Me
          </Typography>

          <Box
            sx={{
              height: "4px",
              width: "80px",
              backgroundColor: "#FF2E63",
              margin: "0 auto",
              mb: 4,
              borderRadius: 2,
            }}
          />

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#cccccc",
              fontSize: "1.2rem",
              mb: 3,
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            I’m a passionate <strong>Software Developer</strong> with 2 years of experience in <strong>automation</strong>, <strong>construction</strong>, and <strong>shipping</strong> sectors. I thrive on solving complex problems and shipping clean, efficient code.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#bbbbbb",
              fontSize: "1.2rem",
              mb: 3,
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            As a <strong>Senior Backend Developer</strong>, I specialize in scalable APIs, cloud deployments, and system architecture using the <strong>MERN stack</strong>.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#aaaaaa",
              fontSize: "1.2rem",
              mb: 5,
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            My stack includes <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, <strong>React</strong>, with experience in deploying apps using <strong>AWS EC2</strong>, <strong>Hostinger</strong>, <strong>Nginx</strong>, and <strong>VPS servers</strong>.
          </Typography>

          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            sx={{ mt: 6, flexWrap: "wrap" }}
          >
            <motion.div {...iconHover}>
              <FaNodeJs size={50} color="#3C873A" title="Node.js" />
            </motion.div>
            <motion.div {...iconHover}>
              <SiExpress size={50} color="#ffffff" title="Express.js" />
            </motion.div>
            <motion.div {...iconHover}>
              <SiMongodb size={50} color="#47A248" title="MongoDB" />
            </motion.div>
            <motion.div {...iconHover}>
              <FaReact size={50} color="#61DAFB" title="React" />
            </motion.div>
            <motion.div {...iconHover}>
              <FaAws size={50} color="#FF9900" title="AWS EC2" />
            </motion.div>
            <motion.div {...iconHover}>
              <SiNginx size={50} color="#009639" title="Nginx" />
            </motion.div>
            <motion.div {...iconHover}>
              <FaServer size={50} color="#9c27b0" title="Backend / VPS" />
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
