import { AccountBalance, Forum } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
} from "@mui/material";

interface Props {
  open: boolean,
  onClose: () => void,

}

export default function AppDrawer({
  open,
  onClose,
}: Props) {
  return (
    <Drawer open={open} onClose={onClose}>
      <Box width={250} role="presentation">
        <Toolbar variant="dense" />
        <List>
          <ListSubheader>Navigate</ListSubheader>
          <ListItem disablePadding component="a" href="/auction">
            <ListItemButton>
              <ListItemIcon>
                <AccountBalance />
              </ListItemIcon>
              <ListItemText sx={{ color: "black" }}>Auctions</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding component="a" href="/forum">
            <ListItemButton>
              <ListItemIcon>
                <Forum />
              </ListItemIcon>
              <ListItemText sx={{ color: "black" }}>Forum</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}