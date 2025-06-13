import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Bridgeview Maritime Pvt Ltd",
    role: "Senior Software Developer",
    period: "Feb 2025 – Present",
    responsibilities: [
      "Leading development of shipping and crew management applications.",
      "Developed and maintained secure APIs using Node.js and Express.",
      "Built dynamic user interfaces in React with Material UI.",
      "Deployed apps to production on VPS servers with Nginx.",
    ],
  },
  {
    company: "OGCS Pvt Ltd",
    role: "Full Stack Developer",
    period: "Jun 2024 – Jan 2025",
    responsibilities: [
      "Built and maintained multi-vendor e-commerce platform with role-based portals.",
      "Integrated Razorpay payment gateway and custom subscription flows.",
      "Handled deployment using VPS and custom domain setup with SSL and Nginx.",
    ],
  },
  {
    company: "Automation Artisans",
    role: "Junior Developer",
    period: "Mar 2024 – May 2024",
    responsibilities: [
      "Developed backend modules in Node.js for automation dashboard.",
      "Worked with MongoDB and SQL databases to manage automation logs.",
    ],
  },
  {
    company: "Knowx Innovation Technologies",
    role: "Intern – Software Developer",
    period: "Dec 2023 – Feb 2024",
    responsibilities: [
      "Built small-scale CRUD apps using MERN stack.",
      "Learned API testing and Postman documentation practices.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="experience"
      component="section"
      sx={{
        backgroundColor: "#0f1123",
        color: "#ffffff",
        width: "100vw",
        overflowX: "hidden",
        py: 6,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: isMobile ? 2 : 4,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, color: "#FF2E63" }}
        >
          Experience
        </Typography>

        <Box
          sx={{
            height: "3px",
            width: "70px",
            background: "#FF2E63",
            mx: "auto",
            mb: 4,
            borderRadius: 2,
          }}
        />

        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {experiences.map((exp, i) => (
            <Grid item xs={12} sm={12} md={6} key={i}>
              <motion.div
                style={{ width: "100%" }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Paper
                  elevation={3}
                  sx={{
                    width: "100%",
                    px: 3,
                    py: 2,
                    backgroundColor: "#1e1e2f",
                    color: "#ffffff",
                    borderRadius: 2,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-3px) scale(1.01)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#00ADB5", mb: 0.5 }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontStyle: "italic", color: "#ccc", mb: 1 }}
                  >
                    {exp.role} — {exp.period}
                  </Typography>
                  <List dense disablePadding>
                    {exp.responsibilities.map((res, idx) => (
                      <ListItem key={idx} disableGutters sx={{ py: 0.3 }}>
                        <ListItemText
                          primary={`• ${res}`}
                          primaryTypographyProps={{ fontSize: "0.9rem" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Experience;
