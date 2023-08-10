import { useState } from "react";
import fetchData from "../api/api";

function SearchBar({ onSearchResult }) {
    const [value, setValue] = useState();
    const [data, setData] = useState([]);

    const handleSearch = async (query) => {
        const results = await fetchData(query);
        if (onSearchResult) {
            onSearchResult(results);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(value);
    }

    const handleClear = () => {
        setValue("");  // input alanını sıfırla
        if (onSearchResult) {
            onSearchResult([]);  // ana bileşene boş bir dizi gönder
        }
    };

    return (
        <div className="content-search">
            <div className="input-field">
                <input 
                    className="input" 
                    type="text" 
                    value={value} // input'un değerini "value" state'i ile eşleştir
                    placeholder="Find a recipe" 
                    onChange={(e) => setValue(e.target.value)} 
                />
            </div>
            <div className="btn-search">
                <button onClick={handleSubmit}>Search</button>
            </div>
            <div className="btn-clear">
                <button onClick={handleClear}>Clear</button> {/* Clear butonunun onClick event'ini handleClear'a bağla */}
            </div>
        </div>
    );
}

export default SearchBar;
