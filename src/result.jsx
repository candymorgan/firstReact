// import React from 'react'
import "./functionalComponent.css"
import React, { useState } from "react";

function Result() {
    const [h1, setMessage] = useState("Check Your Result");
    const [name, setName] = useState("");
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [sum, setSum] = useState(num1 + num2);
    function total() {
        let result = num1 + num2;
        setSum(result)
        console.log(sum);
        if (sum <= 40) {
            setMessage(name.toUpperCase() + " scored " + sum + " with Grade D and will carryOver the Course")
        } else if (sum >= 40 && sum <= 45) {
            setMessage(name.toUpperCase() + " scored " + sum + " with Grade C and will Resit the Exam")
        } else if (sum >=45 && sum <= 65) {
            setMessage(name.toUpperCase() + " scored " + sum + " with Grade B and has Passed the Exam")
        } else if (sum >= 65 && sum <= 100) {
            setMessage(name.toUpperCase() + " scored " + sum + " with Grade A and will receive and Award")
        }else{
            setMessage("Invalid Result")
        }


    }


    return (
        <div className="boxCont">
            <div className="result-card">
                <h2>{num1 + num2}</h2>
                <div className="input-fields">
                    <div className="input1" onChange={e => setName(e.target.value)}><input type="text" value={name} placeholder="Enter Name" /></div>
                    <div className="input1" onChange={e => setNum1(+e.target.value)}><input type="number" value={num1} placeholder="Enter Score1" /></div>
                    <div className="input1" onChange={e => setNum2(+e.target.value)}><input type="number" value={num2} placeholder="Enter Score2" /></div>
                </div>
                <button className="btn1" onClick={() =>  {setSum(num1 + num2);total() }}>Check Result</button>
            </div>

        </div>
    )

}
export default Result