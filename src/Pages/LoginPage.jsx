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
import Link from "@mui/material/Link";

function LoginPage(props) {
  const [userNameHelperText, setUsernameHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginAction = () => {
    if (!(userName === "" || password === "")) {
    } else {
      alert("fill fields");
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
        <Typography variant="h4" gutterBottom>
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
          onChange={(e) => {
            setUserName(e.target.value);
          }}
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
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <FormControlLabel
          control={<Checkbox onChange={showHidePassword} />}
          label="show password"
        />

        <Link href="/dashboard" underline="none">
          <Button id="loginButton" variant="contained" onClick={loginAction}>
            Login
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default LoginPage;
