import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ( ) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const [user,] = useAuthState(auth);
  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Top Rated", path: "/movies/top-rated" },
    { label: "Popular People", path: "/person" },
  ];

  const menuUserOptions = [
    { label: "Log out", path: "/" },
    { label: "Log in", path: "/login" },
      ]

  const handleMenuSelect = (pageURL) => {
    if (pageURL === "/"){
      logout()
    }
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  console.log(user)

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          
          {user==null?(
            <Typography variant="p" sx={{ flexGrow: 1 }}>
            Please Log In
          </Typography>
          ):
          ( <Typography variant="p" sx={{ flexGrow: 1 }} >
          {user.email}
          </Typography>)
          }
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}

                    {user==null?(
                  <MenuItem
                  key={menuUserOptions[1].label}
                  color="inherit"
                  onClick={() => handleMenuSelect(menuUserOptions[1].path)}
                >
                        {menuUserOptions[1].label}
                  </MenuItem>
                ):( <MenuItem
                  key={menuUserOptions[0].label}
                  color="inherit"
                  onClick={() => handleMenuSelect(menuUserOptions[0].path)}
                >
                   {menuUserOptions[0].label}
                   </MenuItem>
                  )

                }

                </Menu>
              </>
            ) : (
              <>
                {menuOptions.map((opt) => (
                  <Button
                    key={opt.label}
                    color="inherit"
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </Button>
                ))}

                    {user==null?(
                  <Button
                  key={menuUserOptions[1].label}
                  color="inherit"
                  onClick={() => handleMenuSelect(menuUserOptions[1].path)}
                >
                        {menuUserOptions[1].label}
                  </Button>
                ):( <Button
                  key={menuUserOptions[0].label}
                  color="inherit"
                  onClick={() => handleMenuSelect(menuUserOptions[0].path)}
                >
                   {menuUserOptions[0].label}
                   </Button>
                  )
                }
              </>
            )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;