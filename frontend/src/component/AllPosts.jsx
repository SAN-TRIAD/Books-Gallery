import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnePost from "./OnePost.jsx"
import NavBar from './NavBar/NavBar.jsx';

const AllPosts = ({data}) => {
    const navigate = useNavigate()

    return (
        <div>
          <NavBar/>
            {data.map((e,i)=>{
          return (
            <div key={i}>
              <OnePost e={e}/>
            </div>
          )
        })}
            <a className="boxed-btn3" onClick={() => navigate("/OnePost")}>
                View all Books
            </a>
        </div>
    );
}

export default AllPosts;
