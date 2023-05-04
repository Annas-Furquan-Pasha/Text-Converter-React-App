import React from 'react';
import Button from './Button.jsx';
import TextArea from './TextArea.jsx';
import NavBar from './NavBar.jsx';

import '../App.css';

export default function Page() {

    let mode = "captalize"

    function handler() {
        if(mode === "captalize") {
            setText(prev => (prev.charAt(0).toUpperCase() + prev.slice(1)))
        } else if(mode === "upper") {
            setText(prev => prev.toUpperCase())
        } else {
            setText(prev => prev.toLowerCase())
        }
    }
    
    const upper = <Button 
                    title= "UpperCase"
                    onPressed = {handler}
                    />
    
    const lower = <Button 
                    title= "LowerCase"
                    onPressed = {handler}
                    />
    
    const captilize = <Button 
                        title= "Captalize"
                        onPressed = {handler}
                        />
    
    let [selectedButton, setButton] = React.useState(captilize)
    let [text, setText] = React.useState("")

    function change(a) {
      
        if(a === "captalize") {
            mode = "captalize"
            setButton(captilize)
        } else if(a === "upper") {
            mode = "upper"
            setButton(upper)
        } else {
            mode = "lower"
            setButton(lower)
        }
    }
                        
    return (
    <main className='main--container'>
        <NavBar 
            change = {change}
        />
        <TextArea 
          text = {text}
          func = {event => setText(event.target.value)}
        />
        <div className="for--buttons">
        {selectedButton}
        <button className="btn" onClick={() => setText("")}>Clear</button>
        </div>
        
    </main>
    )
}