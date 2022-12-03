import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
   const [showPage, setShowPage] = useState(false)
   const [items, setItems] = useState([])
    const [searchText, setSearchText] = useState();
    const [details, setDetails] = useState();

    const filterItem = async()=>{
        const result = await items.filter((item)=> item.name.toLowerCase().substring(0, searchText.length) === searchText.toLowerCase());
        console.log(result);
        setItems(result);
    }

    const handleReset = (data)=>{
        setSearchText(data)
        if(data.length <1){
            fetchData(items);
        }
    }

    const fetchData = async()=>{
        const {data: {results}} = await axios({
            url: 'https://www.dnd5eapi.co/api/equipment',
            method: 'GET'
        })
        setItems(results);
    }

    useEffect(()=>{
         fetchData();
    }, [])

    const showDetails = async(data)=> {
      const {index} = data;
      const response = await axios({
          url: `https://www.dnd5eapi.co/api/equipment/${index}`,
          method:'GET'
      })
      setDetails(response);
      setShowPage(true);
  }

  return (
    <div className="App">
      <Header setShowPage={setShowPage}/>
      {!showPage && <Home handleReset={handleReset} filterItem={filterItem} fetchData={fetchData} items={items} showDetails={showDetails}/>}
      {showPage && <Details details={details} setShowPage={setShowPage}/>}
    </div>
  );
}

export default App;
