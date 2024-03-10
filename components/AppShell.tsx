"use client"

import React, { useState } from "react";
import AppBar from "@/components/AppBar";
import AppDrawer from "@/components/AppDrawer";
import { Box } from "@mui/material";

export default function AppShell({ children }: { children?: React.ReactNode }) {

  const [draweOpen, setDrawerOpen] = useState(false)

  const onDrawerClose = () => setDrawerOpen(false)
  const onMenuClick = () => setDrawerOpen(prev => !prev)

  return (
    <>
      <AppBar onMenuClick={onMenuClick} />
      <AppDrawer open={draweOpen} onClose={onDrawerClose} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ maxWidth: 800, width: "100%" }}>
          {children}
        </Box>
      </Box>
    </>
  )
}