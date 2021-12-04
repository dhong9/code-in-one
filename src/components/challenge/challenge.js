import React, { useEffect, useState } from "react";
import { useParams } from "react-router"

import ChallengeNavbar from "../challengeNavbar/challengeNavbar";

export default function Challenge() {
    const params = useParams();

    const [challengeData, setChallengeData] = useState({});

    useEffect(() =>
        fetch("https://dhong9.pythonanywhere.com/api/challenges/" + params.id)
            .then(response => response.json())
            .then(data => setChallengeData(data.data)),
        [params.id]);

    return challengeData.id ? (
        <React.Fragment>
            <ChallengeNavbar 
                {...challengeData}
            />
        </React.Fragment>
    ) : (
        <div>
            <h2>Loading...</h2>
        </div>
    )
}