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
{/* <header>
    <h2 href="#"> Mountain Travel</h2>
    <nav>
       <li><a href="#">Main</a> </li> 
        <li><a href="#">404</a> </li>
        <li><a href="#">Contact</a> </li>
        
    </nav>
    </header> */}
    
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
      {/* <div className="latest_trand_area" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        height: "100vh",
      }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="trand_info text-center">
                <h3>Discover latest trending Books</h3>
                <a className="boxed-btn3" onClick={() => navigate("/all")}>
                  View all Books
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
