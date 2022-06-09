import Posts from "../Components/Posts"
import Sidebar from "../Components/Sidebar"
import Rightbar from "../Components/Rightbar"
import './Styles/home.css'
const Home = (props) =>{
    let users = props.user


    return(
        <>
            <div className="homeContainer">
                <Sidebar/>
                <Posts users={users}/>
                <Rightbar users={users}/> 
            </div>
        </>
    )
}

export default Home