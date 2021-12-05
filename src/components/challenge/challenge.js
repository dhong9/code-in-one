import React, { useEffect, useState } from "react";
import { useParams } from "react-router"

// External components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

// Icons
import DescriptionIcon from '@mui/icons-material/Description';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CommentIcon from '@mui/icons-material/Comment';
import CodeIcon from '@mui/icons-material/Code';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import ChallengeNavbar from "../challengeNavbar/challengeNavbar";

export default function Challenge() {
    const params = useParams();
    const drawerWidth = 48;

    const [challengeData, setChallengeData] = useState({});

    useEffect(() =>
        fetch("https://dhong9.pythonanywhere.com/api/challenges/" + params.id)
            .then(response => response.json())
            .then(data => setChallengeData(data.data)),
        [params.id]);
    
    const tabs = [
        [<DescriptionIcon />, "Description"],
        [<CommentIcon />, "Comments"],
        [<DriveFileRenameOutlineIcon />, "Drafts"],
        [<CodeIcon />, "Solutions"],
        [<InfoOutlinedIcon />, "Readme"]
    ];

    return challengeData.id ? (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <ChallengeNavbar 
                {...challengeData}
            />
            <Drawer
                variant="permanent"
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
              <Toolbar />
              <Box sx={{ overflow: 'auto' }}>
                <List>
                {tabs.map((element, index) => (
                    <Tooltip title={element[1]} placement="right" arrow>
                        <ListItemButton disableGutters={true}>
                            <ListItem button key={index} disableGutters={true} sx={{justifyContent: "space-around"}}>
                                <ListItemIcon sx={{minWidth: 0}}>
                                    { element[0] }
                                </ListItemIcon>
                            </ListItem>
                        </ListItemButton>
                    </Tooltip>
                ))}
                </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3}}>
            <Toolbar />
            <div>
                {challengeData.challengeDesc}
            </div>
          </Box>
        </Box>
    ) : (
        <div>
            <h2>Loading...</h2>
        </div>
    )
}