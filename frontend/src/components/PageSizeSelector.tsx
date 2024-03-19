import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "../styles/PageSizeSelector.css";

export const PageSizeSelector = (props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    props.setPageSize(event.target.value);
    props.setPageNo(1);
  };

  return (
    <Box sx={{ minWidth: 70 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          style={{ color: "white", height: "40px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.PageSize}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
