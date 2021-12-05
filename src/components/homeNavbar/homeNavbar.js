import React, {Component} from "react";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from "@material-ui/core/Toolbar";
import green from "@material-ui/core/colors/green";

// Icons:
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LoginIcon from '@mui/icons-material/Login';

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
        minHeight: 64
    },
    offset: theme.mixins.toolbar
});

class HomeNavbar extends Component {

    constructor() {
        super();

        this.state = {
            anchorEl: null
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const target = event.currentTarget;
        this.setState(_ => ({
            anchorEl: target
        }));
    }

    handleClose() {
        this.setState(_ => ({
            anchorEl: null
        }));
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar 
                    color="primary"
                    className={`${classes.customColor} ${classes.customHeight}`}
                >
                    <Toolbar sx={{justifyContent: "space-between"}}>
                        {/* Navbar contents go here. */}

                        {/* Code-In-One logo */}
                        <div className={classes.title}>
                            <img src={process.env.PUBLIC_URL + "/home.png"} width="150" height="32" alt="Home" />
                        </div>

                        {/* If user is not logged in, show a guest icon. */}
                        <IconButton onClick={this.handleClick} sx={{color: "white"}}>
                            <AccountCircleRoundedIcon fontSize="large" />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Menu
                    anchorEl={this.state.anchorEl}
                    open={!!this.state.anchorEl}
                    onClose={this.handleClose}
                    onClick={this.handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: "visible",
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0
                            },
                        }
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    {/* Menu options if you're logged out */}
                     <MenuItem>
                        <LoginIcon /> Login
                     </MenuItem>
                </Menu>
                <Toolbar />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(HomeNavbar);