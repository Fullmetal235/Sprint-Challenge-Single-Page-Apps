import React, { useEffect, useState } from 'react';
import axios from 'axios'

import EpisodeCard from './EpisodeCard'

import styled from 'styled-components'

const StyledEpisodeContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 0 auto;
`

export default function EpisodesList() {

    const [episode, setEpisode]= useState([])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/` )
        .then(response => {
            console.log('epsiode api', response.data.results)
            setEpisode(response.data.results)
        }).catch(error => {
            console.log('Not getting info episodes from api', error)
        })
    },[])

    return (<StyledEpisodeContainer>{episode.map(ep => 
           <EpisodeCard key={ep.id} episode={ep}/>
        )}</StyledEpisodeContainer>)

}