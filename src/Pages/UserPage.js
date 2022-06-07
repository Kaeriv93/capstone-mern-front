import {useParams } from "react-router-dom"
import './Styles/userpage.css'
const UserPage = (props) =>{
    let {id} = useParams()
    let users = props.user
    let user = users.find(u => u._id ===id)
    console.log(user)
    return(
        <>  
            <div className="cover-picture">
                <img src={user.coverPicture} alt="coverpicture"/>
            </div>
            <div className="container">
                <div className="links">
                    <ul>
                        <li>Something</li>
                        <li>Something</li>
                        <li>Something</li>
                        <li>Something</li>
                        <li>Something</li>
                        <li>Something</li>
                        <li>Something</li>
                    </ul>
                </div>
                <div>
                    <h1>Hello! {user.firstName} {user.lastName}</h1>
                    <img src={user.avatar} alt ={user.firstName}/>
                    <h3>{user.username}</h3>
                </div>
                <div>
                    <p>Birthday{user.birthdate}</p>
                    <p>Location:</p>
                    <p>{user.city}</p>
                    <p>From:</p>
                    <p>{user.from}</p>
                </div>
                <div>
                    <h2>{user.followings}</h2>
                    <h2>{user.followers}</h2>
                </div>
            </div>
                <div className="user-desc">
                    <p>{user.description}</p>
                </div>
                <div>
                    {user.blog}
                </div>
        </>
    )
}

export default UserPage