import React, { Component } from 'react';
import './App.css';
// import Setup from './RouteSetup/Setup';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      image: []
    }
  }

  componentDidMount(){
    this.getImages();
  }

  getImages(){
		fetch('https://jsonplaceholder.typicode.com/photos')
		.then(response=>response.json())
		.then(data=>{
      this.setState({image: data});
		});
  }
  
  render() {
    const {image} = this.state;
    let display = image.map(url=>{
      return(
        <div className="col-3" key={url.id}>
          <img src={url.url} alt={url.url} />
        </div>
      );
    });
    return (
      <React.Fragment>
        <div>
            <div className="row">
                {display}
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
