import {useParams } from "react-router-dom"
import {useEffect,useState} from 'react'
import './Styles/userpage.css'
import Sidebar
 from "../Components/Sidebar"
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

    const loaded = () => {
        return blog.map((blogs,idx)=>(
            <div key={idx}>
                <h3>{blogs.content}</h3>
                <p>{blogs.createdAt}</p>
            </div>
        ))
    }


    



    return blog ?(
        <>  
            <div className="cover-picture">
                <img src={user.coverPicture} alt="coverpicture"/>
            </div>
            <div className="container">
                <Sidebar/>
                <div>
                    <h1>Hello! {user.firstName} {user.lastName}</h1>
                    <img className="profile" src={user.avatar} alt ={user.firstName}/>
                    <h3>{user.username}</h3>
                </div>
                <div>
                    <h3>Birthday</h3>
                    <p>{user.birthDate}</p>
                    <h3>Location</h3>
                    <h3>{user.city}</h3>
                    <h3>From</h3>
                    <h4>{user.from}</h4>
                </div>
                <div className="user-desc">
                    <h3>About Me</h3>
                    <p>{user.description}</p>
                </div>
            </div>
            <div>
                <h2>{user.followings}</h2>
                <h2>{user.followers}</h2>
            </div>
            <div className="blog">
                <h2>Blog Posts!</h2>
                {loaded()}
            </div>
        </>
    ): <h1>Loading!</h1>
}

export default UserPage