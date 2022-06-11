import './input.css'
import { FaEllipsisV,FaThumbsUp,FaRegHeart} from "react-icons/fa";
import {useState} from 'react'



const Input = (props) =>{
    let users = props.users
    let post = props.post
    console.log(post)
    const [isActive, isSetActive] = useState('false')
    const [editForm, setEditForm] = useState(post)

    // const handleChange = event =>{
    //     setEditForm({...editForm, [event.target.name]:event.target.value})

    // }
    
    // const handleSubmit = event =>{
    //     event.preventDefault()
    //     props.updatePost(editForm)
    // }

    const handleToggle = () =>{
        isSetActive(!isActive)
    }

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }

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
        const handleChange = event =>{
            setEditForm({...editForm, [event.target.name]:event.target.value})
    
        }
        
        const handleSubmit = event =>{
            event.preventDefault()
            props.updatePost(editForm)
        }
        
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
                    <button onClick={handleToggle} className='edit-post-button'><FaEllipsisV/></button>
                </div>
                <div className="inputMiddle">
                    <span className='postText'>{posts.content}</span>
                    <img className="postImg"src={posts.img} alt="pic-published"/>
                    <form onSubmit={handleSubmit} className={isActive ? "hidden-edit" : null}>
                        <input onChange={handleChange} className='input'value={posts.content} name='content' type="text" placeholder='Edit Post!'/>
                        <input onChange={handleChange} className='input'value={posts.img} name='img' type="text" placeholder='Edit Img!'/>
                    </form>
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

