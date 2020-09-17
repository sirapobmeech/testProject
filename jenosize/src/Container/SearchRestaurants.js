import React,{useState} from 'react'
import Presentation from '../Presentation/SearchRestaurants'
import LayOut from '../Component/Layout'
import {getPlace} from '../Unitility/Service'

let placedata = JSON.parse(sessionStorage.getItem('data'))
export default function Search() {
    const [place, setPlace] = useState( placedata ? placedata : [])
    const [loading,setLoading] = useState(false)
    
    const onChangePlace = (text) => {
        setLoading(true)
        getPlace(text)
            .then((res) => {
                if(res.data.error_message){
                    console.log("dsdasdas")
                    (window.alert(res.data.error_message))
                }
                else{
                    setPlace(res.data.candidates)
                    sessionStorage.setItem('data',JSON.stringify(res.data.candidates))
                    setLoading(false)
                }
            })
            .catch((err) => {
                alert("error : Google api error")
                setLoading(false)
            })
    }
    return (
        <LayOut onChangePlace={onChangePlace}>
            <Presentation place={place} loading={loading} />
        </LayOut>
    )
}