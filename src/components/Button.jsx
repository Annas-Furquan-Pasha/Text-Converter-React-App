import React from 'react';

import '../App.css';

export default function Button(props) {
    return (
        <button className="button btn" onClick={props.onPressed}>
            {props.title}
        </button>
    )
}