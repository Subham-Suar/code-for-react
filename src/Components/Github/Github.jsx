import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {

        fetch('https://api.github.com/users/Subham-Suar')
            .then(response => response.json())
            .then(data => {
                 console.log(data);
                setData(data)
            }, [])
    })
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers}
        <img  className ="text-center  "src="./public/images/Github_img.jpg" alt="Github image" width={300}></img>
        </div>
    )
}

export default Github

// export const gitHubInfoLoder = async () => {
//      const response = await fetch ('https://api.github.com/users/hiteshchoudhary')
//      return response.json()
// }
// export async function gitHubInfoLoader() {
//   const res = await fetch("https://api.github.com/users/someusername");
//   if (!res.ok) {
//     throw new Error("Failed to fetch GitHub user");
//   }
//   return res.json();
// }
