import React, {useState} from 'react';
import { Image } from 'cloudinary-react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Edit.css";

const Edit = ({data}) => {
    const [book, setBook] = useState({});
    const [details,setDetails]=useState(false)
    const[id,setId]=useState(data.id)
    const [title, setTitle] = useState(data.title);
    const [author, setAuthor] = useState(data.author);
    const [genre, setGenre] = useState(data.genre);
    const [description, setDescription] = useState(data.description);
    const [publicationDate, setPublicationDate] = useState(data.publicationDate);
    const [language, setLanguage] = useState(data.language);
    const [numberPages, setNumberPages] = useState(data.numberPages);
    const [price, setPrice] = useState(data.price);
    const [cover_image, setCoverImage] = useState('');
    const navigate = useNavigate();
   
  const handleImageUpload = e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'lrkelxtq');

    axios.post('https://api.cloudinary.com/v1_1/dtbzrpcbh/image/upload', formData)
      .then(res => {
        setCoverImage(res.data.secure_url);
      })
      .catch(err => console.log(err));
  };

  

  const handleSubmit = e => {
    e.preventDefault();

    const updatedBook = {
      title,
      author,
      genre,
      description,
      publication_date: publicationDate,
      language,
      number_pages: numberPages,
      price,
      cover_image: cover_image
    };

    axios.put(`http://127.0.0.1:3001/Books-Gallery/book/${id}`, updatedBook)
      .then(res => {
        setBook(updatedBook);
        navigate("/all")
      })
      .catch(err => console.log(err));
  };
  const handleDelete=e=>{
    e.preventDefault();
    if(window.confirm("are you sure that u want to delete it")){
      axios.delete(`http://127.0.0.1:3001/Books-Gallery/book/${id}`)
      .then((res)=>{
          console.log(res.data)
      })
      .catch((err)=>{
          console.log(err)
      })
  }
  }
    return (
        <div>
            <div>
            <button onClick={()=>setDetails(!details)}  >Editing</button>
      {details ?
            <form div className="form" >
              <div className="contain" >
          <div>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
        <input type="text" value={genre} onChange={e => setGenre(e.target.value)} />
        <div>
    <label class="desc" id="title4" for="Field4">Description</label>
    <div>
      <textarea id="Field4" value={description} name="Field4" spellcheck="true" rows="10" cols="50" tabindex="4" onChange={e => setDescription(e.target.value)}></textarea>
    </div>
  </div>
        <input type="date" value={publicationDate} onChange={e => setPublicationDate(e.target.value)} />
        <input type="text" value={language} onChange={e => setLanguage(e.target.value)} />
        <input type="number" value={numberPages} onChange={e => setNumberPages(e.target.value)} />
        <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
        <input type="file" onChange={handleImageUpload} />
        {cover_image && <Image cloudName="dtbzrpcbh" publicId={cover_image} style={{ width: "400px", height: "400px" }} />}
        <div className="bttn" >
          <button type="button" className="fourth"    onClick={handleSubmit} >Update Book</button>

        <button className="first" onClick={handleDelete}>Delete</button></div>
        </div>
      </form>
            :<div></div>}
            </div>
        </div>
    );
}

export default Edit;

