import { IoMdArrowDown } from "react-icons/io";
import NavBar from "./nav/NavBar";
import NavDropdown from "./nav/NavDropDown";
import NavItem from "./nav/NavItem";

const PopulatedNavBar = () => {
    return (
        <NavBar>
            <NavItem>SPEED</NavItem>
            <NavItem route="/" end>Home</NavItem>
            <NavItem dropdown route="/articles">Articles <IoMdArrowDown />
                <NavDropdown>
                    <NavItem route="/articles">View Articles</NavItem>
                    <NavItem route="/articles/new">Submit new</NavItem>
                </NavDropdown>
            </NavItem>
        </NavBar>
    )
}

export default PopulatedNavBar;