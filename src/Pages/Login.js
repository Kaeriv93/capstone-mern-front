import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { useCookies } from "react-cookie";
import axios from 'axios'


function Login() {
    const [cookies] = useCookies([]);
    const navigate = useNavigate();
    useEffect(() => {
      if (cookies.jwt) {
        navigate("/");
      }
    }, [cookies, navigate]);
    const [newForm, setNewForm] = useState({
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
                    const {email,password} = data.errors
                    if(email) generateError(email)
                    else if(password) generateError(password)
                }else{
                    navigate(`/user/${data.user}`)
                }
            }

        } catch(err){
            console.log(err)
        }
        setNewForm({
            email:'',
            passwords:''
        })
    }




    return(
        <div className="loginpage">
            <h2>Login Form</h2>

            <form onSubmit={handleSubmit}>
                <div className="flex-container">
                    <div className="container">
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required onChange={handleChange}/>

                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange}/>
                            
                        <button type="submit">Login</button>
                        <button type="button" className="cancelbtn">Cancel</button>
                    </div>

                </div>
            </form>
            <ToastContainer/>
        </div>
)
}

export default Login