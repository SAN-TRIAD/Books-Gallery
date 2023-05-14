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
    <div className="container1" >
      <article className="article.item-pane">
      <div className="item-preview">
      <div className="book">
          
          <img className="img1" src={data.cover_image} />
       </div>
    </div>
        

          <div className="item-details">
          <h1 className="h1" >{data.title}<span className="subtitle" >{data.author}</span>  </h1>
          <div className="pane__section">
            <p className="p">
              {data.description}
            </p>
          </div>
          <div className="pane__section1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
  <dl>
    <dt>Genre: {data.genre}</dt>
  </dl>
  <dl>
    <dt>Publication Date: {data.publication_date}</dt>
    <dt> Pages: {data.number_pages}</dt>
  </dl>
  <dl>
    <dt>Language: {data.language}</dt>
  </dl>
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