import { FaBirthdayCake } from "react-icons/fa";
import './Styles/rightbar.css'


const Rightbar = (props) =>{
    let users = props.users

    const loaded = () =>{
        return users.map((u,idx)=>(
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
    return users ? (
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