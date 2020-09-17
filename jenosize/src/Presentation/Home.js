import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="container vh-100">
            <div className="d-flex flex-column justify-content-center h-100">
                <div className="d-flex justify-content-center">
                    <h1 style={{fontSize : 72}}>JEN<span style={{color:"#1fc8db"}}>O</span>SIZE</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to="/Jenosize"><button className="btn btn-primary">เข้าสู่เว็บไซต์</button></Link>
                </div>
            </div>
        </div>
    )
}