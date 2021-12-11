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
import ChallengeDesc from "../challengeDesc/challengeDesc";
import Comments from "../comments/comments";
import Drafts from "../drafts/drafts";
import Solutions from "../solutions/solutions";
import Readme from "../readme/readme";

import { getChallengeById } from "../../services/challengeService";

export default function Challenge() {
    const params = useParams();
    const drawerWidth = 48;

    const [challengeData, setChallengeData] = useState({});
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() =>
        getChallengeById(params.id, 
            data => setChallengeData(data.data.data)
        ),
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
                    <Tooltip key={index} title={element[1]} placement="right" arrow>
                        <ListItemButton disableGutters={true} onClick={_ => setTabIndex(index)} sx={{backgroundColor: index === tabIndex ? "LightSkyBlue" : "white"}}>
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
            {[
                <ChallengeDesc 
                    challengeDesc={challengeData.challengeDesc}
                />,
                <Comments />,
                <Drafts />,
                <Solutions />,
                <Readme />
            ][tabIndex]}
          </Box>
        </Box>
    ) : (
        <div>
            <h2>Loading...</h2>
        </div>
    )
}