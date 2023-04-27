import React, { Component } from "react";
import axios from "axios";

export default class RandomSeed extends Component {
    constructor() {
        super();
        this.state = {
            seed: 0,
        };
    }


    componentDidMount = () => {
        axios.get("/getRandomSeed").then(response => {
            console.log(response.data);
            this.setState({
                seed: response.data,
            })
        })
    };
    
    ShuffleRandomSeedHandler = () => {
        axios.get("/getRandomSeed").then(response => {
            console.log(response.data);
            this.setState({
                seed: response.data,
            })
        })
    };

    render(){
        return(
            <div>
                <button onClick={this.ShuffleRandomSeedHandler}>Shuffle</button>
                <h1>{this.state.seed}</h1>
            </div>
        )
    }
}