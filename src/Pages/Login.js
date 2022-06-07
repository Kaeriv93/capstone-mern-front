import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'


const Login = () =>{
    const navigate = useNavigate()
    const[ newForm, setNewForm] = useState({
        email:'',
        password:''
    })

    const generateError = (err) => toast.error(err,{
        position: 'bottom-right',
    })

    const handleChange = (e) =>{
        setNewForm({...newForm, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const{data} = await axios.post('http://localhost:4000/login',{
                ...newForm,
            },
            {
                withCredentials:true,
            }
            )
            console.log(data)
            if(data){
                if(data.errors){
                    const{email, password} = data.errors
                    if(email)generateError(email)
                    else if(password) generateError(password)
                }else{
                    navigate('/register')
                }
            }
        }catch(err){
            console.log(err)
        }
        setNewForm({
            email:'',
            password:''
        })
    }
   return(
       <>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="email" name="email" required onChange={handleChange}/>
      
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" name="password" required onChange={handleChange}/>
                <input type ="submit" value="login"/>
            </form>
        </div>
        <ToastContainer/>
       </>
   )
}

export default Login