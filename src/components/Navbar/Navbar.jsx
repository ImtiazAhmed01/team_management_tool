
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="pr-9 flex justify-center">
            {/* <Navlink to='/signup'>SignUP</Navlink>
            <Navlink to='/login'>LogIn</Navlink> */}
            <NavLink to='/signup'>SignUP</NavLink>
            <NavLink to='/login'>LogIn</NavLink>
        </div>
    );
};

export default Navbar;