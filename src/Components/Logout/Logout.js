import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import OlxLogo from '../../assets/OlxLogo'
import { FirebaseContext } from '../../store/Context'
import { AuthContext } from '../../store/Context'
import './Logout.css'

function Logout() {
    const history = useHistory()
    const { user } = useContext(AuthContext)
    const { firebase } = useContext(FirebaseContext)
    return (
        <div className="logoutparent">
            <div className="headerDiv">
                <i onClick={(e) => {
                    e.preventDefault(e)
                    history.push('./')
                }} className="fas fa-times	"></i>
                <OlxLogo></OlxLogo>
            </div>
            <div className="logoutChild">
                <div className="userName">
                    {user ? <div className="firstLetter"><h2>S</h2></div> :
                        <div className="nonUserName"><i class='fas fa-user-circle'></i>
                        </div>}
                    {user ? <div className="fullName">
                        <p>Hello,</p>
                        <h4>Sukrutha Sathya</h4>
                        <p>Logout your account here.</p>
                    </div> : <div className="fullName">
                        <p>Enter to your account</p>
                        <span onClick={()=>history.push('./login')}>Log in to your account</span>
                    </div>}

                </div>
                <div className="contents">
                    <div className="contentsInside">
                    <i className="fas fa-camera	"></i>
                        <span onClick={()=>{user ? history.push('./create') : history.push('./login')}}>Start Selling</span>
                    </div>
                    <div className="contentsInside">
                        <i className="far fa-file-alt"></i>
                        <span onClick={()=>{user ? history.push('./logout') : history.push('./login')}}>My Ads</span>
                    </div>
                    <div className="contentsInside">
                        <i className="far fa-comment"></i>
                        <span onClick={()=>{user ? history.push('./logout') : history.push('./login')}}>Chat</span>
                    </div>
                    <div className="contentsInside">
                        <i className="far fa-question-circle"></i>
                        <span>Help</span>
                    </div>
                </div>
                <div className="logoutDiv">
                    <button onClick={() => {
                        firebase.auth().signOut()
                        history.push('/login')
                    }} className="buttonLogout">{user ? 'Logout' : 'Login'}</button>
                </div>
            </div>
        </div>
    )
}

export default Logout
