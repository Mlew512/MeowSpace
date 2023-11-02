import jsonData from './pirate-cat.json';

function Name() {
  const random = Math.floor(Math.random()*82)
    // console.log(jsonData.cat_pirate_names[0])

    return (
      <>
      <h2 className='text-lg'>{jsonData.cat_pirate_names[random]}</h2>
      </>
    )
  }
  
  export default Name
  