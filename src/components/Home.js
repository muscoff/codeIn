import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';
import Script from '../Javascript/Script';

class Home extends Component {
    constructor(props){
        super();
        this.js = new Script();
    }
  render() {
    return (
      <div className="kill">
          <div className="file-field input-field">
            <div className="btn">
            <span>File</span>
            <input type="file" className="btn" />
            </div>
            <div className="file-path-wrapper">
                <input type="text" className="file-path validate"/>
            </div>
          </div>
          <form>
          <input type="text" />
          </form>

          <button className="btn" onClick={()=>this.js.toast({html: 'Hi there!'})}>Say</button>
      </div>
    );
  }
}

export default Home;
