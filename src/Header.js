import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className='header-main'>
                <Link to="/" className='text'> Home</Link>
                <Link to="/about" className='text'> About</Link>
                <Link to="/services" className='text'> Services</Link>
                <Link to="/portfolio" className='text'> Portfolio</Link>
                <Link to="/blogs" className='text'> Blogs</Link>
                <Link to="/connectUs" className='text'> Connect us</Link>
            </div>
        </div>
    )
} export default Header;