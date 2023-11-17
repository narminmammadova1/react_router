
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Addition.module.css";

export const Addition = () => {
    const{num1,num2}=useParams()
const [input1,setInput1]=useState()
const [input2,setInput2]=useState("")
const [result,setresult]=useState("")
 useEffect(()=>{
setInput1(num1)
setInput2(num2)

 },[num1,num2])

 const Add=()=>{
const res=+(input1)+ +(input2)
setresult(res)
 }
    return (
        <div>
          <h2>Result: {num1}+{num2}={result}</h2>
<div className={styles.calcDiv}>
   <input type="text"onChange={(e)=>setInput1(e.target.value)

   } value={input1}
   />  
   <input type="text" onChange={(e)=>setInput2(e.target.value)} value={input2} />
   <button onClick={Add} >calc</button>
 </div>
        </div>
    );
};