import {useState,useEffect} from 'react'

const Home = () =>{
    const[post,setPost] = useState(null)

    const getPost = () =>{
        fetch('http://localhost:4000/post')
        .then(response => response.json())
        .then(result => setPost(result))
    }
    useEffect(() => getPost(),[])

    const loaded = () =>{
        return post.map((posts,idx)=>(
            <div key={idx}>
                <p>{posts.content}</p>
                <p>{posts.createdAt}</p>
            </div>
        ))
    }

    return post ? loaded():(
        <div>
            <h1>You Guessed It This is our Homepage!</h1>
        </div>
    )
}

export default Home