import { Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import Grid from "@mui/material/Grid";

function DashBoard(props) {
  return (
    <Container
      style={{
        height: "100vh",
        overflowY: "hidden",
        width: "100vw",
        maxWidth: "100vw",
        padding: "0",
        margin: "0",
      }}
    >
      <Container
        style={{ width: "100vw", maxWidth: "100vw", padding: "0", margin: "0" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <Button size="small" color="inherit">
                    DashBoard
                  </Button>
                  <Button size="small" color="inherit">
                    Products
                  </Button>
                  <Button size="small" color="inherit">
                    Cart
                  </Button>
                </div>

                <Button color="inherit">Logout</Button>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
      <Container
        style={{
          height: "35rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 2, md: 6 }}
        >
          <Paper
            sx={{ backgroundColor: grey[400] }}
            style={{
              width: "15rem",
              height: "10rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            elevation={3}
          >
            <Typography variant="h4" gutterBottom component="div">
              Products
            </Typography>
            <Typography variant="h2">60</Typography>
          </Paper>
          <Paper
            sx={{ backgroundColor: grey[400] }}
            style={{
              width: "15rem",
              height: "10rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            elevation={3}
          >
            <Typography variant="h4" gutterBottom component="div">
              Cart
            </Typography>
            <Typography variant="h2">120</Typography>
          </Paper>
          <Paper
            sx={{ backgroundColor: grey[400] }}
            style={{
              width: "15rem",
              height: "10rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            elevation={3}
          >
            <Typography variant="h4" gutterBottom component="div">
              Users
            </Typography>
            <Typography variant="h2">43</Typography>
          </Paper>
        </Stack>
      </Container>
    </Container>
  );
}

export default DashBoard;
