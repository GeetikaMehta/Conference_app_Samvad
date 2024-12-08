import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Enter correct e-mail address and password should contain between 6 and 12 characters";
};

const getFormValidMessage = () => {
  return "Press to log in!";
};

const LoginPageFooter = ({ handleLogin, isFormValid, navigation }) => {

  const handlePushToRegisterPage = () => {
    navigation("/Register");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        arrow
      >
        <div>
          <CustomPrimaryButton
            label="Log in"
            additionalStyles={{
              color:"black",
              marginTop: "30px",
              padding: "12px 24px",
              fontSize: "16px",
              backgroundColor: "white", // Custom color for the button
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s",
            }}
            disabled={!isFormValid}
            onClick={handleLogin}
            sx={{
              '&:hover': {
                backgroundColor:"#5865F2", 
                color: "white",
              },
              '&:active': {
                backgroundColor: "#3b5af7",
                color: "white",
              },
            }}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{
          marginTop: "15px",
          fontSize: "14px",
          color: "#DDE6ED",
        }}
        redirectHandler={handlePushToRegisterPage}
      />
    </div>
  );
};

export default LoginPageFooter;
