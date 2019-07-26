import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'

 const StyledCardsContainer = styled.div`
display: flex;
`
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response.data.results)
      setCharacter(response.data.results)
    }).catch(error => {
      console.log('ooooohh weeeeeee!', error)
  })
  }, [])

  return <section className='character-list grid-view'>

<div>{character.map(person => {
  return <StyledCardsContainer><CharacterCard key={person.id} people={person}/></StyledCardsContainer>
})}
</div>
    </section>

}
