import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function LayOut(props) {
    return (
        <div>
            <Header onChangePlace={props.onChangePlace}/>
                {props.children}
            <Footer /> 
        </div>
    )
}