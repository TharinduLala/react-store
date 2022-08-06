import {
  Stack,
  Button,
  Grid,
  Paper,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import { red, blue } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function createData(email, firstName, lastName, view, remove) {
  return { email, firstName, lastName, view, remove };
}

const rows = [
  createData(
    "User01@gmail.com",
    "User01",
    "User01 last",
    <IconButton aria-label="view">
      <PreviewIcon sx={{ color: blue[600] }} fontSize="large" />
    </IconButton>,
    <IconButton aria-label="delete">
      <DeleteIcon sx={{ color: red[500] }} fontSize="large" />
    </IconButton>
  ),
  createData(
    "User02@gmail.com",
    "User02",
    "User02 last",
    <IconButton aria-label="view">
      <PreviewIcon sx={{ color: blue[600] }} fontSize="large" />
    </IconButton>,
    <IconButton aria-label="delete">
      <DeleteIcon sx={{ color: red[500] }} fontSize="large" />
    </IconButton>
  ),
  createData(
    "User03@gmail.com",
    "User03",
    "User03 last",
    <IconButton aria-label="view">
      <PreviewIcon sx={{ color: blue[600] }} fontSize="large" />
    </IconButton>,
    <IconButton aria-label="delete">
      <DeleteIcon sx={{ color: red[500] }} fontSize="large" />
    </IconButton>
  ),
  createData(
    "User04@gmail.com",
    "User04",
    "User04 last",
    <IconButton aria-label="view">
      <PreviewIcon sx={{ color: blue[600] }} fontSize="large" />
    </IconButton>,
    <IconButton aria-label="delete">
      <DeleteIcon sx={{ color: red[500] }} fontSize="large" />
    </IconButton>
  ),
];

function CustomerRegister(props) {
  return (
    <Container style={{ overflowY: "hidden" }}>
      <Stack spacing={2} marginTop="1rem">
        <Item>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Typography variant="h4">User Registration</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="firstName"
                label="First Name"
                placeholder="First Name"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="secondName"
                label="Second Name"
                placeholder="Second Name"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                placeholder="Email"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="userName"
                label="User Name"
                placeholder="User Name"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="password"
                label="Password"
                placeholder="Password"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="mobileNo"
                label="Mobile No"
                placeholder="Mobile No"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="city"
                label="City"
                placeholder="City"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="street"
                label="Street"
                placeholder="Street"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="streetNo"
                label="Street No"
                placeholder="Street No"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="zipCode"
                label="Zip Code"
                placeholder="Zip Code"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="latValue"
                label="Lat Value"
                placeholder="Lat Value"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="longValue"
                label="Long Value"
                placeholder="Long Value"
                size="small"
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button style={{ margin: "0.5rem" }} variant="contained">
                Save
              </Button>
              <Button
                style={{ margin: "0.5rem", backgroundColor: "#616161" }}
                variant="contained"
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </Item>
        <Item>
          <TableContainer
            style={{ height: "17rem", overflowY: "scroll" }}
            component={Paper}
          >
            <Table
              border="solid"
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead style={{ position: "sticky", top: "0", zIndex: "5" }}>
                <TableRow>
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    First Name
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Last Name
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    View Details
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Remove
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.email}>
                    <TableCell component="th" scope="row">
                      {row.email}
                    </TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.view}</TableCell>
                    <TableCell>{row.remove}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Item>
      </Stack>
    </Container>
  );
}

export default CustomerRegister;
