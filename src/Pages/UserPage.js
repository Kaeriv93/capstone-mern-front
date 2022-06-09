import {useParams } from "react-router-dom"
import {useEffect,useState} from 'react'
import './Styles/userpage.css'
import { FaHeart } from "react-icons/fa";

const UserPage = (props) =>{
    const [blog,setBlog] = useState(null)
    let {id} = useParams()
    let users = props.user
    let user = users.find(u => u._id ===id)
    console.log(user)


    useEffect(()=>{
        const getBlogData = async ()=>{
            const response = await fetch(`http://localhost:4000/user/${id}/blog`)
            const data = await response.json()
            setBlog(data)
            console.log(data)
        }
        getBlogData()
    },[id])

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }


    const loaded = () => {
        return blog.map((blogs,idx)=>(
            <div key={idx}>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img className="is-rounded"src="https://i.imgur.com/ON62Y4U.jpg" alt="jonny"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>Jonny San(Admin)</strong> <small>@kaeriv93</small> <small>{formatDate(blogs.createdAt)}</small>
                                    <br/>
                                    {blogs.content}
                                </p>
                            </div>
                            <div className='level-left'>
                                <span className="icon is-small">
                                    <FaHeart/>
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
                <br/>
            </div>
        ))
    }
    



    return blog ?(
        <>  
           <div className="grid-container">
               <div className="cover">
                    <img src ={user.coverPicture} alt="coverpicture"/>
               </div>
               <div className="box">
                    <div className="user">
                        <img src ={user.avatar} alt={user.firstName}/>
                    <h1 class="title">About Me</h1>
                    <p>{user.description}</p>
                    </div>
                    <br/>
                    <br/>
                    <p className="title is-4">@{user.username}</p>
                    <p>Name: {user.firstName}
                     {user.lastName}</p>
                    <p>Location: {user.city}</p>
                    <p>From: {user.from}</p>
               </div>
           </div>
           <br/>
            <div className="blog">
                <div className="box admin">
                    <h2 className="title is-5">Admin Posts and Updates!</h2>
                </div>
                {loaded()}
            </div>
        </>
    ): <h1>Loading!</h1>
}

export default UserPage