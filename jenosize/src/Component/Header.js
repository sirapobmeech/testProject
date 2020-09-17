import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ onChangePlace }) {
    const [text, setText] = useState('')
    const enterFunction = (event) => {
        if (event.key === 'Enter') {
            onChangePlace(text)
        }
    }
    return (
        <div>
            <div style={{ height: 100, padding: "1rem", marginBottom: 50 }} className="d-flex flex-column justify-content-center w-100 shadow-sm bg-white rounded">
                <div className="d-flex justify-content-between">
                    <div className="logo">
                        <Link to="/"><img style={{height : 100}} src={process.env.PUBLIC_URL + '/logo.png'} /></Link>
                    </div>
                    <div className="h-100 d-flex flex-column justify-content-center">
                        <div>
                            <span>Search</span>
                        </div>
                        <div>
                            <input value={text} onChange={(e) => setText(e.target.value)} onKeyPress={enterFunction} ></input><img onClick={() => onChangePlace(text)} style={{ height: 25, marginLeft: 5 }} src={process.env.PUBLIC_URL + '/search.png'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-map">
                <Link to="/map"><button style={{ top: 120, left: "1rem" }} className="position-absolute btn btn-primary">Map</button></Link>
            </div>
        </div>
    )
}