import React from "react";


export default function Card(){
    return(
        <div className="card">
            <div className="card--img">
                <img src={require(`../images/japan.png`)} alt="" />
            </div>
            <div className="card--text">    
            <div className="card--stats">
                <img src={require(`../images/icon.png`)} alt="" />
                <p className="card-country">JAPAN</p>
                <p className="card--link">View on Google Maps</p>
            </div>
            <div className="card--content">
                <h2 className="card--title">Mount Fuji</h2>
                <p className="card--date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card--date">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
            </div>
        </div>
    )
}