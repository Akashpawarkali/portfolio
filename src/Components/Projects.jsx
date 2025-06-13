import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { motion } from "framer-motion";

const projects = [
  {
    name: "BuildPro OGCS (Multi-Vendor E-commerce)",
    description:
      "A heavy multi-portal platform with Buyer, Seller, and Admin interfaces. Supports two seller models: 'Sale by Seller' (contact shared with buyer) and 'Sale by OGCS' (company-managed checkout with RazorPay). Admin dashboard manages subscriptions, transactions, seller approvals, and analytics.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RazorPay",
      "JWT",
      "VPS",
      "Nginx",
    ],
    demo: "https://buildpro.ogcs.co.in",
    demo: "https://buildproseller.ogcs.co.in",

  },
  {
    name: "Bridgeview Ships",
    description:
      "Shipping & crewing portal for Crew, Crewing Agents, Vessel Owners, and Admin. Crew members can track contracts, sea service, sign-on/off details. Agents manage crew assignments. Vessel owners manage fleets and onboard crew. Admin oversees all operations including contract approvals.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Nginx"],
    github: "https://github.com/your/bridgeviewships",
    demo: "https://bridgeviewships.ae",
  },
  {
    name: "GrowMax",
    description:
      "A dynamic institutional website for motivational content, construction training, and business development programs. Features content management, training program listing, and interactive media integration for seminars and workshops.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/your/growmax",
    demo: "https://growmax.com",
  },
  {
    name: "Ornate",
    description:
      "Online training and certification platform for maritime professionals. Admin can create courses, manage enrollments, and issue certificates. Secure video streaming, test submissions, and JWT-based role authentication included.",
    tech: ["React.js", "Node.js", "MongoDB", "Cloudinary", "JWT", "Stripe"],
    github: "https://github.com/your/ornate",
    demo: "https://ornatetraining.com",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Projects = () => (
  <Box

  id="projects"
    py={10}
    px={{ xs: 2, sm: 5, md: 10 }}
    sx={{
      background: "linear-gradient(to right, #141e30, #243b55)",
      color: "#ffffff",
    }}
  >
    <Typography
      variant="h4"
      align="center"
      gutterBottom
      sx={{ fontWeight: 700, color: "#FF2E63" }}
    >
      Projects
    </Typography>

    <Box
      sx={{
        height: "3px",
        width: "100px",
        background: "#FF2E63",
        mx: "auto",
        mb: 6,
        borderRadius: 2,
      }}
    />

    <Grid container spacing={5}>
      {projects.map((project, i) => (
        <Grid item xs={12} sm={6} key={i}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
          >
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#1e1e2f",
                color: "#fff",
                borderRadius: 4,
                boxShadow: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-5px) scale(1.02)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "#FF2E63", fontWeight: 600 }}
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "#ccc", lineHeight: 1.6 }}
                >
                  {project.description}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1} mt={2}>
                  {project.tech.map((t, idx) => (
                    <Chip
                      key={idx}
                      label={t}
                      size="small"
                      variant="outlined"
                      sx={{
                        color: "#ffffff",
                        borderColor: "#3a3b4d",
                        fontSize: "0.75rem",
                        backgroundColor: "#2a2c3d",
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
              
                <Button
                  size="small"
                  href={project.demo}
                  target="_blank"
                  startIcon={<Launch />}
                  sx={{ color: "#00ADB5" }}
                >
                Visite Site
                </Button>
              </CardActions>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
