import AppShell from "@/components/AppShell";
import { AccountCircle } from "@mui/icons-material";
import { Typography, Box, Paper, Divider, Input, Button } from "@mui/material";

export default function AuctionPage() {

  return (
    <AppShell>
      <Box display="flex" flexDirection="column" gap={1}>

        <Paper>
          <Box>
            <Box px={2} py={1} display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h5">
                Lorem Ipsum Dolor
              </Typography>
              <AccountCircle color="action" fontSize="large" />
            </Box>
            <Divider />
            <Box px={2} py={1}>
              <Typography mt={1} variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur itaque adipisci, expedita, nobis iusto tempore sapiente hic quibusdam dignissimos illum veritatis quo deleniti eum! Praesentium dolores ab, quos aliquid, sint sequi repellat voluptates provident possimus necessitatibus ratione dolorem sunt, ducimus autem excepturi! Porro officiis fugit asperiores, nostrum magni, deserunt optio voluptates ab at incidunt itaque autem?</Typography>
              <Typography variant="h6" mt={1} gap={1} display="flex">
                Highest Bid:
                <Typography variant="h6" fontWeight={500} color="green">{56}</Typography>
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper>
          <Box display="flex" gap={1} p={1}>
            <Input placeholder="Enter your bid (> 56)" sx={{ flex: 1 }}></Input>
            <Button disableElevation variant="contained" color="secondary">Make Bid</Button>
          </Box>
        </Paper>
        <Paper>
          <Box>
            <Box px={2} py={1}>
              <Typography fontSize={18} textTransform="uppercase">Reviews</Typography>
            </Box>
            <Divider />
            <Box py={1}>
              <Box display="flex" flexDirection="column" px={2} py={1} gap={2}>
                <Box display="flex" gap={2}>
                  <AccountCircle color="action" fontSize="large" />
                  <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio ad, totam debitis perspiciatis sapiente commodi tempora saepe mollitia voluptate ipsa expedita! At!</Typography>
                </Box>
                <Box display="flex" gap={2}>
                  <AccountCircle color="action" fontSize="large" />
                  <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, ullam. Ipsa voluptate consequuntur obcaecati autem numquam deleniti, voluptas, quasi porro natus reiciendis explicabo error facilis? Distinctio exercitationem, et eum voluptatum perspiciatis debitis unde fuga aliquam, quaerat, quibusdam dolor quia a!</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
        <Paper>
          <Box display="flex" gap={1} p={1}>
            <Input placeholder="Write your review here" sx={{ flex: 1 }}></Input>
            <Button disableElevation variant="contained" color="success">Review</Button>
          </Box>
        </Paper>
      </Box>
    </AppShell>
  )
}