//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React ,{useState , useEffect }from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import  "../NavBar/navbar.css";


function NavBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  


  const handleSearch = () => {
    axios.get(`http://localhost:3001/Books-Gallery/book/search/${search}`)
      .then(res => {
        const searchResults = res.data;
        navigate("/search", { state: { searchResults } });
      })
      .catch(err => console.log(err));
  }


  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
   
          onClick={() => navigate("/home")}
        >
          Home
        </div>

        <div
          className="nav-item"
         
          onClick={() => navigate("/all")}
        >
          All Books
        </div>
        <div
          className="nav-item"
  
          onClick={() => navigate("/add")}
        >
          Add Book
        </div>
        <div className="nav-item" >
          {/* <input type="text"  /> */}
          {/* <button className="search-btn">search</button>
          <p>efsdg</p> */}
        <input type="text" id="search-input" defaultValue={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={handleSearch}  className="search-btn" >Search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
    </div>
  );
}
export default NavBar;



