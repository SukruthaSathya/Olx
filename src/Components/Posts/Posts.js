import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import Heart from '../../assets/Heart';
import { FirebaseContext, AuthContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import './Post.css';
import tryOlx from '../../Images/TryOlx.png'

function Posts() {
  const { user } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const { setPostDetails } = useContext(PostContext)
  const history = useHistory()

  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allPost)
    })
  })
  return (
    <div className="postParentDiv">
      {user && <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {products.map(product => {
            return <div className="card"
              onClick={() => {
                setPostDetails(product)
                history.push('/view')

              }}>
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name">{product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
          })}
        </div>
      </div>}

      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="cardImage">
            <div className="favorite">
              
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="favorite">
              <Heart></Heart>
            </div>
            </div>
            <div className="cardContent">
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3hsdjhaskjdhkjsgfhjdgshjgsdjfhgasjdgfsgf</p>
            </div>
            <div className="cardFoot">
            <p>Calicut, Kerala</p>
            <p>10/05/2021</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="tryOlxBanner">
          <img src={tryOlx} alt="" />
      </div>
    </div>
  );
}

export default Posts;
