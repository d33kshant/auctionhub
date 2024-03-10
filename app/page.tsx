"use client"

import AppShell from "@/components/AppShell";
import AuctionCard from "@/components/AuctionCard";
import { ArrowForward, ArrowForwardIos } from "@mui/icons-material";
import { Box, Divider, Paper, Typography } from "@mui/material";
export default function Home() {

  return (
    <AppShell>
      <Box display="flex" flexDirection="column" gap={2}>
        <Box mt={1}>
          <Typography variant="h6">Wellcome, John Doe</Typography>
        </Box>
        <Paper>
          <Box>
            <Box py={1} px={2}>
              <Typography textTransform="uppercase" variant="h6">Top Auction</Typography>
            </Box>
            <Divider />
            <Box px={2} py={1}>
              <Typography color="black" sx={{ textDecoration: "none" }} component="a" href="/auction/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d" variant="h6">Lorem Ipsum Auction</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ipsam, consequatur, officiis nesciunt est quos earum eos delectus, molestiae corrupti aperiam dicta libero.</Typography>
              <Typography mt={1} gap={1} display="flex">
                Highest Bid:
                <Typography fontWeight={500} color="green">
                  {Math.ceil(Math.random() * 500)}
                </Typography>
              </Typography>
            </Box>
            <Divider />
            <Box display="flex" alignItems="center" py={1} px={2}>
              <Typography color="black" sx={{ textDecoration: "none" }} component="a" href="/action" flex={1}>More Auctions</Typography>
              <ArrowForwardIos fontSize="small" color="action" />
            </Box>
          </Box>
        </Paper>
        <Paper>
          <Box>
            <Box py={1} px={2}>
              <Typography textTransform="uppercase" variant="h6">Top Quesiton</Typography>
            </Box>
            <Divider />
            <Box px={2} py={1}>
              <Typography color="black" sx={{ textDecoration: "none" }} component="a" href="/forum/1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed" variant="h6">Lorem Ipsum Auction</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ipsam, consequatur, officiis nesciunt est quos earum eos delectus, molestiae corrupti aperiam dicta libero.</Typography>
              <Typography mt={1} gap={1} display="flex">Sun Mar 10 2024</Typography>
            </Box>
            <Divider />
            <Box display="flex" alignItems="center" py={1} px={2}>
              <Typography color="black" sx={{ textDecoration: "none" }} component="a" href="/forum" flex={1}>More Questions</Typography>
              <ArrowForwardIos fontSize="small" color="action" />
            </Box>
          </Box>
        </Paper>
      </Box>
    </AppShell>
  );
}