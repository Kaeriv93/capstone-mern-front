import './input.css'
import { FaEllipsisV,FaThumbsUp,FaRegHeart} from "react-icons/fa";
import {useEffect,useState} from 'react'


const Input = (props) =>{
    let users = props.users
    console.log(users._id)

    const [post,setPost] = useState(null)

    const URL2 ="http://localhost:4000/post"

    const getPost = () =>{
        fetch(URL2)
        .then(response => response.json())
        .then(result => setPost(result))
    }

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }

    useEffect(()=> getPost(),[])

    const name = (id) =>{
        for(let i = 0; i< users.length; i++){
            if(id === users[i]._id){
                return(
                    <span className="postUsername">{users[i].firstName} {users[i].lastName}</span>
                )
            } 
        }
    }
   
    const picture = (id) =>{
        for(let i = 0; i< users.length; i++){
            if(id === users[i]._id){
                return(
                    <img className="postProfileImg" src={users[i].avatar} alt={users[i].firstName}/>
                )
            }
        }
    }
    
    const loaded = () =>{
        return post.reverse().map((posts,idx)=>(
            <div key={idx}>
                 <div className="input-container">
            <div className="inputWrapper">
                <div className="inputTop">
                    <div className='topLeft'>
                        {picture(posts.userId)}
                        <span className="postUsername">{name(posts.userId)}</span>
                        <span className="postDate">{formatDate(posts.createdAt)}</span>
                    </div>
                    <div className="topRight">

                    </div>
                    <FaEllipsisV/>
                </div>
                <div className="inputMiddle">
                    <span className='postText'>{posts.content}</span>
                    <img className="postImg"src={posts.img} alt="pic-published"/>
                </div>
                <div className="inputBottom">
                    <div className='bottomLeft'>
                        <FaThumbsUp className="thumbs likeIcon"/>
                        <FaRegHeart className="heart likeIcon"/>
                        <span className="postLikeCounter">{posts.likes.length} people liked it</span>
                    </div>
                    <div className="bottomRight">
                        <span className='postCommentText'>1 comment</span>

                    </div>
                </div>
            </div>
        </div>
            </div>
        ))
    }

    
    return post ? loaded():<h1>Error Loading Page</h1>
}

export default Input

// return users ? (
//     <h1>Hello world!</h1>
// ): <h1>Don't think this works!</h1>