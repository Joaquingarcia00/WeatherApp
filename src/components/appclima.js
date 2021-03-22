import React, { useState,useEffect} from 'react';
import { Switch,Route,Link,useParams } from 'react-router-dom'
  import './appclima.css' 
  const Ciudades = ()=> {
    const [ciudadesjson, setJson] = useState([]);
    const getciudades = ()=>{

    fetch('https://raw.githubusercontent.com/michaelx/climate/master/climate.json')
        .then(response => response.json())
        .then(resp =>setJson( resp.sort(function (a, b) {
        return   a.country.localeCompare(b.country)
        })))
    };

    useEffect(()=> { getciudades()}, []);
  
    return(
        <>
  

        <ul>
        {
        ciudadesjson.map( ciudad =><li key={ciudad.id}><Link class='linkcity'to={'/city/'+ciudad.id}>{ciudad.city}, {ciudad.country}</Link></li> )
        }
        </ul>
        </>
    );
  };
  
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
    function getciudad(){
        fetch('https://raw.githubusercontent.com/michaelx/climate/master/climate.json')
        .then(response => response.json())
        .then(ciudades => {  
            const filtrada = ciudades.find (ciudad => ciudad.id === parseInt(params.dd));
            setCiudad(filtrada)
            setClimi(filtrada.monthlyAvg)
        })
    }
    useEffect(() => {getciudad()}, [])

    return(
        <>
        <h2>{paramciudad.city}, {paramciudad.country}</h2>
        
        <p>Weather, monthly average</p>
        <hr/>
        <div id="divtable">
        <table>
          <tbody>
            <tr>
              <th>Parameter/Month</th>
              <th>January</th>
              <th>February</th>
              <th>March</th>
              <th>April</th>
              <th>May</th>
              <th>June</th>
              <th>July </th>
              <th>August</th>
              <th>September</th>
              <th>October</th>
              <th>November</th>
              <th>December</th>
            </tr>
            <tr>
            <td>Average high temperature</td><td>{climi[0].high}°</td>
            <td>{climi[1].high}°</td>
            <td>{climi[2].high}°</td>
            <td>{climi[3].high}°</td>
            <td>{climi[4].high}°</td>
            <td>{climi[5].high}°</td>
            <td>{climi[6].high}°</td>
            <td>{climi[7].high}°</td>
            <td>{climi[8].high}°</td>
            <td>{climi[9].high}°</td>
            <td>{climi[10].high}°</td>
            <td>{climi[11].high}°</td>
            </tr>
            <tr>
            <td>Average low temperature</td><td>{climi[0].low}°</td>
            <td>{climi[1].low}°</td>
            <td>{climi[2].low}°</td>
            <td>{climi[3].low}°</td>
            <td>{climi[4].low}°</td>
            <td>{climi[5].low}°</td>
            <td>{climi[6].low}°</td>
            <td>{climi[7].low}°</td>
            <td>{climi[8].low}°</td>
            <td>{climi[9].low}°</td>
            <td>{climi[10].low}°</td>
            <td>{climi[11].low}°</td>
            </tr>
            <tr>
              <td>Average dry days</td><td>{climi[0].dryDays}</td>
              <td>{climi[1].dryDays}</td>
              <td>{climi[2].dryDays}</td>
              <td>{climi[3].dryDays}</td>
              <td>{climi[4].dryDays}</td>
              <td>{climi[5].dryDays}</td>
              <td>{climi[6].dryDays}</td>
              <td>{climi[7].dryDays}</td>
              <td>{climi[8].dryDays}</td>
              <td>{climi[9].dryDays}</td>
              <td>{climi[10].dryDays}</td>
              <td>{climi[11].dryDays}</td>
            </tr>
            <tr>
            <td>Average snow days</td><td>{climi[0].snowDays}</td>
            <td>{climi[1].snowDays}</td>
            <td>{climi[2].snowDays}</td>
            <td>{climi[3].snowDays}</td>
            <td>{climi[4].snowDays}</td>
            <td>{climi[5].snowDays}</td>
            <td>{climi[6].snowDays}</td>
            <td>{climi[7].snowDays}</td>
            <td>{climi[8].snowDays}</td>
            <td>{climi[9].snowDays}</td>
            <td>{climi[10].snowDays}</td>
            <td>{climi[11].snowDays}</td>
            </tr>
          </tbody>
        </table> 
        </div>
        <button><Link to="/">Get Back</Link></button>
        </>
    )
  }
  
  
  const App =()=>(
    <>
        <Switch>
        <Route exact path="/"><Ciudades/></Route>
        <Route exact path="/city/:dd"><Ciudad/></Route>
        </Switch>
    </>
  )
export default App;



