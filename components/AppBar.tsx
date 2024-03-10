"use client"

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  AppBar as NavBar,
  Toolbar,
  Typography
} from "@mui/material"
import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material"
import { useState } from "react"

interface Props {
  onMenuClick?: () => void,
}

export default function AppBar({
  onMenuClick
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <NavBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar variant="dense">
            <IconButton onClick={onMenuClick} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography sx={{ flex: 1, color: "white", textDecoration: "none" }} component="a" href="/" variant="h6">
              AuctionHub
            </Typography>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => setMenuOpen(true)}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={menuOpen}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              onClose={() => setMenuOpen(false)}
            >
              <MenuItem>
                <Typography color="black" sx={{ textDecoration: "none" }} component="a" href="/account">My Account</Typography>
              </MenuItem>
              <MenuItem onClick={() => setMenuOpen(false)}>Sign Out</MenuItem>
            </Menu>
          </Toolbar>
        </NavBar>
      </Box>
      <Toolbar variant="dense" />
    </>
  )
}