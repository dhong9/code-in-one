import React, { Component } from "react";
import { Link } from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@material-ui/core/Typography";

import './challengeCard.css';

class ChallengeCard extends Component {

    render() {
        return (
            <Link to={`/code-in-one/challenge/${this.props.id}`}>
                <Card className="challengeCard">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {this.props.challengeName}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        );
    }

}

export default ChallengeCard;