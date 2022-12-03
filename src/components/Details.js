import React from "react"
export default function Details({details:{data}, setShowPage}) {
    const {name, index, weight, cost:{quantity, unit}, gear_category:{name:gearName}, equipment_category:{name:equipmentName}} = data;
    return(
            
            <div >
                <div>
                    <button id="home--button" onClick={()=>setShowPage(false) }>Go To Home</button>
                </div>
                <div>    
                    <h1 id="equipment--name">{name}</h1>
                    <ul id="details--list">
                        <li className="list--elements"><span className="elements--header">Equipment Category</span>  {equipmentName} </li>
                        <li className="list--elements"><span className="elements--header">Gear Category</span>  {gearName}</li>
                        <li className="list--elements"><span className="elements--header">Weight</span>  {weight}</li>
                    </ul>
                </div>    
            </div>
    )
};
