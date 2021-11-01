import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [userDetails,setUserDetails]=useState([])
  const {firebase} = useContext(FirebaseContext)
  const {postDetails} = useContext(PostContext)

  useEffect(()=>{
    
    const {userId}= postDetails;
    console.log(userId);
    firebase.firestore().collection('users').where("id","==",userId).get().then(res=>{
      res.forEach((docs)=>{
        setUserDetails(docs.data())
      })
    })
  })
  return (
    <div className="viewParentDiv">
      <div className="leftSection">
      <div className="imageShowDiv">
        <img
          src= {postDetails.url}
          alt=" "
        />
      </div>
      <div className="descriptionDetails">
          <h2>Description</h2>
          <p>{postDetails.description}</p>
      </div>
      </div>
      
      <div className="rightSection">
        <div className="productDetails">
          <p className="price">&#x20B9; {postDetails.price} </p>
          <span className="title">{postDetails.name}</span>
          <p className="category">{postDetails.category}</p>
          <div className="productFoot">
            <p>{postDetails.city},{postDetails.states}</p>
            <p>{postDetails.createdAt}</p>
          </div>
        </div>
       {userDetails && <div className="contactDetails">
          <p className="contactheading"> SELLER DETAILS</p>
          <p >{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div> }
        <div> <button className="homeButton">Back To Home</button></div>
      </div>
    </div>
  );
}
export default View;
