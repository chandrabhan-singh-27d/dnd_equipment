export default function Items({showDetails, items}) {
 
    return(
        <div>
            {items.map((item, idx) => (
            <div className="items--list" key={idx}>
                <p id="item--name" >{item.name}</p>
                <div>
                    <button id="view-button" onClick={()=> showDetails(item)}>View</button>
                </div>    
            </div>
        ))}
        </div>
    )
};
