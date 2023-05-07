import React, {useState} from "react";
import middleFirst from "./MiddleFirst.module.css";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function MiddleFirst() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={middleFirst.mainDiv}>
      <h2 style={{marginLeft:'2rem'}}>Home</h2>
      <Box
        sx={{
          bgcolor: "black",
          // width: "40vw",
          position: "relative",
          minHeight: '1rem',
        }}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            sx={{color: 'white', bgcolor:'black'}}
          >
            <Tab label="For you" sx={{color:'white'}}/>
            <Tab label="Following" sx={{color:'white'}}/>
          </Tabs>
        </AppBar>
      </Box>
    </div>
  );
}

