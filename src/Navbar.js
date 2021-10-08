import "./functionalComponent.css"
import Classcomp from "./classComponent"
const Navbar = () => {
    
    return(
        <div>
             <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact US</a></li>
            <li><a href="">Portfolio</a></li>
            <Classcomp/>
        </ul>
        
    </nav>
        </div>
    );
   
}
export default Navbar;