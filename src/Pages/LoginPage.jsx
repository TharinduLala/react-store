import {
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Container,
  Paper,
} from "@mui/material";
import React, { useState } from "react";

function LoginPage(props) {
  const [userNameHelperText, setUsernameHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState("password");

  const loginAction = () => {
    if (usernameError) {
      setUsernameHelperText("Invalid Username");
      /*  setPasswordHelperText('Invalid Password'); */
    }
  };
  const showHidePassword = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setShowPassword("");
    } else {
      setShowPassword("password");
    }
  };

  return (
    <Container className="container">
      <div className="loginContainer">
        <Typography variant="h4"gutterBottom>
          Login
        </Typography>
        <TextField
          autoFocus
          required
          fullWidth
          id="txtUserName"
          label="User name"
          placeholder="User name"
          margin="normal"
          size="small"
          error={usernameError}
          helperText={userNameHelperText}
        />
        <TextField
          required
          fullWidth
          type={showPassword}
          id="txtPassword"
          label="Password"
          placeholder="Password"
          margin="normal"
          size="small"
          error={passwordError}
          helperText={passwordHelperText}
        />
        <FormControlLabel
          control={<Checkbox onChange={showHidePassword} />}
          label="show password"
        />
        <Button id="loginButton" variant="contained" onClick={loginAction}>
          Login
        </Button>
      </div>
    </Container>
  );
}

export default LoginPage;
