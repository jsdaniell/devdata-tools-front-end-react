import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Avatar
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import DevicesUtils from "../../utils/deviceUtils";
import { signInWithGoogle } from "../../service/integratedLogin";
import googleIcon from "../../assets/google.png";
import { useDispatch, useSelector } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function Home({
  children: {
    props: { component }
  }
}) {
  const { t, i18n } = useTranslation();

  const userLogged = useSelector(state => state.userUidReducer);

  useEffect(() => {
    if (window.navigator.language === "pt-BR") {
      i18n.changeLanguage("pt");
    }
  }, []);

  const dispatch = useDispatch();

  return (
    <Grid
      container
      justify={"space-between"}
      style={{
        minHeight: "100%",
        border: "1px solid white",
        borderRadius: 13,
        height: "100%",
        alignContent: "flex-start"
      }}
    >
      <Grid
        item
        md={5}
        xs={12}
        style={{ padding: "25px", alignContent: "flex-start" }}
      >
        <Grid
          container
          style={{ height: "100%", alignContent: "flex-start" }}
          spacing={5}
        >
          <Grid item md={12} xs={12}>
            <Grid container spacing={1} justify={"space-between"}>
              <Grid item md={8} style={{ alignSelf: "center" }}>
                <Typography
                  variant={"subtitle2"}
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {t("copyright")}{" "}
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
              </Grid>
              <Grid
                item
                md={3}
                xs={6}
                style={{
                  textAlign: DevicesUtils.checkIfIsMobile() ? "start" : "end"
                }}
              >
                <Button
                  size={"small"}
                  color={"secondary"}
                  onClick={() => {
                    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
                  }}
                >
                  {i18n.language === "pt" ? "English" : "Português"}
                </Button>
              </Grid>
              {!userLogged ? (
                <Grid
                  item
                  md={1}
                  xs={6}
                  style={{
                    textAlign: DevicesUtils.checkIfIsMobile() ? "end" : "end",
                    alignSelf: "center"
                  }}
                >
                  <Tooltip title={t("signWithGoogle")}>
                    <IconButton
                      size={"small"}
                      color={"primary"}
                      style={{ marginBottom: 5 }}
                      onClick={() => {
                        const newDataModel = {
                          title: t("titleModel"),
                          id: t("idModel"),
                          environment: t("envModel"),
                          priority: t("priorityModel"),
                          name: t("nameModel"),
                          actor: t("actorModel"),
                          preconditions: [t("preconditionsModel")],
                          procedures: [t("proceduresModel")],
                          postcondition: t("postconditionModel")
                        };

                        signInWithGoogle({
                          success: uid => {
                            window.location.reload();
                          },
                          newUserInsert: data => {
                            dispatch({
                              type: "SET_TEST_CASE_MODAL_REDUCER",
                              payload: data
                            });
                          },
                          newDataModel
                        });
                      }}
                    >
                      <img
                        style={{ maxWidth: "20px", height: "auto" }}
                        src={googleIcon}
                        alt="Sign With Google"
                      />
                    </IconButton>
                  </Tooltip>
                </Grid>
              ) : (
                <Grid
                  item
                  md={1}
                  xs={6}
                  style={{
                    textAlign: DevicesUtils.checkIfIsMobile() ? "end" : "end",
                    alignSelf: "center"
                  }}
                >
                  <Tooltip title={t("exitFromApp")}>
                    <IconButton
                      size={"small"}
                      color={"primary"}
                      onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                      }}
                    >
                      <ExitToAppIcon color={"secondary"} fontSize={"small"} />
                    </IconButton>
                  </Tooltip>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant={"h5"} style={{ color: "white" }}>
                {t("testCaseTitle")}
              </Typography>
            </Grid>
          </Grid>
          {component[0]()}
        </Grid>
      </Grid>
      <Grid
        item
        container
        md={7}
        style={{
          borderRadius: 12,
          backgroundColor: "white",
          boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.2)",

          maxHeight: 1220,
          maxWidth: 632
        }}
      >
        {component[1]()}
      </Grid>
    </Grid>
  );
}
