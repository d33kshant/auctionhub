"use client"

import AppShell from "@/components/AppShell";
import { Box, Button, FormControl, Input, MenuItem, Pagination, Paper, Select, Typography } from "@mui/material";
import { useState } from "react";
import QuestionCard from "@/components/QuestionCard";

export default function ForumPage() {
  const [page, setPage] = useState(1)
  return (
    <AppShell>
      <Box>
        <Box mb={1}>
          <Paper>
            <Box display="flex" gap={1} p={1}>
              <Input placeholder="Type a query to search" sx={{ flex: 1 }} />
              <Select size="small" sx={{ minWidth: 200 }} defaultValue={10}>
                <MenuItem value={10}>New First</MenuItem>
                <MenuItem value={20}>Price Lowest First</MenuItem>
                <MenuItem value={30}>Price Highest First</MenuItem>
              </Select>
              <Button disableElevation variant="contained">
                Search
              </Button>
            </Box>
          </Paper>
        </Box>
        <Box sx={{ display: "flex", gap: 1, flexDirection: "column", alignItems: "center" }}>
          {Array(10).fill(0).map((_, i) => (
            <QuestionCard answered={Math.random() < 0.3} />
          ))}
          <Box m={2}>
            <Pagination onChange={(_, n) => setPage(n)} page={page} count={14} />
          </Box>
        </Box>
      </Box>
    </AppShell >
  )
}