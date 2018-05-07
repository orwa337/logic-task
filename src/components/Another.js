import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class Another extends Component{
    render() {
      return (
        <div>
            <h1>This is the an other component</h1>
            <p>to go back to the startup component please click the button below</p>
            <button><Link to="/">startup</Link></button>
        </div>
      );
    }
}