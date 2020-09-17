import React,{useState, useEffect} from 'react'
import HomePage from '../Presentation/Home'

// Logic Test
export default function LogicTest() {
    const array = [3,5,9,15]
    const logicFunction = (value) => {
        for(let i=value.length; i<7; i++){
            const diff = value[value.length - 1] - value[value.length - 2]
            const increaseVal = diff + 2
           value =[...value,(value[value.length - 1] + increaseVal)]
        }
        console.log("Answer : ",value)
    }
    return (
        <div>
            {logicFunction(array)}
            <HomePage />
        </div>
    )
}