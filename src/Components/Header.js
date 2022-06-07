import {Link} from 'react-router-dom'

const Header = () =>{
    return(
     <>
        <nav>
            <Link to='/login'> Login</Link>
            <Link to='/register'> Register</Link>
            <Link to='/'> Home</Link>
        </nav>
     </>
    )
}

export default Header