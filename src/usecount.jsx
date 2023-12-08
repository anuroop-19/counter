import { useState } from "react"
import { useContext } from "react";

import { AppContext } from "./home";

export const useCount=()=>{
    const {val}=useContext(AppContext);
const [value,setvalue]=useState(0);
const setval=()=>{
    setvalue(val);
}
const increase=()=>{
    setvalue(value+1)
}
const decrease=()=>{
    setvalue(value-1);
}
return [value,setval,increase,decrease];
}