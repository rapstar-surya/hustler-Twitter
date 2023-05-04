import React from "react";
import Grid from "@mui/material/Grid";
import RightPart from "./RightPart";
import MiddleFirst from "../middlePart/MiddleFirst";
import MiddleSecondTweet from "../middlePart/MiddleSecondTweet";
import MiddleThirdPost from "../middlePart/MiddleThirdPost";
import MiddleFourthPost from "../middlePart/MiddleFourthPost";
import Navbar from "../leftPart/Navbar";

export default function Home() {
  return (
    <Grid container spacing={2} >

      <Grid item md={3}>
        <Navbar/>
      </Grid>

      <Grid item xs={12} md={5}>
        <MiddleFirst/>
        <MiddleSecondTweet/>
        <MiddleThirdPost/>
        <MiddleFourthPost/>
      </Grid>

      <Grid item md={4}>
        <RightPart/>
      </Grid>
     
    </Grid>
  );
}
