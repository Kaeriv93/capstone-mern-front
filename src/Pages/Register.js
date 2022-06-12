import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import './Styles/register.css'

const Register = () =>{
    const navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        firstName:'',
        lastName:'',
        username:'',
        email:'',
        password:'',
        avatar:'',
        birthdate:'',
        city:'',
        from:'',
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
            const{data} = await axios.post('https://myfacegram-backend.herokuapp.com/register',{
                ...newForm,
            },
            {
                withCredentials:true,
            }
            )
            
            if(data){
                if(data.errors){
                    const {email,password} = data.errors
                    if(email) generateError(email)
                    else if(password) generateError(password)
                }else{
                    navigate('/login')
                }
            }

        } catch(err){
            console.log(err)
        }
        setNewForm({
            firstName:'',
            lastName:'',
            username:'',
            email:'',
            password:'',
            avatar:'',
            birthdate:'',
            city:'',
            from:'',
        })
    }


    return(
        <>
            <div className="signup">
                <form id="signing" onSubmit={handleSubmit} autoComplete="off">
                    <div className="grid-container">
                        <div className="sign-container">
                            <div className="sign">
                                <p>Please fill in this form to create an account</p>
                            </div>
                            <hr/>
                            <label htmlFor="firstName"><b>First Name</b></label>
                            <input className='input' type="text" value={newForm.firstName} placeholder="Enter your first name" name="firstName" required onChange={handleChange} />
                            <br/>
                            <label htmlFor ="lastName"><b>Last Name</b></label>
                            <input className='input'type="text" value={newForm.lastName} placeholder="Enter your last name" name="lastName" required onChange={handleChange}/>
                            <br/>
                            <label htmlFor ="username"><b>Username</b></label>
                            <input  className='input'type="text" value={newForm.username} placeholder="Enter your username" name="username" required onChange={handleChange}/>
                            <br/>
                            <label htmlFor="email"><b>Email</b></label>
                            <input  className='input'type="text" value={newForm.email} placeholder="Enter Email" name="email" required onChange={handleChange}/>
                            <br/>
                            <label htmlFor ="password"><b>Password</b></label>
                            <input  className='input'type="password" value={newForm.password} placeholder="Enter Password" name="password" required onChange={handleChange}/>
                            <br/>
                            <label htmlFor ='avatar'><b>Avatar</b></label>
                            <input className='input'type="text" value={newForm.avatar} placeholder="Enter a picture" name ="avatar" required onChange={handleChange}/>
                            <br/>
                            <label htmlFor ='birthdate'><b>Birthdate</b></label>
                            <input className='input'type="date" value={newForm.birthdate} name ="birthdate" required onChange={handleChange}/>
                            <br/>
                            <label htmlFor ='city'><b>City</b></label>
                            <input className='input'type="text" value={newForm.city} placeholder="City,State" name ="city" required onChange={handleChange}/>
                            <br/>
                            <label htmlFor ='from'><b>From</b></label>
                            <input className='input'type="text" value={newForm.from} placeholder="Hometown" name ="from" required onChange={handleChange}/>
                            <br/>
                            <br/>
                            <input className='button is-link' type="submit" value="Sign Up"/>

                        </div>
                    </div>
                </form>
                <ToastContainer/>
            </div>
        </>
    )
}

export default Register

