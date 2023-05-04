import React from 'react';

import '../App.css'

export default function TextArea(props) {
    return (
        <textarea name="enter" id="textarea" cols="20" rows="10" value={props.text} onChange={props.func}/>
    )
}