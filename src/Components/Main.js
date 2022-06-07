import {useEffect,useState} from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import UserPage from '../Pages/UserPage'



const Main = () =>{
    const [user,setUser] = useState(null)
    
    const URL = "http://localhost:4000/users/"


    
    const getUsers = () =>{
        fetch(URL)
        .then(response => response.json())
        .then(result => setUser(result))
    }


    useEffect(()=> getUsers(),[])
    return(
       <main>
           <Routes>
               <Route path = '/' element={<Home/>}/>
               <Route path ='/login' element ={<Login/>}/>
               <Route path = '/register' element ={<Register/>}/>
               <Route path = '/user/:id' element ={<UserPage user={user}/>}/>
           </Routes>
       </main>
    )
}

export default Main