//import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Header() {
  const classes = useStyles();
  return (
    <>
     {/* <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
         Welcome to Tripeur
          </Typography>
          <AuthOptions /> */}
          {/* <Button color="inherit">Login</Button> */}
        {/* </Toolbar>
      </AppBar> */}
    {/* <header id="header">
      <Link to="/">
        <h1 className="title">MERN auth template</h1>
      </Link>
      
    </header> */}
    </>
  );
}
