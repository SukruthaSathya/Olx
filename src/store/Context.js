import {createContext,useState} from 'react'

export const FirebaseContext = createContext(null)

//create a context and export it
 export const AuthContext =createContext(null)


 //a component is created and wrapped in index
 export default function Context({children}){                  //children is the default object inside props
    const [user,setUser]=useState(null) //this state is used in many components so it is held inside context
    
    //the above created context is used in return
    return(
        <AuthContext.Provider value={{user,setUser}} >                  
            {children}
        </AuthContext.Provider>
    )
 }