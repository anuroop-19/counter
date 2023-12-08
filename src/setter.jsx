import { useContext } from "react";
import { AppContext } from "./home";
import { useCount } from "./usecount";
const Setter = () => {
    const {val}=useContext(AppContext);
    const [value,setval,increase,decrease]=useCount();
    return ( 
       <div>
        <h3>{value}</h3>
        <button onClick={setval}>set</button>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
       </div>

     );
}
 
export default Setter;