import React from 'react'

const CharacterGrid = ({items, isLoading}) => {
    return (
        isLoading ? (<h1></h1>) : (items.data === true)
    )
}

export default CharacterGrid
