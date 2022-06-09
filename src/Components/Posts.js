// import {useState,useEffect} from 'react'
import Share from './share/Share'
import './Styles/posts.css'
import Input from './input/Input'
const Posts = () =>{
    
    return (
        <div className="posts">
            <div className="postWrapper">
                <Share/>
                <Input/>
            </div>
        </div>
    )
}

export default Posts