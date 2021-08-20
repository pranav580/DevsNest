
const Map=({locationData})=>{

    return(
        <div className="card">
                <div><i class="fas fa-map-marker-alt"></i><b>{locationData.location.name}</b></div>
                <div><img src={locationData.current.condition.icon} alt="img" /></div>
                <div>{locationData.current.temp_c} {<span>&deg;C</span>}  |  {locationData.current.temp_f} {<span>&deg;F</span>}</div>
                <div>{locationData.current.condition.text}</div>
                <hr />
                <div className="Down">
                    <div><i class="fas fa-wind"></i></div>
                    <div><i class="fas fa-tint"></i></div>
                    <div><i class="fas fa-cloud-showers-heavy"></i></div>
                </div>
                <div className="Down">
                    <div>{locationData.current.wind_kph} km/h</div>
                    <div>{locationData.current.humidity}%</div>
                    <div>{locationData.current.precip_mm}mm</div>
                </div>

        </div>
    )
}

const Nothing =()=>{
    return(
        <div className="Top">
        </div>
    )
}
export {Map , Nothing};