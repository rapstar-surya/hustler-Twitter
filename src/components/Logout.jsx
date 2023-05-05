import styles from "./Logout.module.css";
import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

export function Logout() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutDialogOpen = () => {
    setOpenLogoutDialog(true);
    handleClose();
  };

  const handleLogoutDialogClose = (logoutConfirmed) => {
    setOpenLogoutDialog(false);
    if (logoutConfirmed) {
      localStorage.setItem("isLogin", JSON.stringify(false));
      navigate("/login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgOutContainer}>
        <img
          className={styles.imgOut}
          src="https://randomuser.me/api/portraits/thumb/men/9.jpg"
          alt="pic"
          onClick={handleLogoutDialogOpen}
        />
        <div className={styles.userContainer}>
          <span className={styles.userName}>Suraj Chaudhari</span>
          <span className={styles.userMention}>@suraj_chaudhari</span>
        </div>
      </div>
      <div className={styles.dotsIcon}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <BiDotsHorizontalRounded style={{ color: "white" }} />
        </Button>
        <Menu
          className={styles.menu}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem className={styles.menuItem}>
            Add an existing account
          </MenuItem>
          <MenuItem className={styles.menuItem} onClick={handleLogoutDialogOpen}>
            Logout @suraj_chaudhari
          </MenuItem>
        </Menu>
      </div>
      <Dialog open={openLogoutDialog} onClose={() => handleLogoutDialogClose(false)}>
        <DialogTitle>Logout Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to log out?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleLogoutDialogClose(false)}>Cancel</Button>
          <Button onClick={() => handleLogoutDialogClose(true)}>Logout</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
