import{Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const Main = () =>{
    return(
       <main>
           <Routes>
               <Route path = '/' element={<Home/>}/>
               <Route path ='/login' element ={<Login/>}/>
               <Route path = '/register' element ={<Register/>}/>
           </Routes>
       </main>
    )
}

export default Main