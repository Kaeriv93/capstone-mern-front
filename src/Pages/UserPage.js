import {useParams, useNavigate,} from "react-router-dom"
import {useEffect,useState} from 'react'
import { FaHeart, FaEdit} from "react-icons/fa";
import { ToastContainer, toast} from "react-toastify";
import './Styles/userpage.css'
import Header from "../Components/Header";

const UserPage = (props) =>{
    const navigate = useNavigate()
    const [blog,setBlog] = useState(null)
    const [isActive, isSetActive] = useState('false')
    const [isDelete, isSetDelete] = useState('false')
    let {id} = useParams()
    let users = props.user
    let user = users.find(u => u._id ===id)
  
    
    const[editForm, setEditForm] = useState(user)

    const handleChange = event =>{
        setEditForm({...editForm, [event.target.name]:event.target.value})
    }

    const handleSubmit = event =>{

        event.preventDefault()
        props.updatedUser(editForm, id)
        navigate('/home')
     
    }

    const deleteAccount = () =>{
          toast("Are you sure?")
    }

    const realDeleteButton = () =>{
        props.deleteUser(id)
        navigate('/')
    }

   const handleToggle = () =>{
       isSetActive(!isActive)
   }

   const toggleDelete =() =>{
       isSetDelete(!isDelete)
   }




    useEffect(()=>{
        const getBlogData = async ()=>{
            const response = await fetch(`https://myfacegram-backend.herokuapp.com/user/${id}/blog`)
            const data = await response.json()
            setBlog(data)
            console.log(data)
        }
        getBlogData()
    },[id])

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }


    const loaded = () => {
        return blog.map((blogs,idx)=>(
            <div key={idx}>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img className="is-rounded"src="https://i.imgur.com/ON62Y4U.jpg" alt="jonny"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>Jonny San(Admin)</strong> <small>@kaeriv93</small> <small>{formatDate(blogs.createdAt)}</small>
                                    <br/>
                                    {blogs.content}
                                </p>
                            </div>
                            <div className='level-left'>
                                <span className="icon is-small">
                                    <FaHeart/>
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
                <br/>
            </div>
        ))
    }
    



    return blog ?(
        <>
        <Header/>  
            <div className="cover">
                <img src ={user.coverPicture} alt="coverpicture"/>
            </div>
           <div className="grid-container">
               <div className="box">
                    <div className="user">
                        <img src ={user.avatar} alt={user.firstName}/>
                    <h1 class="title">About Me</h1>
                    <p>{user.description}</p>
                    </div>
                    <br/>
                    <br/>
                    <p className="title is-4">@{user.username}</p>
                    <p>Birthday:{formatDate(user.birthdate)}</p>
                    <p>Name: {user.firstName}
                     {user.lastName}</p>
                    <p>Location: {user.city}</p>
                    <p>From: {user.from}</p>
                    <br/>
         
               </div>
           </div>
           <br/>
            <div className="blog">
                <div className="box admin">
                    <h2 className="title is-5">Admin Posts and Updates!</h2>
                </div>
                {loaded()}
            </div>
            <div className="editform">
                <button onClick={handleToggle}className="edit button is-success"><span className="edit-text">Edit</span><FaEdit/></button>
                <div className={isActive ? "hiddenForm" : null}>
                    <form onSubmit ={handleSubmit} className="nameEdit">
                        <input onChange={handleChange} className="input" type ="text" name="firstName" placeholder="First Name!" value={editForm.firstName}/>
                        <input onChange={handleChange} className="input" type ="text" name="lastName" placeholder="Last Name!" value={editForm.lastName}/>
                        <input onChange={handleChange} className="input" type ="text" name="username" placeholder="Username!!" value={editForm.username}/>
                        <input onChange={handleChange} className="input" type ="text" name="avatar" placeholder="Enter a picture!" value={editForm.avatar}/>
                        <input onChange={handleChange} className="input" type ="text" name="coverPicture" placeholder="Enter a cover picture!" value={editForm.coverPicture}/>
                        <input onChange={handleChange} className="input" type ="text" name="city" placeholder="Enter City!" value={editForm.city}/>
                        <input onChange={handleChange} className="input" type ="text" name="from" placeholder="Where are you from?" value={editForm.from}/>
                        <input onChange={handleChange} className="input" type ="text" name="description" placeholder="Tell us about yourself!" value={editForm.description}/>
                        <input onChange={handleChange} className="input" type ="date" name="birthdate" placeholder="Enter Birthdate" value={editForm.birthdate}/>
                        <br/>
                        <input className="button is-link" type='submit' value="Submit!"/>
                    </form>
                </div>
                    <div onClick={toggleDelete}className="deleteAccount">
                        <button className="button is-danger" onClick={deleteAccount}>Delete Account</button>
                    </div>
                    <div className={isDelete ? "realDelete" : null}>
                        <button className="button is-danger is-outlined" onClick={realDeleteButton}>Real Delete</button>
                    </div>
                <ToastContainer/>
            </div>
        </>
    ): <h1>Loading!</h1>
}

export default UserPage