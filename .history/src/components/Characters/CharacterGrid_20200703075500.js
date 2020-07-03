import React from 'react'

const CharacterGrid = ({items, isLoading}) => {
    return (
        isLoading ? (items === false) : (items.data === true)
    )
}

export default CharacterGrid
