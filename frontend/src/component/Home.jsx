import { React } from "react";
import { useNavigate } from "react-router-dom"
import AllPosts from "./AllBooks/AllPosts.jsx";
import NavBar from "../component/NavBar/NavBar.jsx"




const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <NavBar/>
        <div className="latest_trand_area">
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
      </div>
    </div>
  );
};

export default Home;
