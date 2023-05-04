import React from "react";
import "./Navbar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MiddleSecondTweet from "../middlePart/MiddleSecondTweet";

// import { Logout } from "../../components/logout/logout";
import { Logout } from "../components/Logout";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <div className="iconss">
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />

        <Button
          variant="outlined"
          onClick={handleClickOpen}
          className="sidebar__tweet"
          fullWidth
        >
          Tweet
        </Button>
        <Dialog className="dialog" open={open} onClose={handleClose}>
          <DialogTitle className="dialogTitle">Subscribe</DialogTitle>
          <DialogContent className="dialogContent">
            <DialogContentText className="dialogContentText">

              <MiddleSecondTweet/>

            </DialogContentText>
          
          </DialogContent>
        </Dialog>

        <div>
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// import React from "react";
// import navbar from "./Navbar.module.css";

// import { BsTwitter, BsFillBookmarksFill } from "react-icons/bs";
// import { BiHomeCircle } from "react-icons/bi";
// import { FaHashtag } from "react-icons/fa";
// import { MdNotificationsActive } from "react-icons/md";
// import { HiOutlineMail } from "react-icons/hi";
// import { CgTwitter, CgProfile, CgMoreO } from "react-icons/cg";

// export default function Navbar() {
//   return (
//     <div className={navbar.mainNavDiv}>
//       <div>
//         <BsTwitter className={navbar.navLogo} />
//       </div>

//       <div>
//         <div className={navbar.both}>
//           <BiHomeCircle className={navbar.navLogo} />
//           <span className={navbar.navlistWord}>Home</span>
//         </div>
//         <div className={navbar.both}>
//           <FaHashtag className={navbar.navLogo} />
//           <span className={navbar.navlistWord}>Explore</span>
//         </div>
//         <div className={navbar.both}>
//           <MdNotificationsActive className={navbar.navLogo} />
//           <span className={navbar.navlistWord}>Notifications</span>
//         </div>
//         <div className={navbar.both}>
//           <HiOutlineMail className={navbar.navLogo} />
//           <span className={navbar.navlistWord}>Messages</span>
//         </div>
//         <div className={navbar.both}>
//           <BsFillBookmarksFill className={navbar.navLogo} />
//           <span className={navbar.navlistWord}>Bookmarks</span>
//         </div>
//         <div className={navbar.both}>
//           <CgTwitter className={navbar.navLogo} />
//           <span className={navbar.navlistWord}>Twitter Blue</span>
//         </div>
//         <div className={navbar.both}>
//           <CgProfile className={navbar.navLogo} />
//           <span className={navbar.navlistWord}>Profile</span>
//         </div>
//         <div className={navbar.both}>
//           <CgMoreO className={navbar.navLogo} />
//           <span className={navbar.navlistWord}>More</span>
//         </div>
//       </div>
//     </div>
//   );
// }
