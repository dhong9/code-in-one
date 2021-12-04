import React, { Component } from 'react';

import HomeNavbar from '../homeNavbar/homeNavbar';
import ChallengeCard from '../challengeCard/challengeCard';

import './challengePage.css';

class ChallengePage extends Component {

    constructor() {
        super();

        this.state = {
            challenges: []
        };
    }

    componentDidMount() {
        fetch("https://dhong9.pythonanywhere.com/api/challenges/")
            .then(response => response.json())
            .then(data => 
                this.setState(_ => ({
                    challenges: data.data
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