import './Styles/rightbar.css'
import { FaBirthdayCake } from "react-icons/fa";


const Rightbar = () =>{
    return(
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
                    <li className='rightBarFriend'>
                        <div className="rightbarImgContainer">
                            <img className="rightbarProfileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBmsVUcq2RV1ANFJWpYzrJj07GVMqe24fHA&usqp=CAU" alt="friend"/>
                        </div>
                        <span className="rightbarUsername">Spongebob</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Rightbar