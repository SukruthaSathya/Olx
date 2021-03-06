import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext'


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';
import Footer from './Components/Footer/Footer';
import Logout from './Components/Logout/Logout';

function App() {
  const {setUser}= useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
    <Post>
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/logout'>
          <Logout/>
        </Route>
        <Route path='/create'>
          <Create/>
        </Route>
        <Route path='/view'>
          <View/>
          <Footer/>
        </Route>
      </Router>
    </Post>
    </div>
  );
}

export default App;
