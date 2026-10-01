import React,{useEffect,useState} from 'react'

const Timer = () => {

    const[seconds,setSeconds]=useState(0);

    useEffect(()=>{
        console.log("timer started");
        const timer=setInterval(()=>{
            setSeconds((prev)=>prev+1);
        },1000);

        //UN MOUNT
        return ()=>{
          console.log("timer stopped")
          clearInterval(timer);
        };

    },[]);


  return (
    <div>{seconds}</div>
  )
}

export default Timer