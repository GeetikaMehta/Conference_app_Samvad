import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validators";
import { useDispatch } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom"; 

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    console.log("register clicked");
    const userDetails = {
      mail,
      password,
      username,
    };

    const actions = getActions(dispatch);
    actions.register(userDetails, navigate);
  };

  useEffect(() => {
    setIsFormValid(
      validateRegisterForm({
        mail,
        username,
        password,
      })
    );
  }, [mail, username, password]);

  return (
    <AuthBox>
      <Typography
        variant="h5"
        sx={{
          fontsize:"12px",
          color: "white",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
        navigation={navigate} 
      />
    </AuthBox>
  );
};

export default RegisterPage;
