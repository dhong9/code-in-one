import React, { Component } from 'react';

import HomeNavbar from '../homeNavbar/homeNavbar';
import ChallengeCard from '../challengeCard/challengeCard';

import { getAllChallenges } from "../../services/challengeService";

import './challengePage.css';

class ChallengePage extends Component {

    constructor() {
        super();

        this.state = {
            challenges: []
        };
    }

    componentDidMount() {
        getAllChallenges(data =>
            this.setState(_ => ({
                challenges: data.data.data
            }))
        );
    }

    render() {
        return (
            <React.Fragment>
                <HomeNavbar />
                <div className="inside">
                {
                    this.state.challenges.map((challenge, i) =>
                        <ChallengeCard 
                            key={i}
                            {...challenge}
                        />
                    )
                }
                </div>
            </React.Fragment>
        );
    }
}

export default ChallengePage;