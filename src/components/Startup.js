import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Startup extends Component{
    render() {
      return (
        <div>
            <h1>This is the the startup component</h1>
            <p>to go to the other component please click the button below</p>
            <button><Link to="/another">another</Link></button>
        </div>
      );
    }
}