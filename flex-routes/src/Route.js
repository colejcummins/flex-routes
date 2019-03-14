import React, { Component } from 'react';

class Route extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            name: "",
            distance: 0,
            elevation_gain: 0,
            summary_polyline: ""
        };
    }

    componentDidMount() {
        console.log("hello");
        fetch("https://www.strava.com/api/v3/routes/17172131?access_token=f64a358b3c4557c808387321061feda33e13fb20")
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));

    }

    render() {
        return (
            <div className="route">
                {this.state.name}
            </div>
        )
    }
}

export default Route;