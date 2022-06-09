import './Styles/sidebar.css'
import { FaRocketchat,FaPlayCircle,FaUserFriends,FaRegBookmark,FaSchool,FaRss,FaBriefcase, FaQuestionCircle } from 'react-icons/fa';

const Sidebar = () =>{
    return(
    <div className="sidebar">
        <div className='sidebar-wrapper'>
            <ul className ="sidebarList">
                <li className='sidebarListItem'>
                    <FaRss className='sidebarIcon'/>
                    <span className="sidebarListeItemText">Feed</span>
                </li>
                <li className='sidebarListItem'>
                    <FaPlayCircle className='sidebarIcon'/>
                    <br/>
                    <span className="sidebarListeItemText">Play</span>
                </li>
                <li className='sidebarListItem'>
                    <FaRocketchat className='sidebarIcon'/>
                    <br/>
                    <span className="sidebarListeItemText">Chat</span>
                </li>
                <li className='sidebarListItem'>
                    <FaUserFriends className='sidebarIcon'/>
                    <span className="sidebarListeItemText">Group</span>
                </li>
                <li className='sidebarListItem'>
                    <FaRegBookmark className='sidebarIcon'/>
                    <span className="sidebarListeItemText">Event</span>
                </li>
                <li className='sidebarListItem'>
                    <FaQuestionCircle className='sidebarIcon'/>
                    <span className="sidebarListeItemText">Quest</span>
                </li>
                <li className='sidebarListItem'>
                    <FaSchool className='sidebarIcon'/>
                    <span className="sidebarListeItemText">Course</span>
                </li>
                <li className='sidebarListItem'>
                    <FaBriefcase className='sidebarIcon'/>
                    <br/>
                    <span className="sidebarListeItemText">Jobs</span>
                </li>

            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className='sidebarHr'/>
            <ul className ="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqm8sWP8zMOCAdImEeAkXfTyzZHnZfR_2aTtZzNTd-5KlabmeW1ml4i2wRiZBXy9EQPI&usqp=CAU" alt="dummy-pic"/>
                    <span className ="sidebarFriendName">Tom Anderson</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqm8sWP8zMOCAdImEeAkXfTyzZHnZfR_2aTtZzNTd-5KlabmeW1ml4i2wRiZBXy9EQPI&usqp=CAU" alt="dummy-pic"/>
                    <span className ="sidebarFriendName">Tom Anderson</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqm8sWP8zMOCAdImEeAkXfTyzZHnZfR_2aTtZzNTd-5KlabmeW1ml4i2wRiZBXy9EQPI&usqp=CAU" alt="dummy-pic"/>
                    <span className ="sidebarFriendName">Tom Anderson</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqm8sWP8zMOCAdImEeAkXfTyzZHnZfR_2aTtZzNTd-5KlabmeW1ml4i2wRiZBXy9EQPI&usqp=CAU" alt="dummy-pic"/>
                    <span className ="sidebarFriendName">Tom Anderson</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqm8sWP8zMOCAdImEeAkXfTyzZHnZfR_2aTtZzNTd-5KlabmeW1ml4i2wRiZBXy9EQPI&usqp=CAU" alt="dummy-pic"/>
                    <span className ="sidebarFriendName">Tom Anderson</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqm8sWP8zMOCAdImEeAkXfTyzZHnZfR_2aTtZzNTd-5KlabmeW1ml4i2wRiZBXy9EQPI&usqp=CAU" alt="dummy-pic"/>
                    <span className ="sidebarFriendName">Tom Anderson</span>
                </li>
            </ul>
        </div>
    </div>
       
    )
}

export default Sidebar