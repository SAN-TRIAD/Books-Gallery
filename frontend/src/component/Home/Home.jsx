import { React } from "react";
import { useNavigate } from "react-router-dom"
import AllPosts from "../AllBooks/AllPosts.jsx";
import NavBar from "../NavBar/NavBar.jsx"
import "./Home.css"



const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <NavBar />
      <div className="body5">
    
    <section className="hero">
    <div 
           className="background-image" 
           style={{backgroundImage: 'url(https://i.pinimg.com/originals/2d/f7/37/2df73740e79846ad51765c3deeea5908.jpg)'}}>
    </div>
        <div className="hero-content-area">
        <h1>Book Gallery</h1>
            <h3  className="pr1" style={{float: 'right', textAlign: 'center', paddingRight: '50px'}} > Welcome To Our Gallery Where you will find the mystorious Book </h3>
        <a href="#" className="btn" onClick={() => navigate("/all")}>View All Books</a>
        </div>
        </section>

     </div>

    </div>
  );
};

export default Home;
