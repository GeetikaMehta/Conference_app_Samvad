import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const HeaderWrapper = styled("div")({
  textAlign: "center",
  marginBottom: "20px",
});

const LoginPageHeader = () => {
  return (
    <HeaderWrapper>
      <Typography
        variant="h5"
        sx={{
          color: "white",
          fontWeight:"bold",
          marginBottom:"10px",
          fontsize:"10px"
        }}
      >
        Welcome Back!
      </Typography>
      <Typography
        sx={{
          color: "#DDE6ED",
          fontSize: "1.0rem",
          lineHeight: 1.6,
        }}
      >
        We are happy that you are with us!
      </Typography>
    </HeaderWrapper>
  );
};

export default LoginPageHeader;
