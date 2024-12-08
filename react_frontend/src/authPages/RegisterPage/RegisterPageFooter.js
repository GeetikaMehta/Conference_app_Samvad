import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Username should contain between 3 and 12 characters, and password should contain between 6 and 12 characters. Also, a correct email address should be provided.";
};

const getFormValidMessage = () => {
  return "Press to register!";
};

const RegisterPageFooter = ({ handleRegister, isFormValid, navigation }) => {

  const handlePushToLoginPage = () => {
    navigation("/login");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        arrow
      >
        <div>
          <CustomPrimaryButton
            label="Register Here"
            additionalStyles={{
              color:"black",
              marginTop: "30px",
              padding: "12px 24px",
              fontSize: "13px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s, color 0.3s",
            }}
            disabled={!isFormValid}
            onClick={handleRegister}
            sx={{
              '&:hover': {
                backgroundColor: "#3b5af7", // Darker blue on hover
                color: "white", // White text on hover
              },
              '&:active': {
                backgroundColor: "#2c4fa1", // Even darker blue when clicked
                color: "white",
              },
            }}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Already have an account? "
        redirectText="Login here"
        additionalStyles={{
          marginTop: "15px",
          fontSize: "14px",
          color: "#DDE6ED",
        }}
        redirectHandler={handlePushToLoginPage}
      />
    </div>
  );
};

export default RegisterPageFooter;
