import React, { Component } from 'react'
import Photo from './Photo'

const PhotoGrid = (props) => (

      <section>
      {props.photoProps.map((photoProp) =>
        <Photo label={photoProp.label} photo={photoProp.photo} />
      )}


      </section>
    );

export default PhotoGrid
