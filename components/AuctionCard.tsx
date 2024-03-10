import { Box, Paper, Typography } from "@mui/material";

export default function AuctionCard({ sold }: { sold?: boolean }) {
  return (
    <Paper>
      <Box px={2} py={1}>
        <Typography color="black" sx={{ textDecoration: "none" }} component="a" href="/auction/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d" variant="h6">Lorem Ipsum Auction</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ipsam, consequatur, officiis nesciunt est quos earum eos delectus, molestiae corrupti aperiam dicta libero.</Typography>
        <Typography mt={1} gap={1} display="flex">
          {sold &&
            <Typography display="flex" gap={1}>
              <Typography fontWeight={500} color="red">Sold Out</Typography>
              <Typography>•</Typography>
            </Typography>
          }
          Highest Bid:
          <Typography fontWeight={500} color="green">
            {Math.ceil(Math.random() * 500)}
          </Typography>
        </Typography>
      </Box>
    </Paper>
  )
}