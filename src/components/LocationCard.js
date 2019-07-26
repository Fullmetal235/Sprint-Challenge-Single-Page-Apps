import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
export default function LocationCard (props) {
  // image={image}
  return (<div>
    <Card >
    <Card.Content>
      <Card.Header>{props.location.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Type: {props.location.type}</span>
      </Card.Meta>
      <Card.Description>
        <p>Dimensions: {props.location.dimensions}</p>
        <p>Residents: {props.location.residents.length}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card></div>
  )	  
}	