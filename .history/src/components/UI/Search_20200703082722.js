import React, {useState} from 'react';


const Search = () => {

    const [serach, setSearch] = useState([]);

    return (
        <section className="search">
            <form>
                <input type="text"/>
            </form>
        </section>
    )
}

export default Search
