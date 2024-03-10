import { Box, Paper, Typography } from "@mui/material";

export default function QuestionCard({ answered }: { answered?: boolean }) {
  return (
    <Paper>
      <Box px={2} py={1}>
        <Typography color="black" sx={{ textDecoration: "none" }} component="a" href="/forum/1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed" variant="h6">Lorem Ipsum Auction</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ipsam, consequatur, officiis nesciunt est quos earum eos delectus, molestiae corrupti aperiam dicta libero.</Typography>
        <Typography mt={1} gap={1} display="flex">
          {answered &&
            <Typography display="flex" gap={1}>
              <Typography fontWeight={500} color="green">Answered</Typography>
              <Typography>•</Typography>
            </Typography>
          }
          {(new Date()).toDateString()}
        </Typography>
      </Box>
    </Paper>
  )
}