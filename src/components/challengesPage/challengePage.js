import React, { useState, useEffect } from 'react';

import HomeNavbar from '../homeNavbar/homeNavbar';
import Challenge from '../challenge/challenge';

export default function ChallengePage() {
    const [challenges, setChallenges] = useState([]);

    useEffect(_ => {
        fetch("http://127.0.0.1:8000/challenges/")
            .then(response => response.json())
            .then(data => setChallenges(data.results));
    })

    return (
        <React.Fragment>
            <HomeNavbar />
            {
                challenges.map(challenge =>
                    <Challenge />
                )
            }
        </React.Fragment>
    );
}