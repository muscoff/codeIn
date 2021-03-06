import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Images from './components/Images';
// import Setup from './RouteSetup/Setup';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>
              <Images />
          </div>
      </Provider>
    );
  }
}

export default App;
