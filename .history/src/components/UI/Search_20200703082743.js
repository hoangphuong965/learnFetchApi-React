import React, {useState} from 'react';


const Search = () => {

    const [serach, setSearch] = useState([]);

    return (
        <section className="search">
            <form>
                <input type="text" className="form-control"/>
            </form>
        </section>
    )
}

export default Search
