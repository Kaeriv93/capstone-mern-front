import Posts from "../Components/Posts"
import Sidebar from "../Components/Sidebar"
import Rightbar from "../Components/Rightbar"
import{useState, useEffect} from 'react'
import './Styles/home.css'
const Home = (props) =>{
    let users = props.user

    const [post,setPost] = useState(null)
    

    const URL2 ="http://localhost:4000/post"

    const getPost = () =>{
        fetch(URL2)
        .then(response => response.json())
        .then(result => setPost(result))
    }

    
    useEffect(()=> getPost(),[])

    const createPost = async(content,img) =>{
        await fetch(URL2,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(content,img)
        })
        getPost()
        
    }

    const updatePost = async( post, id) =>{
        await fetch('http://localhost:4000/post/' + id,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        })
        getPost(id)
    }


    return(
        <>
            <div className="homeContainer">
                <Sidebar/>
                <Posts users={users} post={post} createPost={createPost} updatePost={updatePost}/>
                <Rightbar users={users}/> 
            </div>
        </>
    )
}

export default Home