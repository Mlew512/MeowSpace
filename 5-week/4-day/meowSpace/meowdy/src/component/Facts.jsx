import { useState,useEffect } from "react";
import axios from 'axios'

function Facts() {


const [fact,setFact]= useState(null)
//getting cat fact
    useEffect(() => {
    const getFact= async () => {
        let response = await axios.get(
            "https://catfact.ninja/fact"
        );
        //console.log(response.data.fact)
        setFact(response.data.fact);
        };
        getFact();
    }, [!fact]);
        
    return (
      <>
      <p> {fact}</p>
      {/* <p>catFact placeholder to limit api use</p> */}
      </>
    )
    }
  
  export default Facts
  