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

    const createPost = async(content) =>{
        await fetch(URL2,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(content)
        })
        
    }


    return(
        <>
            <div className="homeContainer">
                <Sidebar/>
                <Posts users={users} post={post} createPost={createPost}/>
                <Rightbar users={users}/> 
            </div>
        </>
    )
}

export default Home