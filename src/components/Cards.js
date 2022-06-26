import React from "react";
import locationMarker from "../images/card-location-marker.png";

export default function Navbar(props) {
    return (
        <>
            <div className="card-container">
                <div className="cards-styling">
                    <img src={props.details.imageUrl} className="card-image"></img>
                    <div className="card-details">
                        <img src={locationMarker} className="card-location-marker"></img>
                        <span className="card-location">{props.details.location}</span>
                        <a href={props.details.googleMapsUrl} target="_blank" className="card-maps">View on google maps</a>
                        <span className="card-title">{props.details.title}</span>
                        <span className="card-dates">{props.details.startDate} - {props.details.endDate}</span>
                        <span className="card-description">{props.details.description}</span>
                    </div>
                </div>
                <hr className="card-separator"></hr>
            </div>
           
        </>
    )
}