import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Error extends Component {
  render() {
    return (
      <div>
          <p>Error</p>
          <p><NavLink to="/">Return to Homepage</NavLink></p>
      </div>
    );
  }
}

export default Error;
