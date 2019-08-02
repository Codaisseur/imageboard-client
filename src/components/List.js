import React from 'react'
import CreateFormContainer from './CreateFormContainer'
import LoginFormContainer from './LoginFormContainer'

export default function List (props) {
  const images = props
    .images
    .map(image => <div key={image.url}>
      <h3>{image.title}</h3>
      <img src={image.url} alt={image.title} />
    </div>)

  const form = props.user
    ? <CreateFormContainer />
    : <LoginFormContainer />

  return <div>
    {form}
    {images}
  </div>
}
