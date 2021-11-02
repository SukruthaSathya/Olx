import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import OlxLogo from '../../assets/OlxLogo'
import { FirebaseContext } from '../../store/Context'
import './Logout.css'

function Logout() {
    const history=useHistory()
    const {firebase}=useContext(FirebaseContext)
    return (
        <div className="logoutparent">
            <div className="headerDiv">
                <i onClick={(e)=>{e.preventDefault(e)
                history.push('./')}} className="fas fa-times	"></i>
                <OlxLogo></OlxLogo>
            </div>
            <div className="logoutChild">
                <div className="userName">
                    <div className="firstLetter"><h2>S</h2></div>
                    <div className="fullName">
                        <p>Hello,</p>
                        <h4>Sukrutha Sathya</h4>
                        <p>Logout your account here.</p>
                        </div>
                        
                </div>
                <div className="logoutDiv">
                    <button onClick={()=>{
          firebase.auth().signOut()
          history.push('/login')
             }} className="buttonLogout">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Logout
