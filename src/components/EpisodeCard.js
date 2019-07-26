import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledCard = styled.div`
    margin-bottom: 10px;
`


export default function EpisodeCard (props) {
  return (<StyledCard>
    <Card >
    <Card.Content>
      <Card.Header>Episode: {props.episode.name}</Card.Header>
      <Card.Meta>
        <span className='date'></span>
      </Card.Meta>
      <Card.Description>
        <p>Air date: {props.episode['air_date']}</p>
        <p>Episode number: {props.episode.episode}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card></StyledCard>)
}