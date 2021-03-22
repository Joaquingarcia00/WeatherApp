import React, { useState,useEffect } from 'react';
import { Switch,Route,Link,useParams } from 'react-router-dom'
import './appclima.css' 

const Ciudades = ()=> {
    const [ciudadesjson, setJson] = useState([]);

    const getciudades = ()=>{
    fetch('https://raw.githubusercontent.com/michaelx/climate/master/climate.json')
    .then(response => response.json())
    .then(resp => setJson(resp))
    }
    

    useEffect(()=> { getciudades()})

    return(
        <>
        <ul>
        {ciudadesjson.map( ciudad =>
              <li key={ciudad.id}><Link to={'/'+ciudad.id}>{ciudad.id}- {ciudad.city}, {ciudad.country}</Link></li>        
        )}
        </ul>
        </>
    )
}

const Ciudad =()=>{
    const [paramciudad, setCiudad] = useState([{"id": Number,"city": "","country": ""}])
    const [climi, setClimi]= useState([
            {"high": Number,"low": Number,"dryDays": Number,"snowDays": Number,"rainfall": Number},
            {"high": Number,"low": Number,"dryDays": Number,"snowDays": Number,"rainfall": Number},
            {"high": Number,"low": Number,"dryDays": Number,"snowDays": Number,"rainfall": Number},
            {"high": Number,"low": Number,"dryDays": Number,"snowDays": Number,"rainfall": Number},
            {"high": Number,"low": Number,"dryDays": Number,"snowDays": Number,"rainfall": Number},
            {"high": Number,"low": Number,"dryDays": Number,"snowDays": Number,"rainfall": Number},
            {"high": Number,"low": Number,"dryDays": Number,"snowDays": Number,"rainfall": Number},
            {"high": Number,"low": Number,"dryDays": Number,"snowDays": Number,"rainfall": Number},
            {"high": Number,"low": Number,"dryDays": Number,"snowDays": Number,"rainfall": Number},
            {"high": Number,"low": Number,"dryDays": Number,"snowDays": Number,"rainfall": Number},
            {"high": Number,"low": Number,"dryDays": Number,"snowDays": Number,"rainfall": Number},
            {"high": Number,"low": Number,"dryDays": Number,"snowDays": Number,"rainfall": Number}
        ])
    let params = useParams();
    const getciudad= ()=>{
        fetch('https://raw.githubusercontent.com/michaelx/climate/master/climate.json')
        .then(response => response.json())
        .then(ciudades => {  
            const filtrada = ciudades.find (ciudad => ciudad.id === parseInt(params.dd));
            setCiudad(filtrada)
            setClimi(filtrada.monthlyAvg)
            
        })
    }


    useEffect(() => {getciudad()})


    // average high and low temperature, dry days, snow days, and rainfall, for every month.
    return(
        <>
        <h1>{paramciudad.city}, {paramciudad.country}</h1>
        <br/>
        <p><Link to="/">Regresar a la home</Link></p>
        <br/>
        <h2>Weather, monthly average</h2>
        <table>
            <tbody>
                <tr>
                <th colSpan="2">January</th>
                </tr>
                <tr>
                    <td>Average high temperature</td><td>{climi[0].high}°</td>
                </tr>
                <tr>
                    <td>Average low temperature</td><td>{climi[0].low}°</td>
                </tr>
                <tr>
                    <td>Average dry days</td><td>{climi[0].dryDays}</td>
                </tr>
                <tr>
                    <td>Average snow days</td><td>{climi[0].snowDays}</td>
                </tr>
                <tr>
                <th colSpan="2">February</th>
                </tr>
                <tr>
                    <td>Average high temperature</td><td>{climi[1].high}°</td>
                </tr>
                <tr>
                    <td>Average low temperature</td><td>{climi[1].low}°</td>
                </tr>
                <tr>
                    <td>Average dry days</td><td>{climi[1].dryDays}</td>
                </tr>
                <tr>
                    <td>Average snow days</td><td>{climi[1].snowDays}</td>
                </tr>
                <tr>
                <th colSpan="2">March</th>
                </tr>
                <tr>
                    <td>Average high temperature</td><td>{climi[2].high}°</td>
                </tr>
                <tr>
                    <td>Average low temperature</td><td>{climi[2].low}°</td>
                </tr>
                <tr>
                    <td>Average dry days</td><td>{climi[2].dryDays}</td>
                </tr>
                <tr>
                    <td>Average snow days</td><td>{climi[2].snowDays}</td>
                </tr>
                <tr>
                <th colSpan="2">April</th>
                </tr>
                <tr>
                    <td>Average high temperature</td><td>{climi[3].high}°</td>
                </tr>
                <tr>
                    <td>Average low temperature</td><td>{climi[3].low}°</td>
                </tr>
                <tr>
                    <td>Average dry days</td><td>{climi[3].dryDays}</td>
                </tr>
                <tr>
                    <td>Average snow days</td><td>{climi[3].snowDays}</td>
                </tr>
                <tr>
                <th colSpan="2">May</th>
                </tr>
                <tr>
                    <td>Average high temperature</td><td>{climi[4].high}°</td>
                </tr>
                <tr>
                    <td>Average low temperature</td><td>{climi[4].low}°</td>
                </tr>
                <tr>
                    <td>Average dry days</td><td>{climi[4].dryDays}</td>
                </tr>
                <tr>
                    <td>Average snow days</td><td>{climi[4].snowDays}</td>
                </tr>
                <tr>
                <th colSpan="2">June</th>
                </tr>
                <tr>
                    <td>Average high temperature</td><td>{climi[5].high}°</td>
                </tr>
                <tr>
                    <td>Average low temperature</td><td>{climi[5].low}°</td>
                </tr>
                <tr>
                    <td>Average dry days</td><td>{climi[5].dryDays}</td>
                </tr>
                <tr>
                    <td>Average snow days</td><td>{climi[5].snowDays}</td>
                </tr>
                <tr>
                <th colSpan="2">July</th>
                </tr>
                <tr>
                    <td>Average high temperature</td><td>{climi[6].high}°</td>
                </tr>
                <tr>
                    <td>Average low temperature</td><td>{climi[6].low}°</td>
                </tr>
                <tr>
                    <td>Average dry days</td><td>{climi[6].dryDays}</td>
                </tr>
                <tr>
                    <td>Average snow days</td><td>{climi[6].snowDays}</td>
                </tr>
                <tr>
                <th colSpan="2">August</th>
                </tr>
                <tr>
                    <td>Average high temperature</td><td>{climi[7].high}°</td>
                </tr>
                <tr>
                    <td>Average low temperature</td><td>{climi[7].low}°</td>
                </tr>
                <tr>
                    <td>Average dry days</td><td>{climi[7].dryDays}</td>
                </tr>
                <tr>
                    <td>Average snow days</td><td>{climi[7].snowDays}</td>
                </tr><tr>
                <th colSpan="2">September</th>
                </tr>
                <tr>
                    <td>Average high temperature</td><td>{climi[8].high}°</td>
                </tr>
                <tr>
                    <td>Average low temperature</td><td>{climi[8].low}°</td>
                </tr>
                <tr>
                    <td>Average dry days</td><td>{climi[8].dryDays}</td>
                </tr>
                <tr>
                    <td>Average snow days</td><td>{climi[8].snowDays}</td>
                </tr><tr>
                <th colSpan="2">October</th>
                </tr>
                <tr>
                    <td>Average high temperature</td><td>{climi[9].high}°</td>
                </tr>
                <tr>
                    <td>Average low temperature</td><td>{climi[9].low}°</td>
                </tr>
                <tr>
                    <td>Average dry days</td><td>{climi[9].dryDays}</td>
                </tr>
                <tr>
                    <td>Average snow days</td><td>{climi[9].snowDays}</td>
                </tr><tr>
                <th colSpan="2">November</th>
                </tr>
                <tr>
                    <td>Average high temperature</td><td>{climi[10].high}°</td>
                </tr>
                <tr>
                    <td>Average low temperature</td><td>{climi[10].low}°</td>
                </tr>
                <tr>
                    <td>Average dry days</td><td>{climi[10].dryDays}</td>
                </tr>
                <tr>
                    <td>Average snow days</td><td>{climi[10].snowDays}</td>
                </tr>
                <tr>
                <th colSpan="2">December</th>
                </tr>
                <tr>
                    <td>Average high temperature</td><td>{climi[11].high}°</td>
                </tr>
                <tr>
                    <td>Average low temperature</td><td>{climi[11].low}°</td>
                </tr>
                <tr>
                    <td>Average dry days</td><td>{climi[11].dryDays}</td>
                </tr>
                <tr>
                    <td>Average snow days</td><td>{climi[11].snowDays}</td>
                </tr>
                
            </tbody>
        </table>
        
        </>
    )




}


const App =()=>(
    <>
        <Switch>
        <Route exact path="/"><h1>Todas las ciudades</h1><Ciudades/></Route>
        <Route exact path="/:dd"><Ciudad/></Route>
        </Switch>
    </>
)
export default App;



