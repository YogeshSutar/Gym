import {Link} from 'react-router-dom';
import '../Styles/navbar.css';
const Navbar=()=>{
    return(
        <>
        <nav>
        <ul className='ulcontent'> 
            <li className='licontent'><Link to="/">HOME</Link></li>
            <li className='licontent'><Link to="/Dashboard">DASHBOARD</Link></li>
            <li className='licontent'><Link to="/AboutUs">ABOUT US</Link></li>
            <li className='licontent'><Link to="/ContactUs">CONTACT US</Link></li>
        </ul>
        </nav>
        </>
    )
}


export default Navbar