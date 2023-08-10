import { useState } from "react";

function SearchBar({searched}) {

    const [value, setValue] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
        onSearch(value);
    }

    return ( 
        <div className="content-search">
            <div className="input-field">
                <input className="input" type="text" placeholder="Find a recipe" onChange={(e)=>{setValue(e.target.value)}}/>
            </div>
            <div className="btn-search">
                <button onClick={handleSubmit}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;