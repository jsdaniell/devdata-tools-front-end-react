import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { ReactComponent as MainSvg } from "../assets/main.svg";

export default function LateralMenu() {
  return (
    <Grid
      item
      container
      style={{ padding: "0px 15px 20px 12px" }}
      justify={"space-between"}
      alignItems={"space-between"}
    >
      <Grid item md={12}>
        <Typography
          variant={"subtitle2"}
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          devdata.tools was created by{" "}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href={"#"}
            onClick={() => {
              window.open("https://github.com/jsdaniell");
            }}
          >
            @jsdaniell
          </a>
        </Typography>
        <Typography variant={"h5"} style={{ color: "white" }}>
          Test Case
        </Typography>
        <Typography variant={"body2"} style={{ color: "white" }}>
          Create easily tests cases and send or export to anyone, sync your
          account to get syncronized and store your tests cases.
        </Typography>
      </Grid>

      <Grid
        md={12}
        item
        style={{ justifyContent: "center", textAlign: "center" }}
      >
        <MainSvg />
      </Grid>

      <Grid item md={12} style={{ alignSelf: "flex-end" }}>
        <Typography variant={"h5"} style={{ color: "white" }}>
          Inspiration
        </Typography>
        <Typography variant={"body2"} style={{ color: "white" }}>
          Inspired by a lovely person called Joana, who is a great tester and
          inspired me to construct this tool to her. Thank you Joana, without
          you I cannot achive this by myself.
        </Typography>
      </Grid>
    </Grid>
  );
}
