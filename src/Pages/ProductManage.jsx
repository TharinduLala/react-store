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

function ProductManage() {
  const [category, setCategory] = useState("");
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
              <Typography variant="h4">Product Manage</Typography>
            </Grid>
            <Grid item xs={5}>
              <TextField
                required
                fullWidth
                id="title"
                label="Title"
                placeholder="Title"
                size="small"
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                required
                fullWidth
                id="price"
                label="Price"
                placeholder="Price"
                size="small"
              />
            </Grid>
            <Grid item xs={5}>
              <FormControl size="small" fullWidth>
                <InputLabel id="categoryLabel">Category</InputLabel>
                <Select
                  MenuProps={{
                    PaperProps: { sx: { maxHeight: 150 } },
                  }}
                  required
                  labelId="categoryLabel"
                  placeholder="Category"
                  id="category"
                  value={category}
                  label="Category"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  fullWidth
                  size="small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Category 01</MenuItem>
                  <MenuItem value={20}>Category 02</MenuItem>
                  <MenuItem value={30}>Category 03</MenuItem>
                  <MenuItem value={40}>Category 04</MenuItem>
                  <MenuItem value={50}>Category 05</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              <TextField
                required
                fullWidth
                id="description"
                label="Description"
                placeholder="Description"
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
                    Title
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Category
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Description
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Buttons
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

export default ProductManage;
