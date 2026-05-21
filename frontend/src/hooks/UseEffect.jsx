import React, {useEffect,useState} from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0)
    const [like,setLike]=useState(0)
    useEffect(()=>{
        console.log("component Render")
    },[count,like])
    const handleIncremnet = () => {
        setCount(count+1)
    }
    const handleLike = () => {
        setLike(like+1)
    }
  return (
    <div>
        <h1>UseEffect</h1>
        <p>{count}</p>
        <button onClick={handleIncremnet}>Increment</button>
        <p>{like}</p>
        <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default UseEffect