import React, { Component } from 'react'

const Photo = (props) => (
        <div>
        <label>
          {props.label}
        </label>{props.photo}
        </div>
    )

export default Photo
