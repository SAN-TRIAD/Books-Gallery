//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React ,{useState , useEffect }from "react";
import { useNavigate } from "react-router-dom";

import  "../NavBar/navbar.css";


function NavBar() {
  const navigate = useNavigate();


  



  return (
    <div className="App">
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
          onClick={() => navigate("/add")}
        >
          Add Book
        </div>
        <div className="nav-item" active-color="red">
          <input type="text"  />
          <button>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
    </div>
  );
}

export default NavBar;



// import React from 'react';
// import navbar from "./navbar.css"

// const NavBar = () => {
//   return (
//     <header>
//       <nav>
//         <div className="header__logo">
//           <a href="#">Guatemala Traveler</a>
//         </div>
//         <div className="header__links">
//           <a href="#">Home</a>
//           <a href="#">All Books</a>
//           <a href="#">Add Book</a>
//         </div>
//         <div className="header__search">
//           <input type="text" placeholder="Search" />
//           <button>
//             <span className="material-symbols-outlined">search</span>
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default NavBar;



// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import navbar from "./navbar.css"

// const NavBar = () => {
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const btnMobile = document.querySelector(".menu-btn");
//   //   const menuMobile = document.querySelector('.mobile__links');

//   //   const handleClick = () => {
//   //     menuMobile.classList.toggle('collapsed');
//   //   };

//   //   btnMobile.addEventListener("click", handleClick);

//   //   return () => {
//   //     btnMobile.removeEventListener("click", handleClick);
//   //   };
//   // }, []);

//   return (
//     <>
//       <link href="https://fonts.googleapis.com/css2?family=Fragment+Mono&display=swap" rel="stylesheet" />
//       <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

//       <header>
//         <nav>
//           {/* <div className="mobile">
//             <div className="mobile__header">
//               <div className="mobile__logo">
//                 <a href="#">Guatemala Traveler</a>
//               </div>
//               <div className="mobile__search">
//                 <input type="text" placeholder="Buscar destino" />
//                 <button>
//                   <span className="material-symbols-outlined">
//                     search
//                   </span>
//                 </button>
//               </div>
//               <div className="mobile__menu">
//                 <button className="menu-btn">
//                   <span className="material-symbols-outlined">
//                     menu
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <div className="mobile__links">
//               <a href="#guatemala">Guatemala</a>
//               <a href="#lagoAtitlan">Atitlán</a>
//               <a href="#livingston">Livingston</a>
//               <a href="#acatenango">Acatenango</a>
//               <a href="#contact">Contactenos</a>
//             </div>
//           </div> */}
//           <div className="desktop">
//             <div className="desktop__logo">
//               <a href="#">Guatemala Traveler</a>
//             </div>
//             <div className="desktop__links">
//               <a href="#guatemala">Guatemala</a>
//               <a href="#lagoAtitlan">Atitlán</a>
//               <a href="#livingston">Livingston</a>
//               <a href="#acatenango">Acatenango</a>
//               <a href="#contact">Contactenos</a>
//             </div>
//             <div className="desktop__search">
//               <input type="text" placeholder="Buscar destino" />
//               <button>
//                 <span className="material-symbols-outlined">
//                   search
//                 </span>
//               </button>
//             </div>
//             <div className="desktop__links-mini">
//               <button className="">
//                 <span className="material-symbols-outlined">
//                   menu
//                 </span>
//               </button>
//               <div className="submenu">
//                 <a href="#guatemala">Guatemala</a>
//                 <a href="#lagoAtitlan">Atitlán</a>
//                 <a href="#livingston">Livingston</a>
//                 <a href="#acatenango">Acatenango</a>
//                 <a href="#contact">Contactenos</a>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
// {/* 
//       <div className="container"></div>

//       <div className="container-1" id="guatemala"></div>

//       <div className="container-2" id="Livingston"></div>
//       <div className="container-2" id="acatenango"></div>
//       <div className="container-2" id="lagoAtitlan"></div>
//       <div className="container-2" id="contact"></div> */}
//       </>
// )
//   }
//   export default NavBar;


// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import navbar from "./navbar.css"

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   useEffect(() => {
// //     const btnMobile = document.querySelector(".menu-btn");
// //     const menuMobile = document.querySelector('.mobile__links');

// //     const handleClick = () => {
// //       menuMobile.classList.toggle('collapsed');
// //     };

// //     btnMobile.addEventListener("click", handleClick);

// //     return () => {
// //       btnMobile.removeEventListener("click", handleClick);
// //     };
// //   }, []);

// //   return (
// //     <nav className="nav">
// //       <div
// //         className="nav-item is-active"
// //         active-color="orange"
// //         onClick={() => navigate("/home")}
// //       >
// //         Home
// //       </div>

// //       <div
// //         className="nav-item"
// //         active-color="green"
// //         onClick={() => navigate("/all")}
// //       >
// //         All Books
// //       </div>
// //       <div
// //         className="nav-item"
// //         active-color="red"
// //         onClick={() => navigate("AddBook")}
// //       >
// //         Add Book
// //       </div>
// //       <div className="nav-item" active-color="red">
// //         <input type="text" />
// //         <button>search</button>
// //       </div>
// //       <span className="nav-indicator"></span>
// //     </nav>
// //   );
// // };

// // export default Navbar;
