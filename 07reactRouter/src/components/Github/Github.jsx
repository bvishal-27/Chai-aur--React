// import React, { useEffect, useState } from 'react'

// function Github() {
//     const [data,setData] = useState([])
//   useEffect(  ( )  => {
// fetch('https://api.github.com/users/bvishal-27')
// .then(response => response.json())
// .then (data => {
//     console.log(data);
//     setData(data) 
    
// })
//   },[] )
//   return (
//     <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
//       GitHub followers :{data.followers}  
//       <img src="{data.avatar_url}" alt="Git Picture" 
//       width={300 }/>
//     </div>
//   )
// }

// export default Github

import React, { useEffect, useState } from 'react'
//import { useLoaderData } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data= useLoaderData()

//   const [data, setData] = useState({}); // Initialize with an empty object

//   useEffect(() => {
//     fetch('https://api.github.com/users/bvishal-27')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       })
//   }, []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub Followers: {data.followers}
      {data.avatar_url && (
        <div>
          <img 
            src={data.avatar_url} 
            alt="GitHub Avatar" 
            width={300}
          />
        </div>
      )}
    </div>
  );
}

 export default Github;
// export const  githubInfoLoader = async () => {

//     const response=await  fetch('https://api.github.com/users/bvishal-27')
// return response.json()
// }
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/bvishal-27');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json() || null;
};
