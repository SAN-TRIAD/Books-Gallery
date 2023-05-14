import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnePost from "../OnePost/OnePost.jsx"
import NavBar from '../NavBar/NavBar.jsx';
import "./AllBooks.css"

const AllPosts = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className="book-store">
      {data.map((e, i) => {
   
        return (
          <div className="cc" key={i}>
              <div className="book-slide">
                <div className="js-flickity" >
                  <div className="book-cell">
                    <div className="book-img">
                      <img src={e.cover_image} alt="" className="book-photo" />
                    </div>
                    <div className="book-content">
                      <div className="book-title">{e.title}</div>
                      <div className="book-author">{e.author}</div>
                      <div className="rate">
                        <fieldset className="rating">
                          <input type="checkbox" id="star5" name="rating" value="5" />
                          <label className="full" for="star5"></label>
                          <input type="checkbox" id="star4" name="rating" value="4" />
                          <label className="full" for="star4"></label>
                          <input type="checkbox" id="star3" name="rating" value="3" />
                          <label className="full" for="star3"></label>
                          <input type="checkbox" id="star2" name="rating" value="2" />
                          <label className="full" for="star2"></label>
                          <input type="checkbox" id="star1" name="rating" value="1" />
                          <label className="full" for="star1"></label>
                        </fieldset>
                      </div>
                      <div className="book-sum">{e.description} </div>
                      <div className="book-see">
                        <button className="btn" onClick={() => {
                          navigate("/OnePost",{
                            state: { formdef_data: e }
                            })
                            }}>See The Book</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
      })}
      </div>
    </div>
  );
};


export default AllPosts;
