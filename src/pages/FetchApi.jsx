import React from 'react'
import { useState, useEffect } from 'react'

const FetchApi = () => {
    const [dataFromApi, SetDataFromApi] = useState()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
            res.json().then((data) => {
                SetDataFromApi(data)
            })
        })
    }, []) 
  return (
    <>
    <div class="Box">
        {dataFromApi?.map((user) => (
            <div key={user.id}>
                <img class="Picture" src={user.url}></img>
                <p class="title">{user.title}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default FetchApi