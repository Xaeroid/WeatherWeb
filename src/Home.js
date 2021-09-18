import axios from 'axios';
import { useEffect, useState } from 'react';
const Home = () => {
    const[search,setSearch] = useState(null);
    const[submit, setSubmit] = useState(false);
    const[temp, setTemp] = useState(null);
    const[visibility, setVisibility] = useState(null);
    const[coord, setCoord] = useState(null);
    const[wind, setWind] = useState(null);
    const key = "8c1232388485fdd3d049c1223ae6fb88";

    const val = document.querySelector('.values');
        
    useEffect(()=>{
        const req = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8c1232388485fdd3d049c1223ae6fb88`;
            const result = await axios.get(url);
            console.log(result);
            console.log(result.data.main.temp);
            setTemp(result.data.main.temp);
            setVisibility(result.data.visibility);
            setCoord(result.data.coord);
            setWind(result.data.wind);
        }
        req();
    },[search])      
    return(
        <>
            <div className = "box">
                <div className= "searchHeader">Enter the city name</div>
                <input
                type = "text"
                className = "searchField"
                onChange = {(event)=>{
                    setSearch(event.target.value);
                    setSubmit(false);
                }}>    
                </input>
                <div className = "button" onClick = {()=>setSubmit(true)}>ENTER</div>
            </div>    
            <div className = "values">
                {
                    !(submit)?(
                    <h1>{null}</h1>
                    ): (
                        <>
                            <div className="temp">
                                <h2>TEMPERATURE - {temp}(degree F)</h2>
                            </div>
                            <div className="visibility">
                                <h2>VISIBILITY - {visibility}</h2>
                            </div>
                            <div className="coord">
                                <h2>COORDINATE(LONGITUDE) - {coord.lon}</h2>
                                <h2>COORDINATE(LATITUDE) - {coord.lat}</h2>
                            </div>
                            <div className="wind">
                                <h2>WIND SPEED - {wind.speed}(m/s)</h2>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Home;