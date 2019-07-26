import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


 export default function EpisodeList (props) {
  return (<div>
    <Card >
    <Image src={props} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props}</Card.Header>
      <Card.Meta>
        <span className='date'>Status: {props}</span>
      </Card.Meta>
      <Card.Description>
        <p>Species: {props}</p>
        <p>Gender: {props}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card></div>)
} 