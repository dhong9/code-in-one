import React, { Component } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import challenge_base from "./challenge_base.md";

class Readme extends Component {

    constructor() {
        super();
        this.state = {
            base: ""
        };
    }

    componentWillMount() {
        fetch(challenge_base)
            .then(response => response.text())
            .then(text => 
                this.setState({
                    base: text
                })    
            );
    }

    render() {
        return (
            <div>
                <h2>README</h2>
                <ReactMarkdown children={this.state.base} />
            </div>
        );
    }

}

export default Readme;