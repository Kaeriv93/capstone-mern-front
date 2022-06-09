import {useState,useEffect} from 'react'
import { FaBirthdayCake } from "react-icons/fa";
import './Styles/rightbar.css'


const Rightbar = () =>{
    const [user,setUser] = useState(null)
    const URL = "http://localhost:4000/users/"

    const getUsers = () =>{
        fetch(URL)
        .then(response => response.json())
        .then(data => setUser(data))
    }

    useEffect(()=> getUsers(),[])



    const loaded = () =>{
        return user.map((u,idx)=>(
            <div key = {idx}>
                  <li className='rightBarFriend'>
                        <div className="rightbarImgContainer">
                            <img className="rightbarProfileImg" src={u.avatar} alt={u.firstName}/>
                        </div>
                        <span className="rightbarUsername">{u.firstName}{u.lastName}</span>
                    </li>
            </div>
        ))
    }
    return user ? (
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                <div className='birthdayContainer'>
                    <FaBirthdayCake className='birthdayIcon'/>
                    <br/>
                    <span className="birthdayText"><b>Jesse Broxton</b> and <b>2 other friends</b> have a birthday today!</span>
                </div>
                <img className="generalAssembly" src="https://ga-shop-production-herokuapp-com.global.ssl.fastly.net/assets/images/logo_1200_by_627_1QIVL.jpg" alt="ga"/>
                <h4 className="rightbarTitle">Friends</h4>
                <ul className="rightbarFriendList">
                  {loaded()}
                </ul>
            </div>
        </div>
    ):<h1>..Hmm can't find friends</h1>
}

export default Rightbar