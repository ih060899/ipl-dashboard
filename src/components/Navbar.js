import './Navbar.scss';
import { ReactComponent as Home } from '../img/icons8-home.svg';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>
                <Home className='home-icon' fill='white' stroke='white' />
            </Link>
        </div>
    );
};

export default Navbar;
