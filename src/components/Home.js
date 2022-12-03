import React from "react";   
import Items from "./Items";
import Search from './Search';

export default function EquipmentsList(props) {
    
    const {handleReset, filterItem, fetchData, items, showDetails} = props;
    return(
        <div className="wrapper">
            <Search  handleReset={handleReset} filterItem = {filterItem} fetchData={fetchData}/>
            <div id="list--header">Equipments</div>
            <Items 
                items={items} showDetails={showDetails}
            />
        </div>
    )
};