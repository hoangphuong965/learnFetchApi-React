import React from 'react'

const CharacterGrid = ({items, isLoading}) => {
    return (
        isLoading ? (<h1>Loading...</h1>) : <section className="cards">
            {items.map(item=>{
                <img src={item.} alt=""/>
            })}
        </section>
    )
}

export default CharacterGrid
