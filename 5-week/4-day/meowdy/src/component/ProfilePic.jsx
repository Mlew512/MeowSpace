import { useState,useEffect } from "react";
import axios from 'axios'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ProfilePic() {
const [kitty,setKitty]= useState(null)
//getting cat images
    useEffect(() => {
    const getKat = async () => {
        let response = await axios.get(
            "https://api.thecatapi.com/v1/images/search"
        );
        // console.log(response.data)
        setKitty(response.data[0].url);
        };
        getKat();
    }, [!kitty]);
        
    return (
      <>


      <div className="ml-8 mt-2">
      <div className="relative rounded-full overflow-hidden h-20 w-20 mx-auto ml-8 mt-2">
   
        <div className="absolute inset-0 border-4 border-white rounded-full"></div>

        <img className="object-cover w-full h-full" src={kitty} alt="Cat Profile Photo" />
      </div>

      </div>
      
      
      </>
    )
    }
  
  export default ProfilePic
  