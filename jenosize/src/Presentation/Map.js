import React from 'react'
import LayOut from '../Component/Layout'

export default function Map() {
    return (
        <LayOut>
            <div  className="container">
                <div className="d-flex flex-column justify-content-center h-100">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.08294852342!2d100.5141033148561!3d13.893988197725918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e284b1217da409%3A0x9eaa98a3f7a953b9!2sJENOSIZE%20Digital%20Group%20%7C%20Full%20Service%20Digital%20Agency%20in%20Thailand%20%2C%20Social%20Media%20Agency!5e0!3m2!1sen!2sth!4v1600230871154!5m2!1sen!2sth" style={{ height : "450px",frameborder: "0", border: "0",marginTop : 50 }} allowfullscreen="" aria-hidden="false" tabindex="0" />
                    <h1 className="text-center">Google Map</h1>
                </div>
            </div>
            <span style={{marginBottom : 50}} ></span>
        </LayOut>
    )
}