import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
  const[isRunning, setIsRunning] = useState(false);
  const[elapseTime, setElapseTime] = useState(0)
  const IntervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  useEffect(()=>{
    if(isRunning){
    IntervalIdRef.current = setInterval(()=>{
    setElapseTime(Date.now() - startTimeRef.current);
    },10);
  }
  return ()=>{
    clearInterval(IntervalIdRef.current);
  }
  },[isRunning])

  function handleStart(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapseTime;
    console.log(startTimeRef.current);
  };

  function handleStop(){
    setIsRunning(false);
  }

  function handleReset(){
    setElapseTime(0);
    setIsRunning(false);
  }

  function formatTime(){
    let hrs = Math.floor(elapseTime / (1000 * 60 * 60));
    let mns = Math.floor(elapseTime / (1000 * 60)%60);
    let scnds = Math.floor(elapseTime / (1000)%60);
    let mls = Math.floor((elapseTime % 1000) / 10);
    const pad =(num)=> String(num).padStart(2, '0');

    return `${pad(mns)} : ${pad(scnds)} : ${pad(mls)}`;
  }

  return (
    <div className='Container'>
      <div className='display'>{formatTime()}</div>
      <div className='buttons'></div>
      <button className='btns' onClick={handleStart}>Start </button>
      <button className='btns'  onClick={handleStop}>Stop </button>
      <button className='btns'  onClick={handleReset}>Reset </button>
    
    </div>
  )
}

export default Stopwatch