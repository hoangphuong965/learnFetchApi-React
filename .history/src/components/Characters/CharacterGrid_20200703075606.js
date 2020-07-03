import React from 'react'

const CharacterGrid = ({items, isLoading}) => {
    return (
        isLoading ? (<i class="fas fa-h1    "></i>) : (items.data === true)
    )
}

export default CharacterGrid
