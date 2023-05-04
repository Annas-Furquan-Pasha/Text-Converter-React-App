import React from 'react'

import '../App.css'

export default function NavBar(props) {
    return (
        <nav className="navbar">
             <div>Text Converter</div>
            <button className="btn" onClick={()=>props.change("upper")}>upper</button>
            <button className="btn" onClick={()=>props.change("lower")}>lower</button>
            <button className="btn" onClick={()=>props.change("captalize")}>captalize</button>
        </nav>
    )
}