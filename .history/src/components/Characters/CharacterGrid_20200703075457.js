import React from 'react'

const CharacterGrid = ({items, isLoading}) => {
    return (
        isLoading ? (items === false) : (items === true)
    )
}

export default CharacterGrid
