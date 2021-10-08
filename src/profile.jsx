import React from 'react'
import Template from "./template"
import "./template.css"
import bae1 from "./bae1.jpg"
import bae2 from "./img/bae2.jpg"
import one from "./1.jpg"



function Profile() {
    return (
        <div className="display">
      <Template image = {bae2} name="Candy Morgan" occupation="Programmer" email="candy@gmail.com" password="123"/>
      <Template image = {bae1} name="Grace Goe" occupation="Lab Scientist" email="grace@gmail.com" password="2468"/>
      <Template image = {one} name="Yatch Hudson" occupation="Farmer" email="yatch@gmail.com" password="0866" />
      <Template  name="Yerims Winnie" occupation="Chef" email="winnie@gmail.com" password="7375" />
      <Template  name="princess Bliss" occupation="Activist" email="bliss@gmail.com" password="7752" /> 
        </div>
    )
}

export default Profile

