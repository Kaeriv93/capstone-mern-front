import {useState,useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { useCookies } from "react-cookie";
import axios from 'axios'
import './Styles/login.css'



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
            const{data} = await axios.post('https://myfacegram-backend.herokuapp.com/login',{
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
            <div className="title">
                <h1>facenovel</h1>
                <p>Connect with friends and world around you on FaceNovel</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <div>
                        <input className="input" type="text" placeholder="Enter Email" name="email" required onChange={handleChange}/>
                        <br/>
                        <br/>
                        <input className="input" type="password" placeholder="Enter Password" name="password" required onChange={handleChange}/>
                        <br/>
                        <br/>
                        <button className="button is-info" type="submit">Login</button>
                    </div>
                    <br/>
                    <h4>Don't have an account? <Link to='/register'>Sign up</Link></h4>
                </div>
            </form>
            <ToastContainer/>
        </div>
)
}

export default Login