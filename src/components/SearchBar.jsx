import React ,{useState} from 'react'
import "./Card.css"



const SearchBar = ({onSearch}) => {

  const [city, setCity] = useState("");

    const handleSearchClick = () => {
    const trimmed = city.trim();
    if (!trimmed) return;  
    if (onSearch) {
      onSearch(trimmed);   
    }
  };

  return (
    <div>
      <div className="searchBar">
        <input 
          type="text" 
          id='inputBar' 
          className='input' 
          placeholder='Enter City Name'
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />
        <img 
          src="assets/search.png" 
          alt="Search_icon"  
           
          onClick={handleSearchClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  )
}

export default SearchBar
