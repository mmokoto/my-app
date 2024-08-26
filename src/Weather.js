import React from "react";
import "./Weather.css";

export default function Weather() {
    return <div className="Weather">
        <form>
            <input type="search"
            placeholder="Enter a city.."
            className="form-control"
             />
             <input type="submit" value="Search" className="btn btn-primary" />
            </form>
        <h1>New York</h1>
        <ul>
            <li> Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
            <div className="col-9">
                <img 
                src="" 
                alt="Mostly Cloudy"/>
            </div>
            6℃
        </div>
        <div className="col-3">
            <ul>
                <li> Precipitation: 15%</li>
                <li>Humidity: 72%</li>
                <li>Wind: 13 km/h</li>
            </ul>
        </div>
        Hello from Weather</div>;
}