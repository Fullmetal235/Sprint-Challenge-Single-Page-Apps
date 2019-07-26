import React, { useEffect, useState } from 'react';
import axios from 'axios'


import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const StyledCardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response.data.results)
      setCharacter(response.data.results)
    }).catch(error => {
      console.log('Not getting info characters from api', error)
  })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [])

  return (<section className='character-list grid-view'>
    <StyledCardsContainer>{character.map(person => 
         <CharacterCard key={person.id} people={person}/>
      )}</StyledCardsContainer>
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
    </section>)

}
