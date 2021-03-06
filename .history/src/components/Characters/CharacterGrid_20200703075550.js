import React from 'react'

const CharacterGrid = ({items, isLoading}) => {
    return (
        isLoading ? (items.data === false) : (items.data === true)
    )
}

export default CharacterGrid
