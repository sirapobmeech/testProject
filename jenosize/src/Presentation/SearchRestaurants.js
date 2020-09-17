import React from 'react'
import { getImage } from '../Unitility/Service'

export default function Search({ place, loading }) {
    return (
        <div className="container">
            {!loading && <div>
                {(place.length > 0)  ? <div className="mb-5">
                    {place.map((placeElem) =>
                        <div style={{ marginTop: 100 }} className="row">
                            <div className="col-5">
                                <img style={{ height: 400, maxWidth: "100%" }} className="shadow rounded" src={getImage(placeElem.photos[0].photo_reference)} />
                            </div>
                            <div style={{ padding: '2rem' }} className="col-7 shadow bg-white rounded">
                                {placeElem.opening_hours && placeElem.opening_hours.open_now && <div>
                                    {placeElem.opening_hours.open_now ? <p className="text-success">เปิดบริการ</p> : <p className="text-danger">ปิดบริการ</p>}
                                </div>}
                                <p>name : {placeElem.name}</p>
                                <p>address : {placeElem.formatted_address}</p>
                            </div>
                        </div>)}
                </div> : <h1 style={{ marginTop: 100 }} className="text-center text-danger">ไม่พบข้อมูล โปรดลองค้นหาใหม่อีกครั้ง</h1>}
            </div>}
            {loading && <div>
                <h1 style={{ marginTop: 100 }} className="text-center text-muted">กำลังโหลด</h1>
            </div>}
        </div>
    )
}