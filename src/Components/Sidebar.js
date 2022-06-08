import '../Pages/Styles/sidebar.css'
import { FaRocketchat,FaPlayCircle,FaUserFriends,FaRegBookmark,FaRegQuestionCircle, FaSchool,FaRss,FaBriefcase } from 'react-icons/fa';

const Sidebar = () =>{
    return(
    <div className="sidebar-container">
            <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FaRss className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <FaRocketchat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <FaPlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <FaUserFriends className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <FaRegBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <FaBriefcase className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <FaRegQuestionCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <FaSchool className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <ul className="sidebarFriendList">
          {/* {Users.map((u) => (
              <CloseFriend key={u.id} user={u} />
            ))} */}
        </ul>
      </div>
    </div>
        </div>
    )
}

export default Sidebar