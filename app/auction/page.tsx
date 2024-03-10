"use client"

import AppShell from "@/components/AppShell";
import { Box, Button, FormControl, Input, MenuItem, Pagination, Paper, Select, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import AuctionCard from "@/components/AuctionCard";

export default function AuctionsPage() {
  const [page, setPage] = useState(1)

  // const [page, setPage] = useQueryState('page', { defaultValue: '1' })

  // useEffect(() => {
  //   const fetchAuctions = async () => {
  //     const base = new URL(window.location.origin + '/api/auction')
  //     base.searchParams.set("page", page)

  //     const response = await fetch(base)
  //     const data = await response.json()
  //     if (data) {
  //       setCount(data.page_count)
  //       setAuctions(data.auctions)
  //     }
  //   }
  //   fetchAuctions()
  //   return () => {
  //     setAuctions([])
  //   }
  // }, [page])

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
            <AuctionCard sold={i % 2 === 0 && i % 3 === 0} />
          ))}
          <Box m={2}>
            <Pagination onChange={(_, n) => setPage(n)} page={page} count={14} />
          </Box>
        </Box>
      </Box>
    </AppShell >
  )
}