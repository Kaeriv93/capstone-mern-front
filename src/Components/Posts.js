import {useState,useEffect} from 'react'
import Share from './share/Share'
import './Styles/posts.css'
const Posts = () =>{
    const[post,setPost] = useState(null)

    const getPost = () =>{
        fetch('http://localhost:4000/post')
        .then(response => response.json())
        .then(result => setPost(result))
    }
    useEffect(() => getPost(),[])

    // const loaded = () =>{
    //     return post.map((posts,idx)=>(
    //         <div className="posts" key={idx}>
    //             <div className ="postWrapper">
    //                 <p>{posts.content}</p>
    //                 <img className="post-img" src={posts.img} alt={posts.content}/>        
    //                 <br/>
    //                 <p className="created-at">{posts.createdAt}</p>
    //                 <br/>
    //             </div>
    //         </div>
    //     ))
    // }

    return (
        <div className="posts">
            <div className="postWrapper">
                <Share/>
            </div>
        </div>
    )
}

export default Posts