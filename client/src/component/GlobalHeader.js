import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const GlobalHeader = ({ handleNext, handleBack, formName, setOpen, step }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
         
          <Toolbar variant="dense">
           
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ArrowBackIcon onClick={handleBack} />
            </IconButton>
            {/* -------------------------------------------------------------------- */}
            <div style={{ textAlign: "center", marginLeft: "45%" }}>
              <Typography variant="h6" color="inherit">
                {formName}
              </Typography>
            </div>
            {/* ------------------------------------------------------------------------- */}
            <div className={classes.root} />
            <div>
              {step===3 ? <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <ArrowForwardIcon onClick={setOpen(false)} />
              </IconButton>
              :
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <ArrowForwardIcon onClick={handleNext} />
              </IconButton>
              }

              
            </div>
          </Toolbar>
        </AppBar>
      </div>

      {/* <ArrowForwardIcon onClick={handleNext}/>
            <ArrowBackIcon onClick={handleBack}/> */}
    </div>
  );
};

export default GlobalHeader;
