import React, { Component } from 'react'
import Photo from './Photo'

const PhotoGrid = (props) => (

      <section>
      {props.photoProps.map((photoProp, i) =>
        <Photo label={photoProp.label} photo={photoProp.photo} key={i} />
      )}


      </section>
    );

export default PhotoGrid
