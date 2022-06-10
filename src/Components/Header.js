import {Link, useNavigate} from 'react-router-dom'
import { useCookies } from 'react-cookie'
import './Styles/header.css'

const Header = () =>{
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies([])
    
    const logOut = () =>{
        removeCookie('jwt')
        navigate('/login')
    }
    
    return(
     <>
        <div className='header'>
            <nav>
                <Link to='/login'> Login</Link>
                <Link to='/'> Home</Link>
                <button  className="logout" onClick={logOut}>Logout</button>
            </nav>
        </div>
     </>
    )
}

export default Header