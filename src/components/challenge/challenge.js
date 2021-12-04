import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@material-ui/core/Typography";

import './challenge.css';

class Challenge extends Component {

    render() {
        return (
            <Card className="challengeCard">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {this.props.challengeName}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

}

export default Challenge;