import "./App.css"
import Navbar from "./Navbar";
import Compstate from "./useState";

const Hello = () =>{
    return(
        <div>
            <Navbar/>
            <h1>This is a functional component</h1>
            <h4>This is another functional component</h4>
            <div className="cont">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quia accusantium qui mollitia officia repellat ratione optio, explicabo placeat reprehenderit nulla veniam esse, eos, provident cum ipsam. Deserunt, assumenda reiciendis.</p>
                <button className="btn">Click me</button>
                <Compstate/>
                
            </div>
        </div>
    );
}
export default Hello;