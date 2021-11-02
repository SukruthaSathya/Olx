import React,{useContext,useState,useEffect} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import Logout from '../Logout/Logout';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router';

function Header() {
  const history = useHistory()
  const {user}= useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const [logout,setLogout] = useState(false)

  const handleLogin=(e)=>{
    e.preventDefault()
    history.push('./login')
  }
  useEffect(() => {
    console.log(logout);
    
  }, [logout])
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        
        <div className="brandName">
        <i className="fas fa-align-justify" onClick={(e)=>{e.preventDefault(e)
          history.push('./logout')}}></i>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" value="India" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        {user ? <div className="userLoginPage">
          <span onClick={()=>setLogout(logout => !logout)}>{`${user.displayName.charAt(0)}`}</span>
        </div> : <div onClick={handleLogin} className="loginPage">
          <span>Login</span>
          <hr />
        </div>}
        
        <div className={logout===true ? "logoutMenu" : "logOut"}>
        {logout===true && 
        <div className="logoutDiv">
          <h2>{user.displayName}</h2>
        <span onClick={()=>{
          firebase.auth().signOut()
          history.push('/login')
        }}>Logout</span>
        </div> }
        </div>

        

        {user ? <div onClick={(e)=>{e.preventDefault()
        history.push('./create')}} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div> : <div onClick={()=>{return (alert("Please Login to post your ad."))}} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default Header;
