import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import axios from "axios";
export default function NavBar() {
  const navigate = useNavigate();

  const LogoutHandler = () => {
    axios.post("http://localhost:8080/auth/deleteCookies");
    navigate("/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navbarx">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DeepTek
          </Typography>
          <Button color="inherit" onClick={LogoutHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
