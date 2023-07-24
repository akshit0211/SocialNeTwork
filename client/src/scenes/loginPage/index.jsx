import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import Particle from './Particle';

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box position="relative" display="flex" flexDirection="column" justifyContent="center" height="100vh">
      <Particle style={{position: "absolute", zIndex: 1}}/>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={isNonMobileScreens ? "2rem" : "1rem"}
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor="transparent"
        style={{zIndex: 2, position: "relative"}}
      >
        <Typography fontWeight="bold" fontSize={isNonMobileScreens ? "48px" : "32px"} color="#006400" gutterBottom>
          SocialNeTwork
        </Typography>
        <Typography fontWeight="500" variant="h5" sx={{ mb: "2rem", color: "#006400" }}>
          Welcome to SocialNeTwork!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
