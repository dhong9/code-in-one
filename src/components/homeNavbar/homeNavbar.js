import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import green from "@material-ui/core/colors/green";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    customColor: {
        // or hex code, this is normal CSS background-color
        backgroundColor: green[500]
    },
    customHeight: {
        minHeight: 64
    },
    offset: theme.mixins.toolbar
}));

export default function HomeNavbar() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar 
                color="customColor"
                className={`${classes.customColor} ${classes.customHeight}`}
            >
                <Toolbar>
                    {/* Navbar contents go here. */}
                    <img src={process.env.PUBLIC_URL + "/home.png"} width="150" height="32" alt="Home" />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}