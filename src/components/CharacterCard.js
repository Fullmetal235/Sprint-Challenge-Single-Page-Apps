import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default function CharacterCard (props) {
  return (<div>
    <Card >
    <Image src={props.people.image} alt= 'character photos' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.people.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Status: {props.people.status}</span>
      </Card.Meta>
      <Card.Description>
        <p>Species: {props.people.species}</p>
        <p>Gender: {props.people.gender}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card></div>)
}
