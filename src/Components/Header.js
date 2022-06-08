import {Link, useNavigate} from 'react-router-dom'
import { useCookies } from 'react-cookie'




const Header = () =>{
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies([])
    
    const logOut = () =>{
        removeCookie('jwt')
        navigate('/login')
    }
    
    return(
     <>
        <nav>
            <Link to='/login'> Login</Link>
            {/* <Link to='/register'> Register</Link> */}
            <Link to='/'> Home</Link>
            <button onClick={logOut}>Logout</button>
        </nav>
     </>
    )
}

export default Header