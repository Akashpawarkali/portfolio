import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <Box
    id="home"
      sx={{
        background: "radial-gradient(circle at 10% 20%, #1a1a40, #000000 100%)",
        color: "#fff",
        py: { xs: 10, md: 16 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated floating blobs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
        style={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, #ff00cc, transparent 70%)",
          filter: "blur(150px)",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        {/* Left content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
        >
          <Typography variant="h2" fontWeight={700} gutterBottom>
            🚀 Hello, I'm <span style={{ color: "#ff00cc" }}>Akash Pawar</span>
          </Typography>

          <TypeAnimation
            sequence={[
              "Full Stack Developer 💻",
              2000,
           "Node.js, Express.js Expert ⚙️🟢 — Backend Specialist in APIs, Databases 🗄️, and Scalable Architectures 🚀",

              "React / Node.js Expert ⚛️",
              2000,
              "MERN & DevOps Enthusiast 🚀",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{
              fontSize: "1.25rem",
              display: "inline-block",
              color: "#a0e9ff",
              marginBottom: "1.5rem",
            }}
          />

          <Typography
            variant="body1"
            sx={{ maxWidth: 600, color: "#d0d0d0", mb: 4 }}
          >
            I build stunning user experiences and scalable backend systems. Obsessed with performance, design, and clean code.
          </Typography>

          <Stack direction="row" spacing={2}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: "linear-gradient(90deg, #ff00cc, #3333ff)",
                  borderRadius: "50px",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0 4px 20px rgba(255, 0, 204, 0.4)",
                }}
              >
                Let's Talk
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Button
                variant="outlined"
                href="/resumeAP130425.pdf"
                size="large"
                sx={{
                  borderRadius: "50px",
                  px: 4,
                  py: 1.5,
                  borderColor: "#ff00cc",
                  color: "#ff00cc",
                  fontWeight: 600,
                  textTransform: "none",
                  '&:hover': {
                    backgroundColor: "#ff00cc20",
                  },
                }}
              >
                View Resume
              </Button>
            </motion.div>
          </Stack>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              border: "6px solid #ff00cc",
              width: { xs: 220, md: 300 },
              height: { xs: 220, md: 300 },
              boxShadow: "0 0 40px rgba(255, 0, 204, 0.3)",
            }}
          >
            <Box
              component="img"
              src="/IMG_20250425_165011.jpg"
              alt="Akash Pawar"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
