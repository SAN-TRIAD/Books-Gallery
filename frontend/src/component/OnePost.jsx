import React from 'react'
import NavBar from './NavBar/NavBar.jsx';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./OnePost.css"

function OnePost() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.formdef_data;
  return (
  <>
    <NavBar />
    <div>OnePost</div>
    <div className="body">
    <div className="container" >
      <article className="article.item-pane">
      <div class="item-preview">
      <div class="book"></div>
    </div>
        

          <div className="item-details">
          <h1>{data.title}<span className="subtitle" >{data.author}</span>  </h1>
          <img className="img1" src={data.cover_image} />
          <div className="pane__section">
            <p>
              {data.description}
            </p>
          </div>
          <div className="pane__section">
            <dl>
              <dt>Cover by</dt>
              <dt>{data.genre}</dt>
              <dt>{data.publication_date}</dt>
              <dd>{data.number_pages}</dd>
              <dt>{data.language}</dt>
            </dl>
            </div>
            <div className="pane__section.clearfix" >
              <span>{data.price}</span>
            </div>
            <div class="pane__section clearfix"><span class="item-price">{data.price}<span class="item-price__units">$</span></span><a className="button" href="#">Edit</a></div>

          
      
            </div>
		
      </article>
   
      
      </div> 
      </div>
      
  </>
  )
}

export default OnePost
    
