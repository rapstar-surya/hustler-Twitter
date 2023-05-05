import { useState, useEffect } from "react";
import rightCard from "./FirstRightCard.module.css";

// ----------------------------------------------------------------------------------------------------

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import { blue } from "@mui/material/colors";
import { popupState } from "../atoms/atoms";
import { useRecoilState } from "recoil";

const trend = [
  { states_name: "Porto", country_name: "Portugal", tweet_counts: 52 },
  { states_name: "Stockholm", country_name: "Sweden", tweet_counts: 49 },
  { states_name: "Alberta", country_name: "Canada", tweet_counts: 43 },
];

export default function FirstRightCard() {
  return (
    <div className={rightCard.mainDiv}>
      <h3 className={rightCard.head2}>What &apos;s happening</h3>

      <div className={rightCard.firstDiv}>
        <div>
          <span className={rightCard.textGrey}>NBA - 42 minutes ago</span>
          <br />
          <p className={rightCard.headThree}>Warriors at Kings</p>
        </div>

        <div>
          <img
            src="https://picsum.photos/80/80?q=12"
            alt=""
            className={rightCard.imgPic}
          />
        </div>
      </div>
      <Trending limit={3} />
    </div>
  );
}

function Trending({ limit }) {
  const [displayedTrends, setDisplayedTrends] = useState(trend);

  const handleRemoveTrend = (trendToRemove) => {
    console.log("Removing trend:", trendToRemove);
    const filteredTrends = displayedTrends.filter(
      (trend) => trend !== trendToRemove
    );
    setDisplayedTrends(filteredTrends);
  };

  return (
    <>
      {displayedTrends.slice(0, limit).map((ele, i) => (
        <div key={ele.tweet_counts}>
          <div className={rightCard.trend}>
            <span className={rightCard.textGrey}>
              Trending in {ele.country_name}
            </span>
            <span>
              <SimpleDialogDemo onRemove={() => handleRemoveTrend(ele)} />
            </span>
          </div>

          <p className={rightCard.thirdHead}>#{ele.states_name}</p>
          <span className={rightCard.textGrey}>{ele.tweet_counts}K Tweets</span>
        </div>
      ))}
      {displayedTrends.length < limit ? null : (
        <span className={rightCard.anch}>Show more</span>
      )}
    </>
  );
}

// ----------------------------------------------------------------------------------------------------

const optionsPopup = [
  "Not interested in this",
  "This trend is harmful or spammy",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      sx={{
        height: "20rem",
        width: "20rem",
        position: "absolute",
        marginLeft: "70%",
        marginTop: "15%",
      }}
      onClose={handleClose}
      open={open}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundColor: "grey",
        }}
      >
        {optionsPopup.map((popOpt, i) => (
          <ListItem key={i} disableGutters>
            <ListItemButton onClick={() => handleClose(popOpt)} key={popOpt}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  ☹️
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={popOpt} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function SimpleDialogDemo({ onRemove }) {
  const [open, setOpen] = useRecoilState(popupState);
  const [selectedValue, setSelectedValue] = useState(optionsPopup[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);

    if (
      value === "Not interested in this" ||
      value === "This trend is harmful or spammy"
    ) {
      console.log("Removing trend due to user selection:", value);
      onRemove();
    }
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        ...
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
