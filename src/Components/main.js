import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './Main.css'

export default function Main() {

    const [phts, setphts] = useState([]);
    const [search, setSearch] =  useState("");
    
    useEffect(() => {
        if(search==='') {
            axios.get("https://api.unsplash.com/photos/?client_id=yAjPRLciMKWGxO4pcz5fvCJmfzQw_oUtwbo77ZE1Wyo")
            .then( d =>{ setphts(d.data) })
            .catch( error => { console.log(error) })
        }
        else {
            axios.get("https://api.unsplash.com/search/users?query="+search+"&client_id=yAjPRLciMKWGxO4pcz5fvCJmfzQw_oUtwbo77ZE1Wyo")
            .then( d => { setphts(d.data.results[0].photos) })
            .catch(error => { console.log(error) })
        }
    }, [search])
    
    return (
    <div>
        <div className="header">
            <h1 className="header-h1"> Snap Shot </h1>
            <input className="input1" type="text" placeholder="search" value={search} onChange={e => setSearch(e.target.value)}/> 
        </div>
        <div className="content">
        {
            phts.map((one) => {
            return (
                <div className="cards" id={one.id}>
                    <img className="cards-img" src={one.urls.small} />
                </div>
            ) })
        }  
        </div>
    </div>
    )
}