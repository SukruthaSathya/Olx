import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import { FirebaseContext, AuthContext } from '../../store/Context'
import { useHistory } from 'react-router';
import OlxLogo from '../../assets/OlxLogo';

const Create = () => {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const history = useHistory()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const date = new Date()

  const handleSubmit = () => {
    firebase.storage().ref(`/images/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        console.log(url);
        firebase.firestore().collection('products').add({
          name, category, price, url,
          userId: user.uid,
          createdAt: date.toDateString()
        })
        history.push('/')
      })
    })
  }

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
              </div>
              <div className="insideSection">
                  <h2>INPUT SOME DETAILS</h2>
              </div>
              <div className="insideSection">
                  <h2>SET A PRICE</h2>
              </div>
              <div className="insideSection">
                  <h2>UPLOAD PHOTO</h2>
              </div>
              <div className="insideSection">
                  <button>POST</button>
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
