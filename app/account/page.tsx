import AppShell from "@/components/AppShell";
import { AccountCircle, Edit } from "@mui/icons-material";
import { Box, Button, IconButton, Input, Paper, TextField } from "@mui/material";

export default function AccountPage() {
  return (
    <AppShell>
      <Paper>
        <Box p={2} gap={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box position="relative">
            <AccountCircle color="action" sx={{ width: 120, height: 120 }}>
            </AccountCircle>
            <Box position="absolute" display="flex" justifyContent="center" alignItems="center" width={40} height={36} sx={{ bgcolor: "lightgray", borderRadius: 100, top: 80, left: 80 }}>
              <Edit color="success" />
            </Box>
          </Box>
          <TextField placeholder="Email" value="johndoe@gmail.com"></TextField>
          <TextField type="password" value="somepassword"></TextField>
          <Button disableElevation variant="contained">Update</Button>
        </Box>
      </Paper>
    </AppShell>
  )
}