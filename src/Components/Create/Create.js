import React, { Fragment, useContext, useEffect, useState } from 'react';
import './Create.css';
import { FirebaseContext, AuthContext } from '../../store/Context'
import { useHistory } from 'react-router';
import OlxLogo from '../../assets/OlxLogo';
import camera from '../../Images/camera.png'

const Create = () => {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const history = useHistory()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [states,setStates]=useState('')
  const [city,setCity]=useState('')
  const [image, setImage] = useState(null)
  const date = new Date()

  const handleSubmit = () => {
    firebase.storage().ref(`/images/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        console.log(url);
        firebase.firestore().collection('products').add({
          name, category, price, url,
          userId: user.uid,description,states,city,
          createdAt: date.toDateString()
        })
        history.push('/')
      })
    })
  }
  useEffect(() => {
    console.log(category);
    console.log(name);
  }, [category])

  return (
    <Fragment>
      <header>
        <div className="header">
          <div className="left">
            <div>
              <i className="fas fa-arrow-left"></i>
            </div>
          </div>
          <div><OlxLogo></OlxLogo> </div>
        </div>
      </header>
      <div className="createPage">

        <div className="createContent">
          <div className="contentHeading">
            <h1>POST YOUR AD</h1>
          </div>
          <div className="contentInside">
            <div className="insideSection">
              <h2>SELECT CATEGORY</h2>
              <select required name="category" id="category" onChange={(e) => { setCategory(e.target.value) }}>
                <option value="none" selected disabled hidden>Select your category</option>
                <option value="Cars">Cars</option>
                <option value="Motorcycles">Motorcycles</option>
                <option value="Mobile Phones">Mobile Phones</option>
                <option value="For Sale: Houses & Apartments">For Sale: Houses & Apartments</option>
                <option value="Scooters">Scooters</option>
                <option value="Commercial & Other Vehicles">Commercial & Other Vehicles</option>
                <option value="For Rent: Houses & Apartments">For Rent: Houses & Apartments</option>
              </select>
            </div>
            <div className="insideSection">
              <h2>INPUT SOME DETAILS</h2>
              <label htmlFor="" >Ad Title</label><br />
              <input type="text" className="titleInput" value={name} name="name"
                onChange={(e) => setName(e.target.value)}
              /> <br />
              <label htmlFor="" >Description</label><br />
              <textarea rows="5" cols="25" type="text" className="descriptionInput" value={description} name="description"
                onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="insideSection">
              <h2>SET A PRICE</h2>
              <input className="priceInput" type="number" value={price} name="price"
                onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="insideSection">
              <h2>CONFIRM YOUR LOCATION</h2>
              <label htmlFor="">Country</label><br />
              <input type="text" className="priceInput" defaultValue="India" /><br />
              <label htmlFor="">State</label><br />
              <input className="priceInput" type="text" value={states} name="states"
                onChange={(e) => setStates(e.target.value)} /> <br />
                <label htmlFor="">City</label><br />
                <input className="priceInput" type="text" value={city} name="city"
                onChange={(e) => setCity(e.target.value)} />
                
            </div>
            <div className="insideSection">
              <h2>UPLOAD PHOTO</h2>
              <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : camera}></img>

              <br />
              <input onChange={(e) => {
                setImage(e.target.files[0])
              }} type="file" />
              <br />
            </div>
            <div className="insideSection">
              <button className="submitButton" onClick={handleSubmit}>POST</button>
            </div>
          </div>
        </div>
      </div>

      {/* <card>
      <div className="centerDiv">
        
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            id="fname"
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
            onChange={(e)=>{setCategory(e.target.value)}}
            id="fname"
            name="category"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" 
            value={price}
            onChange={(e)=>{setPrice(e.target.value)}}
            type="number" id="fname" name="Price" />
          <br />
        
        <br />
        <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
        
          <br />
          <input onChange={(e)=>{
            setImage(e.target.files[0])
          }} type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
      </div>
    </card> */}
    </Fragment>
  );
};

export default Create;
