import Posts from "../Components/Posts"
import Sidebar from "../Components/Sidebar"
import Rightbar from "../Components/Rightbar"
import './Styles/home.css'
const Home = () =>{


    return(
        <>
            <div className="homeContainer">
                <Sidebar/>
                <Posts/>
                <Rightbar/> 
            </div>
        </>
    )
}

export default Home