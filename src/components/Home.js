import React, { Component } from 'react'
import Navigation from './Navigation'
import PhotoGrid from './PhotoGrid'

const myPhotoProps = [
  {label:"some label", photo: "some photo"},
                    {label:"another label", photo: "another photo"},
                    {label:"one more label", photo: "one more photo"}
                  ];

class Home extends Component {
  render() {
    return(
      <div>
        <h3>Yummygram</h3>
        <Navigation />
        <PhotoGrid photoProps={myPhotoProps}/>
      </div>
    )
  }
}

export default Home
