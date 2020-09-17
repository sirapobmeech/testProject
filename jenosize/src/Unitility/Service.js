
import axios from 'axios'

//นำ Google api key มาใส่ที่นี่------------------
const YOUR_API_KEY = "ADD_GOOGLE_API_KEY"
//------------------------------------------

// api Search Place from textquery
export const getPlace = (textInput) => {
    return new Promise((resolve, reject) => {
        axios(`/maps/api/place/findplacefromtext/json?input=${textInput}&inputtype=textquery&fields=opening_hours,business_status,formatted_address,icon,name,photos,place_id,plus_code,types&key=${YOUR_API_KEY}`)
            .then(response => {
                return resolve(response)
            })
            .catch((err) => {
                return reject(err)
            })
    })
}

// Get Image by photo reference
export const getImage = (photoReference) => {
    const baseUrl = `https://maps.googleapis.com/maps/api/place/photo`
    const maxHeight = 400
    const key = YOUR_API_KEY
    const url = `${baseUrl}?maxheight=${maxHeight}&photoreference=${photoReference}&key=${key}`
    return url
}
