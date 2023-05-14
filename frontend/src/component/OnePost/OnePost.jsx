import React from 'react'
import NavBar from '../NavBar/NavBar.jsx';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Edit from "./Edit.jsx"
import "./OnePost.css"

function OnePost() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.formdef_data;
  return (
  <>
    <NavBar />
    <div className="body1">
    <div class="container">
  <article class="item-pane">
    <div class="item-preview">
      <div class="book">
          
          <img className="img1" src={data.cover_image} />
       </div>
    </div>
        

       <div className="item-details">
          <h1 className="h1" >{data.title} </h1>
          <span className="subtitle" >{data.author}</span> 
          <div className="pane__section">
            <p className="p">
              {data.description}
            </p>
          </div>
          <div className="pane__section1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
  <div>
    <h2>Genre: {data.genre}</h2>
   </div> 
   <div>
    <h2>Language: {data.language}</h2>
    </div>
    <div>
    <h3>Publication Date: {data.publication_date}</h3>
    </div>
    <div>
    <h3> Pages: {data.number_pages}</h3>
  </div>
</div>

            <div className="pane__section.clearfix" >
              <span>{data.price}</span>
            </div>
            <div className="pane__section clearfix"><span className="item-price">Price:{data.price}<span className="item-price__units">$</span></span></div>
            <Edit data={data} />
          
      
            </div>
		
      </article>
   
      
      </div> 
      </div>
      
  </>
  )
}

export default OnePost