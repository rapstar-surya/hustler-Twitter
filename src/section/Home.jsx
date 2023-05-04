import React from "react";
import Grid from "@mui/material/Grid";
import LeftNavbar from "./LeftNavbar";
import MiddlePost from "./MiddlePost";
import RightPart from "./RightPart";

export default function Home() {
  return (
    <Grid container spacing={2}>

      <Grid item md={3}>
        <LeftNavbar/>
      </Grid>

      <Grid item xs={12} md={6}>
        <MiddlePost/>
      </Grid>

      <Grid item md={3}>
        <RightPart/>
      </Grid>
     
    </Grid>
  );
}
