import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { React, useState } from "react";

function CartManage() {
  const [cartUserName, setCartUserName] = useState("");
  const [date, setDate] = useState("");
  const [cartProductTitle, setCartProductTitle] = useState("");
  return (
    <Container style={{ overflowY: "hidden" }}>
      <Stack spacing={2} marginTop="1rem">
        <div>
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
              <Typography variant="h4">Cart Manage</Typography>
            </Grid>

            <Grid item xs={5}>
              <FormControl size="small" fullWidth>
                <InputLabel id="cartUserNameLabel">User Name</InputLabel>
                <Select
                  MenuProps={{
                    PaperProps: { sx: { maxHeight: 150 } },
                  }}
                  required
                  labelId="cartUserNameLabel"
                  placeholder="User Name"
                  id="cartUserName"
                  value={cartUserName}
                  label="User Name"
                  onChange={(e) => {
                    setCartUserName(e.target.value);
                  }}
                  fullWidth
                  size="small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>User Name 01</MenuItem>
                  <MenuItem value={20}>User Name 02</MenuItem>
                  <MenuItem value={30}>User Name 03</MenuItem>
                  <MenuItem value={40}>User Name 04</MenuItem>
                  <MenuItem value={50}>User Name 05</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              <TextField
                id="date"
                label="Date"
                type="date"
                fullWidth
                size="small"
                value={date}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <FormControl size="small" fullWidth>
                <InputLabel id="cartProductTitleLabel">
                  Product Title
                </InputLabel>
                <Select
                  MenuProps={{
                    PaperProps: { sx: { maxHeight: 150 } },
                  }}
                  required
                  labelId="cartProductTitleLabel"
                  placeholder="Product Title"
                  id="cartProductTitle"
                  value={cartProductTitle}
                  label="Product Title"
                  onChange={(e) => {
                    setCartProductTitle(e.target.value);
                  }}
                  fullWidth
                  size="small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Product Title 01</MenuItem>
                  <MenuItem value={20}>Product Title 02</MenuItem>
                  <MenuItem value={30}>Product Title 03</MenuItem>
                  <MenuItem value={40}>Product Title 04</MenuItem>
                  <MenuItem value={50}>Product Title 05</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              <TextField
                required
                fullWidth
                id="qty"
                label="Qty"
                placeholder="Qty"
                size="small"
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                style={{ margin: "0.5rem" }}
                variant="contained"
                onClick={() => {
                  console.log(date);
                }}
              >
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
        </div>
        <div>
          <TableContainer
            style={{ height: "25rem", overflowY: "scroll" }}
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
                    Product Title
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Qty
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Remove
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </div>
      </Stack>
    </Container>
  );
}

export default CartManage;
