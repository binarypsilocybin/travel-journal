import React from "react";


export default function Card(props){
    return(
        <div className="card">
            <div className="card--img">
                <img src={require(`../images/${props.item.coverImg}`)} alt="" />
            </div>
            <div className="card--text">    
            <div className="card--stats">
                <img src={require(`../images/icon.png`)} alt="" />
                <p className="card-country">{props.item.location}</p>
                <p className="card--link">View on Google Maps</p>
            </div>
            <div className="card--content">
                <h2 className="card--title">{props.item.title}</h2>
                <p className="card--date">{props.item.date}</p>
                <p className="card--date">{props.item.description}</p>
            </div>
            </div>
        </div>
    )
}