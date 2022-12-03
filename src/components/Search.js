import { MdSearch } from 'react-icons/md'
export default function Search({ handleReset, filterItem , fetchData}) {
    
    
    return(
        <div className="search">
            <input 
            type="text"
            placeholder='Search...' onChange={(data)=> handleReset(data.target.value)}/>
            <MdSearch className='search--icons' 
            size='1.3em' 
            onClick={() => filterItem()}
            />
            <button id='reset--button' onClick={()=>fetchData()}>Reset</button>
        </div>
    )
};
