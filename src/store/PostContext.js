//this context used in home and view. So wrap either for home and view only or for whole is also fine.

import {createContext, useState} from 'react'

export const PostContext = createContext(null)


function Post({children}){
 const [postDetails,setPostDetails]=useState()

    return(
        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </PostContext.Provider>
    )
}

export default Post