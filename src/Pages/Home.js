import Posts from "../Components/Posts"
import Sidebar from "../Components/Sidebar"
import Rightbar from "../Components/Rightbar"
import{useState, useEffect} from 'react'
import Header from './Components/Header';
import './Styles/home.css'
const Home = (props) =>{
    let users = props.user

    const [post,setPost] = useState(null)
    

    const URL2 ="https://myfacegram-backend.herokuapp.com/post"

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
        await fetch('https://myfacegram-backend.herokuapp.com/post/' + id,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        })
        getPost()
    }


    return(
        <>  
            <Header/>
            <div className="homeContainer">
                <Sidebar/>
                <Posts users={users} post={post} createPost={createPost} updatePost={updatePost}/>
                <Rightbar users={users}/> 
            </div>
        </>
    )
}

export default Home