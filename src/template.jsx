// import React from 'react'
import "./template.css"
// import bae2 from "./img/bae2.jpg"
function Template(props) {
    return (

            <div className="mainContainer">
            <div className="images">
                <div className="bagimg">
                    <img className="profileImg" src={props.image} alt="bae" />
            </div>
            </div>
            <div className="profileCont">
                <h1>Name: {props.name}</h1>
                <h4>Occupation: {props.occupation}</h4>
                <h4>Email: {props.email}</h4>
                <h4>Password: {props.password}</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit voluptatibus? Numquam, alias quae neque inventore perspiciatis sint illo molestiae veniam. Alias explicabo iusto dolorem facere odit! Dolorum, quisquam amet.</p>

            </div>
            
            <div><button className="btn1">CONTACT</button></div>
            
        </div>

            
        
    )
}
// src\bae2.jpg
export default Template
