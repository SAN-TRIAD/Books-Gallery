import { React } from "react";
import { useNavigate } from "react-router-dom"
import AllPosts from "./AllPosts.jsx";

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => navigate("/home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => navigate("/all")}
        >
          All Books
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => navigate("AddBook")}
        >
          Add Book
        </div>
        <div className="nav-item" active-color="red">
          <input type="text" />
          <button>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
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
