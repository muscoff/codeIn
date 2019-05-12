import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { getImages } from '../actions/postActions';

class Images extends Component {

  componentWillMount(){
    this.props.getImages();
  }
  
  render() {
    let display = this.props.image.map(url=>{
      return(
        <div className="col-3" key={url.id}>
          <img src={url.url} alt={url.url} />
        </div>
      );
    });
    return (
        <div>
          <div className="row">
              {display}
          </div>
        </div>
    );
  }
}

const mapStateToProps = state =>({
    image : state.posts.images
});

export default connect(mapStateToProps, { getImages })(Images);
