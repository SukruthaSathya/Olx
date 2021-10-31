import React,{useContext,useState,useEffect} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router';

function Header() {
  const history = useHistory()
  const {user}= useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const [logout,setLogout] = useState(false)

  useEffect(() => {
    console.log(logout);
    
  }, [logout])
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
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
        <div className={user ? "userLoginPage" : "loginPage"}>
         <span onClick={()=>setLogout(logout => !logout)}>{user ?  `${user.displayName.charAt(0)}` : 'Login'}</span>
          {user ? "": <hr />}         
        </div>
        <div className="logoutMenu">
        {logout===true && 
        <div className="logoutDiv">
          <h2>{user.displayName}</h2>
        <span onClick={()=>{
          firebase.auth().signOut()
          history.push('/login')
        }}>Logout</span>
        </div> }
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
