// import { useState,useEffect } from 'react';
// import axios from 'axios'

// function Reels() {
//     const [images, setImages] = useState([]);
//     const [gifs, setGifs] = useState([]);
  
//     useEffect(() => {
//       // Fetch images from the API
//       axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
//         .then(response => {
//           setImages(response.data);
  
//           // Filter for GIFs
//           const gifImages = response.data.filter(image => image.url.endsWith('.gif'));
//           setGifs(gifImages);
//         })
//         .catch(error => {
//           console.error('Error fetching images:', error);
//         });
//     }, []);  //This will fire everytime
//     return (
//       <>
        
//         {gifs.map(gif => (

//           <div key={gif.id}>
//             <img src={gif.url} alt="Cat gif" width={gif.width} height={gif.height} />
//           </div>
          
//         ))}
//       </>
//     );
//   }
  
//   export default Reels;