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

    const updatedUser = async( user, id) =>{
        await fetch('http://localhost:4000/user/' + id,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        getUsers()
    }

    const deleteUser = async id =>{
        await fetch('http://localhost:4000/user/' + id,{
            method:'DELETE',
        })
        getUsers()
    }


 



    return(
       <main>
           <Routes>
               <Route path = '/' element={<Home user={user}/>}/>
               <Route path ='/login' element ={<Login/>}/>
               <Route path = '/register' element ={<Register/>}/>
               <Route path = '/user/:id' element ={<UserPage user={user} updatedUser={updatedUser} deleteUser={deleteUser}/>}/>
           </Routes>
       </main>
    )
}

export default Main