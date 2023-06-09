import React,{ useState } from 'react';
import NavBar from './NavBar/NavBar.jsx';
import axios from 'axios';
import  { Image } from 'cloudinary-react'
import { useNavigate } from "react-router-dom"
import "../component/addBook.css"


const AddBook = () => {
 
    const navigate = useNavigate()
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [genre,setGenre]=useState("")
    const [description,setDescription]=useState("")
    const [date,setDate]=useState("")
    const [language,setLanguage]=useState("")
    const [pages,setPages]=useState(null)
    const [price,setPrice]=useState("")
    const [image,setImage]=useState("")
    //const [uID,setUID]=useState(null)
    

    const uploadImage =  (e)=>{
        const file=e.target.files[0]
        const form = new FormData()
        form.append("file",file)
        form.append("upload_preset","SAN_project")

        axios.post("https://api.cloudinary.com/v1_1/dhvhvswmj/upload",form)
        .then (rslt=>{setImage(rslt.data.secure_url)})
    }


    function addBook(body){
        axios.post("http://localhost:3001/Books-Gallery/book/addNewBook",body)
        .then (rslt=>{console.log(rslt)})
        .then(navigate("/home"))
    }


    return (
         <div >
         <NavBar/>
         <br />
        <form id="form">
             <h3 id="h3">ADD A NEW BOOK !</h3>
             
          <div className="div">
            <label className='label'>Title:</label>
            <input type="text" placeholder="Title" defaultValue={title} onChange={(e)=>{setTitle(e.target.value)} }/>
          </div>
          <div className="div"> 
            <label  className='label'>Author:</label>
            <input type="text" placeholder="Author" defaultValue={author} onChange={(e)=>{setAuthor(e.target.value)} } />
          </div>
          <div className="div"> 
            <label  className='label'>Genre:</label>
            <input type="text" placeholder="Genre" defaultValue={genre} onChange={(e)=>{setGenre(e.target.value)} } />
          </div>
          <div className="div"> 
            <label  className='label'>Description:</label>
            <input type="text" placeholder="Description" defaultValue={description} onChange={(e)=>{setDescription(e.target.value)} }/>
          </div>
          <div className="div"> 
            <label  className='label'>Date:</label>
            <input type="date" id ="date"placeholder="Date" defaultValue={date} onChange={(e)=>{setDate(e.target.value)} }/>
          </div>
          <div className="div"> 
            <label  className='label'>Language:</label>
            <input type="text" placeholder="Language" defaultValue={language} onChange={(e)=>{setLanguage(e.target.value)} }/>
          </div>
          <div className="div"> 
            <label  className='label'>Pages:</label>
            <input type= "text" id="nb" placeholder="Number Of Pages" defaultValue={pages} onChange={(e)=>{setPages(e.target.value)} }/>
          </div>
          <div className="div"> 
            <label  className='label'>Price:</label>
            <input type="text" placeholder="Price" defaultValue={price} onChange={(e)=>{setPrice(e.target.value)} }/>
          </div>    
          <div className="div"> 
            <label  className='label'>Image:</label>
            <input type="file" id="file" placeholder="Image" defaultValue={image} onChange={uploadImage}/>
            {image && <Image cloudName="dhvhvswmj" publicId={image} width="150" height="150" />}
          </div>
          <br />
          <br />
          <br />
          <button onClick={()=>addBook({
                                          title,
                                          author,
                                          genre,
                                          description,
                                          date,
                                          language,
                                          pages,
                                          price,
                                          image
                                       })
            } >Add Book</button>
        
        </form>
        </div>
      )
}

export default AddBook;
