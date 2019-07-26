import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LocationCard from './LocationCard.js'
import styled from 'styled-components'

 const StyledLocationContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 0 auto;
`
 export default function LocationsList() {


    const [location, setLocation]= useState([])

    useEffect(() => {
       axios.get(`https://rickandmortyapi.com/api/location/` )
       .then(response => {
           console.log('location api', response.data.results)
           setLocation(response.data.results)
       }).catch(error => {
           console.log('Not getting info locations from api', error)
       })
   },[])

    return (<StyledLocationContainer>
       {location.map(local => 
           <LocationCard key={local.id} location={local}/>
       )}
       </StyledLocationContainer>)

}	