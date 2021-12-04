import React, {Component} from "react";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import green from "@material-ui/core/colors/green";

const styles = theme => ({
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
        minHeight: 40
    },
    offset: theme.mixins.toolbar
});

class ChallengeNavbar extends Component {

    render() {
        const { classes, challengeName } = this.props;
        return (
            <React.Fragment>
                <AppBar 
                    color="primary"
                    className={`${classes.customColor} ${classes.customHeight}`}
                >
                    <Toolbar>
                        {/* Navbar contents go here. */}
                        <Typography className={classes.title}>
                            Back
                        </Typography>
                        <Typography className={classes.title}>
                            {challengeName}
                        </Typography>
                        <Typography>
                            Author
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ChallengeNavbar);