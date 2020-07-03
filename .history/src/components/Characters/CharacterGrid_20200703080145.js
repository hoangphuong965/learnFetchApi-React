import React from 'react'

const CharacterGrid = ({items, isLoading}) => {
    return (
        isLoading ? (<h1>Loading...</h1>) : <section className="cards">
            {items.map(item=>{
                i<img src={tem.img} alt="" className=".card img"/>
            })}
        </section>
    )
}

export default CharacterGrid
